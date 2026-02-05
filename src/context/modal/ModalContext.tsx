"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Modal } from "@/components/ui/Modal";
import { ModalContextType } from "./types";

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined,
);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [config, setConfig] = useState({
    isOpen: false,
    title: "",
    message: "",
    okText: "Confirmar",
    cancelText: null as string | null,
    variant: "info" as "info" | "danger" | "warning",
    onOk: () => {},
    onCancel: () => {},
  });

  const showModal = (
    params: Partial<typeof config> & {
      title: string;
      message: string;
    },
  ) => {
    setConfig((prev) => ({
      ...prev,
      ...params,
      isOpen: true,
      okText: params.okText ?? "Confirmar",
      cancelText: params.cancelText ?? null,
      variant: params.variant ?? "info",
      onOk: params.onOk ?? (() => closeModal()),
      onCancel: params.onCancel ?? (() => closeModal()),
    }));
  };

  const closeModal = () => setConfig((prev) => ({ ...prev, isOpen: false }));

  return (
    <ModalContext.Provider
      value={{
        modal: { showModal, closeModal },
        isOpen: config.isOpen,
        config,
      }}
    >
      {children}

      {config.isOpen && <Modal {...config} onClose={closeModal} />}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal debe usarse dentro de un ModalProvider");
  }
  return context;
};
