import { SerializedEditorState } from "lexical";

export type LexicalState = SerializedEditorState

export interface LexicalCommonProps {
  className?: string
  placeholder?: string
}

export const emptyState = '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""}],"direction":null,"format":"","indent":0,"type":"root","version":1}}'
