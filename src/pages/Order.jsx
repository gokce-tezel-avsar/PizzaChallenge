import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SubmitBtn from '../components/SubmitBtn.jsx';
import { Link  } from 'react-router-dom';
import axios from "axios";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width:100vw;
  height:auto;
  margin: 0;
  background-color: red;
`;

const Logo = styled.img`
  justify-content: center;
  padding: 2rem;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

`;

const Section = styled.section`
  display: flex;
  width:100wv;
  flex-direction:row;
  align-items:center;
  justify-content:center;

`;

function Order() {
  return (
    <>
    <div>
      <Header>
        <Logo src="/images/iteration-1-images/logo.svg" alt="logo" />
        <StyledNav>
          <StyledLink to="/anasayfa">Anasayfa</StyledLink>
          <StyledLink to="/seçenekler">Seçenekler</StyledLink>
          <StyledLink to="/sipariş-oluştur">Sipariş Oluştur</StyledLink>
        </StyledNav>
      </Header>

      <Section>
        <h1>Absolute Acılı Pizza</h1>
        <p>85.50₺</p> <p>(400)</p> <p>4.9</p>
      </Section>
      <p>Frontend Dev olarak hala position absolute pizza</p>
</div>
      <div>
        <form>
          <p>Boyut Seç</p>
          {['Küçük', 'Orta', 'Büyük'].map((size) => (
            <label key={size}>
              <input name="boyut" type="radio" value={size.toLowerCase()} />
              {size}
            </label>
          ))}
        </form>

        <form className="hamur-form">
          <p>Hamur Kalınlığı</p>
          <select>
            <option value="ince">İnce</option>
            <option value="orta">Orta</option>
            <option value="kalın">Kalın</option>
          </select>
        </form>

        <form className="topping-form">
          <p>Ek Malzemeler</p>
          {[
            'Pepperoni',
            'Sosis',
            'Kanada Jambonu',
            'Tavuk Izgara',
            'Soğan',
            'Domates',
            'Mısır',
            'Sucuk',
            'Jalepeno',
            'Sarımsak',
            'Biber',
            'Ananas',
            'Kabak',
          ].map((topping, index) => (
            <label key={index}>
              <input type="checkbox" value={topping} />
              {topping}
            </label>
          ))}
        </form>
      </div>

      <div>
        <form className="not-form">
          <p>Sipariş Notu</p>
          <textarea id="comment" placeholder="Siparişine eklemek istediğin not var mı?"></textarea>
          <SubmitBtn />
        </form>
        <hr />
      </div>
      </>
  );
}

export default Order;
