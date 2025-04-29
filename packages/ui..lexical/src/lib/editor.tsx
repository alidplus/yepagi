'use client';

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { InitialConfigType, LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ModelProps } from "@repo/utils";
import { useState } from "react";
import { OnChangePlugin } from "./plugins/OnChange";
import lexicalTheme from "./theme";
import { emptyState, LexicalCommonProps, LexicalState } from "./types";
import {LexicalPlaceholder, LexicalWrapper} from "./components/common";

export function LexicalEditor({ value, onChange, placeholder = 'Enter some text...', className }: ModelProps<LexicalState> & LexicalCommonProps) {
  const [dirty, setDirty] = useState(false)
  const initialConfig: InitialConfigType = {
    namespace: 'MyEditor',
    editorState: value ? JSON.stringify(value) : emptyState,
    theme: lexicalTheme,
    onError: console.error.bind(console, '[lex editor]'),
  };

  return (
    <LexicalWrapper>
      <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
          contentEditable={
            <ContentEditable
              aria-placeholder={placeholder}
              placeholder={<LexicalPlaceholder>{placeholder}</LexicalPlaceholder>}
              className={className}
            />
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <OnChangePlugin
          value={value}
          onChange={onChange}
          dirty={dirty}
          setDirty={setDirty}
        />
      </LexicalComposer>
    </LexicalWrapper>
  );
}