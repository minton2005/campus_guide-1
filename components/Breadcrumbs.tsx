'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => segment !== '');

  // แมปชื่อ Path ให้แสดงผลสวยงาม
  const getLabel = (segment: string) => {
    if (segment === 'about') return 'About';
    if (segment === 'places') return 'Places';
    if (segment === 'placemanagement') return 'Place Management';
    return decodeURIComponent(segment);
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center overflow-hidden rounded-md bg-[#1e293b] text-sm text-slate-300">
        {/* หน้าแรก (Icon Home) */}
        <li className="relative flex items-center">
          <Link
            href="/"
            className="flex items-center px-4 py-2.5 hover:bg-[#334155] transition-colors"
          >
            <svg
              className="w-4 h-4 text-slate-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l1.293 1.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          {pathSegments.length > 0 && (
            <span className="absolute right-0 top-0 bottom-0 flex items-center transform translate-x-1/2 z-10 pointer-events-none text-slate-500">
              <svg className="w-3 h-8" viewBox="0 0 12 32" fill="none">
                <path d="M0 0L12 16L0 32" stroke="currentColor" strokeWidth="1" />
              </svg>
            </span>
          )}
        </li>

        {/* Path Segments */}
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={href} className="relative flex items-center">
              {isLast ? (
                <span className="px-5 py-2.5 font-medium text-blue-400 bg-[#0f172a]/50">
                  {getLabel(segment)}
                </span>
              ) : (
                <Link
                  href={href}
                  className="px-5 py-2.5 hover:bg-[#334155] transition-colors"
                >
                  {getLabel(segment)}
                </Link>
              )}

              {/* ตัวแบ่งรูปทรง Arrow/Chevron */}
              {!isLast && (
                <span className="absolute right-0 top-0 bottom-0 flex items-center transform translate-x-1/2 z-10 pointer-events-none text-slate-500">
                  <svg className="w-3 h-8" viewBox="0 0 12 32" fill="none">
                    <path d="M0 0L12 16L0 32" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}