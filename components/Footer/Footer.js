import React from "react";
// import footbg from '../../assets/bg-footer-top.png'
import FootTop from "./FootTop";
import FooterMaal from "./FooterMaal";
import FootBot from "./FootBot";

const Footer = () => {
  return (
    <>
      <section className="md:pt-[180px] pt-[200px]">
        <div className="z-10 relative w-full mt-[200px] ">
          <div className="absolute lg:-top-36 md:-top-[350px]  -top-[450px]     w-full">
            <div className="flex  w-full px-5 md:bg-transparent bg-[#0c2900] py-6">
              <FootTop />
            </div>
          </div>
        </div>
        <section className="footerbg  relative lg:mt-6 md:mt-[100px] mt-[500px] h-fit">
          <div className="absolute lg:bottom-28 bottom-48 w-[100%]  h-full">
            <footer className="w-full h-fit  footerbg  flex items-center">
              <FooterMaal />
            </footer>
          </div>
          <div className="absolute bottom-0 z-10 w-full">
            <FootBot />
          </div>
        </section>
      </section>
    </>
  );
};

export default Footer;
