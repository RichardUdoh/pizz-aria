import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import Image from 'next/image'
import CartIcon from './CartIcon'

const Navbar = () => {

  const user = false
  return (
    <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>
      {/* LEFT LINKS */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href='/'>Homepage</Link>
        <Link href='/'>Menu</Link>
        <Link href='/'>Contact</Link>
      </div>

      {/* LOGO */}
      <div className='font-bold text-xl md:font-bold flex-1 md:text-center lg:text-3xl'>
        <Link href='/'> PIZZ'ARIA </Link>
      </div>

      {/* MOBILE MENU */}
      <div className='md:hidden'>
        <Menu/>
      </div>

      {/* RIGHT LINKS */}
      <div className='hidden md:flex gap-4 items-center justify-end'>
        <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 p-1 rounded-md'>
          <Image src='/phone.png' alt='' width={20} height={20}/>
          <span>123 456 789</span>
        </div>
        {!user ? (
          <Link href='/login'>Login</Link>  
        ) : (
          <Link href='/orders'>Order</Link>
        )}
        <CartIcon/>
      </div>

    </div>
  )
}

export default Navbar