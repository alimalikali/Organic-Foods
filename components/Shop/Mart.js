import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { CartState } from "../../Context/Context";
import { NavLink } from "react-router-dom";

const Mart = ({filterProducts}) => {

  const { state: {cart}, dispatch,} = CartState();
 
  return (
    <>
      <div className="bg-gray-50">
        <div>
          {/* top filter  */}
          <div></div>

          {/* all products  */}
          <div className="grid grid-cols-3 gap-x-5 gap-y-20 px-4">
            {filterProducts.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-white h-[400px] flex flex-row relative items-center justify-center group py-5 hover:py-0"
                >
                  <div
                    className={`flex justify-center items-center border-lime-500 h-full border-2   group-hover:border-4   `}
                  >
                    <div className="flex flex-col space-y-5  justify-center items-center m-5 group-hover:m-10  ">
                      <div>
                        <img
                          src={item.img}
                          alt="pic"
                          className="w-[200px] h-[150px]"
                        />
                      </div>
                      <div>
                        <h1 className="text-2xl font-bold font-Playfair">
                          {item.title.slice(0, 16)}
                        </h1>
                        <h3 className="text-lime-600 text-xl font-bold text-center">
                          ${item.price}
                        </h3>
                        <h3 className="text-center">{item.rating} statttt</h3>
                      </div>
                    </div>
                    <NavLink to={`/shop/${item.id}`} className=" -bottom-5  absolute opacity-0 group-hover:opacity-100">
                      <div className="   inline-block translate-y-[100%]  transition duration-500 ease-out group-hover:translate-y-0 ">
                        <button className="  bg-lime-500 text-white hover:bg-orange-500 py-2 px-7 rounded-full justify-center items-center flex flex-row">
                          Select options
                          <p className={`rounded-full px-2 py-1 `}>
                            <FontAwesomeIcon
                              icon={faArrowRightLong}
                              style={{ color: "white" }}
                            />
                          </p>
                        </button>
                      </div>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mart;
