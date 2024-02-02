import React from 'react'
import { CartState } from '../../Context/Context';

const Header = () => {

  const {state : {cart},} = CartState();
  return (
    <>
    <div className='bg-[hsl(80,80%,36%)]  justify-between px-9 md:flex hidden'>
        <div className='py-2'>
        <p className='text-white text-base'>Welcome to our Organic store Organico!</p>
        </div>
        

        <div className='bg-[hsl(80,79%,28%)] px-3 text-white w-[180px] flex items-center'>
            <p>{cart.length}</p>
        </div>

    </div>
      
    </>
  )
}

export default Header;
