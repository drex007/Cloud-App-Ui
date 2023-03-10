import React from 'react'
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='w-full mt-24 bg-slate-900 px-9 py-2 text-gray-300'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8' >
                <div>
                    <h6 className='text-xl font-semibold'>Solutions</h6>
                    <ul>
                        <li>Marketing</li>
                        <li>Analytics</li>
                        <li>Commerce</li>
                        <li>Data</li>
                        <li>Cloud</li>
                    </ul>
                </div>
                <div>
                    <h6 className='text-xl font-semibold'>Legal</h6>
                    <ul>
                        <li>Marketing</li>
                        <li>Analytics</li>
                        <li>Commerce</li>
                        <li>Data</li>
                        <li>Cloud</li>
                    </ul>
                </div>
                <div>
                    <h6 className='text-xl font-semibold'>Support</h6>
                    <ul>
                        <li>Marketing</li>
                        <li>Analytics</li>
                        <li>Commerce</li>
                        <li>Data</li>
                        <li>Cloud</li>
                    </ul>
                </div>
                <div>
                    <h6 className='text-xl font-semibold'>Technologies</h6>
                    <ul>
                        <li>Marketing</li>
                        <li>Analytics</li>
                        <li>Commerce</li>
                        <li>Data</li>
                        <li>Cloud</li>
                    </ul>
                </div>
                <div className='col-span-2 pt-8 md:pt-2'>
                    <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                    <p className='py-4 '>The latest news, articles and resources, sent to your inbox weekly</p>
                    <form action="" className='flex flex-col sm:flex-row'>
                        <input type="email" className='w-full p-2 mr-4 rounded-sm mb-2' />
                        <button className='px-8 mb-2 '> Subscribe</button>
                    </form>
                </div>


            </div>
            <div className=' mt-4 flex flex-col sm:flex-row justify-between'>
                <p>2022 Workflow, LLC all rights reserverd</p>
                <div className='flex space-x-4'>
                    <FaFacebook />
                    <FaGithub />
                    <FaInstagram />
                    <FaTwitter />
                    <FaLinkedin />
                </div>
            </div>
        </div>
    )
}

export default Footer