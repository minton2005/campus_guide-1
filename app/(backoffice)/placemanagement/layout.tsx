import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6 flex flex-col justify-between">
        <div className="space-y-6">
          <div className="text-xl font-bold border-b border-slate-700 pb-4">
            Admin System
          </div>
          <nav className="space-y-2 text-sm">
            <Link
              href="/placemanagement"
              className="block px-3 py-2 rounded bg-blue-600 font-medium"
            >
              จัดการสถานที่
            </Link>
          </nav>
        </div>
        <Link
          href="/places"
          className="text-xs text-slate-400 hover:text-white transition-colors"
        >
          ← กลับสู่หน้าหลัก
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}