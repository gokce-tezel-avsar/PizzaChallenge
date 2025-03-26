import React from 'react';
import styled from 'styled-components';
import "./success.css"

function Success() {
  return (
    <div className="sayfa">
    <div className="logo-container">
      <img className="logo" src="/images/iteration-1-images/logo.svg" alt="logo" />
      </div>     
      <main className="paragraf-container">
         <p>TEBRİKLER!</p>
          <p>SİPARİŞİNİZ ALINDI!</p>
      </main>
    </div>
  );
}

export default Success;