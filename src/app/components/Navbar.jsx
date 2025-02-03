import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-slate-600">
        <ul className="flex justify-center items-center gap-5 pt-1">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
