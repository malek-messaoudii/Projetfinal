import React from 'react'
import Navbar1 from '../Navbar1'
import Assurance from '.././assets/assurance.jpg'
import Footer from '../Footer/Footer'
import CustomNavbar from '../Navbar1'
import { IconButton } from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function Assur() {
  return (
    <div>
<CustomNavbar userRole='client' />    
<div className="circle-container">
      <span className="message">Contactez l'agent d'entreprise d'assurance  </span>
      <IconButton href='/Chat'><div className="circle"> <ChatBubbleIcon/> </div></IconButton>
    </div> 
 <div className='div1'>
        <h1 className='title2'> Assurance </h1>
        </div>
        <div>
          <h2 id='titre'> Cet espace est réservé à l'agent d'assurance, où il gère les demandes <br/> de réparation et les réclamations. </h2>
        </div>
        <div className='imm'>
        <img alt="" src={Assurance} width="300" height="300" className="vol" />
        </div>
        <Footer/>
    </div>
  )
}

export default Assur