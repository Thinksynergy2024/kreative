import { AiOutlineClose } from "react-icons/ai";
import MenuChild from "@/components/layout/sidebar/menu-children";
import DrawerMenu from "./drawer/drawer-menu";

export const Drawer = ({ isOpen, setIsOpen }) => {

  return (
    <>
      <main
        className={
          " fixed overflow-hidden z-50 bg-[#000000] bg-opacity-50 inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-y-0 h-screen w-full"
            : " transition-all delay-500 opacity-0 translate-x-full")
        }
      >
        <section
          className={
            "right-0 w-1/2 absolute bg-primary px-4 py-4 h-screen overflow-y-auto shadow-2xl delay-400 duration-500 ease-in-out transition-all transform text-white " +
            (isOpen ? " translate-x-0 " : " translate-x-full ")
          }
        >
          <article className="space-y-8">
            <div className="flex items-center justify-end p-4">
              <div>
                <AiOutlineClose
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold float-right cursor-pointer text-background rounded"
                />
              </div>
            </div>
            <div>
              <ul className="space-y-8 my-4">
                <DrawerMenu />
              </ul>
            </div>
          </article>
        </section>
        {/* <section
          className=" w-1/2 h-full cursor-pointer "
          onClick={() => setIsOpen(false)}
        ></section> */}
      </main>
    </>
  );
};
