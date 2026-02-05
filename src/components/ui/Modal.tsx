"use client";

import { ConfirmationModalProps } from "@/context/modal/types";
import { AlertCircle, X, HelpCircle, AlertTriangle } from "lucide-react";
import { useRef, useState } from "react";

const variantMap = {
  danger: {
    icon: AlertTriangle,
    textColor: "text-red-500/60",
    bgColor: "bg-red-500/15",
    borderBar: "bg-red-500",
  },
  info: {
    icon: HelpCircle,
    textColor: "text-blue-500",
    bgColor: "bg-blue-500/15",
    borderBar: "bg-blue-500",
  },
  warning: {
    icon: AlertCircle,
    textColor: "text-amber-500",
    bgColor: "bg-amber-500/15",
    borderBar: "bg-amber-500",
  },
};

export function Modal({
  title,
  message,
  okText,
  cancelText,
  variant,
  onOk,
  onCancel,
  onClose,
}: ConfirmationModalProps) {
  const [isExiting, setIsExiting] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = (callback?: () => void) => {
    setIsExiting(true);
    setTimeout(() => {
      setIsExiting(false);
      callback?.();
      onClose();
    }, 300);
  };

  const handleOk = async () => {
    setIsLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1000));
      await onOk?.();
    } catch (error) {
      console.error("Error en onOk del modal:", error);
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  const style = variantMap[variant];
  const IconComponent = style.icon;

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4
      ${isExiting ? "animate-out fade-out duration-300" : "animate-in fade-in duration-300"}`}
      onClick={() => handleClose(onCancel)}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className={`relative z-50 w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl overflow-hidden
        ${isExiting ? "animate-out zoom-out-95 duration-300" : "animate-in zoom-in-95 duration-300"}`}
      >
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 ${style.borderBar}`}
        />

        <div className="p-6">
          <div className="flex items-start gap-4">
            <div
              className={`flex items-center justify-center p-2.5 rounded-md ${style.bgColor} ${style.textColor}`}
            >
              <IconComponent className="w-6 h-6" />
            </div>

            <div className="flex flex-col gap-1 pr-6">
              <h4 className="text-sm font-bold text-zinc-100">{title}</h4>
              <p className="text-xs text-zinc-400 mt-2">{message}</p>
            </div>

            <button
              onClick={() => handleClose(onCancel)}
              className="absolute top-4 right-4 text-zinc-600 hover:text-zinc-500"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex justify-end gap-3 mt-8">
            {cancelText && (
              <button
                onClick={() => handleClose(onCancel)}
                className="px-4 py-2 text-xs font-semibold text-zinc-400 cursor-pointer  hover:text-zinc-100 hover:bg-zinc-800 rounded-md"
              >
                {cancelText}
              </button>
            )}

            <button
              disabled={isLoading}
              onClick={(e) => {
                e.stopPropagation();
                handleOk();
              }}
              className={`px-4 py-2 text-xs font-bold rounded-md cursor-pointer
                ${
                  variant === "danger"
                    ? "bg-red-500/60 hover:bg-red-400/60 text-zinc-100"
                    : "bg-zinc-100 hover:bg-white text-zinc-700"
                }                  
                  `}
            >
              {isLoading ? ` ${okText} ...` : okText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
