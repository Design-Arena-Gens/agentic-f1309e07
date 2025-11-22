"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { slug: "", label: "الصفحة الرئيسية" },
  { slug: "page-1", label: "صفحة 1" },
  { slug: "page-2", label: "صفحة 2" },
  { slug: "page-3", label: "صفحة 3" },
  { slug: "page-4", label: "صفحة 4" },
  { slug: "page-5", label: "صفحة 5" },
  { slug: "page-6", label: "صفحة 6" },
  { slug: "page-7", label: "صفحة 7" },
  { slug: "page-8", label: "صفحة 8" },
  { slug: "page-9", label: "صفحة 9" },
  { slug: "page-10", label: "صفحة 10" }
];

export function NavBar() {
  const pathname = usePathname()?.replace(/^\//, "") ?? "";
  const current = pathname === "" ? "" : pathname;

  return (
    <nav>
      <ul className="nav-list">
        {pages.map((page) => {
          const href = page.slug ? `/${page.slug}` : "/";
          const isActive = current === page.slug;
          return (
            <li key={page.slug || "home"}>
              <Link href={href} className={isActive ? "active" : ""}>
                {page.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
