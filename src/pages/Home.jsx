import React from 'react'
import Hero from "../components/Home/Hero"
import Discovery from '../components/Home/Discovery'
import Property from '../components/Home/Property'
import Pagination from "../components/Home/Pagination"

const Home = () => {
  return (
    <div>
     <Hero/>
     <Property/>
     <Pagination/>
     <Discovery/>
    </div>
  )
}

export default Home