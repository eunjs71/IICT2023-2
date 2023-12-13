"use client";
import { useState } from "react";
import Header from "../ui/header/header";
import Exhibition from "../ui/exhibition/exhibition";

export default function Page() {
  const [currentMenu, setcurrentMenu] = useState<string>("EXHIBITION");
  return <Exhibition />;
}
