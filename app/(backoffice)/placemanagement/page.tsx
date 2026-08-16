import { places } from '@/data/places';

export default function PlaceManagementPage() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">จัดการข้อมูลสถานที่</h1>
          <p className="text-sm text-slate-500">รายการสถานที่ทั้งหมดในระบบสำหรับผู้ดูแลระบบ</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">ชื่อสถานที่</th>
              <th className="px-4 py-3">อาคาร</th>
              <th className="px-4 py-3">เวลาเปิด</th>
              <th className="px-4 py-3">สถานะ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {places.map((place) => (
              <tr key={place.slug} className="hover:bg-slate-50">
                <td className="px-4 py-3 font-semibold text-slate-800">{place.name}</td>
                <td className="px-4 py-3 text-slate-600">{place.building}</td>
                <td className="px-4 py-3 text-slate-600">{place.openHours}</td>
                <td className="px-4 py-3">
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                    เปิดใช้งาน
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}