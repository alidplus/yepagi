"use client";

import { ModelProps } from "@repo/utils";
import { LexicalState } from "../types";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { Dispatch, SetStateAction, useEffect } from "react";

interface OnChangePluginProps {
  editable?: boolean;
  dirty?: boolean;
  setDirty?: Dispatch<SetStateAction<boolean>>
}

export function OnChangePlugin({ value, onChange, dirty, setDirty, editable = true }: ModelProps<LexicalState> & OnChangePluginProps) {
  // Access the editor through the LexicalComposerContext
  const [editor] = useLexicalComposerContext();
  // Wrap our listener in useEffect to handle the teardown and avoid stale references.
  useEffect(() => {
    // most listeners return a teardown function that can be called to clean them up.
    return editor.registerUpdateListener(({ editorState, prevEditorState }) => {
      if (!dirty) {
        const children = editorState.toJSON().root.children,
        prevChildren = prevEditorState.toJSON().root.children,
        isEqual = JSON.stringify(children) === JSON.stringify(prevChildren)
        if (!isEqual) {
          onChange?.(editorState.toJSON());
          setDirty?.(true)
        }
      } else {
        onChange?.(editorState.toJSON());
      }
      setDirty?.(true)
    });
  }, [dirty, editor, onChange, setDirty]);
  
  useEffect(() => {
    if (value && (!dirty || editable === false)) {
      const state = editor.parseEditorState(value)
      editor.update(() => {
        editor.setEditorState(state)
      }, {
        discrete: true
      })
    }
  }, [editor, dirty, value, editable])
  return null;
}