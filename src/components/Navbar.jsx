import React, { useState } from 'react'
import { FaBeer } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClose = () => setNav(!nav)
    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-sm'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
                    {/* Hidden, but on medium screen, you flex */}

                    <ul className='hidden md:flex'>
                        <li> <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >Home</Link></li>
                        <li> <Link activeClass="active" to="about" spy={true} smooth={true} offset={-120} duration={500} >About</Link></li>
                        <li> <Link activeClass="active" to="support" spy={true} smooth={true} offset={-100} duration={500} >Support</Link></li>
                        <li> <Link activeClass="active" to="all-in-one" spy={true} smooth={true} offset={-80} duration={500} >Platform</Link></li>
                        <li> <Link activeClass="active" to="pricing" spy={true} smooth={true} offset={-70} duration={500} >Pricing</Link></li>

                    </ul>
                </div>
                {/* When the screen is above medium(md) you flex, else hide(hidden) */}
                <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-transparent text-black mr-4'> Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>

                </div>
                {/* Show menu button when is less than medium (md)screen  */}
                <div className='md:hidden mr-4'>

                    {!nav ? <AiOutlineMenu className='w-5' onClick={handleClose} /> : <ImCancelCircle size={20} onClick={handleClose} />}

                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>

                <li> <Link  onClick={handleClose} className='border-b-2 border-zinc-300 w-full' activeClass="active" to="home" spy={true} smooth={true} duration={500} >Home</Link></li>
                <li> <Link  onClick={handleClose} className='border-b-2 border-zinc-300 w-full' activeClass="active" to="about" spy={true} smooth={true} offset={-120} duration={500} >About</Link></li>
                <li> <Link  onClick={handleClose} className='border-b-2 border-zinc-300 w-full' activeClass="active" to="support" spy={true} smooth={true} offset={-100} duration={500} >Support</Link></li>
                <li> <Link  onClick={handleClose} className='border-b-2 border-zinc-300 w-full' activeClass="active" to="all-in-one" spy={true} smooth={true} offset={-80} duration={500} >Platform</Link></li>
                <li> <Link  onClick={handleClose} className='border-b-2 border-zinc-300 w-full' activeClass="active" to="pricing" spy={true} smooth={true} offset={-70} duration={500} >Pricing</Link></li>
                <div className='flex flex-col'>
                    <button className='border bg-transparent text-indigo-600 px-8 mb-4 py-3'> Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
            </ul>
        </div>

    )
}

export default Navbar
