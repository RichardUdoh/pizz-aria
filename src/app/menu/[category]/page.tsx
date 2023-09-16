import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
  return (
    <div className='flex text-red-500'>
      {pizzas.map(item=>(
        <Link className='w-full h-[60vh] border-r-2 border-b-2 border-red-500' href={`/product/${item.id}`} key={item.id}>
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className=''>
              <Image src={item.img} alt='' fill/>
            </div>
          
          )}
          {/* TEXT CONTAINER */}
        </Link>
      ))}

    </div>
  )
}

export default CategoryPage