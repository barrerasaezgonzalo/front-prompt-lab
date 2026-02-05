"use client";
import { EditorActions } from "./EditorActions";
import { IntroText } from "./IntroText";
import { PromptBlocks } from "./PromptBlocks";
import { PromptHeader } from "./PromptHeader";
import { ImprovementPrompt } from "./ImprovementPrompt";
import { PromptEditorProps } from "@/types";

export default function PromptEditor({ versionId }: PromptEditorProps) {
  return (
    <div className="flex flex-col h-full gap-4 max-w-4xl mt-8">
      <IntroText />
      <PromptHeader />
      <ImprovementPrompt />
      <PromptBlocks />
      <EditorActions />
    </div>
  );
}
