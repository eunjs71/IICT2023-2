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
  };
  return (
    <div
      className={`lg:flex-1 flex-grow lg:flex-grow:0  py-4 mx-0 lg:mx-12 my-4 flex justify-center border border-white cursor-pointer ${
        label === currentMenu ? "striped-div-selected" : ""
      }`}
      onClick={handleOnClick}
      onMouseEnter={drawDCL}
      onMouseLeave={eraseDCL}
    >
      {label}
    </div>
  );
}
