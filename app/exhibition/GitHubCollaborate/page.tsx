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
        <div>GitHub Repository 팀원과 공유하기</div>
        <Blank />
        <div>
          모든 팀원이 GitHub에 가입을 한 이후, GitHub Repository 만들기를 완료한
          사람(조장)이 나머지 팀원을 Collaborators로 지정해주세요.
        </div>
        <div>
          <ExternalLink url="https://github.com/" linkText="GitHub" /> 에 들어가
          정보문화기술입문 최종 과제 Repoitory에 들어갑니다.
        </div>
        <ImageBoxShadow
          src="/githubCollaborate/1.png"
          alt="githubCollaborate1"
        />
        <div>
          Settings &gt; Collaborators를 선택합니다. (추가 인증이 필요할 수
          있습니다.)
        </div>
        <div>Add people 버튼을 누릅니다.</div>
        <ImageBoxShadow
          src="/githubCollaborate/2.png"
          alt="githubCollaborate2"
        />
        <div>팀원들의 아이디 혹은 이메일을 입력합니다.</div>
        <div>팀원이 수락하면 접근 권한을 갖게 됩니다.</div>
        <Blank />

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
