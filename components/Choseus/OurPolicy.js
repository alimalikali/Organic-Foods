import React from "react";

const OurPolicy = ({ title, img }) => {
  return (
    <>
      <div className="p-6 bg-white group hover:bg-orange-500 hover:shadow-2xl hover:shadow-orange-500 shadow-xl">
        <div className="flex flex-col space-y-4 text-center">
          <div className="flex flex-col space-y-5  items-center">
            <div className="rounded-full w-20 h-20    flex items-center justify-center">
              <div className="rounded-full w-16 h-16 group-hover:bg-white bg-orange-500 border-orange-200  group-hover:border-orange-400   border-[12px] flex items-center justify-center ">
                {img}
              </div>
            </div>

            <h3 className="font-Playfair text-2xl font-bold group-hover:text-white">
              {title}
            </h3>
          </div>
          <div>
            <p className="group-hover:text-white text-sm text-gray-600 font-barlow">
              Purchasing from select family farmers who farm organically.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPolicy;
