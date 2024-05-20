import React, { useState, useEffect } from 'react';
import './Compte.css';
import Navbar from '../navbar';
import LogoutIcon from '@mui/icons-material/Logout';
import Footer from '../Footer/Footer';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomNavbar from '../Navbar1';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IconButton } from '@mui/material';

const backendURL = 'http://localhost:4000/user';

function Compte() {
  const [userData, setUserData] = useState({
    nom: '',
    prenom: '',
    numerotel: '',
    email: '',
    ville: '',
    cin: ''
  });

  useEffect(() => {
    fetchUserData(); // Appeler la fonction pour récupérer les données de l'utilisateur lorsque le composant se monte
  }, []);

  const fetchUserData = async () => {
    try {

      const email = localStorage.getItem('userEmail'); 
      console.log( "email", email)// Récupérer l'email de l'utilisateur depuis le localStorage
      const response = await fetch(`${backendURL}/getuser/${email}`, { // Utiliser l'email dans l'URL pour obtenir les données de l'utilisateur
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}` 
          // Utiliser le jeton JWT pour l'authentification
        }

      });
      if (response.ok) {
        const userDataFromBackend = await response.json();
        setUserData(userDataFromBackend); // Mettre à jour l'état avec les données de l'utilisateur
      } else {
        console.error('Échec de la récupération des données utilisateur');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données utilisateur:', error);
    }
    console.log('userData:', userData);
  };

  const handleLogout = () => {
    setUserData({
      nom: '',
      prenom: '',
      numerotel: '',
      email: '',
      ville: '',
      cin: ''
    });
    localStorage.clear();
    toast.success("Session terminée");
    window.location.href = '/Login';
  };

  return (
    <div>
      <CustomNavbar userRole='client' />
      <div className="circle-container">
        <span className="message">Contactez l'agent d'entreprise d'assurance</span>
        <IconButton href='/Chat'><div className="circle"><ChatBubbleIcon /></div></IconButton>
      </div>
      <div className='div2'>
        <h1 className='title3'>Tableau de bord</h1>
      </div>
      <div className='rec2'>
        <div id='rec3'>
          <div>
            <a href='/Compte'><button className='button'>Mon compte</button></a>
            <div className='petit'></div>
          </div>
          <div>
            <a href='/Objets'><button className='button'>Mes objets assurés</button></a>
          </div>
          <div>
            <a href='/Remboursement'><button className='button'>Mes remboursements</button></a>
          </div>
          <div>
            <a href='/Contact'><button className='button'>Contactez-nous</button></a>
          </div>
        </div>
        <div className="form-con">
          <form className="custom-for">
            <div className='d1'>
              <div className="form-group">
                <label htmlFor="nom">Nom :</label>
                <input type="text" id="nom" name="nom" value={userData.nom}  />
              </div>
              <div className="form-group">
                <label htmlFor="prenom">Prénom :</label>
                <input type="text" id="prenom" name="prenom" value={userData.prenom}  />
              </div>
            </div>
            <div className='d1'>
              <div className="form-group">
                <label htmlFor="tel">Numéro de téléphone :</label>
                <input type="text" id="tel" name="numerotel" value={userData.numerotel}  />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail :</label>
                <input type="text" id="email" name="email" value={userData.email}  />
              </div>
            </div>
            <div className='d1'>
              <div className="form-group">
                <label htmlFor="adresse">Adresse :</label>
                <input type="text" id="adresse" name="ville" value={userData.ville}  />
              </div>
              <div className="form-group">
                <label htmlFor="cin">CIN :</label>
                <input type="text" id="cin" name="cin" value={userData.cin}  />
              </div>
           
       
            </div>
            <div id='good' className='good'>
              <button className='bn632-hover bn26' type="submit" id='gd'>Confirmer</button>
            </div>
          </form>
        </div>
      </div>
      <div id='btn5'>
        <a href='/Nvpass2' id='liy'><button className='btn5'> Changer mot de passe</button>  </a>
      </div>
      <div id='d7'>
        <button id='btn4' onClick={handleLogout}>Déconnexion <LogoutIcon /> </button>
      </div>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Footer />
    </div>
  );
}

export default Compte;