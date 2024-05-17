import React from 'react'
import './Nvpass2.css'
import Navbar from '.././navbar'
import Footer from '../Footer/Footer';
import CustomNavbar from '../Navbar1';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IconButton } from '@mui/material';

function Nvpass2() {
  return (
    <div>
<CustomNavbar userRole='client' />   
      <div className="circle-container">
      <span className="message">Contactez l'agent d'entreprise d'assurance  </span>
      <IconButton href='/Chat'><div className="circle"> <ChatBubbleIcon/> </div></IconButton>
    </div>      <div className='toogle'>
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
            </div>
          </form>
          <div className='loub'>
          <a href='/Compte'> <button className='boutton1' > Retour </button> </a> </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Nvpass2