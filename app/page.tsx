"use client";
import Image from "next/image";
import Header from "@/app/ui/header/header";
import { useState } from "react";
import Homepage from "./ui/home/homepage";
import Qna from "./ui/qna/qna";
import Exhibition from "./ui/exhibition/exhibition";
import Archiving from "./ui/archiving/archiving";

export default function Home() {
  // const [currentMenu, setcurrentMenu] = useState<string>("HOME");

  return (
    <>
      <Homepage />
    </>
  );
}
