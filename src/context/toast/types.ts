export interface ToastData {
  category: "draft" | "final";
  title: string;
  summary: string;
}

export interface ToastContextType {
  showToast: (data: ToastData) => void;
}

export interface ToastProps {
  data: {
    category: "draft" | "final";
    title: string;
    summary: string;
  };
  onClose: () => void;
  duration: number;
}
