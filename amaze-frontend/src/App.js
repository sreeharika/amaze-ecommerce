import React from 'react';
import './App.css';
import './index.css';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';
import CartScreen from './components/CartScreen';

function App(){

  const openMenu = ()=>{
    document.querySelector('.sidebar').classList.add('open');
  }
  const closeMenu = ()=>{
    document.querySelector('.sidebar').classList.remove('open');
  }

  return(
    <BrowserRouter>
    <div className='grid-container'>
      <header className='header'>
        <div className='brand'>
          <button onClick={openMenu}>
            &#9776;
          </button>
          <Link to='/' >AMAZE ECOM</Link>
        </div>
        <div className='header-links'>
          <a href='Signin.html'>Signin</a>
          <a href='Cart.html'>Cart</a>
        </div>
      </header>
      <aside className='sidebar'>
        <h3>Shooping Categories</h3>
        <button className='sidebar-close-btn' onClick={closeMenu}>X</button>
        <ul>
          <li>
            <a href='index.html'>Shirts</a>
          </li>
          <li>
          <a href='index.html'>T-Shirts</a>
          </li>
          <li>
          <a href='index.html'>Pants</a>
          </li>
        </ul>
        </aside>
      <main className='main'>
        <div className='content'>
        <Route path="/" exact={true} component={HomeScreen} />
        <Route path="/product/:id"  component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
       
        </div>
      </main>
      <footer className='footer'>
        All right reserved
      </footer>

    </div>
    </BrowserRouter>
  )
}

export default App;
