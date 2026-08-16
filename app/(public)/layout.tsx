import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-lg hover:text-slate-200">
            Campus Guide
          </Link>
          <nav className="space-x-4 text-sm font-medium">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/places" className="hover:underline">Places</Link>
            <Link href="/placemanagement" className="hover:underline text-slate-300">Admin</Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
        {/* Breadcrumbs จะแสดงเฉพาะหน้าที่อยู่ในกลุ่ม (public) */}
        <Breadcrumbs />
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 p-4 mt-auto text-center text-sm">
        Campus Guide © 2026
      </footer>
    </div>
  );
}