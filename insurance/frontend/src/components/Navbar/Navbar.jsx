import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../assets/logoser.png';
import { Avatar, IconButton } from '@mui/material';

function CustomNavbar1({ userRole }) {
  const isAgentAssurance = userRole === 'agentassurance';
  const isAgentReparation = userRole === 'agentreparation';
  const isAgentBoutique = userRole === 'agentboutique';
  const isAgentPolice = userRole === 'agentpolice';

  return (
    <div>
      <Navbar expand="lg" id="navbar">
        <Navbar.Brand href="/home">
          <img alt="" src={Logo} width="105" height="100" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="menu">
            <Nav.Link className="menu-link" href="/home">Accueil</Nav.Link>
            {isAgentBoutique && <Nav.Link className="menu-link" href="/boutique">Boutiques</Nav.Link>}
            {isAgentPolice && <Nav.Link className="menu-link" href="/Shop">Police</Nav.Link>}
            {isAgentReparation && <Nav.Link className="menu-link" href="/Réparation">Atelier de réparation</Nav.Link>}
            {isAgentAssurance && (
              <NavDropdown className="menu-link" title="Assurance">
                <NavDropdown.Item href="/Autoréclamation">Auto-réclamation</NavDropdown.Item>
                <NavDropdown.Item href="/Réclamation">Gestion des réclamations</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Gestion des contrats</NavDropdown.Item>
              </NavDropdown>
            )}
            {/* Add more Nav.Link components based on other roles */}
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
}

export default CustomNavbar1;
