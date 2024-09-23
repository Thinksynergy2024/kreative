import React, { useState } from "react";
import Link from "next/link";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";

const Child = ({ menu }) => {
  const [showChild, setShowChild] = useState(false);
  const icon = showChild ? <AiFillCaretDown /> : <AiFillCaretRight />;

  return (
    <li>
      <div className="flex items-center">
        {menu.icon}
        {menu.href ? (
          <Link href={menu.href}>
            {menu.label}
          </Link>
        ) : (
          <button onClick={() => setShowChild(!showChild)} className="flex items-center">
            {icon}
            <span className="ml-2">{menu.label}</span>
          </button>
        )}
      </div>
      {showChild && menu.children && (
        <ul className="pl-4">
          {menu.children.map((child, childIndex) => (
            <Child key={childIndex} menu={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Child;
