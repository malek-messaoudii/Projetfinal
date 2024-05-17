import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/logoser.png';
import Footer from '../Footer/Footer';
import './createuser.css';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const backendURL = 'http://127.0.0.1:4000/user/';

const RadioButton = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const history = useHistory(); // Use useHistory hook
    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        
        if (selectedValue === 'option2') {
            history.push('/Createsoc'); // Use history.push to navigate
        } else {
            history.push('/Createuser'); // Use history.push to navigate
        }
    };

      const [nom, setNom] = useState('');
      const [email, setEmail] = useState('');
      const [prenom, setPrénom] = useState('');
      const [cin, setCIN] = useState('');
      const [ville, setVille] = useState('');
      const [numerotel, setNumérotel] = useState('');
      const [mdp, setMdp] = useState('');
      const [cmdp, setCmdp] = useState(''); // Fixed typo in variable name
      const histore = useHistory(); // Fixed typo in variable name
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // Check if email, numérotel, and cin are unique
          const checkUnique = await axios.post(`${backendURL}/checkUnique`, {
            email: email,
            numerotel: numerotel,
            cin: cin
          });
    
          if (!checkUnique.data.unique) {
            toast.error('Email, numéro de téléphone ou CIN déjà utilisé.');
            return;
          }
    
          const userData = {
            nom: nom,
            prenom: prenom,
            numerotel: numerotel,
            email: email,
            cin: cin,
            ville:ville,
            mdp: mdp,
            cmdp: cmdp // Fixed variable name here too
          };
          
          const response = await axios.post(`${backendURL}/register1`, userData);
          toast.success('Compte crée avec succés');
          histore.push('/home'); // Fixed variable name here
          setNom('');
          setPrénom('');
          setNumérotel('');
          setEmail('');
          setCIN('');
          setVille('');
          setMdp('');
          setCmdp(''); // Fixed variable name here too
        } catch (error) {
          alert('Error creating user:', error.message.data);
        }
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
            <h1 className='title2' id='k'> Créez votre compte </h1>

            <div className='identification'>
            <input type='radio'
                    name='personne'
                    value='option1'
                    checked={selectedOption === 'option1'}
                    onChange={handleOptionChange}
                    className="radio-input"
                    defaultChecked
                />
                <label id='rb1'> Vous êtes une personne Physique ?</label>
                <input type='radio'
                    name='personne'
                    value='option2'
                    checked={selectedOption === 'option2'}
                    onChange={handleOptionChange}
                    className="radio-input"
                />
                <label id='rb2'> Vous êtes une personne Morale (une société) ?</label>
            </div>

            <div className='toogle2'>
                <div className='connexion2'>
                    <div className="form-con">
                        <form className="custom-for" id='form' onSubmit={handleSubmit}>
                        <div className='d1' >
      <div class="form-group">
      <label for="nom">Nom : * </label>
      <input type="text" id="email1" name="nom" required placeholder='Enter votre nom de la famille' onChange={(e)=> setNom(e.target.value)}/>
    </div>
    <div class="form-group">
      <label for="prenom">Prénom : * </label>
      <input type="text" id="email1" name="prenom" required placeholder='Enter votre prénom' onChange={(e)=> setPrénom(e.target.value)}/>
    </div>
    </div>
    <div className='d1' >
    <div class="form-group">
      <label for="tel">Numéro de téléphone : *</label>
      <input type="tel" id="email1" name="tel" required placeholder='Enter votre numéro de téléphone' onChange={(e)=> setNumérotel(e.target.value)}/>
    </div>
    <div class="form-group">
      <label for="email">Adresse email : * </label>
      <input type="email" id="email1" name="email" required placeholder='Enter votre adresse mail' onChange={(e)=> setEmail(e.target.value)}/>
    </div>
   </div>
   <div className='d1' >

   <div class="form-group" >
   <label for="ville">Ville : * </label> <br/>
   <select id="password" onChange={(e)=> setVille(e.target.value)}>
        <option value="">Choisir votre ville </option>
  <option value="Ariana">Ariana</option>
  <option value="Beja">Béja</option>
  <option value="Ben arous">Ben Arous</option>
  <option value="Bizerte">Bizerte</option>
  <option value="Gabes">Gabès</option>
  <option value="Gafsa">Gafsa</option>
  <option value="Jendouba">Jendouba</option>
  <option value="Kairouan">Kairouan</option>
  <option value="Kasserine">Kasserine</option>
  <option value="Kebili">Kébili</option>
  <option value="Le kef">Le Kef</option>
  <option value="Mahdia">Mahdia</option>
  <option value="Manouba">Manouba</option>
  <option value="Medenine">Médenine</option>
  <option value="Monastir">Monastir</option>
  <option value="Nabeul">Nabeul</option>
  <option value="Sfax">Sfax</option>
  <option value="Sidi bouzid">Sidi Bouzid</option>
  <option value="Siliana">Siliana</option>
  <option value="Sousse">Sousse</option>
  <option value="Tataouine">Tataouine</option>
  <option value="Tozeur">Tozeur</option>
  <option value="Tunis">Tunis</option>
  <option value="Zaghouan">Zaghouan</option>
</select>

    </div>
      <div class="form-group">
      <label for="nom">CIN : * </label>
      <input type="tel" id="email1" name="cin" required placeholder='Enter votre numéro de cin' onChange={(e)=> setCIN(e.target.value)}/>
    </div>
    </div>
    <div className='d1' >
    <div class="form-group">
      <label for="prenom">Mot de passe : * </label> <br/>
      <input type="password" id="password" name="password" required placeholder='Enter votre mot de passe' onChange={(e)=> setMdp(e.target.value)}/>
    </div>
    <div class="form-group">
      <label for="tel">Confirmer mot de passe : *</label> <br/>
      <input type="password" id="password" name="password" required placeholder='Confirmer votre mot de passe' onChange={(e)=> setCmdp(e.target.value)}/>
    </div>
    </div>
   
    <div className='cb1'>
      <label> <input type="checkbox" required /> J'ai lu et j'accepte les termes et les conditions d'utilisation </label>
    </div>
    <div className='ft1'>
    <button className='boutton1' type='submit'> Créer </button>
    </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
           <div className='btr'>
           <a href='/Login'> <button className='boutton1' id='boutton1' > Retour </button> </a>

           </div>
            <Footer />
        </div>
    );
}

export default RadioButton;
