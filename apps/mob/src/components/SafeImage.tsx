import { TwicPicture } from '@twicpics/components/react'
import { ComponentProps } from 'react'

// const IMG_BASE =
//   'https://hbkpzirqxupyzxggoudk.supabase.co/storage/v1/object/public/'

interface Data {
  id: number
  updatedAt: Date | string | null | undefined
  createdAt: Date | string | null | undefined
}

type TwicPictureProps = ComponentProps<typeof TwicPicture>

interface ImgaeProp<T extends Data> extends Omit<TwicPictureProps, 'src'> {
  data: T
  path: keyof T
}

export default function SafeImage<T extends Data>({
  data,
  path,
  ...props
}: ImgaeProp<T>) {
  const src = String(data[path])
  const ver = +new Date(data.updatedAt ?? data.createdAt ?? 0)
  return !src ? (
    <TwicPicture src="404.png" {...props} />
  ) : (
    <TwicPicture src={src + '?ver=' + ver} {...props} />
  )
}
