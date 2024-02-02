import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faChevronRight, faComments, faUser } from "@fortawesome/free-solid-svg-icons";
import BlogData from '../../data/BlogData'

const Blog = ({id}) => {

   const  blog = BlogData.find((x)=> x.id === id) ;
  return (
    <div>
      <div className=" h-[400px] flex  items-center flex-col group">
        <div className="relative">
          <img src={blog.image} alt="as" className="w-[400px] h-[300px]" />
          {/* <div className="absolute top-0  hover:animate-[ping_1s_ease-in-out_1] w-[100px] h-[100px] "></div> */}
        </div>

        <div className="flex px-2  max-w-[350px]  ">
          <div className="">
            <div className="bg-white    group-hover:-translate-y-20 -translate-y-14  delay-100  flex justify-center py-8 lg:px-8 md:px-4 px-3">
              <div className="flex flex-col space-y-3">
                <div className="flex text-sm space-x-2 ">
                  <h2 className="flex justify-center items-center "><FontAwesomeIcon className="mr-2" icon={faCalendarDays} size="lg" style={{color: "#76a713",}} />{blog.date} </h2>
                  <h5>{"| |"}</h5>
                  <h2><FontAwesomeIcon className="mr-2" icon={faUser} size="lg" style={{color: "#76a713",}} /> {blog.user}</h2>
                </div>
                <div className="border-gray-300 border-b-[1px] text-2xl font-Playfair font-bold flex flex-col space-y-3">
                  <h1>{blog.title}</h1>
                  <div className="w-[40px] h-1 bg-lime-500"></div>
                </div>
                <div className="text-black font-bold flex flex-row justify-between">
                  <h2>Read More <FontAwesomeIcon icon={faChevronRight} size="sm" style={{color: "#76a713",}} /></h2>
                  <div className="flex  space-x-2 text-gray-600 text-lg font-normal items-center">
                  <FontAwesomeIcon icon={faComments} size="sm" style={{color: "#ff7800",}} />
                  <div>{blog.comments}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
