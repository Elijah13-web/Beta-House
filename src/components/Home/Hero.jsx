import React, { useState } from 'react'
import house from "../../assets/images/Frame 9325.png"
import Wrapper from '../reasurable/Wrapper'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';


// VerticalDivider component
const VerticalDivider = ({ height = '100px', width = '1px', color = 'white' }) => {
    return (
      <div style={{ height, width, backgroundColor: color, margin: '0 1rem' }} />
    );
  };
  
  const Hero = () => {
    // State hooks for dropdowns
    const [isLocationOpen, setLocationOpen] = useState(false);
    const [isPropertyTypeOpen, setPropertyTypeOpen] = useState(false);
    const [isPriceRangeOpen, setPriceRangeOpen] = useState(false);
  
    // State hooks for selected options
    const [selectedLocation, setSelectedLocation] = useState('Abuja');
    const [selectedPropertyType, setSelectedPropertyType] = useState('Bungalow');
    const [selectedPriceRange, setSelectedPriceRange] = useState('10M-30M');
    const [bedroomCount, setBedroomCount] = useState(0);
  
    const toggleDropdown = (setter) => {
      setter(prev => !prev);
    };
  
    const handleSelect = (setter, value) => {
      setter(value);
      setLocationOpen(false);
      setPropertyTypeOpen(false);
      setPriceRangeOpen(false);
    };

  return (
    <div className='relative '>
        <img src={house} alt='' className='w-full md:h-[600px] h-[400px]'/>
        <Wrapper>
            <div>
            <div className='absolute top-56 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
                <h1 className='lg:text-6xl md:text-5xl text-3xl mb-4 font-bold'>Browse Our Properties</h1>
                {/* You can add additional text here */}
                <p className='text-lg md:w-[600px] w-[340px]'>Find your perfect home among our curated properties. Start browsing now!</p>
            </div>

        <div className='shadow  bg-[#FFFFFF33] bottom-52 lg:relative flex-col lg:flex-row p-4 justify-center md:flex'>
        <div className='bg-white text-black flex flex-wrap flex-col lg:flex-row p-1 items-center justify-center lg:w-[1100px] md:rounded-none rounded-lg'>
        
        {/*LOCATION */}
        <div className='flex-1 flex-col md:flex-row relative ml-14 '>
      <div className='flex items-center'>
        <h1 className=' text-lg font-semibold mb-1'>
          LOCATION
        </h1>
        <span 
          onClick={() => toggleDropdown(setLocationOpen)} 
          className='ml-2 cursor-pointer'
        >
          {isLocationOpen ? <FiChevronUp /> : <FiChevronDown />}
        </span>
      </div>
      
      {isLocationOpen && (
        <div className='absolute top-full left-0 bg-[white] text-black rounded-md p-2 z-10'>
          <p 
            onClick={() => handleSelect(setSelectedLocation, 'Benin City')}
            className='cursor-pointer hover:bg-gray-200 p-2'
          >
            Benin City
          </p>
          <p 
            onClick={() => handleSelect(setSelectedLocation, 'Warri')}
            className='cursor-pointer hover:bg-gray-200 p-2'
          >
            Warri
          </p>
          <p 
            onClick={() => handleSelect(setSelectedLocation, 'Aba')}
            className='cursor-pointer hover:bg-gray-200 p-2'
          >
            Aba
          </p>
          <p 
            onClick={() => handleSelect(setSelectedLocation, 'Abuja')}
            className='cursor-pointer hover:bg-gray-200 p-2'
          >
            Abuja
          </p>
          <p 
            onClick={() => handleSelect(setSelectedLocation, 'Lagos')}
            className='cursor-pointer hover:bg-gray-200 p-2'
          >
            Lagos
          </p>
        </div>
      )}
            {selectedLocation && (
        <div className='mt-2 text-lg font-medium'>
          <p> {selectedLocation}</p>
        </div>
      )}
    </div>

    <div className=' bg-[#CAD4DE] w-1 text-center'>
    <VerticalDivider height="50px"/>
    </div>

       {/* Property Type */}
       <div className='flex-1 mx-24 relative text-center'>
         
          <div className='flex items-center'>
          <h1 className='text-lg font-semibold mb-1'>
            PROPERTY TYPE
          </h1>
          
            <span 
              onClick={() => toggleDropdown(setPropertyTypeOpen)}
              className='ml-2 cursor-pointer'
            >
              {isPropertyTypeOpen ? <FiChevronUp /> : <FiChevronDown />}
            </span>
          </div>
          {isPropertyTypeOpen && (
            <div className='absolute top-full left-0 bg-white text-black rounded-md p-2 z-10'>
              <p 
                onClick={() => handleSelect(setSelectedPropertyType, 'Bungalow')}
                className='cursor-pointer hover:bg-gray-200 p-2'
              >
                Bungalow
              </p>
              <p 
                onClick={() => handleSelect(setSelectedPropertyType, 'Duplex')}
                className='cursor-pointer hover:bg-gray-200 p-2'
              >
                Duplex
              </p>
              <p 
                onClick={() => handleSelect(setSelectedPropertyType, 'Penthouse')}
                className='cursor-pointer hover:bg-gray-200 p-2'
              >
                Penthouse
              </p>
              <p 
                onClick={() => handleSelect(setSelectedPropertyType, 'Studio')}
                className='cursor-pointer hover:bg-gray-200 p-2'
              >
                Studio
              </p>
            </div>
          )}
           {selectedPropertyType && (
        <div className='mt-2 text-lg font-medium'>
          <p> {selectedPropertyType}</p>
        </div>
      )}
        </div>

        
    <div className=' bg-[#CAD4DE] w-1 text-center'>
    <VerticalDivider height="50px"/>
    </div>

        {/* Bedrooms */}
        <div className='flex-1 mx-2 '>
          <h1 className='text-lg font-semibold text-center '>BEDROOMS</h1>
          <div className='flex items-center justify-center'>
          <button 
  onClick={() => setBedroomCount(bedroomCount > 0 ? bedroomCount - 1 : 0)}
  className='text-black rounded-full border w-6 h-6 font-bold pb-1 text-xl flex items-center justify-center'
>-
</button>

            <span className=' mx-4'>{bedroomCount}</span>
            <button 
              onClick={() => setBedroomCount(bedroomCount + 1)}
              className='text-black rounded-full border w-6 h-6 font-bold pb-1 text-lg flex items-center justify-center'
            >+ 
            </button>
          </div>
        </div>

            </div>
            <div className=' text-center '>
        <button className='bg-[#3D9970] text-white font-semibold py-8 px-6 md:rounded-none rounded-lg border hover:bg-[#54d79c] w-[300px] '>
          Search Properties
        </button>
        </div>
        </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default Hero
