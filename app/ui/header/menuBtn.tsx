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
    if (label === "EXHIBITION") {
      document.body.classList.add("bluegrad");
    } else {
      document.body.classList.remove("bluegrad");
    }
  };
  return (
    <div
      className={`lg:flex-1 flex-grow lg:flex-grow:0  py-4 mx-0 lg:mx-12 my-4 flex justify-center cursor-pointer ${
        label === currentMenu
          ? currentMenu === "EXHIBITION"
            ? "striped-div-selected-blue"
            : "striped-div-selected"
          : null
      }`}
      onClick={handleOnClick}
      onMouseEnter={drawDCL}
      onMouseLeave={eraseDCL}
    >
      {label}
    </div>
  );
}
