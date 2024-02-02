import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const NavPort = () => {
  return (
    <>
    <ul className="group flex flex-col relative h-full  items-center hover:border-b-2 border-green-600 justify-center  ">
          <li href="/"  className="flex flex-nowrap ">Portfolio <FontAwesomeIcon className='pt-2 pl-2'  icon={faChevronDown} size="xs" style={{color: "#808999",}} /></li>
          <ul className="absolute z-50 right-0 top-[20px] hidden group-hover:flex bg-white rounded-3xl  text-green-800 py-6 mt-[100px] space-y-2">
            <li href="/" className="block px-4 py-2">Service 1</li>
            <li href="/" className="block px-4 py-2">Service 2</li>
            <li href="/" className="block px-4 py-2">Service 2</li>
            <li href="/" className="block px-4 py-2">Service 2</li>
            <li href="/" className="block px-4 py-2">Service 2</li>
            <li href="/" className="block px-4 py-2">Service 2</li>
            <li href="/" className="block px-4 py-2">Service 2</li>

          </ul>
        </ul>
      
    </>
  )
}

export default NavPort
