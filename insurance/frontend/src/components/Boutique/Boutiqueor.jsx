import React from 'react';
import { useHistory } from 'react-router-dom';
import './BoutiqueSP.css'
import sumsung from '../assets/sumsung.png';
import hwawi from '../assets/hwawi.png';
import infinix from '../assets/iphone12.jpeg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton } from '@mui/material';
import {motion} from "framer-motion";
import Navbar from '../navbar';
import Footer from '../Footer/Footer';
import SearchIcon from '@mui/icons-material/Search';
import CustomNavbar from '../Navbar1';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import hp from '../assets/hp.png';
import ordinateur from '../assets/ordinateur.png'
import dell from '../assets/dell.png'
import asus from '../assets/asus.png'


function BoutiqueSP() {
  const history = useHistory();
  const handleClick = (marque) => {
    
    history.push(`/Smart?filter=${marque.toLowerCase()}`);
  };
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
            </div>
            <div id='m5'>
          <a href='/Boutique' id='a5'>
            <div className='m4' id='a4'><ArrowBackIcon /></div>
          </a>
        </div> </div> 
        <div id='b11'>
          <div id='carreau3'>
            <div id='care1'>
              <h4> Ordianteurs HP </h4>
              <div className='image1'>
                <img alt="" src={hp} width="200" height="175" />
              </div>
              <p className='p11'> <b> Passez une assurance pour <br /> votre ordinateur </b></p>
              <div className='boutton'> 
                <IconButton onClick={() => handleClick('hp')}>
                <div className='rectangle'>
                 <div className='icon'>
                   <ArrowForwardIcon />
                </div> 
                </div>
                </IconButton>
            </div>
            </div>
            <div id='care1'>
              <h4> Ordinateur MacOS </h4>
              <div className='image1'>
                <img alt="" src={ordinateur} width="175" height="175" />
              </div>
              <p className='p11'> <b> Passez une assurance pour <br /> votre ordinateur </b></p>
              <div className='boutton'> 
                <IconButton onClick={() => handleClick('macos')}>
                <div className='rectangle'>
                <div className='icon'>
                   <ArrowForwardIcon />
                </div>  
                </div>
                </IconButton>
            </div>
            </div>
            <div id='care1'>
              <h4> Ordinateurs Dell </h4>
              <div className='image1'>
                <img alt="" src={dell} width="175" height="175" />
              </div>
              <p className='p11'> <b> Passez une assurance pour <br /> votre ordinateur </b></p>
              <div className='boutton'> 
                <IconButton onClick={() => handleClick('dell')}>
                <div className='rectangle'>
                 <div className='icon'>
                   <ArrowForwardIcon />
                </div> 
                </div>
                </IconButton>
            </div>
            </div>
            <div id='care1'>
              <h4> Ordinateurs Asus </h4>
              <div className='image1'>
                <img alt="" src={asus} width="175" height="175" />
              </div>
              <p className='p11'> <b> Passez une assurance pour <br /> votre ordinateur </b></p>
              <div className='boutton'> 
                <IconButton onClick={() => handleClick('asus')}>
                <div className='rectangle'>
                 <div className='icon'>
                   <ArrowForwardIcon />
                </div> 
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

export default BoutiqueSP