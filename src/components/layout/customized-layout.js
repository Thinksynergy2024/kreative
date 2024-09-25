import React, { useState } from "react";
import Sidebar from "./sidebar";
import CustomizedHeader from "./customized-header";


const CustomizedLayout = ({ children }) => {
  const [show, setShow] = useState(true);


  return (
      <div className="md:flex h-screen  overflow-hidden bg-background">
        <div
          className={`${
            !show ? "w-16" : ""
          }  bg-white shadow-xl rounded md:block hidden`}
        >
          <Sidebar {...{ show, setShow }} />
        </div>

        <div className="flex-1 overflow-y-auto relative">
          <CustomizedHeader {...{ setShow,show }} />
          <div>{children}</div>
          <section className="bg-white w-full p-4 absolute md:bottom-0 text-center text-sm">
            <p>Florisynergy. Powered by Think Synergy </p>
          </section>
        </div>
      </div>
  );
};

export default CustomizedLayout;
