import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: yellow;
  color: black;
`;

function SubmitBtn({ handleSubmit}) {


  return (
    <Button type="button" onSubmit={handleSubmit} className="siparis-btn">
      SİPARİŞ VER
    </Button>
  );
}

export default SubmitBtn;

