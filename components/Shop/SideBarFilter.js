import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const SideBarFilter = ({onFilter}) => {
  const cate = 'text-black hover:text-lime-500 text-xl  font-semibold  hover:translate-x-5 delay-100 pl-3';

  return (
    <>
    <div className='bg-orange-550 flex flex-col space-y-10 '>
        {/* search  */}
        <div className='flex flex-row '>
            <input  className='border-gray-200 hover:border-lime-500 border-[1px] h-10 w-56 font-Playfair pl-5 py-2' placeholder='Search Product'/>
            <div  className='px-4 pt-1  border-gray-200 hover:border-lime-500 border-[1px] h-10 ' > <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{ color: "#030303" }}/>
            </div>
        </div>
        {/* category  */}
        <div className='flex flex-col space-y-10'>
          <h1 className='text-black text-3xl'>Category</h1>
        <div className='flex flex-col space-y-5  overflow-hidden'>
          <h3 className={cate} onClick={()=>{onFilter("Spices")}}><FontAwesomeIcon className='pt-2 pr-2'  icon={faChevronRight} size="xs" style={{color: "#808999",}} />Spices</h3>
          <h3 className={cate} onClick={()=>{onFilter("Fruits")}}><FontAwesomeIcon className='pt-2 pr-2'  icon={faChevronRight} size="xs" style={{color: "#808999",}} />Fruits</h3>
          <h3 className={cate} onClick={()=>{onFilter("Dry Fruits")}}><FontAwesomeIcon className='pt-2 pr-2'  icon={faChevronRight} size="xs" style={{color: "#808999",}} />Dry Fruits</h3>
          <h3 className={cate} onClick={()=>{onFilter("Vegetables")}}><FontAwesomeIcon className='pt-2 pr-2'  icon={faChevronRight} size="xs" style={{color: "#808999",}} />Vegetables</h3>
        </div>
        </div>
       

    </div>
      
    </>
  )
}

export default SideBarFilter
