import React from 'react'
import countrys from '../api/countryData.json'

function About() {
  return (
    <main className='about'>
      <h1>Hello we are here to give you info!!!!!</h1>
    <div className='cards'>
  
      {countrys.map((country,index)=>
    <div class="card">
      <div class="card__content" key={index}>
        <img src={country.flag} height={'50px'} className='flags' />
        <h3 className='head'>{country.countryName}</h3>
        <p><span className='span'>Capital: </span>{country.capital}</p>
        <br />
        <p><span className='span'>population: </span>{country.population}</p>
        <br />
        <p><span className='span'>interestingFact: </span>{country.interestingFact}</p>
      </div>
      </div>
    )}
    </div>
    </main>
  )
}

export default About
