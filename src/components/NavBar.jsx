import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="fixed top-0 right-0 left-0 bg-white z-50">
      <div className="mx-6 my-5 flex justify-between items-center">
        <h1 className="logo uppercase text-xl leading-none">
          Sophie <br />
          Kelevra
        </h1>
        <nav className="flex">
          <NavLink
            exact
            to="/"
            activeClassName="bg-gradient-to-r from-blue to-pink text-white"
            className="inline-flex items-center py-0.5 px-6 ml-4 rounded-full duration-300 hover:bg-gradient-to-r from-blue to-pink hover:text-white"
          >
            home
          </NavLink>
          <NavLink
            activeClassName="bg-gradient-to-r from-blue to-pink text-white"
            className="inline-flex items-center py-0.5 px-6 ml-4 rounded-full duration-300 hover:bg-gradient-to-r from-blue to-pink hover:text-white"
            to="/about"
          >
            about
          </NavLink>
          <NavLink
            activeClassName="bg-gradient-to-r from-blue to-pink text-white"
            className="inline-flex items-center py-0.5 px-6 ml-4 rounded-full duration-300 hover:bg-gradient-to-r from-blue to-pink hover:text-white"
            to="/shop"
          >
            shop
          </NavLink>
          <NavLink
            activeClassName="bg-gradient-to-r from-blue to-pink text-white"
            className="inline-flex items-center py-0.5 px-6 ml-4 rounded-full duration-300 hover:bg-gradient-to-r from-blue to-pink hover:text-white"
            to="/gallery"
          >
            gallery
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
