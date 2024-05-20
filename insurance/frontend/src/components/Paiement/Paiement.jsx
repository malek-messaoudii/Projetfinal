import React from 'react'
import './Paiement.css'
import Navbar from '.././navbar'
import Footer from '../Footer/Footer'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CustomNavbar from '../Navbar1';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IconButton } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
function Paiement() {
  
  const handleOrderClick = (event) => {
    event.preventDefault();
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Votre Demande D'Assurance est envoyé avec succés",
      showConfirmButton: false,
      timer: 1800
    });

  }
  const location = useLocation();
  const {numeroSerie,model,prixAss,nomagence} = location.state || {};;

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
          <form className="custom-form" >
            <div className="form-group">
              <label htmlFor="contract">Produit :</label>  <br/>
              <input type="text" id="contract" name="contract"  color='red' placeholder='Modele' readOnly value ={model}/>
              <br/>
            </div>
            <span id='marqua'><input type="text" id="contract" name="contract"  color='red' placeholder='Numéro de série'readOnly value ={numeroSerie}/></span>
            <p className='price'>Prix</p>
            <div className="form-group">
              <label htmlFor="prenom">Service :</label>  <br/>
              <input type="text" id="prenom" name="prenom"  placeholder='Assurance' readOnly value={nomagence}/>
            </div>
            <p className='price'>Prix</p>
           <h6 id='total'> Total </h6>
            
          </form>
<br/>
<br/>
        </section>
        </div>
        <div className='bt111' id='bt111'>
       <button className='bn632-hover bn26' id='bout' type="button" onClick={handleOrderClick}>Commander</button>
              </div>
              </div>
    <Footer/>
    </div>
  );
}

export default Paiement
