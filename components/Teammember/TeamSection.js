import React from "react";
import OneTeamMember from "./OneTeamMember";
// import Carousel from './Ali'
// import img1 from "../../assets/author2-176x176.jpg";
// import img2 from "../../assets/author2-176x176.jpg";
// import img3 from "../../assets/author2-176x176.jpg";

const TeamSection = () => {
  // const slides = [img1, img2, img3];
  const Team = () => {
    return (
      <div>
        <div>
          <div className="flex flex-col justify-center items-center space-y-5">
            <div>
              <h2 className="text-lime-500 text-2xl">~ Team member ~</h2>
            </div>
            <div className="text-center md:px-0 px-7 ">
              <p className="md:text-4xl text-xl  font-bold max-w-[650px]">
                We have awesome team member to help support.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <section>
        <div className="pt-20 pb-36 ">
          <div className="flex space-y-7  flex-col">
            {/* top */}
            <Team />

            {/* bottom  */}

            <OneTeamMember />
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;


