import React, {  useState, useEffect } from 'react';
import SubmitBtn from '../components/SubmitBtn.jsx';
import { Link } from 'react-router-dom';
import axios from "axios";
import "./order.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min.js';
import Toppings from '../components/Toppings.jsx';
import styled from 'styled-components';
import EklemeButonu from '../components/EklemeButonu.jsx';

function Order() {
  let history = useHistory();
  const [siparis, setSiparis] = useState([])


  useEffect(()=> {
    setSiparis(
      {boyut:"",
        hamurKalinligi:"",
        ekMalzemeler:[],
        siparisNotu:"",
      }
    )
  })

  function handleChange(e){
    const {name, value} = e.target;
    setSiparis({...siparis, [name] : value});
    
  }

    function handleSubmit(event){ 
      e.preventDefault();
     

    axios.post("https://reqres.in/api/pizza", siparis)
    .then((response)=> {
      console.log("Sipariş:", response.event);
      history.push("/success");
  
    })
    .catch((error)=> {console.log(error)})
    }
    
  return (
    <>
      <header className='order-header'>
      <img className='logo' src="/images/iteration-1-images/logo.svg" alt="logo" />
      <nav className='links'>
         <a className="link" href="/anasayfa">Anasayfa</a>
         <a className="link"  href="/sipariş-oluştur">Sipariş Oluştur</a>
       </nav>
      </header>

    <div className='order-container'>
      <div className='ortala'>
      <div clasName="pizza-description">
      <h2>Position Absolute Acılı Pizza</h2>
       <main className='section-pizza'>
       <p>85.50₺</p> <p>(400)</p> <p>4.9</p>
       </main>
       <p>Frontend Dev olarak hala position absolute pizza</p>
       
        </div>
     

   <div className="zorunlu-alanlar">
   
        <form className="boyut-form">
          <h3>Boyut Seç*</h3>
          {['Küçük', 'Orta', 'Büyük'].map((size) => (
            <label key={size}>
              <input name="boyut" type="radio" value={size.toLowerCase()} />
              {size}
            </label>
          ))}
        </form>

        <form className="hamur-form">
          <h3>Hamur Kalınlığı*</h3>
          <select>
          <option value="hamurKalinligi" >Hamur Kalınlığı</option>
            <option value="ince">İnce</option>
            <option value="orta">Orta</option>
            <option value="kalın">Kalın</option>
          </select>
        </form>
        </div>

       
         <Toppings siparis={siparis}/>
      
        <card className="not-card">
          <h3>Sipariş Notu</h3>
          <textarea id="comment" placeholder="Siparişine eklemek istediğin not var mı?"></textarea>
        </card>
        <hr />
        <footer className="footer">
           <EklemeButonu />
          <card className="button-card">
        
          <h3>Sipariş Toplamı</h3>
          <h3>Seçimler</h3>
          <h3>Toplam</h3>
          <SubmitBtn />
        </card>
        </footer>
        </div>
        </div>
      </>
  );
}

export default Order;


/*import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function PizzaForm() {
  const history = useHistory();

  const [siparis, setSiparis] = useState({
    boyut: "",
    hamurKalinligi: "",
    ekMalzemeler: [],
    siparisNotu: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSiparis({ ...siparis, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const yeniEkMalzemeler = checked
      ? [...siparis.ekMalzemeler, value]
      : siparis.ekMalzemeler.filter((item) => item !== value);

    setSiparis({ ...siparis, ekMalzemeler: yeniEkMalzemeler });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sipariş:", siparis);
    history.push("/tesekkurler");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Boyut:
        <select name="boyut" value={siparis.boyut} onChange={handleChange}>
          <option value="">Seçiniz</option>
          <option value="Küçük">Küçük</option>
          <option value="Orta">Orta</option>
          <option value="Büyük">Büyük</option>
        </select>
      </label>

      <label>
        Hamur Kalınlığı:
        <select name="hamurKalinligi" value={siparis.hamurKalinligi} onChange={handleChange}>
          <option value="">Seçiniz</option>
          <option value="İnce">İnce</option>
          <option value="Normal">Normal</option>
          <option value="Kalın">Kalın</option>
        </select>
      </label>

      <fieldset>
        <legend>Ek Malzemeler:</legend>
        {["Sucuk", "Mantar", "Zeytin", "Mozzarella"].map((malzeme) => (
          <label key={malzeme}>
            <input
              type="checkbox"
              value={malzeme}
              checked={siparis.ekMalzemeler.includes(malzeme)}
              onChange={handleCheckboxChange}
            />
            {malzeme}
          </label>
        ))}
      </fieldset>

      <label>
        Sipariş Notu:
        <textarea
          name="siparisNotu"
          value={siparis.siparisNotu}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Siparişi Gönder</button>
    </form>
  );
}

export default PizzaForm;
*/
