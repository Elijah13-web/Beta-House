import React from "react";
import image from "../../assets/images/b-11.jpg.png"
import image1 from "../../assets/images/b-11.jpg (1).png"
import image2 from "../../assets/images/b-11.jpg (2).png"
import image3 from "../../assets/images/b-11.jpg (3).png"
import image4 from "../../assets/images/b-11.jpg (4).png"
import image5 from "../../assets/images/b-11.jpg (5).png"
import image6 from "../../assets/images/b-11.jpg (6).png"
import image7 from "../../assets/images/b-11.jpg (7).png"
import image8 from "../../assets/images/b-11.jpg (8).png"
import ngnIcon from "../../assets/icons/Vector (20).png"
import bedIcon from "../../assets/icons/Vector (28).png"
import bathIcon from "../../assets/icons/Vector (29).png"
import location from "../../assets/icons/Vector (17).png"
import filter from  "../../assets/icons/Vector (34).png"
import sort from "../../assets/icons/Vector (35).png"
import arrow from "../../assets/icons/Vector (30).png"
import arrow1 from "../../assets/icons/Vector (31).png"
import arrow2 from "../../assets/icons/Vector (32).png"

const Property = () => {

  return (
    
    <div className="pb-14">
     <div className="md:flex md:items-center">
  <div className="flex space-x-2 md:ml-12 ml-4">
    <img src={filter} alt="location icon" className="h-8 py-2" />
    <p className="text-gray-700 md:text-2xl text-lg">More Filter</p>
    <p className="text-gray-700 md:text-2xl text-lg">Showing 1-10 of 15 results</p>
  </div>
  <div className="flex ml-auto mr-14 space-x-2 items-center">
    <p className="text-gray-700 md:text-2xl text-lg">Sort by:</p>
    <p className="text-gray-700 md:text-2xl text-lg font-semibold">Default</p>
    <img src={sort} alt="location icon" className="hover:cursor-pointer"/>
  </div>
</div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="border border-gray-600 rounded-lg h-auto mx-auto mt-6 flex flex-col">
      {/* Top Section: Image */}
      <div className="relative w-full">
        <img
          src={image}
          alt="Property Image"
          className="w-auto h-auto object-cover rounded-t-lg hover:cursor-pointer hover:border"
        />
      </div>

      {/* Bottom Section: Text */}
      <div className="p-4 flex flex-col">
        {/* Content above the divider */}
        <div className="mb-3">
          <h2 className="text-lg font-bold mb-2 text-start">
            Real House Luxury Villa
          </h2>
          <div className="flex space-x-2">
            <img src={location} alt="location icon" />
            <p className="text-gray-700 text-sm">Victoria Island, Lagos</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex text-[#1F1F1F] space-x-10">
          <div className="text-[#1F1F1F] my-3 gap-[6px] flex">
            <img
              src={bedIcon}
              alt="bed"
              className="w-[24px] h-[24px] mx-1"
            />
            <span>6 Bedrooms</span>
          </div>
          <div className="text-[#1F1F1F] flex my-3">
            <img
              src={bathIcon}
              alt="bath"
              className="w-[24px] h-[24px] mx-1"
            />
            <span>3 Bathrooms</span>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-400  my-4 w-90" />

        {/* Content below the divider */}
        <div className="flex items-center justify-between my-2">
          <div className="flex items-center space-x-2">
            <img src={ngnIcon} alt="naira icon" className="h-5" />
            <h2 className="text-lg font-semibold">3,340,000,000</h2>
          </div>
          <div className="flex space-x-4">
            <img src={arrow} alt="arrow icon" className="h-5 cursor-pointer" />
            <img src={arrow1} alt="arrow icon" className="h-5 cursor-pointer" />
            <img src={arrow2} alt="arrow icon" className="h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>

        <div className="border border-gray-600 rounded-lg h-auto mx-auto mt-6 flex flex-col">
      {/* Top Section: Image */}
      <div className="relative w-full">
        <img
          src={image1}
          alt="Property Image"
          className="w-auto h-auto object-cover rounded-t-lg hover:cursor-pointer hover:border"
        />
      </div>

      {/* Bottom Section: Text */}
      <div className="p-4 flex flex-col">
        {/* Content above the divider */}
        <div className="mb-3">
          <h2 className="text-lg font-bold mb-2 text-start">
          Exquisite Haven Villa
          </h2>
          <div className="flex space-x-2">
            <img src={location} alt="location icon" />
            <p className="text-gray-700 text-sm">Festac, Lagos</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex text-[#1F1F1F] space-x-10">
          <div className="text-[#1F1F1F] my-3 gap-[6px] flex">
            <img
              src={bedIcon}
              alt="bed"
              className="w-[24px] h-[24px] mx-1"
            />
            <span>5 Bedrooms</span>
          </div>
          <div className="text-[#1F1F1F] flex my-3">
            <img
              src={bathIcon}
              alt="bath"
              className="w-[24px] h-[24px] mx-1"
            />
            <span>3 Bathrooms</span>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-400  my-4 w-90" />

        {/* Content below the divider */}
        <div className="flex items-center justify-between my-2">
          <div className="flex items-center space-x-2">
            <img src={ngnIcon} alt="naira icon" className="h-5" />
            <h2 className="text-lg font-semibold">4,000,000/1 Year</h2>
          </div>
          <div className="flex space-x-4">
            <img src={arrow} alt="arrow icon" className="h-5 cursor-pointer" />
            <img src={arrow1} alt="arrow icon" className="h-5 cursor-pointer" />
            <img src={arrow2} alt="arrow icon" className="h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>

        <div className="border border-gray-600 rounded-lg h-auto mx-auto mt-6 flex flex-col">
      {/* Top Section: Image */}
      <div className="relative w-full">
        <img
          src={image2}
          alt="Property Image"
          className="w-auto h-auto object-cover rounded-t-lg hover:cursor-pointer hover:border"
        />
      </div>

      {/* Bottom Section: Text */}
      <div className="p-4 flex flex-col">
        {/* Content above the divider */}
        <div className="mb-3">
          <h2 className="text-lg font-bold mb-2 text-start">
          Luxe Palatial Villa
          </h2>
          <div className="flex space-x-2">
            <img src={location} alt="location icon" />
            <p className="text-gray-700 text-sm">Gbagada, Lagos</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex text-[#1F1F1F] space-x-10">
          <div className="text-[#1F1F1F] my-3 gap-[6px] flex">
            <img
              src={bedIcon}
              alt="bed"
              className="w-[24px] h-[24px] mx-1"
            />
            <span>7 Bedrooms</span>
          </div>
          <div className="text-[#1F1F1F] flex my-3">
            <img
              src={bathIcon}
              alt="bath"
              className="w-[24px] h-[24px] mx-1"
            />
            <span>3 Bathrooms</span>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-400  my-4 w-90" />

        {/* Content below the divider */}
        <div className="flex items-center justify-between my-2">
          <div className="flex items-center space-x-2">
            <img src={ngnIcon} alt="naira icon" className="h-5" />
            <h2 className="text-lg font-semibold">5, 350,000,000</h2>
          </div>
          <div className="flex space-x-4">
            <img src={arrow} alt="arrow icon" className="h-5 cursor-pointer" />
            <img src={arrow1} alt="arrow icon" className="h-5 cursor-pointer" />
            <img src={arrow2} alt="arrow icon" className="h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>

        <div className="border border-gray-600 rounded-lg h-auto mx-auto mt-6 flex flex-col">
      {/* Top Section: Image */}
      <div className="relative w-full">
        <img
          src={image3}
          alt="Property Image"
          className="w-auto h-auto object-cover rounded-t-lg hover:cursor-pointer hover:border"
        />
      </div>

      {/* Bottom Section: Text */}
      <div className="p-4 flex flex-col">
        {/* Content above the divider */}
        <div className="mb-3">
          <h2 className="text-lg font-bold mb-2 text-start">
          Harmony Luxury Villa
          </h2>
          <div className="flex space-x-2">
            <img src={location} alt="location icon" />
            <p className="text-gray-700 text-sm">Mushin, Lagos</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex text-[#1F1F1F] space-x-10">
          <div className="text-[#1F1F1F] my-3 gap-[6px] flex">
            <img
              src={bedIcon}
              alt="bed"
              className="w-[24px] h-[24px] mx-1"
            />
            <span>4 Bedrooms</span>
          </div>
          <div className="text-[#1F1F1F] flex my-3">
            <img
              src={bathIcon}
              alt="bath"
              className="w-[24px] h-[24px] mx-1"
            />
            <span>3 Bathrooms</span>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-400  my-4 w-90" />

        {/* Content below the divider */}
        <div className="flex items-center justify-between my-2">
          <div className="flex items-center space-x-2">
            <img src={ngnIcon} alt="naira icon" className="h-5" />
            <h2 className="text-lg font-semibold">4,000,000/1 Year</h2>
          </div>
          <div className="flex space-x-4">
            <img src={arrow} alt="arrow icon" className="h-5 cursor-pointer" />
            <img src={arrow1} alt="arrow icon" className="h-5 cursor-pointer" />
            <img src={arrow2} alt="arrow icon" className="h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>

        <div className="border border-gray-600 rounded-lg h-auto mx-auto mt-6 flex flex-col">
      {/* Top Section: Image */}
      <div className="relative w-full">
        <img
          src={image4}
          alt="Property Image"
          className="w-auto h-auto object-cover rounded-t-lg hover:cursor-pointer hover:border"
        />
      </div>

      {/* Bottom Section: Text */}
      <div className="p-4 flex flex-col">
        {/* Content above the divider */}
        <div className="mb-3">
          <h2 className="text-lg font-bold mb-2 text-start">
          Real House Luxury Villa
          </h2>
          <div className="flex space-x-2">
            <img src={location} alt="location icon" />
            <p className="text-gray-700 text-sm">Victoria Island, Lagos</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex text-[#1F1F1F] space-x-10">
          <div className="text-[#1F1F1F] my-3 gap-[6px] flex">
            <img
              src={bedIcon}
              alt="bed"
              className="w-[24px] h-[24px] mx-1"
            />
            <span>6 Bedrooms</span>
          </div>
          <div className="text-[#1F1F1F] flex my-3">
            <img
              src={bathIcon}
              alt="bath"
              className="w-[24px] h-[24px] mx-1"
            />
            <span>4 Bathrooms</span>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-400  my-4 w-90" />

        {/* Content below the divider */}
        <div className="flex items-center justify-between my-2">
          <div className="flex items-center space-x-2">
            <img src={ngnIcon} alt="naira icon" className="h-5" />
            <h2 className="text-lg font-semibold">3350,000,000</h2>
          </div>
          <div className="flex space-x-4">
            <img src={arrow} alt="arrow icon" className="h-5 cursor-pointer" />
            <img src={arrow1} alt="arrow icon" className="h-5 cursor-pointer" />
            <img src={arrow2} alt="arrow icon" className="h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>

        <div className="border border-gray-600 rounded-lg h-auto mx-auto mt-6 flex flex-col">
      {/* Top Section: Image */}
      <div className="relative w-full">
        <img
          src={image5}
          alt="Property Image"
          className="w-auto h-auto object-cover rounded-t-lg hover:cursor-pointer hover:border"
        />
      </div>

      {/* Bottom Section: Text */}
      <div className="p-4 flex flex-col">
        {/* Content above the divider */}
        <div className="mb-3">
          <h2 className="text-lg font-bold mb-2 text-start">
          Real House Luxury Villa
          </h2>
          <div className="flex space-x-2">
            <img src={location} alt="location icon" />
            <p className="text-gray-700 text-sm">Lekki-Ajah, Lagos</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex text-[#1F1F1F] space-x-10">
          <div className="text-[#1F1F1F] my-3 gap-[6px] flex">
            <img
              src={bedIcon}
              alt="bed"
              className="w-[24px] h-[24px] mx-1"
            />
            <span>5 Bedrooms</span>
          </div>
          <div className="text-[#1F1F1F] flex my-3">
            <img
              src={bathIcon}
              alt="bath"
              className="w-[24px] h-[24px] mx-1"
            />
            <span>3 Bathrooms</span>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-400  my-4 w-90" />

        {/* Content below the divider */}
        <div className="flex items-center justify-between my-2">
          <div className="flex items-center space-x-2">
            <img src={ngnIcon} alt="naira icon" className="h-5" />
            <h2 className="text-lg font-semibold">4,200,000/1 Year</h2>
          </div>
          <div className="flex space-x-4">
            <img src={arrow} alt="arrow icon" className="h-5 cursor-pointer" />
            <img src={arrow1} alt="arrow icon" className="h-5 cursor-pointer" />
            <img src={arrow2} alt="arrow icon" className="h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>

        <div className="border border-gray-600 rounded-lg h-auto mx-auto mt-6 flex flex-col">
      {/* Top Section: Image */}
      <div className="relative w-full">
        <img
          src={image6}
          alt="Property Image"
          className="w-auto h-auto object-cover rounded-t-lg hover:cursor-pointer hover:border"
        />
      </div>

      {/* Bottom Section: Text */}
      <div className="p-4 flex flex-col">
        {/* Content above the divider */}
        <div className="mb-3">
          <h2 className="text-lg font-bold mb-2 text-start">
          Infinite Bliss Villa
          </h2>
          <div className="flex space-x-2">
            <img src={location} alt="location icon" />
            <p className="text-gray-700 text-sm">Ishiagu, Enugu</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex text-[#1F1F1F] space-x-10">
          <div className="text-[#1F1F1F] my-3 gap-[6px] flex">
            <img
              src={bedIcon}
              alt="bed"
              className="w-[24px] h-[24px] mx-1"
            />
            <span>5 Bedrooms</span>
          </div>
          <div className="text-[#1F1F1F] flex my-3">
            <img
              src={bathIcon}
              alt="bath"
              className="w-[24px] h-[24px] mx-1"
            />
            <span>3 Bathrooms</span>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-400  my-4 w-90" />

        {/* Content below the divider */}
        <div className="flex items-center justify-between my-2">
          <div className="flex items-center space-x-2">
            <img src={ngnIcon} alt="naira icon" className="h-5" />
            <h2 className="text-lg font-semibold">32,350,000,000</h2>
          </div>
          <div className="flex space-x-4">
            <img src={arrow} alt="arrow icon" className="h-5 cursor-pointer" />
            <img src={arrow1} alt="arrow icon" className="h-5 cursor-pointer" />
            <img src={arrow2} alt="arrow icon" className="h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>

        <div className="border border-gray-600 rounded-lg h-auto mx-auto mt-6 flex flex-col">
      {/* Top Section: Image */}
      <div className="relative w-full">
        <img
          src={image7}
          alt="Property Image"
          className="w-auto h-auto object-cover rounded-t-lg hover:cursor-pointer hover:border"
        />
      </div>

      {/* Bottom Section: Text */}
      <div className="p-4 flex flex-col">
        {/* Content above the divider */}
        <div className="mb-3">
          <h2 className="text-lg font-bold mb-2 text-start">
          Real House Luxury Villa
          </h2>
          <div className="flex space-x-2">
            <img src={location} alt="location icon" />
            <p className="text-gray-700 text-sm">Works Layout, Owerri</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex text-[#1F1F1F] space-x-10">
          <div className="text-[#1F1F1F] my-3 gap-[6px] flex">
            <img
              src={bedIcon}
              alt="bed"
              className="w-[24px] h-[24px] mx-1"
            />
            <span>8 Bedrooms</span>
          </div>
          <div className="text-[#1F1F1F] flex my-3">
            <img
              src={bathIcon}
              alt="bath"
              className="w-[24px] h-[24px] mx-1"
            />
            <span>6 Bathrooms</span>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-400  my-4 w-90" />

        {/* Content below the divider */}
        <div className="flex items-center justify-between my-2">
          <div className="flex items-center space-x-2">
            <img src={ngnIcon} alt="naira icon" className="h-5" />
            <h2 className="text-lg font-semibold">3, 350,000/1 Year</h2>
          </div>
          <div className="flex space-x-4">
            <img src={arrow} alt="arrow icon" className="h-5 cursor-pointer" />
            <img src={arrow1} alt="arrow icon" className="h-5 cursor-pointer" />
            <img src={arrow2} alt="arrow icon" className="h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
    
        <div className="border border-gray-600 rounded-lg h-auto mx-auto mt-6 flex flex-col">
      {/* Top Section: Image */}
      <div className="relative w-full">
        <img
          src={image8}
          alt="Property Image"
          className="w-auto h-auto object-cover rounded-t-lg hover:cursor-pointer hover:border"
        />
      </div>

      {/* Bottom Section: Text */}
      <div className="p-4 flex flex-col">
        {/* Content above the divider */}
        <div className="mb-3">
          <h2 className="text-lg font-bold mb-2 text-start">
          Real House Luxury Villa
          </h2>
          <div className="flex space-x-2">
            <img src={location} alt="location icon" />
            <p className="text-gray-700 text-sm">Ikeja, Lagos</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex text-[#1F1F1F] space-x-10">
          <div className="text-[#1F1F1F] my-3 gap-[6px] flex">
            <img
              src={bedIcon}
              alt="bed"
              className="w-[24px] h-[24px] mx-1"
            />
            <span>6 Bedrooms</span>
          </div>
          <div className="text-[#1F1F1F] flex my-3">
            <img
              src={bathIcon}
              alt="bath"
              className="w-[24px] h-[24px] mx-1"
            />
            <span>6 Bathrooms</span>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-400  my-4 w-90" />

        {/* Content below the divider */}
        <div className="flex items-center justify-between my-2">
          <div className="flex items-center space-x-2">
            <img src={ngnIcon} alt="naira icon" className="h-5" />
            <h2 className="text-lg font-semibold">3600,000,000</h2>
          </div>
          <div className="flex space-x-4">
            <img src={arrow} alt="arrow icon" className="h-5 cursor-pointer" />
            <img src={arrow1} alt="arrow icon" className="h-5 cursor-pointer" />
            <img src={arrow2} alt="arrow icon" className="h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    
  );
};

export default Property;