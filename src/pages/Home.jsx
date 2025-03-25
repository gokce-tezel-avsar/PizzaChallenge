import React from 'react'
import AciktimBtn from '../components/AciktimBtn'
import "./home.css"

function Home() {
  return (
    <><img className="background" src="/images/iteration-1-images/home-banner.png" alt="backgroundimage" />
    
    <main className="home">
    <img className="background" src="/images/iteration-1-images/home-banner.png" alt="backgroundimage" />
      <img src="/images/iteration-1-images/logo.svg" alt="logo" />

      <div className='baslik-section'> 
        <p>KOD ACIKTIRIR</p>
        <p>PİZZA, DOYURUR</p>
        <AciktimBtn />
        </div>
    </main></>
  )
}

export default Home