import Blank from "../components/blank";
import ImageBox from "../components/imagebox";

export default function Exhibition() {
  return (
    <div className="flex flex-col">
      <div>Exhibition</div>
      <div>과제전</div>
      <Blank />
      <Blank />
      <ImageBox src="/poster.jpeg" alt="poster" />
      <Blank />
      <Blank />
      <div>과제전 준비</div>
      <Blank />
    </div>
  );
}
