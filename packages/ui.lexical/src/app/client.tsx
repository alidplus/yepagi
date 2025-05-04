"use client"
import { LexicalEditor, LexicalStage, LexicalState } from "@/lib";
import { useState } from "react";

export default function HomeClient() {
  const [state, setState] = useState<LexicalState>()
  return (
    <div className="w-screen h-screen">
      <LexicalEditor value={state} onChange={setState} className="" />
      <hr />
      <LexicalStage value={state} placeholder="no content" />
      <hr />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
