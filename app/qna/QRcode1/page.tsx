"use client";
import Blank from "@/app/ui/components/blank";
import CodeBlock from "@/app/ui/components/codeblock";
import ExternalLink from "@/app/ui/components/externallink";
import ImageBoxShadow from "@/app/ui/components/imageboxshadow";

export default function Page() {
  return (
    <>
      <div className="flex flex-col">
        <div>이미지 QR코드로 보여주기 - 1. 이미지 supabase에 업로드</div>
        <Blank />
        <div>
          이미지를 QR코드로 보여주기 위해서는 먼저 1. 이미지를 supabase의
          저장소에 업로드하고, 2. 이미지의 링크를 QR 코드로 변환하여 보여줘야
          합니다. 먼저 supabase에 가입하여 저장소를 만들고, 이미지를 업로드
          해보겠습니다.
        </div>
        <Blank />
        <div>GitHub 가입</div>
        <div>
          <ExternalLink url="https://github.com/" linkText="GitHub" /> 에 들어가
          회원가입을 완료합니다.
        </div>
        <Blank />
        <div>supabase 가입</div>
        <div>
          <ExternalLink url="https://supabase.com/" linkText="supabase" /> 에
          들어가 회원가입을 완료합니다.
        </div>
        <Blank />

        <ImageBoxShadow src="/qna/qrcode1/1.png" alt="qrcode1-1" />
        <div>supabase 스토리지 생성</div>
        <div>
          로그인 후 Dashboard에서 <b>+ New Project</b>를 클릭합니다.
        </div>
        <ImageBoxShadow src="/qna/qrcode1/2.png" alt="qrcode1-2" />
        <div>
          프로젝트 이름, 데이터베이스 패스워드를 입력하고 지역은 한국을
          선택합니다.
        </div>
        <div>
          <b>Create new project</b> 버튼을 눌러 프로젝트를 생성합니다.
        </div>
        <ImageBoxShadow src="/qna/qrcode1/3.png" alt="qrcode1-3" />
        <div>약 1분 정도 기다리면 배포가 완료됩니다.</div>
        <div>
          아래로 스크롤하면, <b>Project URL</b>, <b>API Key</b>가 있습니다.
        </div>
        <ImageBoxShadow src="/qna/qrcode1/4.png" alt="qrcode1-4" />
        <div>
          각각 <b>Copy</b> 버튼을 눌러 복사하여 따로 보관해둡니다. 이 2개의 값은
          나중에 쓰일 예정입니다.
        </div>
        <ImageBoxShadow src="/qna/qrcode1/5.png" alt="qrcode1-5" />
        <div>
          좌축에 있는 <b>Storage</b>를 클릭합니다.
        </div>
        <div>
          <b>New bucket</b> 버튼을 눌러 버킷을 생성합니다.
        </div>
        <ImageBoxShadow src="/qna/qrcode1/6.png" alt="qrcode1-6" />
        <div>
          <b>Public bucket</b>을 클릭합니다.
        </div>
        <div>
          bucket 이름을 입력하고 <b>Save</b> 버튼을 눌러 버킷을 생성합니다.
        </div>
        <ImageBoxShadow src="/qna/qrcode1/7.png" alt="qrcode1-7" />
        <div>
          왼쪽에 있는 <b>Policies</b>를 클릭합니다.
        </div>
        <div>
          생성한 bucket의 <b>New policy</b>버튼을 클릭합니다.
        </div>
        <ImageBoxShadow src="/qna/qrcode1/8.png" alt="qrcode1-8" />
        <div>
          <b>Get started quickly</b>를 클릭합니다.
        </div>
        <ImageBoxShadow src="/qna/qrcode1/9.png" alt="qrcode1-9" />
        <div>
          처음 선택되어 있는{" "}
          <b>
            Allow access to JPG images in a public folder to anonymous users
          </b>
          템플릿을 사용합니다.
        </div>
        <div>
          <b>Use this template</b>를 클릭하세요.
        </div>
        <ImageBoxShadow src="/qna/qrcode1/10.png" alt="qrcode1-10" />
        <div>
          <b>SELECT</b>, <b>INSERT</b>를 클릭합니다.
        </div>
        <div>이 과정을 통해, 스토리지에 이미지를 업로드할 수 있습니다.</div>
        <div>
          <b>Review</b> 버튼을 클릭하여 다음으로 넘어갑니다.
        </div>
        <ImageBoxShadow src="/qna/qrcode1/11.png" alt="qrcode1-11" />
        <div>
          <b>Save policy</b>버튼을 눌러 정책 설정을 마칩니다.
        </div>
        <Blank />
        <div>supabase 스토리지에 이미지 업로드</div>
        <Blank />
        <div>
          <b>index.html</b>을 열고, supabase 라이브러리를 사용하기 위해 다음
          코드를 추가합니다.
        </div>
        <CodeBlock
          code={`<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>`}
          language="html"
        />
        <Blank />
        <div>아래에는 다음 코드를 추가합니다.</div>
        <Blank />
        <CodeBlock
          code={`<script>const { createClient } = supabase;</script>`}
          language="html"
        />
        <Blank />
        <div>최종 코드는 다음과 같습니다.</div>
        <ImageBoxShadow src="/qna/qrcode1/12.png" alt="qrcode1-12" />
        <div>
          <b>sketch.js</b> 파일을 열어 다음 코드를 작성합니다.
        </div>
        <div>
          <b>ProjectURL</b>, <b>API_KEY</b>자리에는 저장해 두었던 값(string)을
          넣어주세요.
        </div>
        <Blank />

        <CodeBlock
          code={`let cam;
let supbase64Imagee;

function setup() {
  createCanvas(640, 480);
  cam = createCapture(VIDEO);
  cam.hide();
  supabase = createClient(
    ProjectURL,
    API_KEY
  );
}

function draw() {
  image(cam, 0, 0);
}

function mouseClicked() {
  let currentFrameImage = get();
  let base64Image = currentFrameImage.canvas.toDataURL();
  uploadImageToSupabase(base64Image);
}

const dataURLtoFile = (dataurl, fileName) => {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], fileName, { type: mime });
};

async function uploadImageToSupabase(imageData) {
  const imageFile = dataURLtoFile(imageData, 'test2.jpg')
  const { data, error } = await supabase.storage
    .from("test")
    .upload("public/test2.jpg", imageFile, {
      contentType: "image/jpg",
      cacheControl: "3600",
      upsert: false,
    });
  if (error) {
    console.error("Error uploading image:", error);
  } else {
    console.log("Image uploaded successfully:", data);
  }
}
          `}
          language="javascript"
        />
        <Blank />
        <div>bucket에서 업로드된 이미지를 확인할 수 있습니다.</div>
        <ImageBoxShadow src="/qna/qrcode1/13.png" alt="qrcode1-13" />
        <div>
          예시에서는 파일 이름이 &quot;test2.jpg&quot;로 고정되어 있지만, 여러번
          사용하는 경우 시간이 들어간 변수를 사용하여 매번 다른 파일 이름이
          만들어지도록 사용하시면 됩니다.
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
