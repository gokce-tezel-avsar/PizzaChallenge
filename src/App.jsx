import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import Home from "./pages/Home.jsx"
import Order from "./pages/Order.jsx";
import Success from "./pages/Success.jsx"

import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import NavController from './components/NavController.jsx'

function App() {


  return (
    <>
    <Switch>
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
      <Route path="/home"><Home /></Route>
      <Route path="/order"><Order/> </Route>
      <Route path="/success"><Success/> </Route>
    </Switch>
    <NavController/>
      
    </>
  )
}

export default App
