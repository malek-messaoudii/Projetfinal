import React from 'react';
import { useHistory } from 'react-router-dom';
import './BoutiqueSP.css'
import iphone12 from '../assets/iphone12.jpeg';
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
            </div> </div> 
        <div id='b11'>
          <div id='carreau3'>
            <div id='care1'>
              <h4> Iphone </h4>
              <div className='image1'>
                <img alt="" src={iphone12} width="120" height="175" />
              </div>
              <p className='p11'> <b> Passez une assurance pour <br /> votre smartphone </b></p>
              <div className='boutton'> 
                <IconButton onClick={() => handleClick('iphone')}>
                <div className='rectangle'>
                 <div className='icon'>
                   <ArrowForwardIcon />
                </div> 
                </div>
                </IconButton>
            </div>
            </div>
            <div id='care1'>
              <h4> Sumsung </h4>
              <div className='image1'>
                <img alt="" src={sumsung} width="150" height="175" />
              </div>
              <p className='p11'> <b> Passez une assurance pour <br /> votre smartphone </b></p>
              <div className='boutton'> 
                <IconButton onClick={() => handleClick('samsung')}>
                <div className='rectangle'>
                <div className='icon'>
                   <ArrowForwardIcon />
                </div>  
                </div>
                </IconButton>
            </div>
            </div>
            <div id='care1'>
              <h4> Huawai </h4>
              <div className='image1'>
                <img alt="" src={hwawi} width="175" height="175" />
              </div>
              <p className='p11'> <b> Passez une assurance pour <br /> votre smartphone </b></p>
              <div className='boutton'> 
                <IconButton onClick={() => handleClick('huawai')}>
                <div className='rectangle'>
                 <div className='icon'>
                   <ArrowForwardIcon />
                </div> 
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
                <IconButton onClick={() => handleClick('infinix')}>
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