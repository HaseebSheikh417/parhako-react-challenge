import React from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Cart from './Components/Cart';

function App() {
  return (
    <BrowserRouter>
    <div >
      <Header/>
      <Route path='/cart' component={Cart}/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
