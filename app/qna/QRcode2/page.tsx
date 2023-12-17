"use client";
import Blank from "@/app/ui/components/blank";
import CodeBlock from "@/app/ui/components/codeblock";
import ExternalLink from "@/app/ui/components/externallink";
import ImageBoxShadow from "@/app/ui/components/imageboxshadow";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex flex-col">
        <div>이미지 QR코드로 보여주기 - 2. 이미지 링크 QR코드로 변환하기</div>
        <Blank />

        <div>
          이미지를 QR 코드로 보여주기 위해서는 먼저 1. 이미지를 supabase의
          저장소에 업로드하고, 2. 이미지의 링크를 QR 코드로 변환하여 보여줘야
          합니다.
        </div>
        <div>
          먼저&nbsp;
          <Link href="/qna/QRcode1">
            <span className="text-blue-500 cursor-pointer">
              이미지 QR코드로 보여주기 - 1. 이미지 supabase에 업로드
            </span>
          </Link>
          를 다 보고 오시는 것을 추천드립니다.
        </div>
        <Blank />
        <div>이미지 링크 가져오기</div>
        <ImageBoxShadow src="/qna/qrcode2/1.png" alt="qrcode2-1" />
        <div>
          버킷에 들어가 이전에 업로드한 이미지를 클릭하고 <b>Get URL</b>버튼을
          눌러 이미지의 URL을 복사합니다.
        </div>
        <div>
          QR코드 변환 라이브러리를 사용하기 위해 <b>index.html</b>에 다음 코드를
          추가합니다.
        </div>
        <Blank />
        <CodeBlock
          code={`<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.js" integrity="sha512-is1ls2rgwpFZyixqKFEExPHVUUL+pPkBEPw47s/6NDQ4n1m6T/ySeDW3p54jp45z2EJ0RSOgilqee1WhtelXfA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`}
          language="html"
        />
        <Blank />
        <div>최종 코드는 다음과 같습니다.</div>
        <Blank />
        <CodeBlock
          code={`<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.js" integrity="sha512-is1ls2rgwpFZyixqKFEExPHVUUL+pPkBEPw47s/6NDQ4n1m6T/ySeDW3p54jp45z2EJ0RSOgilqee1WhtelXfA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/addons/p5.sound.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

  </head>
  <body>
    <main>
    </main>

    <script src="sketch.js"></script>
  </body>
</html>`}
          language="html"
        />

        <Blank />
        <div>
          <b>sketch.js</b>에 다음 코드를 작성합니다.
        </div>
        <div>
          <b>IMAGE_URL</b>에는 복사한 링크를 넣어주세요.
        </div>
        <Blank />
        <CodeBlock
          code={`let qrcode;

function setup() {
  qrcode = createDiv()
  qrcode.id('qrcode')
  qrcode.position(72, 72)
  createCanvas(400, 400);
  new QRCode(document.getElementById("qrcode"), "IMAGE_URL");
}

function draw() {
  background(220);
}`}
          language="javascript"
        />
        <Blank />
        <div>생성된 QR코드를 확인할 수 있습니다.</div>
        <div>
          QR코드는 DOM이기 때문에, <b>show()</b>, <b>hide()</b> 함수로 보이거나
          숨길 수 있습니다.
        </div>
        <ImageBoxShadow src="/qna/qrcode2/2.png" alt="qrcode2-2" />
        <Blank />

        <div>이미지의 URL은 다음 구조로 되어 있습니다.</div>
        <Blank />
        <div>
          {`https://{PROJECT_URL}/storage/v1/object/public/{BUCKET_NAME}/public/{FILE_NAME}`}
        </div>
        <Blank />
        <div>
          파일이름이 변수로 되어 있을 경우 해당 부분은 변수로 바꿔주시면 됩니다.
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
