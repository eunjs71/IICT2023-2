import Blank from "../components/blank";
import ExternalLink from "../components/externallink";

export default function Archiving() {
  return (
    <div className="flex flex-col">
      <div>Archiving</div>
      <div>과제 아카이빙</div>
      <Blank />
      <div>A조</div>
      <div>&lt; !! A조 들어갈 자리 !! &gt;</div>
      <Blank />
      <div>B조</div>
      <div>&lt; !! B조 들어갈 자리 !! &gt;</div>
      <Blank />
      <div>C조</div>
      <div>&lt; !! C조 들어갈 자리 !! &gt;</div>
      <Blank />
      <div>D조</div>
      <div>&lt; !! D조 들어갈 자리 !! &gt;</div>
      <Blank />
      <div>E조</div>
      <div>&lt; !! E조 들어갈 자리 !! &gt;</div>
      <Blank />
      <div>F조</div>
      <div>&lt; !! F조 들어갈 자리 !! &gt;</div>
      <Blank />
      <div>G조</div>
      <div>&lt; !! G조 들어갈 자리 !! &gt;</div>
      <Blank />
      <div>H조</div>
      <div>&lt; !! H조 들어갈 자리 !! &gt;</div>
      <Blank />
      <div>I조</div>
      <div>&lt; !! I조 들어갈 자리 !! &gt;</div>
      <Blank />

      <div>이전 학기</div>
      <ul>
        <li>
          <ExternalLink
            linkText="2023년 1학기"
            url="https://eunjs71.github.io/IICT2023-1/"
          />
        </li>
        <ExternalLink
          linkText="2022년 2학기"
          url="https://eunjs71.github.io/ISC2022-2/"
        />
      </ul>
    </div>
  );
}
