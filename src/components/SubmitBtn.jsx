import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Button = styled.button`
  background-color: yellow;
  color: black;
  border: 0.1rem solid yellow;
  border-radius:0.3rem;
  align-items:fit-content;
  padding:1rem;
  

`;

function SubmitBtn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries);
    axios.post("http://restfulapi.dev/api", data).then((response)=> {
      console.log(response.data);
      
    })

  }



  return (
    <Button type="button" onSubmit={handleSubmit} className="siparis-btn">
      SİPARİŞ VER
    </Button>
  );
}

export default SubmitBtn;

