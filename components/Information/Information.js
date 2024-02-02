import React from "react";
import bg1 from "../../assets/bg-section3.png";
import bg2 from "../../assets/bg-section4.png";
import CompanyInformation from "./CompanyInformation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBoxOpen, faMedal, faPeopleRoof, faUser } from "@fortawesome/free-solid-svg-icons";


const Information = () => {
    const icon1 = <FontAwesomeIcon icon={faUser} size="3x" style={{color: "#fe7f0c",}} />;
    const icon2 = <FontAwesomeIcon icon={faPeopleRoof} size="3x" style={{color: "#fe7f0c",}} />
    const icon3 = <FontAwesomeIcon icon={faBoxOpen} size="3x" style={{color: "#fe7f0c",}} />
    const icon4 = <FontAwesomeIcon icon={faMedal} size="3x" style={{color: "#fe7f0c",}} />
  return (
    <>
      <section>
        <div className="bg-[#f4f6e8]">
          <div className=" md:h-[460px]  relative flex flex-col items-center justify-center ">
            <img alt="asas" src={bg1} className="absolute top-0" />
            <img alt="asas" src={bg2} className="absolute bottom-0" />
            <div className="my-24 ">
              <div className=" lg:w-full w-screen h-fit grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 md:px-20 px-5 ">
                <div className="border-dotted border-gray-400 border-r-2">
                  <CompanyInformation  title={'Satisfied Clients'} icon={icon1} num={'1542'}  plus={50}/>
                </div>
                <div className=" lg:border-r-2 border-dotted border-gray-400">
                  <CompanyInformation title={'Expert Team'} icon={icon2} num={'182'}  plus={4}/>
                </div>
                <div className="  border-dotted border-gray-400 border-r-2 ">
                  <CompanyInformation  title={'Activate Products'} icon={icon3} num={'285'} plus={6}/>
                </div>
                <div className="">
                  <CompanyInformation  title={'Awards Winning'} icon={icon4} num={'27'} plus={1}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Information;
