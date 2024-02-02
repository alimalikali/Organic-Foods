import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import catdata from '../../data/CateoryData'
import { NavLink } from "react-router-dom";

const OneCategory = ({id}) => {
    const cat = catdata.find((x)=> x.id === id);
    
  return (
    <>
    {cat && (
      <div key={cat.id} className="bg-white p-5 hover:p-0 h-[350px] flex items-center justify-center group">
        <div className={`flex justify-center items-center border-gray-300 h-full border-2   group-hover:border-4 ${cat.bordercolor}  `}>
          <div className="flex flex-col space-y-5 justify-center items-center m-0 group-hover:m-5  ">
            <div>
              <div className="relative -right-8">
                <h1 className={`text-9xl font-Playfair text-gray-300 w-fit absolute -left-9 -top-7 ${cat.tcolor} `}>{cat.head}</h1>
                <img src={cat.img} alt="sas" className="w-[120px] relative z-10 " />
              </div>
            </div>
            <div className="text-center text-sm font-Montserrat flex flex-col space-y-3 justify-center items-center">
              <h3 className="text-2xl font-semibold font-Playfair">{cat.title}</h3>
              <p className="text-gray-500">{cat.description}</p>
              <div className="">
                <NavLink to={`/shop`} className={`group relative bg-white text-black group-hover:text-white pl-4 pr-14 py-1.5 rounded-full ${cat.ghcolor}`}>
                  <span className="absolute top-0.5 -left-5 group-hover:translate-x-[120px] transition-all duration-100">
                    <p className={`rounded-full px-2 py-1 ${cat.color}`}>
                      <FontAwesomeIcon icon={faArrowRightLong} style={{ color: "white" }} />
                    </p>
                  </span>
                  Shop Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
       )}

    

    </>
  );
};

export default OneCategory;
