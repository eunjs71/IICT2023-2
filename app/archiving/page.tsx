"use client";
import { useState } from "react";
import Header from "../ui/header/header";
import Archiving from "../ui/archiving/archiving";

export default function Page() {
  const [currentMenu, setcurrentMenu] = useState<string>("ARCHIVING");
  return <Archiving />;
}
