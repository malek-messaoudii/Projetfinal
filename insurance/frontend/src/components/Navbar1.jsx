import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './assets/logoser.png';
import './Navbar.css';
import { Avatar, IconButton } from '@mui/material';

function CustomNavbar({ userRole }) {
  const renderNavbar = () => {
    switch (userRole) {
      case 'agentassurance':
        return (
          <div> 
      <Navbar expand="lg" id="navbar">
        <Navbar.Brand href="/Home4">
          <img alt="" src={Logo} width="105" height="100" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="menu">
            <Nav.Link className="menu-link" href="/Home4">Accueil </Nav.Link>
            <Nav.Link className="menu-link" href="/bout">Boutiques</Nav.Link>
            <Nav.Link className="menu-link" href="/Pol1">Police</Nav.Link>
            <Nav.Link className="menu-link" href="/Rep1">Atelier de réparation</Nav.Link>
            <NavDropdown className="menu-link" title="Assurance">
              <NavDropdown.Item href="/Gestion">Gestion des réclamations</NavDropdown.Item>
              <NavDropdown.Item href="/Contrat">Gestion des contrats</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="menu-link" href="/Contact4">Contact</Nav.Link>
          </Nav>
          <div className='header-right'>
              <IconButton href="/Compte3">
              <Avatar/>
              </IconButton>
            </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
        );
      case 'agentreparation':
        return (
          <div> 
          <Navbar expand="lg" id="navbar">
            <Navbar.Brand href="/Home2">
              <img alt="" src={Logo} width="105" height="100" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="menu">
                <Nav.Link className="menu-link" href="/Home2">Accueil </Nav.Link>
                <Nav.Link className="menu-link" href="/bout2">Boutiques</Nav.Link>
                <Nav.Link className="menu-link" href="/Pol2">Police</Nav.Link>
                <Nav.Link className="menu-link" href="/Réparation">Atelier de réparation</Nav.Link>
                <Nav.Link className="menu-link" href="/Assur2">Assurance</Nav.Link>
                <Nav.Link className="menu-link" href="/contact5">Contact</Nav.Link>
              </Nav>
              <div className='header-right'>
                  <IconButton href="/Compte2">
                  <Avatar/>
                  </IconButton>
                </div>
            </Navbar.Collapse>
          </Navbar>
        </div>
        );
      case 'agentpolice':
        return (
          <div> 
      <Navbar expand="lg" id="navbar">
        <Navbar.Brand href="/home">
          <img alt="" src={Logo} width="105" height="100" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="menu">
            <Nav.Link className="menu-link" href="/home5">Accueil </Nav.Link>
            <Nav.Link className="menu-link" href="/bout3">Boutiques</Nav.Link>
            <Nav.Link className="menu-link" href="/Police">Police</Nav.Link>
            <Nav.Link className="menu-link" href="/Rep3">Atelier de réparation</Nav.Link>
            <Nav.Link className="menu-link" href="/Assur3">Assurance</Nav.Link>
            <Nav.Link className="menu-link" href="/contact1">Contact</Nav.Link>
          </Nav>
          <div className='header-right'>
              <IconButton href="/Compte5">
              <Avatar/>
              </IconButton>
            </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
        );
      case 'client':
        return (
          <div> 
      <Navbar expand="lg" id="navbar">
        <Navbar.Brand href="/home">
          <img alt="" src={Logo} width="105" height="100" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="menu">
            <Nav.Link className="menu-link" href="/home">Accueil </Nav.Link>
            <Nav.Link className="menu-link" href="/boutique">Boutiques</Nav.Link>
            <Nav.Link className="menu-link" href="/Policeuse">Police</Nav.Link>
            <Nav.Link className="menu-link" href="/Rep2">Atelier de réparation</Nav.Link>
            <NavDropdown className="menu-link" title="Assurance">
              <NavDropdown.Item href="/Autoréclamation">Auto-réclamation</NavDropdown.Item>
              <NavDropdown.Item href="/Assur1">Gestion des réclamations</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="menu-link" href="/contact">Contact</Nav.Link>
          </Nav>
          <div className='header-right'>
              <IconButton href="/Compte">
              <Avatar/>
              </IconButton>
            </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
        );
      case 'agentboutique':
        return (
          <div> 
      <Navbar expand="lg" id="navbar">
        <Navbar.Brand href="/Home3">
          <img alt="" src={Logo} width="105" height="100" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="menu">
            <Nav.Link className="menu-link" href="/Home3">Accueil </Nav.Link>
            <Nav.Link className="menu-link" href="/Shop">Boutiques</Nav.Link>
            <Nav.Link className="menu-link" href="/Pol">Police</Nav.Link>
            <Nav.Link className="menu-link" href="/Rep">Atelier de réparation</Nav.Link>
            <Nav.Link className="menu-link" href="/Assur">Assurance</Nav.Link>
            <Nav.Link className="menu-link" href="/Contact3">Contact</Nav.Link>
          </Nav>
          <div className='header-right'>
              <IconButton href="/Compte4">
              <Avatar/>
              </IconButton>
            </div>
        </Navbar.Collapse>
      </Navbar>
      </div>
        );
      default:
        return null;
    }
  };

  return (
    <div> 
      
          {renderNavbar()} 
          
    </div>
  );
}

export default CustomNavbar;
