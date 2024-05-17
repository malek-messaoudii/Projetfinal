import React from 'react'
import Minibar from '../minibar';
import Homes1 from '../Homes1';
import Services from '../Services';
import Footer from '../Footer/Footer';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/logoser.png';
import CustomNavbar from '../Navbar1';

function Home5() {
  return (
    <div>
        <Minibar/>
        <CustomNavbar userRole='agentpolice' />   
      <Homes1/>
      <Services/>
      <div id='Footer'>
      <Footer/>
      </div>
    </div>
  )
}

export default Home5