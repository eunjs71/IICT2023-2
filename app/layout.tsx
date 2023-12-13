import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IICT 2023-2",
  description: "정보문화기술입문 2023년 2학기",
  metadataBase: new URL("https://iict-2023-2.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" flex min-h-screen flex-col items-center ">
          <Header />
          <div className="p-24 md:p-12 sm: p-6 z-20 w-full xl:w-3/4 2xl:w-1/2 p-24 md:p-12 sm: p-6">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
