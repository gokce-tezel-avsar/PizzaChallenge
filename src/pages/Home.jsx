import React from "react";
import AciktimBtn from "../components/AciktimBtn";
import "./home.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.body.classList.add("home-bg");
    
    return () => {
      document.body.classList.remove("home-bg"); 
    };
  }, []);
  return (
    <div className="home">
      <img className="home-logo-img" src="/images/iteration-1-images/logo.svg" alt="logo" />
      <div className="home-paragraf">
        <h1>KOD ACIKTIRIR</h1>
        <h1>PİZZA, DOYURUR</h1>
        <AciktimBtn />
      </div>
    </div>
  );
}

export default Home;
