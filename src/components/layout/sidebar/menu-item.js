import React, { useState } from "react";

const MenuItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <li>
      <a href={item.href} onClick={handleToggle}>
        {item.icon}
        <span>{item.label}</span>
        {hasChildren && <span>{expanded ? "▼" : "►"}</span>}
      </a>
      {hasChildren && expanded && (
        <ul>
          {item.children.map((child) => (
            <MenuItem key={child.href} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;