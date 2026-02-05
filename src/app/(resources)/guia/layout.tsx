import { Sidebar } from "../../../components/sidebar/Sidebar";

export default function GuiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center text-gray-400">
      <Sidebar />
      <main className="flex-1">
        <div className="flex justify-center p-6">{children}</div>
      </main>
    </div>
  );
}
