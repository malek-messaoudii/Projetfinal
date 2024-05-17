import React from 'react'
import Minibar from '../minibar';
import Homes1 from '../Homes1';
import Services from '../Services';
import Footer from '../Footer/Footer';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/logoser.png';

function Home2() {
  return (
    <div>
        <Minibar/>
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
      <Homes1/>
      <Services/>
      <div id='Footer'>
      <Footer/>
      </div>
    </div>
  )
}

export default Home2