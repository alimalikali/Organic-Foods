import React, { useState } from "react";
import organiclogo from "./logo-mobile.png";
import NavHome from "./NavHome";
import NavPages from "./NavPages";
import NavShop from "./NavShop";
import NavAbout from "./NavAbout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMagnifyingGlass ,faBars } from "@fortawesome/free-solid-svg-icons";
import NavPort from "./NavPort";
import NavElement from "./NavElement";
import NavBlog from "./NavBlog";

const Navbar = () => {
  const initialvalue = false;
  const [toggle, settoggle] = useState(initialvalue);

  const Togglebutton = () => {
    return settoggle(!toggle);
  };
  return (
    <>
      <nav className="bg-white sticky w-full px-9 top-0 z-50 shadow-lg">
        <div className=" mx-auto flex justify-between items-center  ">
          <ul className="md:flex flex-row items-center lg:space-x-14  space-x-4   font-bold  h-[100px] hidden">
            <NavHome />
            <NavAbout />
            <NavPages />
            <NavShop />
          </ul>
          <div className="md:justify-center flex w-44 ">
            <img
              src={organiclogo}
              alt="organiclogo"
              className="md:w-40 w-32 md:mx-10 mx-0 my-3"
            />
          </div>
          <ul className="md:flex flex-row items-center lg:space-x-14  space-x-4  font-bold   h-[100px] hidden">
            <NavPort />
            <NavElement />
            <NavBlog />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="lg"
              style={{ color: "#030303" }}
            />
          </ul>
          <div className="flex  md:hidden  ">
            <button onClick={Togglebutton}><FontAwesomeIcon icon={faBars} style={{color: "#000000",height : "25px",width : "35px",}} /></button>
            {toggle && (
              <div className="fixed z-50 flex flex-col top-0 left-0 h-screen w-3/4 bg-white px-5">
                <div>
                  <div className="justify-center flex ">
                    <img
                      src={organiclogo}
                      alt="organiclogo"
                      className="w-32 h-auto mx-3"
                    />
                  </div>
                  <div className=" flex flex-col space-y-5">
                  <div className="border-b-2 border-gray-300 flex flex-row">   <NavHome /></div>
                  <div className="border-b-2 border-gray-300 flex flex-row">   <NavAbout /></div>
                  <div className="border-b-2 border-gray-300 flex flex-row ">  <NavPages /></div>
                  <div className="border-b-2 border-gray-300 flex flex-row ">  <NavShop />  </div>
                  <div className="border-b-2 border-gray-300 flex flex-row ">  <NavPort />  </div>
                  <div className="border-b-2 border-gray-300 flex flex-row ">  <NavElement />  </div>
                  <div className="border-b-2 border-gray-300 flex flex-row ">  <NavBlog />  </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
