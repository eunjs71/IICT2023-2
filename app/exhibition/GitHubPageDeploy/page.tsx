"use client";
import Blank from "@/app/ui/components/blank";
import ExternalLink from "@/app/ui/components/externallink";
import ImageBox from "@/app/ui/components/imagebox";
import ImageBoxShadow from "@/app/ui/components/imageboxshadow";
import Header from "@/app/ui/header/header";
import { useState } from "react";

export default function Page() {
  const [currentMenu, setcurrentMenu] = useState<string>("EXHIBITION");
  return (
    <>
      <div className="flex flex-col">
        <div>GitHub Pages에 배포하기</div>
        <Blank />
        <div>
          GitHub Repository에 저장한 웹 페이지를 Github Pages에 배포하는 방법에
          대해 안내드립니다.
        </div>
        <div>
          로컬에서 실행했을 때와는 달리, 일단 배포를 하면 url을 통해 어디서든
          접속하실 수 있습니다.
        </div>
        <div>
          <ExternalLink url="https://github.com/" linkText="GitHub" /> 에 들어가
          정보문화기술입문 최종 과제 Repoitory에 들어갑니다.
        </div>
        <ImageBoxShadow src="/githubPageDeploy/1.png" alt="githubPageDeploy1" />
        <div>Settings &gt; Pages를 선택합니다.</div>
        <ImageBoxShadow src="/githubPageDeploy/2.png" alt="githubPageDeploy2" />
        <div>
          <b>Branch</b>를 None에서 main으로 변경한 후 <b>Save</b> 버튼을
          누릅니다.
        </div>
        <ImageBoxShadow src="/githubPageDeploy/3.png" alt="githubPageDeploy3" />
        <div></div>
        <div>
          새로 고침을 계속하면서 기다리다 보면(5분 이내) 링크가 생성되는 것을
          확인할 수 있습니다.
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
