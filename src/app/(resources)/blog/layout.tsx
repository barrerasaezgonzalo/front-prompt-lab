import { Sidebar } from "../../../components/sidebar/Sidebar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen mt-8 text-gray-400">
      <Sidebar />
      <main className="flex-1">
        <div className="flex justify-center p-6">{children}</div>
      </main>
    </div>
  );
}
