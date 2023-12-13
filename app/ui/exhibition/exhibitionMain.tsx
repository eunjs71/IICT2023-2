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
      <Link href="/exhibition/GitHubUpload">
        <div>
          -{" "}
          <span className="text-blue-500 cursor-pointer">
            GitHub Repository에 코드 업로드
          </span>
        </div>
      </Link>
      <Link href="/exhibition/GitHubCollaborate">
        <div>
          -{" "}
          <span className="text-blue-500 cursor-pointer">
            GitHub Repository 팀원과 공유하기
          </span>
        </div>
      </Link>
      <Link href="/exhibition/GitHubPageDeploy">
        <div>
          -{" "}
          <span className="text-blue-500 cursor-pointer">
            GitHub Pages에 배포하기
          </span>
        </div>
      </Link>
      <Link href="/exhibition/GitHubReadme">
        <div>
          -{" "}
          <span className="text-blue-500 cursor-pointer">
            README.md 작성하기
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
