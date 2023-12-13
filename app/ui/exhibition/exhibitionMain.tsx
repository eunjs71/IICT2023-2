import Link from "next/link";
import Blank from "../components/blank";
import ImageBox from "../components/imagebox";

export default function ExhibitionMain() {
  return (
    <div className="flex flex-col">
      <div>Exhibition</div>
      <div>과제전</div>
      <Blank />
      <Blank />
      <div>과제전 준비</div>
      <Blank />
      <Link href="/exhibition/GitHubPage">
        <div>
          -{" "}
          <span className="text-blue-500 cursor-pointer">
            GitHub Repository에 코드 업로드
          </span>
        </div>
      </Link>
      <Blank />
      <ImageBox src="/poster.jpeg" alt="poster" />
      <Blank />
      <Blank />
    </div>
  );
}
