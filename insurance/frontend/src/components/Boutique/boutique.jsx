import React from 'react'
import './Boutique.css'
import Boutiques1 from '../Boutiques1'
import Footer from '../Footer/Footer'
import CustomNavbar from '../Navbar1'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IconButton } from '@mui/material';

function Boutique() {
  return (
    <div>
      <CustomNavbar userRole='client' />   
      <div className="circle-container">
      <span className="message">Contactez l'agent d'entreprise d'assurance  </span>
      <IconButton href='/Chat'><div className="circle"> <ChatBubbleIcon/> </div></IconButton>
    </div>   
        <Boutiques1/>
        <Footer/>

    </div>
  )
}

export default Boutique