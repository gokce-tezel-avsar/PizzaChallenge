import React, { useEffect, useState } from "react"
import styled from "styled-components"
export default function Toppings(props) {
const {setSiparis, siparis} = props;
const [isChecked, setIsChecked] = useState(false);

    const Div = styled.div`
  display:flex;
    flex-direction:column;`

    const Baslik = styled.h3`  
    `

    const Form = styled.form`
    display:flex;
     flex-direction:column;
      grid-template-columns: repeat(5, 1fr)
    `
    const Label= styled.label`
    display:flex;
    flex-wrap:wrap;
   
    align-items:center;
    `
    const handleCheckboxChange = (e) => {
      const { value, checked } = e.target;
      const yeniEkMalzemeler = checked
        ? [...siparis.ekMalzemeler, value]
        : siparis.ekMalzemeler.filter((item) => item !== value);
  
      setIsChecked({ ...siparis, ekMalzemeler: yeniEkMalzemeler });
      
    };

  

    return (
        <Div>
        <Baslik>Ek Malzemeler</Baslik>
        <p>En fazla 10 malzeme seçebilirsiniz</p>
        <Form className="malzemeler">
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
          <Label key={index}>
            <input type="checkbox" value={topping} checked={topping}/>
            {topping}
          </Label>
        ))}
        </Form>
        </Div>
)
}