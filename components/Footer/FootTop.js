import React from "react";
// import top1 from "../../assets/bg-mailchimp.jpg";
import topcarrot from "../../assets/mailchimp-image1.png";

const FootTop = () => {
  return (
    <>
      <section className="footertop md:rounded-full rounded-xl relative ">
        <div className="absolute  bottom-0 left-0 lg:block hidden">
          <img src={topcarrot} alt="aa" className="rounded-full" />
        </div>
        <div className="flex flex-col lg:items-end items-center justify-end  ">
            <div className="flex  flex-row  h-[150px] md:w-[50%]  w-fit ">
              <div className="flex items-center">
                <div className="flex  flex-col space-y-4 px-4">
                  <h1 className="md:text-3xl text-2xl font-bold font-Playfair text-white">
                    Subscribe to our <span>Newsletter :</span>
                  </h1>
                  <div className="flex flex-row justify-between md:space-x-9 space-x-2">
                    <input
                      placeholder="Type Your Email Address Here"
                      className="bg-transparent placeholder-gray-300 border-b-[1px] text-sm border-gray-300 w-full"
                    />
                    <div>
                      <button className="py-1 md:px-4 px-2 bg-[#237301] rounded-full text-white">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default FootTop;
