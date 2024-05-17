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
    noms: '',
    nomg: '',
    numérotel: '',
    email: '',
    id: ''
  });

  useEffect(() => {
    fetchUserData(); // Call the function to fetch user data when the component mounts
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`${backendURL}/getuser`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}` // Assuming you're using JWT for authentication
        }
      });
      if (response.ok) {
        const userDataFromBackend = await response.json();
        setUserData(userDataFromBackend); // Update state with user data
      } else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleLogout = () => {
    setUserData({
        noms: '',
        nomg: '',
        numérotel: '',
        email: '',
        id: ''
    });
    toast.success("Session terminée");
    window.location.href = '/Login';
  };
  return (
    <div>
<CustomNavbar userRole='agentboutique' />   
      <div className='div2'>
        <h1 className='title3'> Tableau de bord  </h1>
      </div>
      <div className='rec2'>
        <div id='rec3'>
          <div>
            <a href='/Compte'><button className='button'> Mon compte</button></a>
            <div className='petit'></div>
          </div>
          <div>
            <a href='/Contact3'><button className='button'>Contactez-nous</button></a>
          </div>
        </div>
        <div class="form-con">
          <form class="custom-for">
            <div className='d1' >
              <div class="form-group">
                <label for="nom">Nom du société :</label>
                <input type="text" id="nom" name="nom" value={userData.noms} readOnly />
              </div>
              <div class="form-group">
                <label for="prenom">Nom du gérant :</label>
                <input type="text" id="prenom" name="prenom" value={userData.nomg}  readOnly />
              </div>
            </div>
            <div className='d1' >
              <div class="form-group">
                <label for="tel">Numéro de téléphone :</label>
                <input type="tel" id="tel" name="tel" value={userData.numérotel} readOnly />
              </div>
              <div class="form-group">
                <label for="email">E-mail :</label>
                <input type="email" id="email" name="email" value={userData.email} readOnly />
              </div>
            </div>
            <div className='d1' >
              <div class="form-group">
                <label for="adresse">Identifiant unique :</label>
                <input type="text" id="adresse" name="adresse" value={userData.id} readOnly/>
              </div>
            </div>
            <div id='good' className='good'>
              <button className='bn632-hover bn26' type="submit" id='gd'>Confirmer</button>
            </div>
          </form>
        </div>
      </div>
      <div id='btn5'>
        <a href='#' id='liy'><button className='btn5'> Changer mot de passe</button>  </a>
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
