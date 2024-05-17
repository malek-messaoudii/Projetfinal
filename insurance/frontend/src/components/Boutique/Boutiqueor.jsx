import React from 'react';
import './BoutiqueSP.css'
import iphone12 from '../assets/iphone12.jpeg';
import ordinateur from '../assets/ordinateur.png';
import hp from '../assets/hp.png';
import hwawi from '../assets/hwawi.png';
import infinix from '../assets/infinix.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton } from '@mui/material';
import {motion} from "framer-motion";
import Navbar from '../navbar';
import Footer from '../Footer/Footer';
import SearchIcon from '@mui/icons-material/Search';
import CustomNavbar from '../Navbar1';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Boutiqueor() {
  return (
    
    <div>
      <CustomNavbar userRole='client' />   
      <div className="circle-container">
      <span className="message">Contactez l'agent d'entreprise d'assurance  </span>
      <IconButton href='/Chat'><div className="circle"> <ChatBubbleIcon/> </div></IconButton>
    </div>
      <div className='header'>
        <div className='header__input'>
                 <SearchIcon />
                <input type='text' placeholder='Rechercher votre produit' id='i1'/>
            </div> </div> <br/> <br/>
            <div id='m5'>  <a href='/Boutique' id='a5'> <div className='m4' id='a4'><ArrowBackIcon/> </div> </a> </div>   
 
        <div id='b11'>
          <div id='carreau3'>
            <div id='care1'>
              <h4> Ordinateurs hp </h4> <br/>
              <div className='image1'>
                <img alt="" src={hp} width="205" height="155" />
              </div>
              <p className='p11'> <b> Passez une assurance pour <br /> votre smartphone </b></p>
              <div className='boutton'> 
                <IconButton>
                <div className='rectangle'>
                <a href='/Smart'> <div className='icon'>
                   <ArrowForwardIcon />
                </div> </a> 
                </div>
                </IconButton>
            </div>
            </div>
            <div id='care1'>
              <h4> Ordinateurs MacOS </h4>
              <div className='image1'>
                <img alt="" src={ordinateur} width="225" height="220" />
              </div>
              <p className='p11' id='p11'> <b> Passez une assurance pour <br /> votre smartphone </b></p>
              <div className='boutton'> 
                <IconButton>
                <div className='rectangle'>
                <a href='/Smart'> <div className='icon'>
                   <ArrowForwardIcon />
                </div> </a> 
                </div>
                </IconButton>
            </div>
            </div>
            <div id='care1'>
              <h4> Ordinateurs Dell </h4>
              <div className='image1'>
                <img alt="" src={hwawi} width="175" height="175" />
              </div>
              <p className='p11'> <b> Passez une assurance pour <br /> votre smartphone </b></p>
              <div className='boutton'> 
                <IconButton>
                <div className='rectangle'>
                <a href='/Smart'> <div className='icon'>
                   <ArrowForwardIcon />
                </div> </a> 
                </div>
                </IconButton>
            </div>
            </div>
            <div id='care1'>
              <h4> Infinix </h4>
              <div className='image1'>
                <img alt="" src={infinix} width="175" height="175" />
              </div>
              <p className='p11'> <b> Passez une assurance pour <br /> votre smartphone </b></p>
              <div className='boutton'> 
                <IconButton>
                <div className='rectangle'>
                <a href='/Smart'> <div className='icon'>
                   <ArrowForwardIcon />
                </div> </a> 
                </div>
                </IconButton>
            </div>
            </div>
         </div>
         </div>
         <Footer/>
         </div>
  )
}

export default Boutiqueor
