import React from "react";
import Blog from "./Blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const BlogSection = () => {
  const MainHead = () => {
    return (
      <div>
        <div>
          <div className="flex flex-col justify-center items-center space-y-5">
            <div>
              <h2 className="text-lime-500 text-2xl">~ From our blog ~</h2>
            </div>
            <div className="text-center md:px-0 px-7 ">
              <p className="lg:text-5xl md:text-2xl text-xl  font-bold max-w-[900px]">
                On a quest to bring together and closer to you all things
                Organic.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const View=()=>{
    return(
      <>
      <div className="flex justify-center items-center">
        <div>
          <div className="bg-orange-500 hover:bg-lime-500 w-44 rounded-full h-14 flex justify-center items-center"><button className="text-white text-lg font-bold font-barlow ">View all posts  <span className={` `}><FontAwesomeIcon icon={faArrowRightLong} style={{ color: "white" }}/></span></button></div>
        </div>
      </div>
      </>
    );
  }
  return (
    <>
      <section>
        <div className="py-36 ">
          <div className="flex space-y-11  flex-col">
            <MainHead />
            <div className="flex justify-center items-center ">
              <div className="grid lg:grid-cols-3  grid-cols-1 lg:gap-x-10 gap-x-2  lg:gap-y-0 gap-y-14 h-fit py-6 lg:px-10 px-3">
                <Blog id={1} />
                <Blog id={2} />
                <Blog id={3} />
              </div>
            </div>
            <View/>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
