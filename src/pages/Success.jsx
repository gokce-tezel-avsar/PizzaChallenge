import React from 'react';
import styled from 'styled-components';

const sayfaStili = {
  backgroundColor:"red",
  witdh:"100%",
  heigth:"100%"

}

const Logo = styled.img`
display:block;
align-item:center;
`

const Paragraf = styled.p`
font-size: 3rem;
color: white;
align-items: center;
justify-content: center;`

const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`


function Success() {
  return (
    
    <div style={sayfaStili}>

       <Logo src="/images/iteration-1-images/logo.svg" alt="logo" />
    
      <Section>
         <Paragraf>TEBRİKLER!</Paragraf>
          <Paragraf>SİPARİŞİNİZ ALINDI!</Paragraf>
      </Section>
    
    </div>
  
  );
}

export default Success;