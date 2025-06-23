import React from "react";
import { Link } from "react-router-dom";
import Button from "./base/Button";

const Nav: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black shadow-md px-4 py-2 grid grid-cols-3 items-center">
      <div className="flex space-x-6">
        <Link to="/" className="text-xs text-white hover:text-yellow-500 transition-colors duration-300 font-medium font-ubuntu">Home</Link>
        <Link to="/about" className="text-xs text-white hover:text-yellow-500 transition-colors duration-300 font-medium font-ubuntu">About</Link>
        <Link to="/project" className="text-xs text-white hover:text-yellow-500 transition-colors duration-300 font-medium font-ubuntu">Project</Link>
      </div>
      <Link to="/" className="text-base text-white flex justify-center font-ubuntu font-medium">Mobilus</Link>
      <div className="flex justify-end">
        <Button>Contact</Button>
        <button className="hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" className="size-6 stroke-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
