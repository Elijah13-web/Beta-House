import React from 'react'
import Wrapper from '../reasurable/Wrapper'
import pan from "../../assets/images/Link.png"
import duplex from "../../assets/images/Link (1).png"
import house from "../../assets/images/Link (2).png"
import money from "../../assets/icons/Vector (20).png"
import map from "../../assets/icons/Vector (17).png"

const Discovery = () => {
  return (
    <Wrapper>
        <div className='pb-10 pt-10 lg:pt-0 overflow-hidden'>
            <div className='text-black text-center md:text-4xl text-2xl font-outfit font-semibold pb-10'>
                <h1>Discover Our Popular Properties</h1>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 lg:gap-0 justify-center '>

            <div className='text-[#FFFFFF] relative'>
                <div className=''>
                    <img src={pan} alt='' className='md:w-[260px] w-full'/>
                </div>
                <div className='absolute top-60 bg-[#00000062] md:text-sm px-4 md:w-[260px] w-full md:h-[130px] h-[170px] text-xl rounded-lg'>
                <div className='pb-3 pt-1'>
                    <h1 className=''>Semi Detached Duplex</h1>
                </div>
                <div className='flex pb-3'>
                    <img src={money} alt='' className='md:h-5 md:py-1 py-2'/>
                    <h1>1, 430,000,000</h1>
                </div>
                <div className='flex gap-3 pb-3'>
                    <h1>6 Bed</h1> |
                    <h1>3 Bath</h1> |
                    <h1>720 Sq ft</h1>
                </div>
                <div className='flex gap-1'>
                    <img src={map} alt='' className='py-1'/>
                    <h1>Victoria Island, Lagos</h1>
                </div>
                </div>
            </div>

            <div className='text-[#FFFFFF] relative'>
                <div className=''>
                    <img src={duplex} alt='' className='md:w-[260px] w-full'/>
                </div>
                <div className='absolute top-60 bg-[#00000062] md:text-sm px-4 md:w-[260px] w-full md:h-[130px] h-[170px] text-xl rounded-lg'>
                <div className='pb-3 pt-1'>
                    <h1 className=''>Special Duplex</h1>
                </div>
                <div className='flex pb-3'>
                    <img src={money} alt='' className='md:h-5 md:py-1 py-2'/>
                    <h1>670,000,000</h1>
                </div>
                <div className='flex gap-3 pb-3'>
                    <h1>6 Bed</h1> |
                    <h1>3 Bath</h1> |
                    <h1>720 Sq ft</h1>
                </div>
                <div className='flex gap-1'>
                    <img src={map} alt='' className='py-1'/>
                    <h1>Victoria Island, Lagos</h1>
                </div>
                </div>

            </div>

            <div className='text-[#FFFFFF] relative'>
                <div className=''>
                    <img src={house} alt='' className='md:w-[260px] w-full'/>
                </div>
                <div className='absolute top-60 bg-[#00000062] md:text-sm px-4 md:w-[260px] w-full md:h-[130px] h-[170px] text-xl rounded-lg'>
                <div className='pb-3 pt-1'>
                    <h1 className=''>Split-Level House</h1>
                </div>
                <div className='flex pb-3 gap-1'>
                    <img src={money} alt='' className='md:h-5 md:py-1 py-2'/>
                    <h1>340,000,000</h1>
                </div>
                <div className='flex gap-3 pb-3'>
                    <h1>6 Bed</h1> |
                    <h1>3 Bath</h1> |
                    <h1>720 Sq ft</h1>
                </div>
                <div className='flex gap-1'>
                    <img src={map} alt='' className='py-1'/>
                    <h1>Victoria Island, Lagos</h1>
                </div>
                </div>

            </div>

            <div className='text-[#FFFFFF] relative'>
                <div className=''>
                    <img src={pan} alt='' className='md:w-[260px] w-full'/>
                </div>
                <div className='absolute top-60 bg-[#00000062] md:text-sm px-4 md:w-[260px] w-full md:h-[130px] h-[170px] text-xl rounded-lg'>
                <div className='pb-3 pt-1'>
                    <h1 className=''>Twin Duplex</h1>
                </div>
                <div className='flex pb-3'>
                    <img src={money} alt='' className='md:h-5 md:py-1 py-2'/>
                    <h1>290,000,000</h1>
                </div>
                <div className='flex gap-3 pb-3'>
                    <h1>6 Bed</h1> |
                    <h1>3 Bath</h1> |
                    <h1>720 Sq ft</h1>
                </div>
                <div className='flex gap-1'>
                    <img src={map} alt='' className='py-1'/>
                    <h1>Victoria Island, Lagos</h1>
                </div>
                </div>

            </div>

            </div>
        </div>
    </Wrapper>
)
}

export default Discovery