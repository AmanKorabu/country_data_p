import React from 'react'
import img from '../assets/Images/contry.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";
import About from './About';
function Home() {
  return (
    <main>
      <div className="containerM">
        <div className="herosection">
          <h1>Welcome to Country's</h1>
          <p>Explore the world of countries, their cultures, and much more!</p>
          <button className="btn">Get Started <FaLongArrowAltRight size={10}  /> </button>
        </div>
        <div className="photoimg">
          <img src={img} alt="wolrdCountry IMG" />
        </div>
      </div>
      <About/>
    </main>
  )
}

export default Home
