import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/layout/SideBar";
import Tabs from "@/components/layout/Tabs";

const notoSansKr = Noto_Sans_KR({
  weight: ["500", "400", "300"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kimsolzy",
  description: "It's a technical blog",
  icons: {
    icon: "/favicon.png",
  },
};

const bodyClass = `flex items-center text-stone-900 w-screen h-screen bg-white justify-between select-none ${notoSansKr.className}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={bodyClass}>
        <main className="flex-1 flex h-full">
          <SideBar />
          <section className="flex-1 flex flex-col">
            <Tabs />
            <div className="flex-1 overflow-y-auto p-4">{children}</div>
          </section>
        </main>
      </body>
    </html>
  );
}
