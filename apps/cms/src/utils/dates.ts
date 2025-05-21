export function isRecentlyUpdated({
  updatedAt,
}: {
  updatedAt: Date | string | null | undefined
}): boolean {
  if (!updatedAt) return false
  const n = new Date()
  const d = new Date(`${updatedAt}z`)
  return +n - +d < 30000
}
