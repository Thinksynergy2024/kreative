import { AiOutlineClose } from "react-icons/ai";
import { menus } from "./menu";
import MenuChild from "@/components/layout/sidebar/menu-children";
import { useState } from "react";

export const Drawer = ({ isOpen, setIsOpen }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [show, setShow] = useState(true);


  return (
    <>
      <main
        className={
          " fixed overflow-hidden z-50 bg-[#000000] bg-opacity-50 inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-y-0"
            : " transition-all delay-500 opacity-0 translate-x-full")
        }
      >
        <section
          className={
            "right-0 md:w-3/12 w-[30vw] absolute bg-primary px-4 py-4 h-screen overflow-y-auto shadow-2xl delay-400 duration-500 ease-in-out transition-all transform  " +
            (isOpen ? " translate-x-0 " : " translate-x-full ")
          }
        >
          <article className="space-y-8">
            <div className="flex items-center justify-end p-4">
              <div>
                <AiOutlineClose
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold float-right cursor-pointer bg-white rounded p-2"
                />
              </div>
            </div>
            <div>
              <ul className="space-y-8 my-4">
                {menus.map((menu, index) => (
                  <MenuChild
                    key={index}
                    {...{ index, menu, collapsed, show,setIsOpen }}
                  />
                ))}
              </ul>
            </div>
          </article>
        </section>
        <section
          className=" w-1/2 h-full cursor-pointer "
          onClick={() => setIsOpen(false)}
        ></section>
      </main>
    </>
  );
};
