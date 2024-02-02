import React, { useState } from 'react'
import Top from './Top';
import Mart from './Mart';
import SideBarFilter from './SideBarFilter';
import { CartState } from "../../Context/Context";


const Shop = () => {
  const {state: { products },} = CartState();
  const [filterProducts, setFilterProducts] = useState(products);
  const handleFilter = (filter) => {
    const newlist = products.filter((x)=> x.category === filter)
    setFilterProducts(newlist);
  };

  return (
    <>
    <Top/>
    <div>
        <div className=' grid grid-cols-8 pt-14'>
           <div className='col-span-6'><Mart           filterProducts={filterProducts}/></div>
           <div className='col-span-2'><SideBarFilter  onFilter={handleFilter}        /></div>
        </div>
    </div>
    </>
  )
}

export default Shop
