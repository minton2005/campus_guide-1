import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-500">
          Campus Guide
        </h1>
        <p className="text-lg text-slate-400">
          ระบบแนะนำสถานที่และข้อมูลภายในมหาวิทยาลัย ค้นหาสถานที่ สิ่งอำนวยความสะดวก และเวลาทำการได้อย่างสะดวกสบาย
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/places"
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
          >
            สำรวจสถานที่
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors border border-slate-700"
          >
            เกี่ยวกับผู้พัฒนา
          </Link>
          <Link
            href="/placemanagement"
            className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 font-medium transition-colors border border-slate-800"
          >
            ระบบผู้ดูแลระบบ (Admin)
          </Link>
        </div>
      </div>
    </main>
  );
}