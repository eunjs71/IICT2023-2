import Blank from "../components/blank";
import ExternalLink from "../components/externallink";
import { pastQnaList_2023_1, pastQnaList_2022_2 } from "./qnapastdata";

export default function QnaList() {
  return (
    <>
      <Blank />
      <Blank />
      <div>&lt; !! 이번 학기 질의응답 들어갈 자리 !! &gt;</div>
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
