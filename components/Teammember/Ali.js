import React, { useRef } from 'react'
import Team from "../../data/TeamMemberData";
import leaf from "../../assets/team-leaf.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBasketball,faChevronLeft,faChevronRight,} from "@fortawesome/free-solid-svg-icons";
import {faBehance,faFacebookF,faTwitter,} from "@fortawesome/free-brands-svg-icons";

const Ali = () => {

  const boxRef = useRef(null);


  const prev =()=>{
    if (boxRef.current) {
      let width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft =  boxRef.current.scrollLeft - width;
      console.log(width);
    }
    
  }
  const next =()=>{
    if (boxRef.current) {
      let width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft =  boxRef.current.scrollLeft + width/3;
      console.log(width);
    }
    
  }


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
        <div ref={boxRef}  className="flex flex-nowrap overflow-x-auto space-x-9 md:p-6 px-2">
          {Team.map((member) => (
            <section key={member.id}  className=" snap-always snap-center group border-r-[1px] border-gray-300 flex items-center justify-center">
              <div className="h-fit w-[320px]  md:w-[300px] lg:w-[380px] px-2 flex flex-col space-y-5 ">
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
  )
}

export default Ali











































// import { useState, useEffect } from "react"
// // import { ChevronLeft, ChevronRight } from "react-feather"

// export default function Carousel({
//    slides,
//   autoSlide = false,
//   autoSlideInterval = 3000,
// }) {
//   const [curr, setCurr] = useState(0)

//   const prev = () =>
//     setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
//   const next = () =>
//     setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

//   useEffect(() => {
//     if (!autoSlide) return
//     const slideInterval = setInterval(next, autoSlideInterval)
//     return () => clearInterval(slideInterval)
//   }, [])
//   return (
//     <div className="overflow-hidden relative">
//       <div
//         className="flex transition-transform ease-out duration-500"
//         style={{ transform: `translateX(-${curr * 100}%)` }}
//       >
//         {slides}
//       </div>
//       <div className="absolute inset-0 flex items-center justify-between p-4">
//         <button
//           onClick={prev}
//           className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//         >
//           {/* <ChevronLeft size={40} /> */}
//         </button>
//         <button
//           onClick={next}
//           className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//         >
//         {/* <ChevronRight size={40} /> */}
//         </button>
//       </div>

//       <div className="absolute bottom-4 right-0 left-0">
//         <div className="flex items-center justify-center gap-2">
//           {slides.map((_, i) => (
//             <div
//               className={`
//               transition-all w-3 h-3 bg-white rounded-full
//               ${curr === i ? "p-2" : "bg-opacity-50"}
//             `}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

