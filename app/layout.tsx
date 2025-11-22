import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { NavBar } from "../components/NavBar";

export const metadata: Metadata = {
  title: "بحث حول أخطار المهنة",
  description:
    "مقال بحثي بالعربية من عشر صفحات يسلط الضوء على أخطار المهنة وسبل الوقاية."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <header className="header">
          <h1>بحث حول أخطار المهنة</h1>
          <NavBar />
        </header>
        <main className="content">{children}</main>
        <footer className="footer">
          <p>إعداد: فريق السلامة المهنية · 2024</p>
        </footer>
      </body>
    </html>
  );
}
