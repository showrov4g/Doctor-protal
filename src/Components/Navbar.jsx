import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img className="w-44 cursor-pointer" src={assets.logo} alt="" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 mx-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">All Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 mx-auto hidden" />
        </NavLink>
        <NavLink to="about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 mx-auto hidden" />
        </NavLink>
        <NavLink to="concat">
          <li className="py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 mx-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 front-light hidden md:block rounded-full"
          >
            Create account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
