import React, { useContext, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Drawer } from "@/assets/drawer";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsChevronDown } from "react-icons/bs";
import { authContext } from "../use-context";
import { useAuth } from "@/assets/hooks/use-auth";
import { useRouter } from "next/router";
import Link from "next/link";
// import ManageUsers from "./manage-users";

const CustomizedHeader = ({ setShow,show }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { logoutUser, user } = useContext(authContext);
  const router = useRouter();

  console.log("SHOW ",show);


  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenDrawer = () => {
    setIsOpen(true);
  }

  return (
    <>
      <div className="md:hidden block">
        { isOpen && <Drawer {...{ isOpen, setIsOpen }} />}
      </div>
      <section className="flex items-center justify-between px-4 sticky top-0 bg-white shadow h-[10vh] mb-2">
        <div className="md:block hidden">
          {router.pathname === "/dashboard" ? (
            <h1 className=" ">Dashboard</h1>
          ) : (
            ""
          )}
          {router.pathname === "/dashboard/vaselife" ? (
            <h1 className=" ">Vaselife Measurements</h1>
          ) : (
            ""
          )}
          {router.pathname === "/dashboard/add-measurement" ? (
            <h1 className=" ">Add Measurement</h1>
          ) : (
            ""
          )}
          {router.pathname === "/dashboard/create-test/varities" ? (
            <h1 className=" ">Varities</h1>
          ) : (
            ""
          )}
          {router.pathname === "/dashboard/active-tests" ? (
            <h1 className=" ">Active Tests</h1>
          ) : (
            ""
          )}
          {router.pathname === "/dashboard/complete-tests" ? (
            <h1 className=" ">Complete Tests</h1>
          ) : (
            ""
          )}
          {router.pathname === "/dashboard/user-guide" ? (
            <h1 className=" ">User Guide</h1>
          ) : (
            ""
          )}
          {router.pathname === "/dashboard/scan-measurement" ? (
            <h1 className=" ">Add Vaselife Measurements</h1>
          ) : (
            ""
          )}
        </div>
        <div className="md:hidden block">
          <AiOutlineMenu
            className="text-2xl cursor-pointer "
            onClick={handleOpenDrawer}
          />
        </div>
        <div className="flex items-center gap-2">
          {/* {token?.role === "admin" && <ManageUsers />} */}
          <span className=" text-sm">{user?.username}</span>
          <BsChevronDown onClick={handleClick} className=" cursor-pointer" />
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <Link href="/dashboard/profile">Profile</Link>
          </MenuItem>
          <MenuItem onClick={logoutUser}>Logout</MenuItem>
        </Menu>
      </section>
    </>
  );
};

export default CustomizedHeader;
