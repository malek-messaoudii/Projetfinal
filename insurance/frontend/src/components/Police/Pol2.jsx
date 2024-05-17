import React from 'react'
import './Pol.css'
import Vol from '.././assets/vol.png'
import Footer from '../Footer/Footer'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/logoser.png';
import { Avatar, IconButton } from '@mui/material';
import CustomNavbar from '../Navbar1';

function Pol() {
  return (
    <div>
             <CustomNavbar userRole='agentreparation' /> 
      <div className='div1'>
        <h1 className='title2'> Police </h1>
        </div>
        <div>
          <h2 id='titre'> Cet espace concerne la communication avec les autorités policières <br/>  en cas de vol d'un produit. </h2>
        </div>
        <div className='imm'>
        <img alt="" src={Vol} width="300" height="300" className="vol" />
        </div>
        <Footer/>
    </div>

  )
}

export default Pol