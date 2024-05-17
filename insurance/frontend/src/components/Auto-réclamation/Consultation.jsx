import React, { useState, useEffect } from 'react';
import './Consultation.css';
import Navbar from '../navbar';
import Footer from '../Footer/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import CustomNavbar from '../Navbar1';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useParams } from 'react-router-dom';

const backendURL = 'http://localhost:4000';

function Consultation() {
  const { claimId } = useParams();
  const [claim, setClaim] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClaimDetails = async () => {
      try {
        const response = await fetch(`${backendURL}/claim/${claimId}`);
        if (response.ok) {
          const data = await response.json();
          setClaim(data);
        } else {
          console.error('Erreur lors de la récupération des détails de la réclamation:', response.statusText);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des détails de la réclamation:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClaimDetails();
  }, [claimId]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!claim) {
    return <div>Aucune réclamation trouvée.</div>;
  }

  return (
    <div>
      <CustomNavbar userRole='client' />   
      <div className="circle-container">
        <span className="message">Contactez l'agent d'entreprise d'assurance  </span>
        <IconButton href='/Chat'><div className="circle"> <ChatBubbleIcon/> </div></IconButton>
      </div>
      <div className='div2'>
        <h1 className='title3'>Réclamations</h1>
      </div>
      <div id="titre" className='a2'>Réclamation des contrats</div>
      <div id='m5'>
        <a href='/AutoRéclamation' id='a5'> <div className='m4' id='a4'><ArrowBackIcon/> </div> </a>
      </div>  

      <div className='a1'>
        <div className="connexion">
          <form action="" className="form">
            <label>Date De Création:</label>
            <input required className="input" type="text" value={new Date(claim.date).toLocaleDateString()} readOnly />
            <br/>
            <label htmlFor="vol">Volé :</label>
            <br/>
            <input type="checkbox" id='a3' checked={claim.etat} readOnly />
            <br/>
            <br/>
            <label htmlFor="description">Description :</label>
            <textarea required className="textarea" value={claim.description} readOnly />
            <br/>
            <label>Statut :</label>
            <input required className="input" type="text" value={claim.status} readOnly />
            <br/>
            <label>Etat :</label>
            <input required className="input" type="text" value={claim.state} readOnly />
            <br/>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Consultation;
