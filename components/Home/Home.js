import React, { useEffect ,useState } from "react";
import Banner from '../../data/Banner'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
// import para from '../../assets/team-leaf.png'


const Home = () => {

  
  const [banner, setBanner] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setBanner((prevBanner) => (prevBanner + 1) % 3);
    }, 3000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const currentBanner = Banner[banner];

  return (
    <>
      <section className="section1  sm:px-9 px-4 ">
        <div className="w-full h-fit items-center pt-9">
          {/* <img src={para} alt="sas" className="absolute" id="parallax"/> */}
          <div className="flex justify-center items-center">
            {/* Left Div */}
            <div className={`msm:w-1/2 w-fit flex flex-col  text-left z-10 sm:py-0 py-10 space-y-6 font-barlow ${currentBanner.order}`}>
              <p className=" lg:text-8xl md:text-6xl text-4xl font-bold font-barlow sm:max-w-fit max-w-[250px] ">
                {currentBanner.title}
              </p>
              <p className="text-gray-600 mb-4 text-sm  max-w-fit">
                This is a brief description of the section.
              </p>
              <div className="max-w-fit group ">
                <button     className={`flex flex-row items-center  ${currentBanner.color}   hover:${currentBanner.hcolor} text-white py-2 pr-3 pl-6 font-bold rounded-full `}>
                  Shop Now
                  <p className="rounded-full  py-2 px-3 bg-white ml-4">
                    <FontAwesomeIcon
                      icon={faArrowRightLong}
                      style={{ color: "#000000" }}
                    />
                  </p>
                  <div className="w-32 h-14 absolute bg-slate-400  -z-10 rounded-full  group-hover:animate-ping"></div>
                </button>
              </div>
            </div>

            {/* Right Div with Bouncing Image */}
           
            <div className={`w-1/2 -z-0 relative msm:flex hidden justify-end ${currentBanner.orderbg}`}>
              <div key={currentBanner.id} className="absolute  lg:top-0 left-0 bottom-0 rounded-full max-w-fit md:w-500 md:h-500 ">
              <img  src={currentBanner.bgimage} alt="jaj"  className="md:w-500 md:h-500 " />
              </div>
              <div className=" max-w-full md:w-[500px]  md:h-[500px] ">
              <img
                src={currentBanner.image}
                alt="ssss"
                className=" rounded-full animate-bounce animate-bounce-y animate-infinite"
                width={currentBanner.wh}
                height={currentBanner.wh}
              />
              </div>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
