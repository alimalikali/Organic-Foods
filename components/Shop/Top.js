import React from 'react'



const Top = ({curr}) => {
  return (
    <>
    <div className='shopbg '>
        <div className=' w-full h-[300px] space-y-5  justify-center items-center flex flex-col text-white font-bold'>
            <h1 className='text-5xl'>Shop</h1>
            <div className='flex flex-row text-2xl'>
              <pre>Home</pre><pre>{" >> "}Products</pre><pre>{' >> '}{curr}</pre>
            </div>

        </div>

    </div>
      
    </>
  )
}

export default Top
