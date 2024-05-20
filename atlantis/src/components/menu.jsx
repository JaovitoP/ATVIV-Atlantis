import React, { useState } from 'react';
import Logo from '../assets/Atlantis.png'
import './menu.css'

function Menu(props) {

  return (
    <div>
      <div className=' is-flex is-justify-content-center image is-128x128 is-clickable container'><img className='' src={Logo} alt="" onClick={(e) => props.seletorView('Home', e)} /></div>
      <nav className={`navbar`} role="navigation" aria-label="main navigation">
          <div className='container'>
            <div className={`navbar-menu is-flex is-justify-content-space-evenly`} id="navMenu">
              <a className={`nav-item is-flex pr-6 pr-8 pl-6 is-size-5 has-text-weight-bold my-0`} href='##' onClick={(e) => props.seletorView('Clientes', e)}>
                <p class='navbar-item has-text-link '> Clientes </p>
              </a>
              <a className="nav-item is-flex pr-6 pl-6 is-size-5 has-text-weight-bold my-0 " href='##' onClick={(e) => props.seletorView('Acomodacoes', e)}>
                <p class='navbar-item has-text-link'>Acomodações</p>
              </a>
              <a className="nav-item is-flex pr-6 pl-6 is-size-5 has-text-weight-bold my-0 " href='##' onClick={(e) => props.seletorView('Hospedagem', e)}>
                <p class='navbar-item has-text-link'>Hospedagem</p>
              </a>
      </div>

          </div>
      </nav>
    </div>
  );

}

export default Menu;
