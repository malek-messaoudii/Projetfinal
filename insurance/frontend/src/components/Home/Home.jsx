import React from 'react'
import Minibar from '../minibar';
import Homes1 from '../Homes1';
import Service from '../Services';
import Footer from '../Footer/Footer';
import './Home.css';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IconButton } from '@mui/material';
import CustomNavbar from '../Navbar1';
import OIP from '../assets/oip.png'
import SCH from '../assets/sch.png'
import Vector from '../assets/Vector.png'
import Vector1 from '../assets/Vector1.png'
import Casque from '../assets/casque.png'
import '../Services.css'
import assurance from '../assets/assurance.jpg'
import rec from '../assets/rec.jpg'
import reparation from '../assets/reparation.jpg'
import vol from '../assets/vol.png'
import assureabout from '../assets/hygiene.png'
import serv from '../assets/Service 24_7-rafiki (2).png'
import contact from '../assets/Contact us-amico (1).png'
import repaired from '../assets/Settings-rafiki (1).png'
import option1 from '../assets/tabler-icon-truck-loading.png'
import option2 from '../assets/admin_panel_settings_FILL0_wght400_GRAD0_opsz24 2.png'
import option3 from '../assets/acute_FILL0_wght400_GRAD0_opsz24 1.png'
import  ord from '../assets/ordinateur.png'
import  elect from '../assets/electromenager.png'
import  ass1 from '../assets/image 9.png'
import  ass2 from '../assets/image 10.png'
import  ass3 from '../assets/image 11.png'
import  ass4 from '../assets/image 12.png'

