import React from 'react';
// import img1 from '../../assets/author1-176x176.jpg';
import arrow from '../../assets/right-arrow.btn.png';

import data from '../../data/Salientdata';




const Feature = ({id}) => {
  const dataget = data.find((x)=> x.id === id); 
    
  return (
    <div id={id} key={dataget.id} className="relative w-full h-fit group rounded-2xl">
      <img 
        src={dataget.image}
        alt="Avatar"
        className="opacity-100 block lg:w-[300px] w-full h-[300px] transition ease duration-500 backface-hidden group-hover:opacity-30 rounded-lg"
      />
      <div className=" w-11/12 h-[130px] transition ease duration-500 opacity-0 absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[20px] group-hover:opacity-100">
        <div className="bg-white text-black text-base w-full h-full flex justify-center items-center flex-col px-3">
          <div className='flex space-y-1 flex-col'>
          <div className='flex items-end'>
            <h1 className='text-2xl font-bold font-Playfair'>{dataget.title}</h1>
            <div className='rounded-full w-10 h-10 bg-lime-500 hover:bg-orange-600 flex justify-center items-center  cursor-pointer'>
              <img src={arrow} alt='asa' />
            </div>
          </div>
          <p className='text-orange-600 text-lg'>{dataget.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
