"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Toast } from "@/components/ui/Toast";
import { ToastContextType, ToastData } from "./types";

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ToastData | null>(null);

  const showToast = (incomingData: ToastData) => {
    setToast(incomingData);
  };

  const closeToast = () => setToast(null);
  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <Toast data={toast} onClose={closeToast} duration={5000} />}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context)
    throw new Error("useToast debe usarse dentro de un ToastProvider");
  return context;
};
