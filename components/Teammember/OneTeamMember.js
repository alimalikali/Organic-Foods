import React, { useState, useEffect } from "react";
import Team from "../../data/TeamMemberData";
import leaf from "../../assets/team-leaf.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBasketball,faChevronLeft,faChevronRight,} from "@fortawesome/free-solid-svg-icons";
import {faBehance,faFacebookF,faTwitter,} from "@fortawesome/free-brands-svg-icons";

const OneTeamMember = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleMembers, setVisibleMembers] = useState([]);

    const updateVisibleMembers = () => {
    const visibleMembersCount = getWindowSize();
    const newVisibleMembers = [];

    for (let i = 0; i < visibleMembersCount; i++) {
      const index = (startIndex + i) % Team.length;
      newVisibleMembers.push(Team[index]);
    }

    setVisibleMembers(newVisibleMembers);
  };

  useEffect(() => {
    updateVisibleMembers();
  }, [startIndex]);

  const next = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % Team.length);
  };

  const prev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? Team.length - 1 : prevIndex - 1
    );
  };


  const getWindowSize = () => {
    if (window.innerWidth >= 1024) {
      return 3; // Large screen: show 3 members
    } else if (window.innerWidth >= 768) {
      return 2; // Medium screen: show 2 members
    } else {
      return 1; // Small screen: show 1 member
    }
  };

  useEffect(() => {
    updateVisibleMembers(); // Initial update

    const handleResize = () => {
      updateVisibleMembers(); // Update on window resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [startIndex]);

  return (
    <>
      <div className="overflow-x-auto no-scrollbar relative">
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:p-6 px-2">
          {visibleMembers.map((member) => (
            <section key={member.id} className="snap-always snap-center group border-r-[1px] border-gray-300 flex items-center justify-center">
              <div className="h-fit sm:w-[400px] w-full md:w-[300px] lg:w-[300px] px-2 flex flex-col space-y-5 ">
                {/* top  */}
                <div className="flex justify-center items-center ">
                  <div className="relative ">
                    <div>
                      <img
                        src={member.image}
                        alt="as"
                        className="rounded-full"
                      />
                    </div>
                    <div className="rounded-full absolute -top-[9px] -left-[9px] p-2 border-gray-300 group-hover:border-orange-600 border-dotted group-hover:animate-[spin_13s_linear_infinite] border-2 w-[195px] h-[195px]"></div>
                  </div>
                </div>
                {/* botm  */}
                <div>
                  <div className="px-5 flex flex-col space-y-5">
                    <div className="py-3 px-6 rounded-xl bg-[#227500] relative">
                      <div className="flex flex-col text-white items-center text-center ">
                        <h1 className="font-Playfair text-2xl font-bold">
                          {member.name}
                        </h1>
                        <p className="font-barlow text-base ">{member.title}</p>
                        <img
                          src={leaf}
                          alt="as"
                          className="top-2 absolute -left-10"
                        />
                        <img
                          src={leaf}
                          alt="as"
                          className="top-2 absolute -right-10 scale-x-[-1]"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-center text-base font-barlow text-gray-500">
                        {" "}
                        {member.description}
                      </p>
                    </div>
                    <div className="flex space-x-6 justify-center">
                      <p className="flex flex-row space-x-6 items-center">
                        <FontAwesomeIcon
                          icon={faFacebookF}
                          style={{ color: "#9696a6" }}
                        />
                        <FontAwesomeIcon
                          icon={faTwitter}
                          style={{ color: "#9696a6" }}
                        />
                        <FontAwesomeIcon
                          icon={faBasketball}
                          style={{ color: "#9696a6" }}
                        />
                        <FontAwesomeIcon
                          icon={faBehance}
                          style={{ color: "#9696a6" }}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default OneTeamMember;
