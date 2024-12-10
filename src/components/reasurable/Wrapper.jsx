import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='w-full lg:max-w-[85%] mx-auto'>
        {children}   
    </div>
  )
}

export default Wrapper