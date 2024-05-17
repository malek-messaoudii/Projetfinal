import React from 'react'
import Minibar from '../minibar';
import Homes1 from '../Homes1';
import Service from '../Services';
import Footer from '../Footer/Footer';
import Navbar1 from '../Navbar1'
import CustomNavbar from '../Navbar1';

function Home() {
  return (
    <div>
          
      <Minibar/>
      <CustomNavbar userRole='agentboutique' />      
       <Homes1/>
          <br/> <br/> <br/>
     <Service/>
     <div id='Footer'>
      <Footer/> </div>
    </div>
  )
}

export default Home