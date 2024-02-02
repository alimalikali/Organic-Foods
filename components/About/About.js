import React from "react";
import Aboutimg from "../../assets/about-img2.jpg";
import carrot1 from "../../assets/carrotfood.png";
import carrot2 from "../../assets/carrotfood2.png";


const About = () => {
  return (
    <>
      <section>
        <div>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="p-2">
              <img src={Aboutimg} alt="asa" />
            </div>

            <div className="space-y-6 pl-3 pr-9">
              <div className="space-y-5">
                <div className=" space-y-3">
                  <h3 className="font-Montserrat text-lime-500 text-2xl font-bold">~ About us ~ </h3>
                  <h1 className="font-Playfair font-bold md:text-5xl text-3xl"> We believe in working with accredited farmers </h1>
                </div>
                <p className="font-barlow  text-xl font-medium">
                  Organic Foods and Café is a family run company founded in 2004
                  that runs organic supermarkets
                </p>
                <p className="font-barlow  text-xl  text-gray-600">
                  Organic means growing our food, which is to nourish us,
                  without chemical aids during the growing process such as
                  fertilisers, pesticides, fungcides, herbacides, larbicides etc
                </p>
              </div>
              <div className="flex lg:flex-row flex-col lg:space-x-5 lg:space-y-0 space-y-5">
                <div className="flex flex-row space-x-5">
                  <div>
                    <img src={carrot1} className="md:w-[80px] w-12 " alt="carrot" />
                  </div>
                  <div className="">
                    <h1 className="font-Playfair font-semibold">Why Organic?</h1>
                    <p className="font-barlow text-gray-400 text-base"> 
                    We're making room for self care today with plan.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row space-x-5">
                  <div>
                    <img src={carrot2} className="md:w-[80px] w-12 " alt="carrot" />
                  </div>
                  <div>
                    <h1 className="font-Playfair font-semibold">Why Organic?</h1>
                    <p className="font-barlow text-gray-400 text-base"> 
                    We're making room for self care today with plan.
                    </p>
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

export default About;
