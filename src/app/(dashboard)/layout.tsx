import { Sidebar } from "../../components/sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen text-gray-400">
      <Sidebar />
      <main className="flex-1">
        <div className="flex justify-center p-6">{children}</div>
      </main>
    </div>
  );
}
