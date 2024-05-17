import React, { useState } from 'react';
import './Policeuse.css';
import CustomNavbar from '../Navbar1';
import Vol from '../assets/vol.png';
import Footer from '../Footer/Footer';
import { IconButton } from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import axios from 'axios';

function Pol() {


  return (
    <div>
      <CustomNavbar userRole='client' />
      <div className="circle-container">
        <span className="message">Contactez l'agent d'entreprise d'assurance  </span>
        <IconButton href='/Chat'><div className="circle"> <ChatBubbleIcon/> </div></IconButton>
      </div>
      <div className='div1'>
        <h1 className='title2'> Police </h1>
      </div>
      <div>
        <h2 id='titre'>Ici vous allez connaitre les pièces justificatives requises <br/> en cas de vol de l'un de vos produits.  </h2>
      </div>
      <div className='imm' id='mmm'>
        <div className='lista'>
          <h4 className='oo'>Pièces justificatives requises :</h4>
          <ul>
            <li>Une demande d'assurance dûment remplie, avec la case "Vol" cochée.</li>
            <li>Votre carte d'identité nationale (CIN).</li>
            <li>Un certificat de perte émis par le commissariat de police.</li>
          </ul>
        </div>
        <div className='imageu'><img alt="" src={Vol} width="200" height="200" className="vol" /></div>
      </div>
      <Footer/>
    </div>
  );
}

export default Pol;
