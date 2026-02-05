import { ModalProvider } from "@/context/modal/ModalContext";
import { ToastProvider } from "@/context/toast/ToastContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-zinc-950" suppressHydrationWarning>
        <ModalProvider>
          <ToastProvider>{children}</ToastProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
