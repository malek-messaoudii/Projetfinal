import React from 'react'
import './Rep.css'
import Navbar1 from '../Navbar1'
import Rep from '.././assets/reparation.jpg'
import Footer from '../Footer/Footer'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/logoser.png';
import { Avatar, IconButton } from '@mui/material';
import CustomNavbar from '../Navbar1'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
function Rep2() {
  return (
    <div>
       <CustomNavbar userRole='client' />
       <div className="circle-container">
      <span className="message">Contactez l'agent d'entreprise d'assurance  </span>
      <IconButton href='/Chat'><div className="circle"> <ChatBubbleIcon/> </div></IconButton>
    </div>
      <div className='div1'>
        <h1 className='title2'> Réparation </h1>
        </div>
        <div>
          <h2 id='titre'> Cet espace est dédié à l'agent de réparation qui prend en charge  <br/> les produits défectueux.</h2>
        </div>
        <div className='imm'>
        <img alt="" src={Rep} width="300" height="300" className="vol" />
        </div>
        <Footer/>
    </div>
  )
}
export default Rep2