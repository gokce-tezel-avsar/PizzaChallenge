import React from "react";
import "./home.css";
import { useHistory } from "react-router-dom";
 
function Home() {
  let history = useHistory();

    function handleClick () {
      
        history.push("/order")
    }  

  return (
   
    <section className="home"> 
     <img  className="bg-image" src="/images/iteration-1-images/home-banner.png" alt="bg-image" />
        <header className="logo">
           <img src="/images/iteration-1-images/logo.svg" alt="logo" className="logo"/>
         </header>

         <main className="home-paragraf">
           <h1>KOD ACIKTIRIR</h1>
           <h1>PİZZA, DOYURUR</h1>
           <button type="button" onClick={handleClick}  className="aciktim-btn">
                 ACIKTIM</button>
       </main>
    </section>
  );
}

export default Home;
