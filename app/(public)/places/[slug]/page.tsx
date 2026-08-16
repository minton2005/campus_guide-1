import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { findPlace, places } from '@/data/places'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return places.map((place) => ({ slug: place.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const place = findPlace(slug)

  if (!place) return { title: 'ไม่พบสถานที่' }

  return {
    title: `${place.name} | Campus Guide`,
    description: place.summary,
  }
}

export default async function PlacePage({ params }: Props) {
  const { slug } = await params
  const place = findPlace(slug)

  if (!place) notFound()

  return (
    <main className="mx-auto max-w-4xl py-6">
      <article className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
        <h1 className="text-3xl font-bold text-slate-800">{place.name}</h1>
        <p className="mt-3 text-lg text-slate-600 leading-relaxed">{place.summary}</p>

        <dl className="mt-8 grid gap-5 rounded-xl bg-slate-50 p-6 sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-slate-700">อาคาร</dt>
            <dd className="mt-1 text-slate-600">📍 {place.building}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-700">เวลาเปิด</dt>
            <dd className="mt-1 text-slate-600">🕒 {place.openHours}</dd>
          </div>
        </dl>

        <h2 className="mt-8 text-xl font-semibold text-slate-800">สิ่งอำนวยความสะดวก</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {place.facilities.map((facility) => (
            <li key={facility} className="bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-lg font-medium">
              ✓ {facility}
            </li>
          ))}
        </ul>
      </article>
    </main>
  )
}