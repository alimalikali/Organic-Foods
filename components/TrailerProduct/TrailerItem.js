import React from 'react'
import Items from './Items'

const TrailerItem = () => {
  return (
    <>
    <section>
    <div className="py-36   ">
          <div className="flex space-y-11  flex-col">
            {/* top */}
            <div>
              <div>
                <div className="flex flex-col justify-center items-center space-y-5">
                  <div>
                    <h2 className="text-lime-500 text-2xl">~ Products ~</h2>
                  </div>
                  <div className="text-center md:px-0 px-7 ">
                    <p className="md:text-4xl text-xl  font-bold max-w-[500px]">
                    All of our products are organic & fresh.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* bottom  */}
            <div>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 h-fit p-6">
                <Items/>
               
                
              </div>
              
            </div>
          </div>
        </div>
    </section>
      
    </>
  )
}

export default TrailerItem
