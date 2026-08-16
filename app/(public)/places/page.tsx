import { places } from "@/data/places";
import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-6">
      {/* แก้สีหัวข้อหลักให้เป็นสีขาว (text-white) เพื่อไม่ให้กลืนกับพื้นหลังดำ */}
      <h1 className="text-2xl font-bold text-white">รายการสถานที่</h1>

      <ul className="grid gap-4 md:grid-cols-2">
        {places.map((place) => (
          <li
            key={place.slug}
            className="border border-slate-700 p-5 rounded-lg bg-slate-900 text-slate-100 shadow-sm flex flex-col justify-between hover:border-slate-500 transition-colors"
          >
            <div>
              <h2 className="text-xl font-semibold text-white">{place.name}</h2>
              <p className="text-slate-300 text-sm mt-2">{place.summary}</p>

              <div className="mt-3 space-y-1 text-xs text-slate-400">
                <p>📍 <span className="font-medium text-slate-300">Building:</span> {place.building}</p>
                <p>🕒 <span className="font-medium text-slate-300">Open Hours:</span> {place.openHours}</p>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {place.facilities.map((facility, index) => (
                  <span
                    key={index}
                    className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700"
                  >
                    {facility}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800">
              <Link
                href={`/places/${place.slug}`}
                className="text-sm font-medium text-blue-400 hover:text-blue-300 hover:underline"
              >
                ดูรายละเอียด →
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}