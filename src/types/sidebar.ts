import { JSX } from "react";

export type PromptListItemProps = {
  title: string;
  versions: number;
  active?: boolean;
  status: "draft" | "analyzed" | "final";
  Icon?: JSX.Element;
  bg: string;
  toolptip: string;
};
