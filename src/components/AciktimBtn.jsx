import React from 'react'
import { useHistory} from 'react-router-dom'
import styled from 'styled-components';


const Button = styled.button`
 background-color:#FDC913
 color:white;
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