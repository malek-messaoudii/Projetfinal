import React from 'react'
import './Home2.css'
import Minibar from '../minibar';
import Homes1 from '../Homes1';
import Services from '../Services';
import Footer from '../Footer/Footer';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/logoser.png';
import CustomNavbar from '../Navbar1';

function Home2() {
  return (
    <div>
        <Minibar/>
        <CustomNavbar userRole='agentreparation' />   
      <Homes1/>
      <Services/>
      <div id='Footer'>
      <Footer/>
      </div>
    </div>
  )
}

export default Home2