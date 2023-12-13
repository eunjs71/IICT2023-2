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
        <div>GitHub Repository에 코드 업로드</div>
        <Blank />
        <div>
          최종 과제를 GitHub에 업로드하는 방법 안내드립니다. GitHub 업로드는
          팀에서 한 명(팀장)만 하면 되며, 이후에 팀원을 초대합니다.
        </div>
        <Blank />
        <Blank />
        <div>GitHub 회원 가입</div>
        <div>
          GitHub 홈페이지에 들어가셔서 회원가입을 해주세요. →{" "}
          <ExternalLink linkText="Go GitHub Page" url="https://github.com/" />
        </div>
        <Blank />
        <div>새 Repository 만들기</div>
        <div>
          GitHub에 로그인을 한 후, NEW 버튼을 클릭하여 새 Repository를 만듭니다.
        </div>
        <ImageBoxShadow src="/githubUpload/1.png" alt="githubUpload1" />
        <div>
          Repository 이름, 설명을 적습니다. Repository 이름은 나중에 GitHub
          Page를 만들 때 주소 이름이 되기도 합니다.
        </div>
        <ImageBoxShadow src="/githubUpload/2.png" alt="githubUpload2" />
        <div>
          과제에 대한 설명까지 적기 위해, <b>Add a README</b> file을 체크한 후
          Create repository 버튼을 눌러 Repository를 생성합니다. 새 Repository가
          생성되면 GitHub Desktop 응용프로그림을 통해 이 Repository를
          관리합니다.
        </div>
        <Blank />
        <div>GitHub Desktop 설치하기</div>
        <div>
          GitHub Desktop 홈페이지에 들어가셔서 프로그램을 다운 받으세요. →{" "}
          <ExternalLink
            linkText="Go GitHub Desktop Page"
            url="https://desktop.github.com/"
          />
        </div>
        <Blank />
        <div>GitHub Desktop으로 Repository 관리하기</div>
        <div>
          <b>Settings...</b>에 들어가 계정 로그인을 합니다.
        </div>
        <ImageBoxShadow src="/githubUpload/3.png" alt="githubUpload3" />
        <ImageBoxShadow src="/githubUpload/4.png" alt="githubUpload4" />
        <div>
          Current Repository &gt; Add &gt; Clone Repository...를 선택합니다.
        </div>
        <ImageBoxShadow src="/githubUpload/5.png" alt="githubUpload5" />
        <div>
          내 컴퓨터에 Repository를 저장할 위치를 지정하고 Clone 버튼을 누릅니다.
        </div>
        <ImageBoxShadow src="/githubUpload/6.png" alt="githubUpload6" />
        <div>지정한 위치에 폴더가 생성된 것을 확인할 수 있습니다.</div>
        <ImageBoxShadow src="/githubUpload/7.png" alt="githubUpload7" />
        <div>
          이제 파일을 복사합니다. index.html 파일이 있어야 나중에 GitHub Page를
          만들 때 바로 연동됩니다.
        </div>
        <ImageBoxShadow src="/githubUpload/8.png" alt="githubUpload8" />
        <div>
          파일 복사 후, 다시 GitHub Desktop으로 돌아가면 Repository의 변경
          내역을 확인할 수 있습니다.
        </div>
        <ImageBoxShadow src="/githubUpload/9.png" alt="githubUpload9" />
        <div>좌측하단에는 변경 내역에 대해 적습니다.</div>
        <ImageBoxShadow src="/githubUpload/10.png" alt="githubUpload10" />
        <div>변경된 내용을 설명을 포함에 묶는 것을 commit이라고 합니다.</div>
        <div>Description에는 상세 내용을 적습니다. 적지 않으셔도 됩니다.</div>
        <div>
          내용을 기입했으면, Commit to main 버튼을 누릅니다. Repository 안에
          파일이나
        </div>
        <div>
          파일의 내용이 변경(추가, 제거)되고 이를 commit하면 다음과 같은 화면이
          뜹니다.
        </div>
        <ImageBoxShadow src="/githubUpload/11.png" alt="githubUpload11" />
        <div>
          Push origin 버튼을 누르면 github.com에 있는 Repository에 변경 내용이
          적용됩니다.
        </div>
        <div>
          github.com에서 본인의 Repository에 들어가보면 추가한 파일이 업로드 된
          것을 확인할 수 있습니다.
        </div>
        <ImageBoxShadow src="/githubUpload/12.png" alt="githubUpload12" />
        이후에도 변경된 사항이 있을 때마다, GitHub Desktop에서 commit &gt;
        push를 통해 github.com에 있는 Repository에 변경 사항을 적용할 수
        있습니다.
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
