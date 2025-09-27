import type { Metadata } from "next";
import Header from "@/components/Header";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  weight: ["500", "400", "300"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kimsolzy log",
  description: "It's a technical blog",
};

const bodyClass = `flex items-center text-stone-900 w-full bg-white justify-between ${notoSansKr.className}`;
const sectionClass = "mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={bodyClass}>
        <section className={sectionClass}>
          <Header />
          <main className="mb-auto">{children}</main>
        </section>
      </body>
    </html>
  );
}
