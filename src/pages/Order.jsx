import React, { useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import SubmitBtn from '../components/SubmitBtn.jsx';
import "./order.css"

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const Price = styled.span`
  font-weight: bold;
  color: black;
`;

function Order() {
  const [boyut, setBoyut] = useState('küçük');
  const [hamur, setHamur] = useState('ince');
  const [toppings, setToppings] = useState([]);
  const [note, setNote] = useState('');

  const handleToppingChange = (e) => {
    const { value, checked } = e.target;
    setToppings((prev) =>
      checked ? [...prev, value] : prev.filter((topping) => topping !== value)
    );
  };
  const handleSubmit = () => {
    const orderDetails = {
      boyut,
      hamur,
      toppings,
      note,
    };
    console.log('Order submitted:', orderDetails);
    alert('Siparişiniz başarıyla oluşturuldu!');
  };

  return (
    <>
    <header>
    <img src="logo" alt="logo" />
        <Nav>
        
          <NavLink
            to="/anasayfa"
            className={({ isActive }) => (isActive ? 'font-bold' : 'font-normal')}
          >
            Anasayfa
          </NavLink>
          <NavLink
            to="/seçenekler"
            className={({ isActive }) => (isActive ? 'font-bold' : 'font-normal')}
          >
            Seçenekler
          </NavLink>
          <NavLink
            to="/sipariş-oluştur"
            className={({ isActive }) => (isActive ? 'font-bold' : 'font-normal')}
          >
            Sipariş Oluştur
          </NavLink>
        </Nav>
        </header>
      
      <section>
        <h1>Absolute Acılı Pizza</h1>
        <Price>85.50₺</Price> <span>(400)</span> <span>4.9</span>
        <p>Frontend Dev olaraka hala position absolute pizza</p>
      </section>

      <form className="boyut-form">
        <p>Boyut Seç</p>
        <label>
          <input
            checked={boyut === 'küçük'}
            name="boyut"
            type="radio"
            value="küçük"
            onChange={(e) => setBoyut(e.target.value)}
          />
          Küçük
        </label>
        <label>
          <input
            checked={boyut === 'orta'}
            name="boyut"
            type="radio"
            value="orta"
            onChange={(e) => setBoyut(e.target.value)}
          />
          Orta
        </label>
        <label>
          <input
            checked={boyut === 'büyük'}
            name="boyut"
            type="radio"
            value="büyük"
            onChange={(e) => setBoyut(e.target.value)}
          />
          Büyük
        </label>
      </form>

      <form className="hamur-form">
        <p>Hamur Kalınlığı</p>
        <select value={hamur} onChange={(e) => setHamur(e.target.value)}>
          <option value="ince">İnce</option>
          <option value="orta">Orta</option>
          <option value="kalin">Kalın</option>
        </select>
      </form>

      <form className="topping-form">
        <p>Ek Malzemeler</p>
        {['Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan', 'Domates', 'Mısır', 'Sucuk', 'Jalepeno', 'Sarımsak', 'Biber', 'Ananas', 'Kabak'].map((topping) => (
          <label key={topping}>
            <input
              type="checkbox"
              value={topping}
              checked={toppings.includes(topping)}
              onChange={handleToppingChange}
            />
            {topping}
          </label>
        ))}
      </form>

      <form className="not-form">
        <p>Sipariş Notu</p>
        <textarea
          id="comment"
          placeholder="Siparişine eklemek istediğin not var mı?"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
        <SubmitBtn onSubmit={handleSubmit} />
      </form>
      <hr />
     
    </>
  );
}

export default Order;