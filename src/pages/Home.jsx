import React from "react";
import AciktimBtn from "../components/AciktimBtn";
import "./home.css";
import { useEffect,Image } from "react";



function Home() {

  return (
   
    <div className="home-bg"> 
     <img  className="bg-image" src="/images/iteration-1-images/home-banner.png" alt="bg-image" />
    <div className="logo">
      <img src="/images/iteration-1-images/logo.svg" alt="logo" />
      </div>
      <div className="home-paragraf">
        <h1>KOD ACIKTIRIR</h1>
        <h1>PİZZA, DOYURUR</h1>
        <AciktimBtn />
      </div>
    </div>
  );
}

export default Home;
