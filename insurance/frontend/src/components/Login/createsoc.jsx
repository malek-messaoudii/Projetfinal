import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory instead of useNavigate
import './createsoc.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/logoser.png';
import Footer from '../Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';



const backendURL = 'http://127.0.0.1:4000/user/';

const RadioButton = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const history = useHistory(); // Use useHistory hook

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        
        // Redirect to another page based on the selected value
        if (selectedValue === 'option2') {
            history.push('/Createsoc'); // Use history.push to navigate
        } else {
            history.push('/Createuser'); // Use history.push to navigate
        }
    };

    const [noms, setNoms] = useState('');
    const [id, setID] = useState('');
    const [numérotel, setNumérotel] = useState('');
    const [email, setEmail] = useState('');
    const [nomg, setNomg] = useState('');
    const [role, setRole] = useState('');
    const [mdp, setMdp] = useState('');
    const [cmdp, setCmdp] = useState('');
    const historyo = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const checkUnique = await axios.post(`${backendURL}/checkUnique2`, {
            id: id,
            email: email,
            numérotel: numérotel,
          });
    
          if (!checkUnique.data.unique) {
            toast.error('Email, numéro de téléphone ou ID déjà utilisé.');
            return;
          }
            const userData = {
                noms: noms,
                id: id,
                numérotel: numérotel,
                email: email,
                nomg: nomg,
                role: role,
                mdp:  mdp,
                cmdp: cmdp
            };

            const response = await axios.post(`${backendURL}/register2`, userData);
            toast.success('Compte créé avec succès');
            if (role === 'agentassurance') {
              historyo.push('/Home4');
          } else if (role === 'agentreparation') {
              historyo.push('/Home2');
          } else if (role === 'agentboutique') {
              historyo.push('/Home3');
          } else if (role === 'agentpolice') {
              historyo.push('/Home5');
          } else {
              // Redirect to a default page if no role matches
              historyo.push('/defaultPage');
          }
  
            setNoms('');
            setID('');
            setNumérotel('');
            setEmail('');
            setNomg('');
            setRole('');
            setMdp('');
            setCmdp('');
        } catch (error) {
            console.error('Error creating user:', error);
            toast.error('Erreur lors de la création du compte');
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
                <div className='connexion2' >
                    <div className="form-con">
                        <form className="custom-for" id='form' onSubmit={handleSubmit}>
                        <div className='d1' >
      <div class="form-group">
      <label for="nom">Nom de la société : * </label>
      <input type="text" id="email1" name="nom" required placeholder='Enter le nom de votre société'  onChange={(e)=> setNoms(e.target.value)}/>
    </div>
    <div class="form-group">
      <label for="prenom">Identifiant unique : * </label>
      <input type="text" id="email1" name="prenom" required placeholder='Enter votre Identifiant unique'onChange={(e)=> setID(e.target.value)}/>
    </div>
    </div>
    <div className='d1' >
    <div class="form-group">
      <label for="tel">Numéro de téléphone : *</label>
      <input type="tel" id="email1" name="tel" required placeholder='Enter votre numéro de téléphone'onChange={(e)=> setNumérotel(e.target.value)}/>
    </div>
    <div class="form-group">
      <label for="email">Adresse email : * </label>
      <input type="email" id="email1" name="email" required placeholder='Enter votre adresse mail'onChange={(e)=> setEmail(e.target.value)} />
    </div>
   </div>
   <div className='d1' >
    <div class="form-group">
      <label for="nomg">Nom du gérant : *</label>
      <input type="text" id="email1" name="nomg" required placeholder='Enter le nom de votre gérant'onChange={(e)=> setNomg(e.target.value)}/>
    </div>
    <div class="form-group">
  <label for="role">Activité : *</label>
  <select id="password" name="role" required onChange={(e)=> setRole(e.target.value)}>
    <option value="">Sélectionnez un rôle</option>
    <option value="agentassurance">Agent d'entreprise d'assurance</option>
    <option value="agentreparation">Agent d'entreprise de réparation</option>
    <option value="agentboutique">Agent de boutique</option>
    <option value="agentpolice">Agent de police</option>
  </select>
</div>

   </div>
   <div className='d1' >
    <div class="form-group">
      <label for="prenom">Mot de passe : * </label> <br/>
      <input type="password" id="password" name="password" required placeholder='Enter votre mot de passe' onChange={(e)=> setMdp(e.target.value)}/>
    </div>
    <div class="form-group">
      <label for="tel">Confirmer mot de passe : *</label> <br/>
      <input type="password" id="password" name="password" required placeholder='Confirmer votre mot de passe'onChange={(e)=> setCmdp(e.target.value)} />
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
            <Footer/>
        </div>
    )
}

export default RadioButton;
