import React from 'react'
import Feature from './Feature'

const SalientFeature = () => {
  return (
    <>
    <div>
        <div className='grid gap-8 grid-cols-1  sm:grid-cols-2  lg:grid-cols-4 px-14'>
            <Feature id={1}/>
            <Feature id={2}/>
            <Feature id={3}/>
            <Feature id={4}/>
        </div>
    </div>

      
    </>
  )
}

export default SalientFeature
