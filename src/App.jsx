import { useState } from 'react'
import Home from "./pages/Home.jsx"
import Order from "./pages/Order.jsx";
import Success from "./pages/Success.jsx";
import "./App.css"


import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import NavController from './components/NavController.jsx'

function App() {


  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
    <Switch>
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
      <Route path="/home"><Home /></Route>
      <Route path="/order"><Order /> </Route>
      <Route path="/success"><Success /> </Route>
    </Switch>
    <NavController/>
      
    </>
  )
}

export default App
