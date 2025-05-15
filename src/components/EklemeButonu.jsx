import React from "react";
import styled from "styled-components";
import { useState } from "react";
export default function EklemeButonu(){
    const Form= styled.div`
    display:flex;
     flex-direction:row;
       align-items:flex-start;
       margin:1rem;
   `
    const Button = styled.button`
    height:4em;
    width:3em;
    border-radius:0.5rem;
    border:none;
    justify-content: center;
    align-items:flex-start;
    background-color: yellow
    `
   const UrunSayisi = styled.p`
   display:flex;
   margin:1rem;
   font-weight:300;
`

    const [urunSayisi, setUrunSayisi] = useState("");
    const [sayac, setSayac] = useState(1);
    const arttır =()=> {
        setSayac(sayac +1);
    }
    const azalt = ()=> {
         setSayac(sayac -1);
    }
    return (
        <Form>
    <Button className="azalt" onClick={azalt}>-</Button>
    <UrunSayisi>{sayac}</UrunSayisi>
    <Button className="azalt" onClick={arttır}>+</Button>
    </Form>
    )
}