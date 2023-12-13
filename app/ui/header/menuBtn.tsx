import Link from "next/link";

export default function MenuBtn({
  label,
  drawDCL,
  eraseDCL,
  currentMenu,
  setcurrentmenu,
}: {
  label: string;
  drawDCL: any;
  eraseDCL: any;
  currentMenu: string;
  setcurrentmenu: any;
}) {
  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    setcurrentmenu(label);
    // if (label === "EXHIBITION") {
    //   document.body.classList.add("bluegrad");
    // } else {
    //   document.body.classList.remove("bluegrad");
    // }
  };
  const getHref = (label: string) => {
    if (label === "HOME") {
      return "/";
    } else if (label == "Q&A") {
      return "/qna";
    }
    return `/${label.toLowerCase()}`;
  };
  return (
    <Link
      href={getHref(label)}
      className={`lg:flex-1 flex-grow lg:flex-grow:0  py-4 mx-0 lg:mx-12 my-4 flex justify-center cursor-pointer ${
        label === currentMenu
          ? currentMenu === "EXHIBITION"
            ? "striped-div-selected"
            : "striped-div-selected"
          : null
      }`}
      onMouseEnter={drawDCL}
      onMouseLeave={eraseDCL}
      onClick={handleOnClick}
    >
      {label}
    </Link>
  );
}
