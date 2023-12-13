"use client";

import { useState } from "react";
import MenuBtn from "./menuBtn";
import { mPlusRounded1C } from "../fonts";

export default function Header({
  currentMenu,
  setcurrentmenu,
}: {
  currentMenu: string;
  setcurrentmenu: any;
}) {
  const [hovered, sethovered] = useState(false);
  const menues = ["HOME", "Q&A", "EXHIBITION", "ARCHIVING"];

  const drawDCL = (e: React.MouseEvent<HTMLElement>) => {
    let div = e.target as HTMLDivElement;
    // div.style.border = "1px solid grey";
    if (currentMenu == "EXHIBITION") {
      div.classList.add("striped-div-blue");
    } else {
      div.classList.add("striped-div");
    }
  };
  const eraseDCL = (e: React.MouseEvent<HTMLElement>) => {
    let div = e.target as HTMLDivElement;
    // div.style.border = "1px solid white";
    if (currentMenu == "EXHIBITION") {
      div.classList.remove("striped-div-blue");
    } else {
      div.classList.remove("striped-div");
    }
  };

  return (
    <div className="flex flex-col items-center w-full xl:w-3/4 2xl:w-1/2">
      <div
        className={`flex justify-center m-9 py-3 px-6 text-2xl background-cloud rounded-3xl ${mPlusRounded1C.className} drop-shadow-xl cursor-pointer`}
        onClick={() => setcurrentmenu("HOME")}
      >
        <span className="drop-shadow ts-red">II</span>
        <span className="drop-shadow ts-yellow">CT&nbsp;</span>
        <span className="drop-shadow ts-green">2023</span>
        <span className="drop-shadow ts-yellow">-</span>
        <span className="drop-shadow ts-red">2</span>
      </div>
      <div className="flex justify-between w-full space-between">
        {menues.map((menu, i) => (
          <MenuBtn
            key={i}
            label={menu}
            drawDCL={drawDCL}
            eraseDCL={eraseDCL}
            currentMenu={currentMenu}
            setcurrentmenu={setcurrentmenu}
          />
        ))}
      </div>
    </div>
  );
}
