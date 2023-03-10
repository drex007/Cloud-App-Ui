import React from 'react'
// import {

// }
import bgImage from '../assets/cyber-bg.png'
import { BsCloudArrowUpFill } from 'react-icons/bs'
import { GiDatabase } from 'react-icons/gi'
import { FaServer } from 'react-icons/fa'
import { HiPaperAirplane } from 'react-icons/hi'


const Hero = () => {

    return (
        <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-2xl'> Unique Sequencing & Production</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
                    <p className='text-2xl'>This is our Tech brand</p>
                    <button className='py-3 md:w-[200px]'>Get Started</button>

                </div>
                <div>
                    <img className='w-full' src={bgImage} alt="" />
                </div>
                <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
                mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl 
                '>
                    <p className='text-2xl font-bold'>Data Services</p>
                    <div className='flex justify-between flex-wrap px-4'>
                        <p className='flex px-4 py-2' ><GiDatabase className='h-6 text-indigo-600 mr-2' /> DashBoard Design</p>
                        <p className='flex px-4 py-2'>< FaServer className='h-6 text-indigo-600 mr-2' />Cloud Data</p>
                        <p className='flex px-4 py-2'><HiPaperAirplane className='h-6 text-indigo-600 mr-2' /> API</p>
                        <p className='flex px-4 py-2'><BsCloudArrowUpFill className='h-6 text-indigo-600 mr-2' /> App Security</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero   