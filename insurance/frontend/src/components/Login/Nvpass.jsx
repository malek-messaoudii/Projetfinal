import React from 'react'
import './Nvpass.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/logoser.png';
import Footer from '../Footer/Footer';


function Nvpass() {
  return (
    <div>
        <div>
        <Navbar expand="lg" id="navbar">
                <Navbar.Brand href="/Home1">
                    <img alt="" src={Logo} width="105" height="100" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id='nav'>
                    <Nav className="menu">
                        <Nav.Link className="menu-link" href="/Home1">Accueil </Nav.Link>
                        <Nav.Link className="menu-link" href="/Home1">  A propos de nous </Nav.Link>
                        <Nav.Link className="menu-link" href="/Home1">Nos services </Nav.Link>
                        <Nav.Link className="menu-link" href="/Contact2">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <a href='/Login' > <button className='boutton1' id='bt' > Se connecter </button> </a>
            </Navbar>
      </div>
      <div className='toogle'>
        <div className='connexion' id='cn11'>
          <h1 className='title2'> Nouveau mot de passe </h1>
          <form >
            <div className='input'>
              <label htmlFor="password"> Nouveau mot de passe : *</label>
              <input type="password" id="password" name="password" required placeholder='Entrer votre nouveau mot de passe' />
            </div>
            <div className='input'>
              <label htmlFor="password"> Confirmer nouveau mot de passe : * </label>
              <input type="password" id="password" name="password" required placeholder='Confirmer votre nouveau mot de passe' />
            </div>
            <div id='sec'>
              <button className='boutton1' type="submit" id='bttn' > Confirmer</button>
              <a href='/Pass'> <button className='boutton1' id='boutton1' > Retour </button> </a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Nvpass