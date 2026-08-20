import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "박혜진 | Product Designer Portfolio",
  description:
    "제품의 문제를 근거로 정의하고 사용자 경험과 운영 구조를 설계한 Product Designer 박혜진의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
