export default function BrandLoading({ title }: { title?: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center py-8">
      <span className="loading loading-infinity loading-xl scale-200"></span>
      <div>{title}</div>
    </div>
  )
}
