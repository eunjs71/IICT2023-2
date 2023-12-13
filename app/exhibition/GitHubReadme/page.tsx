"use client";
import Blank from "@/app/ui/components/blank";
import ExternalLink from "@/app/ui/components/externallink";
import ImageBox from "@/app/ui/components/imagebox";
import ImageBoxShadow from "@/app/ui/components/imageboxshadow";
import PencilButton from "@/app/ui/components/pencilIcon";
import Header from "@/app/ui/header/header";
import { useState } from "react";

export default function Page() {
  const [currentMenu, setcurrentMenu] = useState<string>("EXHIBITION");
  return (
    <>
      <div className="flex flex-col">
        <div>README.md 작성하기</div>
        <Blank />
        <div>최종 과제에 대한 설명을 README.md 파일에 작성합니다.</div>
        <div>
          .md 파일은 markdown 문법을 사용합니다. (
          <ExternalLink
            url="https://gist.github.com/ihoneymon/652be052a0727ad59601"
            linkText="마크다운 사용법"
          />
          )
        </div>
        <div>
          <ExternalLink url="https://github.com/" linkText="GitHub" /> 에 들어가
          정보문화기술입문 최종 과제 Repoitory에 들어갑니다.
        </div>
        <ImageBoxShadow src="/githubReadme/1.png" alt="githubReadme1" />
        <div className="flex">
          <b>README.md</b>&nbsp;오른쪽에 있는&nbsp;
          <PencilButton />
          &nbsp;버튼을 클릭합니다.
        </div>
        <ImageBoxShadow src="/githubReadme/2.png" alt="githubReadme2" />
        <div>
          <b>Preview</b> 버튼을 통해 작성한 내용의 결과를 미리볼 수 있습니다.
        </div>
        <div>
          내용을 작성한 후 <b>Commit changes...</b> &nbsp;버튼을 누릅니다.
        </div>

        <ImageBoxShadow src="/githubReadme/3.png" alt="githubReadme3" />
        <div>
          <b>Commit changes</b> 버튼을 누릅니다.
        </div>
        <ImageBoxShadow src="/githubReadme/4.png" alt="githubReadme4" />
        <div>
          수정한 내용이 Github Repository에 적용된 모습을 확인할 수 있습니다.
        </div>

        <Blank />
        <div>
          <ExternalLink
            linkText="정보문화기술입문 2023년 2학기 Repository ☆ Star 누르러 가기 "
            url="https://github.com/eunjs71/IICT2023-2"
          />
        </div>
        <Blank />
        <Blank />
        <Blank />
        <Blank />
        <Blank />
      </div>
    </>
  );
}
