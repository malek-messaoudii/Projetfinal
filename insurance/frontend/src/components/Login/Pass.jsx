import React, { useState } from 'react';
import './Pass.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/logoser.png';
import Footer from '../Footer/Footer';

function Pass() {
  const [email, setEmail] = useState('');
  const [codeSent, setCodeSent] = useState(false);

  const handleResendCode = () => {
    setCodeSent(true);
  };

  const handleSendCode = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setCodeSent(true);
  };

  return (
    <div>
      <div>
      <Navbar expand="lg" id="navbar">
                <Navbar.Brand href="/Home1">
                    <img alt="" src={Logo} width="105" height="100" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id='nav'>
                    <Nav className="menu">
                        <Nav.Link className="menu-link" href="/Home1">Accueil </Nav.Link>
                        <Nav.Link className="menu-link" href="/Home1">  A propos de nous </Nav.Link>
                        <Nav.Link className="menu-link" href="/Home1">Nos services </Nav.Link>
                        <Nav.Link className="menu-link" href="/Contact2">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <a href='/Login' > <button className='boutton1' id='bt' > Se connecter </button> </a>
            </Navbar>
      </div>
      <div className='toogle'>
        <div className='connexion' id='connexion'>
          <h1 className='title2'> Mot de passe oublié </h1>
          <form onSubmit={handleSendCode}>
            <div className='inpu'> <br/> <br/>
            <label htmlfor="mdp" id=''>Adresse email : * </label>
                            <input type="email" id="password1" name="email" required placeholder='Enter votre adresse mail' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div id='sec'>
              <button className='boutton1' type="submit" id='bttn' > Envoyer un  code de réinitialisation </button>
            </div>
            {codeSent && (
              <span id='spn'> <a onClick={handleResendCode} href=''> Ré-envoyer un code de réinitialisation </a></span>
            )}
          </form>
          
          <form> 
            <input type="number" id="code" name="code" required placeholder='Enter le code envoyé'/>
            <button className='boutton1' type="submit" id='bttn'> Envoyer </button>
          </form> 
          <br/>
          <br/>
          <br />
          <div id='creer'>
            <p className='parag'> Vous n'avez pas un compte ?</p> <a href='/Createuser'> Créer maintenant</a>
          </div>
          <br />
          
        </div>
      </div>
      <br/> <br/> <br/>
      <div className='btr'>
            <a href='/Login'> <button className='boutton1' id='boutton1' > Retour </button> </a>
          </div>
      <Footer />
    </div>
  );
}

export default Pass;
