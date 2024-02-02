import React from "react";
import OurPolicy from "./OurPolicy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight ,faHeadset,faCreditCard ,faLeaf} from "@fortawesome/free-solid-svg-icons";

const ChosesUs = () => {
    
    const icon1 = <FontAwesomeIcon icon={faRotateRight} size="xl" style={{color: "#000000",}} />
    const icon2 = <FontAwesomeIcon icon={faHeadset}     size="xl" style={{color: "#000000",}} />
    const icon3 = <FontAwesomeIcon icon={faCreditCard}  size="xl" style={{color: "#000000",}} />
    const icon4 = <FontAwesomeIcon icon={faLeaf}        size="xl" style={{color: "#000000",}} />


  return (
    <>
      <section>
        <div className="grid md:grid-cols-2  grid-cols-1  lg:px-9 md:px-5 px-3 ">
          {/* left  */}
          <div className=" flex  justify-center items-center lg:px-6 py-5 px-2 section2">
            <div className="grid msm:grid-cols-2 grid-cols-1 gap-5">
                <OurPolicy title={'Return Policy'} img={icon1}/>
                <OurPolicy title={'100% Fresh'} img={icon2}/>
                <OurPolicy title={'Support 24/7'} img={icon3}/>
                <OurPolicy title={'Secured Payment'} img={icon4}/>
            </div>
          </div>
          {/* right  */}
          <div className=" p-5 lg:px-7 px-3 flex justify-center items-center">
            <div>
              <div className="flex flex-col space-y-10">
                <div className="flex flex-col space-y-5">
                  <h1 className="font-Montserrat text-lime-500 text-2xl font-bold">
                    ~ Why Choose us? ~
                  </h1>
                  <h3 className="font-Playfair font-bold md:text-4xl text-3xl">
                    We do not buy from the open market & traders.
                  </h3>
                </div>
                <div className="flex flex-col space-y-6 font-barlow  text-lg  text-gray-600">
                  <p >
                    Purchasing from select family farmers who farm organically
                    because they believe in it and so we do. We are conscious of
                    air miles and our carbon footprint so a lot of our produce
                    comes from Egypt.
                  </p>
                  <p >
                    Organic Foods and Café is a family run company that runs
                    organic super markets and cafés selling fresh organic and
                    biodynamic food, supplers, skincare, cosmetics, baby items
                    and household cleaning products. We have 5 shops in Dubai –
                    on Sheikh Zayed Road.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChosesUs;
