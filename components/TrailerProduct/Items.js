import React from "react";
import { CartState } from "../../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Items = () => {
  const {
    state: { products },
  } = CartState();
  const limitedproducts = products.slice(0,4)

  
  return (
    <>
        {limitedproducts.map((item) => {
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
                <div className=" -bottom-5  absolute opacity-0 group-hover:opacity-100">
                  <div className="   inline-block translate-y-[100%]  transition duration-500 ease-out group-hover:translate-y-0 ">
                    <NavLink to={`/shop/${item.id}`} className="  bg-lime-500 text-white hover:bg-orange-500 py-2 px-7 rounded-full justify-center items-center flex flex-row">
                      Select options
                      <p className={`rounded-full px-2 py-1 `}>
                        <FontAwesomeIcon
                          icon={faArrowRightLong}
                          style={{ color: "white" }}
                        />
                      </p>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Items;
