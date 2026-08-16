# 🏫 Campus Guide Application

เว็บแอปพลิเคชันระบบแนะนำสถานที่และข้อมูลภายในมหาวิทยาลัย พัฒนาด้วย **Next.js (App Router)** ช่วยให้ผู้ใช้งานสามารถค้นหาสถานที่ สิ่งอำนวยความสะดวก เวลาทำการ และดูรายละเอียดของแต่ละสถานที่ได้อย่างง่ายดาย

---

## 🚀 เทคโนโลยีที่ใช้ (Tech Stack)

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Fonts:** Geist / Geist Mono

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
CAMPUS_GUIDE/
├── app/
│   ├── (backoffice)/
│   │   ├── placemanagement/
│   │   │   └── page.tsx         # หน้าจัดการสถานที่สำหรับ Admin
│   │   └── layout.tsx           # Admin Layout (Side Navigation)
│   ├── (public)/
│   │   ├── about/
│   │   │   └── page.tsx         # หน้าเกี่ยวกับผู้พัฒนา
│   │   ├── places/
│   │   │   ├── [slug]/
│   │   │   │   ├── not-found.tsx # หน้าแจ้งเตือนเมื่อไม่พบสถานที่
│   │   │   │   └── page.tsx     # หน้ารายละเอียดสถานที่เฉพาะ (Dynamic Route)
│   │   │   └── page.tsx         # หน้าแสดงรายการสถานที่ทั้งหมด
│   │   └── layout.tsx           # Public Layout (Header + Breadcrumbs + Footer)
│   ├── globals.css              # Global CSS Styles
│   ├── layout.tsx               # Root Layout (<html>, <body>, Fonts)
│   └── page.tsx                 # หน้าแรก (Landing Page)
├── components/
│   └── Breadcrumbs.tsx          # Dynamic Breadcrumbs Component (Arrow Step Style)
├── data/
│   └── places.ts                # ข้อมูลสถานที่ และ Type Definitions
└── README.md                    # เอกสารอธิบายโปรเจกต์