import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CartState } from '../../Context/Context';
import Top from './Top';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
// import { NavLink } from "react-router-dom";

const SelectedProduct = () => {
  const [clicked, setClicked] = useState(null);
  const { id } = useParams();
  
  const {
    state: { products , cart },
    dispatch,
  } = CartState();
  
  console.log(cart);

  useEffect(() => {
   

    const clickedProduct = products.find((x) =>String(x.id)=== id);
    

    if (clickedProduct) {
      setClicked(clickedProduct);
    }
  }, [id, products]); // Add dependencies to the useEffect hook

  if (!clicked) {
    return <div>Product not found</div>;
  }


  return (
    <>
      
      <section>
      <Top curr={clicked.title}/>
      <div className='py-[100px]'> 
        <div className='grid grid-cols-2'>
          {/* top  */}
          <div>
          <div>
              <img
                src={clicked.img}
                alt="pic"
                className="w-auto h-400px"
              />
            </div>
            
          </div>

          {/* right  */}
          <div className=' mx-5 flex flex-col space-y-8'>
            <div className='flex flex-col space-y-4'>
             <div> <h1 className='font-Playfair text-5xl  font-bold'>{clicked.title}</h1></div>
             <div> <h1>{clicked.rating}rating</h1></div>
             <div> <h3 className='font-Playfair text-3xl  font-bold'>${clicked.price}</h3></div>
             <div> <p className='text-base text-gray-600 font-barlow w-[550px] text-justify'>{clicked.description}Sumptuous, filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing to get you out of bed. The goodness of rolled wholegrain oats are combined with a variety of tangy organic berries, and baked into crispy clusters that are as nutritious.</p></div>
            </div>

            {/* functions  */}
            <div className='space-y-5 flex flex-col'>
              <div className='font-Playfair text-2xl font-bold'>
                <h1>Weight</h1>
              </div>
              <div className='flex flex-row space-x-1'>
                <div className='border-gray-400 rounded-sm border-[1px] px-1'>0.5 KG</div>
                <div className='border-gray-400 rounded-sm border-[1px] px-1'>1 KG</div>
                <div className='border-gray-400 rounded-sm border-[1px] px-1'>2 KG</div>
                <div className='border-gray-400 rounded-sm border-[1px] px-1'>5 KG</div>
              </div>
            </div>

           {/* func cart  */}
            <div className='flex-row flex space-x-10'>
              <div className='flex items-center'>
                <div className='flex flex-row space-x-5'>
                  <button className='px-4 py-2 rounded-full bg-gray-300 hover:bg-lime-600 hover:text-white transition-all delay-200'>-{''}</button><div className=' flex items-center'>{5}</div><button className='px-4 py-2 rounded-full bg-gray-300 hover:bg-lime-600 hover:text-white'>{''}+</button>
                </div>
              </div>
              {cart.some((p)=> p.id === clicked.id) ? (
                 <button className='bg-red-600 text-white font-barlow text-lg font-bold rounded-lg p-3' onClick={()=>{
                  dispatch({
                    type: "REMOVEFROMCART",
                    payload: clicked
                  })
                }}>Remove from cart</button>)
                  
                  :(
                <button  className='bg-lime-600 text-white font-barlow text-lg font-bold rounded-lg p-3' onClick={()=>{
                  dispatch({
                    type: "ADDTOCART",
                    payload: clicked
                  })
                  }}>Add to cart</button>
              )}
            </div>
          </div>
        </div>
      </div>
      </section>
      
    </>
  );
};

export default SelectedProduct;
