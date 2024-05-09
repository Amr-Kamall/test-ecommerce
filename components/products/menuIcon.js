import React from "react";

function MenuIcon({ styles, setOpen, open }) {
  return (
    <svg
      onClick={() => setOpen((is) => !is)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${styles.menuIcon} ${open ? styles.fixed : ""} `}
    >
      <path d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" />
    </svg>
  );
}

export default MenuIcon;
