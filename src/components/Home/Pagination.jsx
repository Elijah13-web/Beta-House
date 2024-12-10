import React from 'react'
import frame from "../../assets/icons/Vector (23).png"
import frame6 from "../../assets/icons/Vector (24).png"
import Wrapper from "../reasurable/Wrapper"

const Pagination = () => {
  return (
   <Wrapper>
     <div className='flex gap-3  justify-center pb-14'>
        <img src={frame} alt='frame' className='hover:cursor-pointer hover:border w-3 h-6'/>
        <h1 className='hover:cursor-pointer hover:border hover:bg-green-600 w-8 h-8 text-center'>1</h1>
        <h1 className='hover:cursor-pointer hover:border hover:bg-green-600 w-8 h-8 text-center'>2</h1>
        <h1 className='hover:cursor-pointer hover:border hover:bg-green-600 w-8 h-8 text-center'>3</h1>
        <h1 className='hover:cursor-pointer hover:border hover:bg-green-600 w-8 h-8 text-center'>4</h1>
         <img src={frame6} alt='frame6' className='hover:cursor-pointer hover:border w-3 h-6'/>      
     </div>
   </Wrapper>
  )
}

export default Pagination