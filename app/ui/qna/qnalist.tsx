import Link from "next/link";
import Blank from "../components/blank";
import ExternalLink from "../components/externallink";
import { pastQnaList_2023_1, pastQnaList_2022_2 } from "./qnapastdata";

export default function QnaList() {
  return (
    <>
      <Blank />
      <Blank />
      <div>I조</div>
      <Link href="/qna/QRcode1">
        <div>
          -{" "}
          <span className="text-blue-500 cursor-pointer">
            이미지 QR코드로 보여주기 - 1. 이미지 supabase에 업로드
          </span>
        </div>
      </Link>
      <Link href="/qna/QRcode2">
        <div>
          -{" "}
          <span className="text-blue-500 cursor-pointer">
            이미지 QR코드로 보여주기 - 2. 이미지 링크 QR코드로 변환하기
          </span>
        </div>
      </Link>
      <Blank />
      <Blank />
      <div>2023년 1학기</div>
      <Blank />
      {pastQnaList_2023_1.map((qna, i) => {
        return (
          <div key={i}>
            - <ExternalLink linkText={qna.linkText} url={qna.url} />
          </div>
        );
      })}
      <Blank />
      <Blank />
      <div>2022년 2학기</div>
      {pastQnaList_2022_2.map((qna, i) => {
        return (
          <div key={i}>
            - <ExternalLink linkText={qna.linkText} url={qna.url} />
          </div>
        );
      })}
    </>
  );
}
