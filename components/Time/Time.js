import React from "react";
import Timer from "./Timer";
// import backfix from "../../assets/counter-banner1.png";

const Time = () => {
  const Seconds = () => {
    return (
      <>
        <div>
          <div className="flex flex-col space-y-7">
            <div className="font-mono text-lime-600 text-2xl ">
              <h3>Best Deals of the week!</h3>
            </div>
            <div className="font-Playfair text-5xl font-semibold md:w-[300px]   w-auto">
              <h1>Grab the best offer of this week!</h1>
            </div>

            <div>
              <Timer />
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className=" relative ">
        <div className="flex md:flex-row flex-col  md:pl-5">
          <div className="flex pl-3 md:w-[40%] w-[100%] items-center ">
            <Seconds />
          </div>
          <div className="flex justify-end md:w-[60%] w-[100%]   ">
            <div className="Time   ">
              <div className="">{/* <img src={backfix} alt="sasas" /> */}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Time;
