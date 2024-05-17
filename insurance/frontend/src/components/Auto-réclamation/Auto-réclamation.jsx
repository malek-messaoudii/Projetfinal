import React from 'react';
import './Auto-réclamation.css';
import Navbar from '../navbar';
import Footer from '../Footer/Footer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton } from '@mui/material';
import CustomNavbar from '../Navbar1';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function Autoréclamation() {
  return (
    <div>
      <CustomNavbar userRole='client' />   
      <div className="circle-container">
      <span className="message">Contactez l'agent d'entreprise d'assurance  </span>
      <IconButton href='/Chat'><div className="circle"> <ChatBubbleIcon/> </div></IconButton>
    </div>
      <div className='div2'>
        <h1 className='title3'>Réclamations</h1>
      </div>
      <h1 className='title4'>Vos contrats</h1>

      <div className='dev'>
      <div className='dev2'>
          <p id='p5'>Ajouter une réclamation</p>
         <a href='/Ajout'> <IconButton>
            <div className='rectangle1'>
              <div className='icon1'>
                <ArrowForwardIcon />
              </div>
            </div>
          </IconButton> </a>
        </div>
        <div className='dev1'>
          <p id='p5'>Consulter une réclamation</p>
         <a href='/Consultation'> <IconButton>
            <div className='rectangle1'>
              <div className='icon1'>
                <ArrowForwardIcon />
              </div>
            </div>
          </IconButton> </a>
        </div>
        
      </div>

      <Footer />
    </div>
  );
}

export default Autoréclamation;
