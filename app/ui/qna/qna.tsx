"use client";
import { useState } from "react";
import QnaList from "./qnalist";

export default function Qna() {
  const [mode, setmode] = useState("LIST");
  return (
    <div className="flex flex-col">
      <div>Q&A</div>
      <div>질의응답</div>
      {mode === "LIST" ? <QnaList /> : null}
    </div>
  );
}
