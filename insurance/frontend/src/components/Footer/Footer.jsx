import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/logoser.png'
import logo from '../assets/logoser.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'



function Footer(){
  return (
    <div className="footer mt-5 pt-5 pb-5">
         <div className="im">
        <img className='img-fluid' style={{maxWidth: '270px', maxHeight: '100px'}}  src={logo} />
        </div>
      <div className="container cn">
        <div className="row" id='mlk'>

        <div className="col-lg-3 col-xs-12 location">
            <h4 className="mt-lg-0 mt-sm-4">Contactez_nous</h4>

            <p className="mb-0 contact-info"  ><FontAwesomeIcon icon={faPhone} style={{ color: "#188EBB" }}  /> (+216) 75742895</p>
            <p className="mb-0 "> <FontAwesomeIcon icon={faEnvelope} style={{ color: "#188EBB" }}  /> serassurance@gmail.com</p>
          </div>

          <div className="col-lg-3 col-xs-12 links l2">
            <h4 className="mt-lg-0 mt-sm-3 h">A PROPOS</h4>
            <ul className="m-0 p-0">
              <li>- <a href="#">A propos de nous</a></li>
              <li>- <a href="#">Nos Services</a></li>

            </ul>
          </div>



          <div className="col-lg-3 col-xs-12 links l3">
            <h4 className="mt-lg-0 mt-sm-3 h">AIDE</h4>
            <ul className="m-0 p-0">
              <li>- <a href="#">Contact</a></li>
              <li>- <a href="#">Espace Client</a></li>


            </ul>

          </div>
          <div className="col-lg-3 col-xs-12 links l1">
            <h4 className="mt-lg-0 mt-sm-3">Démarrez ici</h4>
            <p className="mb-0"> Accédez à votre site web d'assurance  </p>
            <a href="/Login" id='h44'><button class="bn632-hover bn26">Inscrivez_vous</button></a>

          </div>
        </div>
        <div className="row mt-5" id='meet'>
          <div className="col copyright">
            <p className="text-black"><small>©  2024  Copyright  SER assurance. Tous les droits sont réservés.</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;