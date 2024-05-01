import React, { useState } from 'react';
import Logo from '../assets/Atlantis.png'
import './menu.css'

function Menu(props) {

  return (
    <div>
      <nav className={`navbar has-background-white`} role="navigation" aria-label="main navigation">
          <div className='container'>
      <div className=' is-flex is-justify-content-center image is-128x128'><img className='' src={Logo} alt="" /></div>
            <div className={`navbar-menu is-flex is-justify-content-space-evenly`} id="navMenu">

              <a className={`nav-item is-flex pr-6 pr-8 pl-6 is-size-5 has-text-weight-bold my-0`} href='##' onClick={(e) => props.seletorView('Ativos', e)}>
                <p class='navbar-item has-text-link '> Clientes </p>
              </a>
              <a className="nav-item is-flex pr-6 pl-6 is-size-5 has-text-weight-bold my-0 " href='##' onClick={(e) => props.seletorView('Destinatarios', e)}>
                <p class='navbar-item has-text-link'>Acomodações</p>
              </a>
              <a className="nav-item is-flex pr-6 pl-6 is-size-5 has-text-weight-bold my-0 " href='##' onClick={(e) => props.seletorView('Destinatarios', e)}>
                <p class='navbar-item has-text-link'>Hospedagem</p>
              </a>
                    </div>

          </div>
      </nav>
    </div>
  );

}

export default Menu;
