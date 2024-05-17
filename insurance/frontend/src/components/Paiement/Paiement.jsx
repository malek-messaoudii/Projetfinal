import React from 'react'
import './Paiement.css'
import Navbar from '.././navbar'
import Footer from '../Footer/Footer'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CustomNavbar from '../Navbar1';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IconButton } from '@mui/material';
function Paiement() {
  const handleSubmit = (event) => {
    event.preventDefault();

  }

  return (
    <div>
    <CustomNavbar userRole='client' />   
      <div className="circle-container">
      <span className="message">Contactez l'agent d'entreprise d'assurance  </span>
      <IconButton href='/Chat'><div className="circle"> <ChatBubbleIcon/> </div></IconButton>
    </div>
    <div className="contact-container">
    <div>
      <h2 id='titre'>Paiement</h2>
      <div id='m5'>  <a href='/Demande' id='a5'> <div className='m4' id='a4'><ArrowBackIcon/> </div> </a> </div>  
      </div>
      <div id='sec4'>

        <section className="form-container"id='carer1'>
          <form className="custom-form" onSubmit={handleSubmit} >
            <div className="form-group">
              <label htmlFor="contract">Produit :</label>  <br/>
              <input type="text" id="contract" name="contract" required color='red' placeholder='Marque'/>
              <br/>
            </div>
            <span id='marqua'><input type="text" id="contract" name="contract" required color='red' placeholder='Numéro de série'/></span>
            <p className='price'>Prix</p>
            <div className="form-group">
              <label htmlFor="prenom">Service :</label>  <br/>
              <input type="text" id="prenom" name="prenom" required placeholder='Assurance'/>
            </div>
            <p className='price'>Prix</p>
           <h6 id='total'> Total </h6>
            
          </form>
<br/>
<br/>
        </section>
        </div>
        <div className='bt111' id='bt111'>
        <a href='/Paiement' id='bout'><button className='bn632-hover bn26' id='bout' type="submit">Commander</button></a>
              </div>
              </div>
    <Footer/>
    </div>
  );
}

export default Paiement
