import React from 'react'
import AciktimBtn from '../components/AciktimBtn'
import styled from 'styled-components'

const Header = styled.header`
position: relative;
display:flex;
justify-content: center`


const Logo = styled.img`
margin-top: 4rem;
margin-bottom:3rem;
`;
const Hero = styled.div`
  position: absolute;
  background-image: url('/images/iteration-1-images/home-banner.png');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  margin: 0
  padding:0
`;

const Section = styled.section`
position: relative;
display:flex;
flex-direction:column;
align-items:center;
font-family:"Roboto condensed"
`

const Paragraf = styled.p`
color:white;
text-align:center;
margin:0;
font-size:3rem;
`




function Home() {
  return (

    <>
    
       <main className="home">
       
           <Hero src="/images/iteration-1-images/home-banner.png" alt="backgroundimage" />
        <Header>
          <Logo src="/images/iteration-1-images/logo.svg" alt="logo" /></Header>

      <Section > 
        <Paragraf>KOD ACIKTIRIR</Paragraf>
        <Paragraf>PİZZA, DOYURUR</Paragraf>
        <AciktimBtn />
        </Section>
    </main></>
  )
}

export default Home