import React from 'react'
import './Opération.css'
import Navbar  from '../navbar'
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import PersonIcon from '@mui/icons-material/Person';
import Footer from '../Footer/Footer'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CustomNavbar from '../Navbar1';

function Réparation() {
  return (
    <div>
 <CustomNavbar userRole='agentreparation' />         <div className='div1'>
        <h1 className='title2'> Atelier de réparation </h1>
        </div>
        <div className='repera'>
        <div id='m5'>  <a href='/Réparation' id='a5'> <div className='m4' id='a4'><ArrowBackIcon/> </div> </a> </div>  
        <div className='grandi'>
            <h3 className='rep'> Commande de réparation </h3>
        </div>
        <div id='rep'>
          <button className='bn632-hover bn26'> Marquer opération terminée </button>
        </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Réparation