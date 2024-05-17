import React from 'react'
import './Pol.css'
import CustomNavbar from '../Navbar1'
import Vol from '.././assets/vol.png'
import Footer from '../Footer/Footer'

function Pol() {
  return (
    <div>
<CustomNavbar userRole='agentboutique' />
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