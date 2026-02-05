"use client";

import { useModal } from "@/context/modal/ModalContext";
import { PromptListItemProps } from "@/types";
import { Sparkles, Eye, Trash } from "lucide-react";
import Link from "next/link";

export function PromptListItem({
  title,
  active,
  versions,
  status,
  bg,
  toolptip,
}: PromptListItemProps) {
  const { modal } = useModal();

  const handleDelete = () => {
    modal.showModal({
      title: "Eliminar Propmpt",
      message:
        "¿Estas seguro que deseas eliminar este Prompt y todas sus versiones?",
      okText: "Si, seguro!",
      cancelText: "No",
      onOk: () => console.log("Deleted!"),
      onCancel: () => console.log("Cancelled"),
      variant: "danger",
    });
  };
  return (
    <div className={`rounded-lg border ${bg} bg-slate-800 p-3 transition `}>
      <div className="flex flex-col justify-between items-start gap-3">
        <p
          className={`text-sm font-medium w-full truncate ${active ? "text-blue-500" : ""}`}
        >
          {title}
        </p>
        <div className="flex gap-2 justify-between text-gray-400 w-full">
          <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
            <span>{status}</span>
            <span>v{versions}</span>
          </div>

          <div className="flex justify-end gap-2">
            <Link href="/prompt-viewer" title="Ver">
              <Eye size={16} className="hover:text-white cursor-pointer" />
            </Link>
            <Link href="/prompt-editor" title="Refinar">
              <Sparkles size={16} className="hover:text-white cursor-pointer" />
            </Link>
            <span title="Eliminar">
              <Trash
                onClick={handleDelete}
                size={16}
                className="hover:opacity-100 hover:text-red-400 cursor-pointer"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
