export type ModalVariant = "info" | "danger" | "warning";

export type ModalContextType = {
  modal: {
    showModal: (params: {
      title: string;
      message: string;
      okText?: string;
      cancelText?: string;
      variant?: "info" | "danger" | "warning";
      onOk?: () => void;
      onCancel?: () => void;
    }) => void;
    closeModal: () => void;
  };

  isOpen: boolean;
  config: {
    isOpen: boolean;
    title: string;
    message: string;
    okText: string;
    cancelText: string | null;
    variant: "info" | "danger" | "warning";
    onOk: () => void;
    onCancel: () => void;
  };
};

export interface ModalConfig {
  isOpen: boolean;
  title: string;
  message: string;
  okText: string;
  cancelText: string | null;
  variant: ModalVariant;
  onOk: () => void;
  onCancel: () => void;
  close: () => void;
}

export interface ShowModalParams {
  title: string;
  message: string;
  okText?: string;
  cancelText?: string;
  variant?: ModalVariant;
  onOk?: () => void;
  onCancel?: () => void;
}

export type ConfirmationModalProps = {
  isOpen: boolean;
  title: string;
  message: string;
  okText: string;
  cancelText: string | null;
  variant: "info" | "danger" | "warning";
  onOk: () => void;
  onCancel: () => void;
  onClose: () => void;
};
