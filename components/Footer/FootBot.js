import React from "react";
import footbot from "../../assets/bg-footer-bottom.png";

const FootBot = () => {
  return (
    <>
      <footer className="">
        <div className=" md:flex justify-center items-end   hidden  ">
          <img src={footbot} alt="as" className=" h-[120px] w-[100%] " />
          <div className="text-white absolute z-10 mb-7">
            <h1>© 2023 Organio – CaseThemes. All rights reserved.</h1>
          </div>
        </div>
        
      </footer>
    </>
  );
};

export default FootBot;
