"use client";

import { ToastProps } from "@/context/toast/types";
import { Flag, SquareDashedMousePointer, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const iconMap = {
  draft: {
    icon: SquareDashedMousePointer,
    textColor: "text-zinc-500",
    bgColor: "bg-zinc-500/15",
  },
  final: {
    icon: Flag,
    textColor: "text-emerald-500",
    bgColor: "bg-emerald-500/15",
  },
};

export function Toast({ data, onClose, duration }: ToastProps) {
  const [isExiting, setIsExiting] = useState(false);
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => handleClose(), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        toastRef.current &&
        !toastRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleClose = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(onClose, 300);
  };

  const config =
    iconMap[data.category as keyof typeof iconMap] || iconMap.draft;
  const IconComponent = config.icon;

  return (
    <div
      ref={toastRef}
      className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 
      ${isExiting ? "animate-toast-out" : "animate-toast-in"}
      `}
      onClick={(e) => {
        e.stopPropagation();
        handleClose();
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`max-w-sm bg-gray-800`}
      >
        <div className="relative flex items-start gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl min-w-87.5 overflow-hidden">
          <div
            className={`absolute bottom-0 left-0 right-0 h-1 ${config.bgColor} `}
          />

          <div
            className={`flex items-center justify-center p-2 rounded-md ${config.bgColor} ${config.textColor} shrink-0 `}
          >
            <IconComponent className="w-6 h-6" />
          </div>

          <div className="flex flex-col gap-1 pr-6">
            <h4 className="text-sm font-bold text-zinc-100 tracking-tight">
              {data.title}
            </h4>
            <p className="text-xs text-zinc-400 mt-4 leading-relaxed">
              {data.summary}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            className="ml-auto text-zinc-600 hover:text-zinc-300 transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
