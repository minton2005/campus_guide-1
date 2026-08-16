export default function AboutPage() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">เกี่ยวกับผู้พัฒนา</h1>
      
      <div className="space-y-3 text-gray-600">
        <p><span className="font-semibold text-gray-700">ชื่อ-นามสกุล:</span> [นายสหรัถ บุญเนาว์]</p>
        <p><span className="font-semibold text-gray-700">รหัสนักศึกษา:</span> [673450201-5]</p>
        <p><span className="font-semibold text-gray-700">สาขาวิชา:</span> [คณะสหวิทยาการ/สาขา วิทยาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ]</p>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">รายละเอียดโปรเจกต์</h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          แอปพลิเคชันสำหรับแสดงข้อมูลสถานที่ภายในมหาวิทยาลัย
        </p>
      </div>
    </div>
  );
}