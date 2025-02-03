import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-slate-600">
        <ul className="flex justify-center items-center gap-5 pt-1">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/services"}><li>Services</li></Link>
          <Link href={"/about"}><li>About</li></Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
