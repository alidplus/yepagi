const faIntIntl = new Intl.NumberFormat('fa-IR')

export function faInt(n: number): string {
  return faIntIntl.format(n)
}

// export function faMixed(mix: string): string {
// }
