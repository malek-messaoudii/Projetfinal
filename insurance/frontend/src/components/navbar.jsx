import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './assets/logoser.png';
import './Navbar.css'; // Assuming there's some custom styling in Navbar.css
import { Avatar, IconButton } from '@mui/material';


function CustomNavbar() {


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
            <Nav.Link className="menu-link" href="/Shop">Police</Nav.Link>
            <Nav.Link className="menu-link" href="/Réparation">Atelier de réparation</Nav.Link>
            <NavDropdown className="menu-link" title="Assurance">
              <NavDropdown.Item href="/Autoréclamation">Auto-réclamation</NavDropdown.Item>
              <NavDropdown.Item href="/Réclamation">Gestion des réclamations</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Gestion des contrats</NavDropdown.Item>
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
}

export default CustomNavbar;
