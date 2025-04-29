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
import { emptyState, LexicalCommonProps, LexicalState } from "./types";
import lexicalTheme from "./theme";
import { LexicalPlaceholder, LexicalWrapper } from "./components/common";

export function LexicalStage({ value, placeholder = '', className }: ModelProps<LexicalState> & LexicalCommonProps) {
  const [dirty, setDirty] = useState(false)
  const initialConfig: InitialConfigType = {
    namespace: 'MyEditor',
    editorState: value ? JSON.stringify(value) : emptyState,
    editable: false,
    theme: lexicalTheme,
    onError: console.error.bind(console, '[lex stage]'),
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
              style={{ display: 'contents' }}
            />
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <OnChangePlugin
          editable={false}
          value={value}
          dirty={dirty}
          setDirty={setDirty}
        />
      </LexicalComposer>
    </LexicalWrapper>
  );
}