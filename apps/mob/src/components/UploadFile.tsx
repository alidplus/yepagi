import { useUser } from '@clerk/clerk-react'
import {
  ComponentProps,
  forwardRef,
  ForwardRefRenderFunction,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { DropzoneOptions, useDropzone } from 'react-dropzone'
import { useSupabase } from '../context'

// (Optional) Import component styles. If you are using Less, import the `index.less` file.
type Options = Required<DropzoneOptions>

interface Props extends ComponentProps<'input'> {
  folder: string
  bucket?: string
}

export interface UploadHandle extends Pick<Props, 'value'> {
  upload: () => Promise<void>
}

const UploadImage: ForwardRefRenderFunction<UploadHandle, Props> = (
  { value, folder, bucket = 'ugc', ...restProps },
  ref
) => {
  const innerRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string | undefined>()
  const [file, setFile] = useState<File | undefined>()
  const { user } = useUser()
  const supabase = useSupabase()
  const { onChange } = restProps

  const onDrop = useCallback<Options['onDrop']>((acceptedFiles) => {
    // Do something with the files
    console.log({ acceptedFiles })
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropAccepted(files) {
      const file = files.pop()
      if (file) {
        setPreview(URL.createObjectURL(file))
        setFile(file)
      }
    },
  })

  const path = useMemo(
    () => (file ? `${user?.id ?? 'anod'}/${folder}/${file.name}` : undefined),
    [file, folder, user?.id]
  )

  const newValue = useMemo(
    () => (file ? `${bucket}/${path}` : value),
    [bucket, file, path, value]
  )

  useEffect(() => {
    if (innerRef.current && onChange) {
      innerRef.current.value = String(newValue ?? '')
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
  }, [newValue, onChange])

  useImperativeHandle(ref, (): UploadHandle => {
    return {
      value: newValue,
      async upload() {
        if (!file || !path) return
        const up = await supabase.storage.from(bucket).upload(path, file, {
          cacheControl: '3600',
          upsert: true,
        })

        console.log('uppppp', up)
      },
    }
  }, [bucket, file, newValue, path, supabase.storage])

  return (
    <div className="w-full overflow-x-hidden">
      <div
        {...getRootProps()}
        className="btn btn-dash relative aspect-16/9 h-auto w-full rounded-md"
      >
        <input
          {...restProps}
          type="hidden"
          ref={innerRef}
          defaultValue={value}
        />
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
        {preview ? (
          <img src={preview} className="absolute size-full object-cover" />
        ) : null}
      </div>
    </div>
  )
}

export default memo(forwardRef(UploadImage))
