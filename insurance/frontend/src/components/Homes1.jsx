import React from 'react'
import './Homes1.css'
import OIP from './assets/oip.png'
import SCH from './assets/sch.png'
import Vector from './assets/Vector.png'
import Vector1 from './assets/Vector1.png'
import Casque from './assets/casque.png'
import './Services.css'
import assurance from './assets/assurance.jpg'
import rec from './assets/rec.jpg'
import reparation from './assets/reparation.jpg'
import vol from './assets/vol.png'
import assureabout from './assets/hygiene.png'
import serv from './assets/Service 24_7-rafiki (2).png'
import contact from './assets/Contact us-amico (1).png'
import repaired from './assets/Settings-rafiki (1).png'
import option1 from './assets/tabler-icon-truck-loading.png'
import option2 from './assets/admin_panel_settings_FILL0_wght400_GRAD0_opsz24 2.png'
import option3 from './assets/acute_FILL0_wght400_GRAD0_opsz24 1.png'
import  ord from './assets/ordinateur.png'
import  elect from './assets/electromenager.png'
import  ass1 from './assets/image 9.png'
import  ass2 from './assets/image 10.png'
import  ass3 from './assets/image 11.png'
import  ass4 from './assets/image 12.png'

import transporteur from './assets/Coronavirus Delivery Preventions-rafiki.png'
import  sm from './assets/smartphone.png'


function Homes1() {
  return (
    <div>
        <div id='section'>
        <h1 className='title'> Explorez le monde de SER Assurance </h1>
        <h3 className='description'> <b>  Là où la sécurité est notre priorité, l'efficacité notre credo, et la rapidité notre signature,
        pour une protection qui ne laisse aucune place au compromis </b> </h3>
        
        </div>
        <div className='sous'>
            <h6 id='dec'>Nous protégeons tout ce que vous aimez,  avec <br/> dévouement et expertise </h6>
        </div>
        <div className='grand'> 
        <div className='carreau'>
            <div className='carre1'>
                 <img alt="" src={Vector1} width="105" height="100" className="vector1" />
            </div>
            <div className='carre2'>
            <img alt="" src={Vector} width="130" height="250" className="vector" />
            </div>
            <div className='carre3'>
            <img alt="" src={Casque} width="130" height="130" className="casque" />
            </div>
            
        </div>
        <div className='carreau2'> 
        <div className='carre4'>
        <img alt="" src={OIP} width="120" height="120" className="Oip" />
            </div>
        <div className='carre5'>
        <img alt="" src={SCH} width="150" height="150" className="sch" />
        </div>

        </div>
        </div>
</div>
  )
}

export default Homes1