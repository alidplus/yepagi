import { CSSProperties, PropsWithChildren } from "react";

const styles: CSSProperties = { position: 'absolute', zIndex: -1, top: 0, margin: 0 }

export function LexicalPlaceholder({ children }: PropsWithChildren) {
  return (
    <p style={styles}>{children}</p>
  )
}

const styles2: CSSProperties = { position: 'relative', minHeight: 30 }

export function LexicalWrapper({ children }: PropsWithChildren) {
  return (
    <div style={styles2}>{children}</div>
  )
}