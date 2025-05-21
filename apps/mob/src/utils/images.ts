import { isRecentlyUpdated } from './dates'

interface Data {
  id: number
  updatedAt: Date | string | null | undefined
}
export function getImageLink<T extends Data>(d: T, k: keyof T) {
  const path = String(d[k])
  return path && isRecentlyUpdated(d) ? path : '404.png'
}
