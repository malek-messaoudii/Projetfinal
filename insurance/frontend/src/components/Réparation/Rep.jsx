import React from 'react'
import './Rep.css'
import Navbar1 from '../Navbar1'
import Rep from '.././assets/reparation.jpg'
import Footer from '../Footer/Footer'
import CustomNavbar from '../Navbar1'

function Repd() {
  return (
    <div>
<CustomNavbar userRole='agentboutique' />     
 <div className='div1'>
        <h1 className='title2'> Réparation </h1>
        </div>
        <div>
          <h2 id='titre'> Cet espace est dédié à l'agent de réparation qui prend en charge  <br/> les produits défectueux.</h2>
        </div>
        <div className='imm'>
        <img alt="" src={Rep} width="300" height="300" className="vol" />
        </div>
        <Footer/>
    </div>
  )
}

export default Repd