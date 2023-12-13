"use client";
import Image from "next/image";
import Header from "@/app/ui/header/header";
import { useState } from "react";
import Homepage from "./ui/home/homepage";
import Qna from "./ui/qna/qna";
import Exhibition from "./ui/exhibition/exhibition";
import Archiving from "./ui/archiving/archiving";

export default function Home() {
  const [currentMenu, setcurrentMenu] = useState<string>("HOME");
  return (
    <>
      <main className=" flex min-h-screen flex-col items-center ">
        <Header currentMenu={currentMenu} setcurrentmenu={setcurrentMenu} />
        <div className="p-24 md:p-12 sm: p-6 z-20 w-full xl:w-3/4 2xl:w-1/2 p-24 md:p-12 sm: p-6">
          {currentMenu === "HOME" ? <Homepage /> : null}
          {currentMenu === "Q&A" ? <Qna /> : null}
          {currentMenu === "EXHIBITION" ? <Exhibition /> : null}
          {currentMenu === "ARCHIVING" ? <Archiving /> : null}
        </div>
      </main>
    </>
  );
}
