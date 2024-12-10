import React from 'react'
import Wrapper from "../reasurable/Wrapper"
import street from "../../assets/icons/Vector (17).png"
import phone from "../../assets/icons/Vector (18).png"
import mail from "../../assets/icons/Vector (19).png"
import line from "../../assets/icons/Line 5.png"
import pes from "../../assets/icons/pseudo.png"

const Footer = () => {
  return (
    <div className='bg-[#035A33] text-[#FFFFFF] pb-10 pt-10'>
        <Wrapper>
            <div className='grid md:grid-cols-2 font-outfit md:px-4 lg:px-0'>
           <div className=' justify-center md:justify-start items-center md:items-start mx-auto md:mx-0 md:pb-0 pb-10'>
           <div to="/" className="flex text-primary ">
              <h1 className=' text-xl hover:cursor-pointer  bg-[#52a286] rounded-full w-10 h-10 text-center p-1 font-bold'>BH</h1>
              <h1 className="hover:cursor-pointer ml-2 font-pacifico text-xl">BetaHouse</h1>
            </div>
            <div className='text-sm w-[320px] pt-4'>
                <h1>Discover, rent, and find your ideal home hassle-free with BetaHouse. Take control of your rental journey today!</h1>
            </div>
            <div className='pt-4 text-sm font-outfit'>
                <div className='flex gap-2 pb-2'>
                    <img src={street} alt='' className='py-1'/>
                    <h1>95 Tinubu Estate, Lekki, Lagos</h1>
                </div>
                <div className='flex gap-2'>
                    <img src={phone} alt=''  className='py-2'/>
                    <h1>+234 675 8935 675</h1>
                </div>
                <div className='flex gap-2'>
                    <img src={mail} alt='' className='py-2'/>
                    <h1>support@rentbetahouse.com</h1>
                </div>
            </div>

           </div>

           <div className='grid md:grid-cols-3 grid-cols-2 mx-auto lg:gap-24 md:gap-5'>
           <div>
            <div className='text-lg'>
                <h1>Quick Links</h1>
            </div>
            <div  className='text-sm pt-2'>
                <h1 className='pb-3 hover:cursor-pointer hover:underline'>Home</h1>
                <h1 className='pb-3 hover:cursor-pointer hover:underline'>Properties</h1>
                <h1 className='pb-3 hover:cursor-pointer hover:underline'>About</h1>
                <h1 className='pb-3 hover:cursor-pointer hover:underline'>Contact us</h1>
                <h1 className='pb-3 hover:cursor-pointer hover:underline'>Blog</h1>
            </div>
           </div>

           <div>
            <div  className='text-lg'>
                <h1>More</h1>
            </div>
            <div className='text-sm pt-2'>
                <h1 className='pb-3 hover:cursor-pointer hover:underline'>Agents</h1>
                <h1 className='pb-3 hover:cursor-pointer hover:underline'>Affordable Houses</h1>
                <h1 className='pb-3 hover:cursor-pointer hover:underline'>FAQ’s</h1>
            </div>
           </div>

           <div className='mx-auto pt-5 md:pt-0'>
            <div className='text-lg'>
                <h1>Popular Search</h1>
            </div>
            <div className='text-sm pt-2'>
                <h1 className='pb-3 hover:cursor-pointer hover:underline'>Apartment for sale</h1>
                <h1 className='pb-3 hover:cursor-pointer hover:underline'>Apartment for rent</h1>
                <h1 className='pb-3 hover:cursor-pointer hover:underline'>3 bedroom flat</h1>
                <h1 className='hover:cursor-pointer hover:underline'>Bungalow</h1>
            </div>
           </div>
           </div>
            </div>
        </Wrapper>
        <div className='py-10'>
            <div>
                <img src={line} alt='' className='w-full'/>
            </div>
        </div>
        <Wrapper>
        <div className='md:flex justify-between mx-auto md:px-14 md:text-start text-center text-sm'>
                <h1>Copyright 2023 Betahouse | Designed by Michael.fig | code by Elijah.13</h1>
                <div className='flex gap-1 md:justify-start justify-center pt-2 md:pt-0'>
                    <img src={pes} alt=''/>
                    <h1>Privacy Policy</h1>
                </div>
            </div>

        </Wrapper>
    </div>
  )
}

export default Footer