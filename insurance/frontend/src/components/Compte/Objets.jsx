
import React, { useState, useEffect } from 'react';
import './Objets.css';
import Navbar from '../navbar';
import LogoutIcon from '@mui/icons-material/Logout';
import Footer from '../Footer/Footer';
import InfoIcon from '@mui/icons-material/Info';
import CustomNavbar from '../Navbar1';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IconButton } from '@mui/material';
const backendURL = 'http://localhost:4000/demandeassurance';
const formatDate = (dateString) => {
  return dateString.split('T')[0];
};
function Compte() {
  const [columns, setColumns] = useState(['N°contrat assurance', "Date d'effet", "Date d'échéance", "N°Série_Produit", "Etat du Demande d'assurance"]);
  const [records, setRecords] = useState([]);
 
  useEffect(() => {
    fetchUserData(); // Appeler la fonction pour récupérer les données de l'utilisateur lorsque le composant se monte
  }, []);

  const fetchUserData = async () => {
    try {
      const email = localStorage.getItem('userEmail'); // Récupérer l'email de l'utilisateur depuis le localStorage
     console.log(email)
      const response = await fetch(`${backendURL}/getdemandeassurancebyemail/${email}`, { // Utiliser l'email dans l'URL pour obtenir les données de l'utilisateur
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}` // Utiliser le jeton JWT pour l'authentification
        }
      });
      if (response.ok) {
        const records = await response.json();
        setRecords(records); // Mettre à jour l'état avec les données de l'utilisateur
      } else {
        console.error('Échec de la récupération des données utilisateur');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données utilisateur:', error);
    }
    console.log('demandeassurances:', records);
  };
  

  return (
    <div>
<CustomNavbar userRole='client' />   
      <div className="circle-container">
      <span className="message">Contactez l'agent d'entreprise d'assurance  </span>
      <IconButton href='/Chat'><div className="circle"> <ChatBubbleIcon/> </div></IconButton>
    </div>      <div className='div2'>
        <h1 className='title3'> Tableau de bord  </h1>
      </div>
      <div className='rec2'>
        <div id='rec3'>
          <div>
            <a href='/Compte'><button className='button'> Mon compte</button></a>
            
          </div>
          <div>
            <a href='/Objets'><button className='button'>Mes objets assurés</button></a>
            <div className='petit'></div>
          </div>
          <div>
            <a href='/Remboursement'><button className='button'>Mes remboursements</button></a>
          </div>
          <div>
            <a href='/Contact'><button className='button'>Contactez-nous</button></a>
          </div>
        </div>
      </div>
      <div id='divi1'>
      <h2 className='titrage'>Ici, vous trouvez vos objets assurés</h2>
      <br/>
        <table>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {records.length === 0 ? (
              <tr>
                <td colSpan={columns.length} style={{ textAlign: 'center' }}>
                  <InfoIcon style={{ marginRight: '5px' }} />
                  <p>Vous n'avez pas encore de contrat d'assurance actif</p>
                </td>
              </tr>
            ) : (
              records.map((records, index) => (
                <tr key={index}>
                  <td>{records._id}</td>
                  <td id="datedebut">{formatDate(records.datedebut)}</td>
                  <td id="datefin">{formatDate(records.datefin)}</td>
        
                  <td id="numse">{records.numserieproduit}</td>
                  <td id="dem">{records.etattraitement ? 'traite' : 'non traite'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default Compte;
