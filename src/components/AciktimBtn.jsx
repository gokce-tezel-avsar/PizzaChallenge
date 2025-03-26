import React from 'react'
import { useHistory} from 'react-router-dom'
import styled from 'styled-components';


 const Button = styled.button`
  background:#FDC913;
  padding:1rem 3rem;
  border-radius:2rem;
  border:#FDC913;
  margin:1rem
  `


function AciktimBtn() {
  let history = useHistory();

    function handleClick () {
      
        history.push("/order")
    }  
  return (
    <Button type="button" onClick={handleClick}  className="aciktim-btn">
    ACIKTIM</Button>)
}
export default AciktimBtn