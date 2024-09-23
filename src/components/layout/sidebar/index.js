import { menus } from "@/assets/menu";
import MenuChild from "./menu-children";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Sidebar = ({ show, setShow }) => {
  const handleMouseEnter = () => {
    setShow(true);
  };

  const toggleShow = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <>
      <section
        className={`bg-primary z-50 h-screen transition-width duration-500 ${
          show ? "w-64" : "w-16"
        }`}
      >
        <header className="h-[10vh] shadow flex items-center gap-4 justify-between font-bold px-4">
          <img
            className={`${
              show ? "block" : "hidden"
            } w-36 object-cover transition-opacity duration-500 rounded`}
            src="/logo.jpeg"
            alt=""
          />
          {show ? (
            <MdKeyboardDoubleArrowLeft
              className="cursor-pointer text-3xl text-white transition-transform duration-500"
              onClick={toggleShow}
            />
          ) : (
            <MdKeyboardDoubleArrowRight
              className="cursor-pointer text-3xl text-white transition-transform duration-500"
              onClick={toggleShow}
            />
          )}
        </header>
        <section
          onMouseEnter={handleMouseEnter}
          className="pl-2 h-[84vh] flex flex-col justify-between transition-all duration-500"
        >
          <div className="overflow-x-auto space-y-6 my-4 px-2">
            <MenuChild {...{ show }} />
          </div>
        </section>
      </section>
    </>
  );
};

export default Sidebar;