import transporteur from '../assets/Coronavirus Delivery Preventions-rafiki.png'
import  sm from '../assets/smartphone.png'
function Home() {
  return (
    <div>
          
      <Minibar/>
      <div className='custom'> <CustomNavbar userRole='client' />       </div>
      
      <div className="circle-container">
      <span className="message">Contactez l'agent d'entreprise d'assurance  </span>
      <IconButton href='/Chat'><div className="circle"> <ChatBubbleIcon/> </div></IconButton>
    </div>
     <div id='Header'>
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
        <br/> <br/> <br/>
        <div>
        <div>
    <br/>
    <h2 id="titreservice">NOS SERVICES</h2>
    <div class="combined-shape cm">

        <div id="info">
            <h3 id='desc1'>Assurance</h3>
            <p id='descn'> Procurez-vous des assurances à des tarifs imbattables. </p>
             <button className="animated-button1">
      <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
         <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
      </svg>
      <a href='Boutique'> <span className="text">Consulter</span> </a>
      <span className="circle"></span>
      <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
      </svg>
           </button>
        </div>
        <img className="ims" src={assurance}/>
    </div>
    </div>
    <br/>
    <div class="combined-shape2 cm2">
    <img className="ims2"  src={reparation}/>
    <div id="info">
            <h3 id='descr'>Réparation</h3>
            <p id='desc2'> Confiez la réparation de vos produits à des experts dans le domaine. 
            </p>
            <button className="animated-button">
      <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
      </svg>
      <a href='Rep2'><span className="text">Consultez</span></a>
      <span className="circle"></span>
      <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
      </svg>
            </button>
        </div>
    </div>
    <br/>
    <div class="combined-shape cm">
    <div id="info">
            <h3 id='desc1'>Gestion des réclamtions</h3>
            <p id='descn'> Soumettez des réclamations en cas de difficultés rencontrées.
            </p>
            <button className="animated-button1">
      <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
      </svg>
      <a href='Autoréclamation'><span className="text">Consultez</span></a>
      <span className="circle"></span>
      <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
      </svg>
            </button>
        </div>
        <img  className="ims"src={rec}/>
    </div>
    <br/>
    <div class="combined-shape2 cm2">
    <img  className="ims2"src={vol}/>
    <div id="info">
            <h3 id='descr' className='descr'>Protection Contre Vol</h3>
            <p id='desc2'>Protégez efficacement vos produits précieux contre le risque de vol. 
            </p>
            <button className="animated-button">
      <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
      </svg>
      <a href='Policeuse'><span className="text">Consultez</span></a>
      <span className="circle"></span>
      <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
      </svg>
            </button>
        </div>
    </div>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <div >
      <h2 id="titrepourquoinous" style={{ color: "#188EBB", textAlign: "center" }}>NOS PARTENAIRES : LE TOP DE L'ASSURANCE</h2>
      <div className='partenaires' >
           <img className="imass1"style={{maxWidth:'800px',maxHeight:'130px'}}src={ass1}/>
           <img className="imass2" style={{maxWidth:'300px',maxHeight:'40px'}} src={ass2}/>
           <img className="imass3" style={{maxWidth:'2000px',maxHeight:'40px'}} src={ass3}/>
           <img className="imass4"style={{maxWidth:'2000px',maxHeight:'40px'}} src={ass4}/>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='container_pourquoinous'>
  <h2 id="titrepourquoinous">POURQUOI NOUS CHOISIR ?</h2>
    <div className='row1'>
      <div className="col-lg-4 col-xs-12 cloption1">
      <div className="card3" id='card3'>
  <div className="card3-inner">
    <div className="card3-front">
    <img className='imgoption1' src={option1}/>
    </div>
    <div className="card3-back">
      <div className='text'>
      <h5 style={{ color: "#00668C", textAlign: "center", fontFamily :"Poppins" }}>Efficacité opérationnelle</h5>
      <p> <b>Optimisez votre efficacité opérationnelle grâce à notre assurance personnalisée. </b></p>
      </div>
    </div>
  </div>
      </div>
      </div>
      <div className="col-lg-4 col-xs-12 ">
      <div className="card3">
  <div className="card3-inner">
    <div className="card3-front">
       <img className='imgoption2'src={option2}/>
    </div>
    <div className="card3-back">
    <div className='text'>
      <h5 style={{ color: "#00668C", textAlign: "center", fontFamily :"Poppins"  }}>Process Securisé</h5>
      <p> <b> Bénéficiez d'un processus sécurisé et fiable pour souscrire à nos assurances. </b></p>
      </div>
    </div>
  </div>
      </div>
      </div>
      <div className="col-lg-4 col-xs-12 cloption3">
      <div className="card3">
  <div className="card3-inner">
    <div className="card3-front">
    <img className='imgoption3' src={option3} />
    </div>
    <div className="card3-back">
    <div className='text'>
      <h5 style={{ color: "#00668C", textAlign: "center", fontFamily :"Poppins"  }}>Service Rapide</h5>
      <p> <b>Profitez d'un service rapide et efficace pour répondre à vos besoins en matière d'assurance. </b></p>
      </div>
    </div>
  </div>
      </div>
      </div>

      </div>   
      </div>
      <h2 id="titreservice">A PROPOS DE NOUS</h2>
    <div className="book" id='Apropos'>
        <div className="paragrapheabout">
          <br/> <br/>
        <p id="t"style={{ fontWeight: 'bold', fontSize: '30px',color:'#188EBB', fontFamily:'Poppins', display:'flex', justifyContent:'start', marginLeft:'30px'}} >SER assurance</p>
        <p className="about">Votre assurance totalement digitale vous permet de souscrire en ligne et de choisir la couverture qui correspond parfaitement à votre équipement. <br/> <br/>Cette plateforme tout-en-un fusionne la gestion des réclamations d'assurance avec les services de réparation, offrant ainsi une assurance complète couvrant les pannes et les vols, avec des formules personnalisées adaptées à chaque produit.
        <br/> <br/> En cas de sinistre, la déclaration est également possible en ligne, sans frais supplémentaires, sans papiers et surtout sans stress !</p>



    <p id=""style={{ fontWeight: 'bolder', fontSize: '25px', fontFamily:'Poppins', display:'flex', justifyContent:'flex-end', padding:'40px',color:'#188EBB' }} >Alors bienvenue au futur de l'assurance</p>
    </div>  
      <div className="cover">
        <img  className="imgabout img-fluid" src={assureabout}/>
      </div>
    </div>
    <br/>  <br/>  <br/>
    <div className='containergaranties'>
     <h2 id="titregaranties" >NOS GARANTIES</h2>
    <div className='row1'>
    <div className="col-lg-4 col-xs-12 ">
    <div className="card2">
      <div className="card2-img"><img className='imboutique img-fluid' src={elect}/></div>
      <div className="card2-info">
        <p className="text-title">Produit électroménager</p>
        <p className="text-body">Bénéficiez d'une assurance pour votre électoménagers</p>
      </div>
      <div className="card2-footer">
        <span className="text-title">Consulter la boutique</span>
        <div className="card2-button">
        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
      </svg>
        </div>
      </div>
    </div>
    </div>
    <div className="col-lg-4 col-xs-12 ">
    <div className="card2">
      <div className="card2-img"><img className='imboutique img-fluid' src={ord}/></div>
      <div className="card2-info">
        <p className="text-title">Ordinateurs</p>
        <p className="text-body">Bénéficiez d'une assurance pour votre ordinateur</p>
      </div>
      <div className="card2-footer">
        <span className="text-title">Consulter la boutique</span>
        <div className="card2-button">
        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
      </svg>
        </div>
      </div>
    </div>
    </div>
    <div className="col-lg-4 col-xs-12 ">
    <div className="card2">
      <div className="card2-img"><img className='imboutique img-fluid sm' src={sm}/></div>
      <div className="card2-info">
        <p className="text-title">Smartphones</p>
        <p className="text-body">Bénéficiez d'une assurance pour votre smartphone</p>
      </div>
      <div className="card2-footer">
        <span className="text-title">Consulter la boutique</span>
        <div className="card2-button">
        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
      </svg>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    <br/><br/>
    <div>
    <h2 id="titreservice">EN CAS DE SINISTRE</h2>
    <h3 id="soustitre"style={{ fontWeight: 'bold',color:'#188EBB', fontFamily:'Poppins' }}>SER assurance a déjà anticipé chaque éventualité</h3>

     
    <div className='row1'>
         <div className="col-lg-3 col-xs-12 ">
         <div className="card" >
            <h3 style={{ fontWeight: 'bold', fontSize: '15px',color:'black', fontFamily:'Poppins' }}>Vous déclarez votre sinistre</h3>
            <p className='reclam' > En ligne depuis votre espace client ou par téléphone</p>
            <img  id="imcontact" src={contact}/>
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 ">
          <div class="card">
            <h3 style={{ fontWeight: 'bold', fontSize: '15px',color:'black', fontFamily:'Poppins' }}>SER assurance vous répond</h3>
            
            <p  className='reclam'> Vous recevrez une réponse sous 24h</p>
            <img  id="imserv" src={serv}/>
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 ">
          <div class="card">
            <h3 style={{ fontWeight: 'bold', fontSize: '15px',color:'black', fontFamily:'Poppins'}}>Nous récupérons votre équipement</h3>
            
            <p className='reclam'>Nous vous envoyons un technicien sous 24h sans frais supplémentaires </p>
            <img id="imtransporteur"  src={transporteur}/>
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 ">
          <div class="card">
            <h3 style={{ fontWeight: 'bold', fontSize: '15px',color:'black', fontFamily:'Poppins' }}>Mon équipement</h3>
            
            <p className='reclam'> Est réparé ou remboursé</p>
            <img id="imrepaired"  src={repaired}/>
            </div>
          </div>
    </div>


    </div>
<br/> <br/> <br/>
<br/>
<div id='dv0'>
  <div id='dv1'>
    <h2 > QUESTIONS FREQUENTES</h2>
  </div>
</div>
<div id='dv2'>
  <div id='dv3'>
    <details>
      <summary> Comme assuré votre equipement ?</summary>
      <p> SER Assurance propose une couverture complète pour les téléphones portables, incluant la protection contre les dommages accidentels, le vol, la perte et les pannes techniques. Avant de souscrire, comprenez les termes, les exclusions et les franchises. 
        Une fois choisi, souscrivez en ligne ou par téléphone, puis assurez-vous de garder une copie de la police et des reçus de paiement</p>
    </details>
    <br/> <br/>
    <details id='p45'> 
      <summary>Quelle est la durée de mon contrat ?</summary>
      <p > vous payez une cotisation annuelle qui varie selon la valeur de votre équipement.
Le paiement se fait en ligne en toute sécurité. Vous aurez ainsi l’esprit libre en réglant votre cotisation en un seul versement </p>
    </details>
    <br/> <br/>
    <details>
      <summary>Comment payer ma cotisation ?</summary>
      <p> Votre contrat dure 1 an. Votre équipement est couvert pendant toute une année. 
Sur votre espace client, SER vous rappellera la date de renouvellement de votre contrat annuel à chaque date d’anniversaire de ce dernier. </p>
    </details>
    <br/> <br/>

    <details>
      <summary>Quelle démarche dois-je effectuer pour résilier mon contrat ?</summary>
      <p> Votre contrat prend fin automatiquement à chaque date d’anniversaire de ce dernier. Vous ne pouvez pas résilier votre contrat en cours d’année.

Il vous suffit de ne pas payer la cotisation annuelle </p>
    </details>
    <br/> <br/>
          </div>
      </div>
    </div>
    </div>
    </div>
    <div id='Footer'> <Footer/></div>
     
    </div>
  )
}

export default Home