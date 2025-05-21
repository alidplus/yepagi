import { useUser } from '@clerk/clerk-react'
import { cn } from '@repo/utils'
import {
  ComponentProps,
  forwardRef,
  ForwardRefRenderFunction,
  memo,
  PropsWithChildren,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { useDropzone } from 'react-dropzone'
import { useSupabase } from '../context'

interface Props extends ComponentProps<'input'> {
  path: string
}

export interface UploadHandle extends Pick<Props, 'value'> {
  upload: () => Promise<void>
}

const UploadImage: ForwardRefRenderFunction<
  UploadHandle,
  PropsWithChildren<Props>
> = ({ value, path: folder, className, children, ...restProps }, ref) => {
  const innerRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string | undefined>()
  const [file, setFile] = useState<File | undefined>()
  const { user } = useUser()
  const supabase = useSupabase()
  const { onChange, disabled } = restProps
  const path = user?.id ? `${user?.id}/${folder}` : folder

  const { getRootProps, getInputProps } = useDropzone({
    disabled,
    onDropAccepted(files) {
      const file = files.pop()
      if (file) {
        setPreview(URL.createObjectURL(file))
        setFile(file)
      }
    },
  })

  useEffect(() => {
    if (innerRef.current && onChange) {
      innerRef.current.value = String(path ?? '')
      const event = new Event('input')
      onChange({
        ...event,
        target: innerRef.current,
        currentTarget: innerRef.current,
        isDefaultPrevented: () => true,
        isPropagationStopped: () => true,
        nativeEvent: event,
        persist: () => {},
      })
    }
  }, [path, onChange])

  useImperativeHandle(ref, (): UploadHandle => {
    return {
      value: path,
      async upload() {
        if (!file || !path) return
        await supabase.storage.from('ugc').upload(path, file, {
          metadata: {
            name: file.name,
            type: file.type,
            user: user?.id,
          },
          cacheControl: '3600',
          upsert: true,
        })
      },
    }
  }, [file, path, supabase.storage, user?.id])

  return (
    <div className={cn('overflow-x-hidden', className)}>
      <div
        {...getRootProps()}
        className="btn btn-dash relative aspect-16/9 h-auto w-full rounded-md border-gray-600"
      >
        <input
          {...restProps}
          type="hidden"
          ref={innerRef}
          defaultValue={value}
        />
        <input {...getInputProps()} />
        {preview ? (
          <img src={preview} />
        ) : children ? (
          <div className="absolute size-full opacity-25">{children}</div>
        ) : null}
        <p className="absolute z-10 rounded bg-black/60 px-2 py-1 shadow">
          انتخاب کنید
        </p>
      </div>
    </div>
  )
}

export default memo(forwardRef(UploadImage))
