import Image from 'next/image'
import React from 'react'

const Offer = () => {
  return (
    <div className='bg-color h-screen flex flex-col md:flex-row'>

      {/* TEXT CONTAINER */}
      <div className='flex-1'></div>
      {/* IMAGE CONTAINER */}
      <div className='flex-1 w-full relative'>
        <Image src='/offerProduct.png' alt='' fill className='object-contain'/>
      </div>

    </div>
  )
}

export default Offer