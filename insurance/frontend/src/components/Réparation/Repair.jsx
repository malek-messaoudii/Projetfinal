import React, { useEffect, useState } from 'react';
import './Repair.css';
import CustomNavbar from '../Navbar1';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const backendURL = 'http://localhost:4000';

function Repair() {
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

  const handleComplete = async () => {
    try {
      const response = await fetch(`${backendURL}/claim/${claimId}/status`, {
        method: 'Put',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ status: 'réparé' })
      });

      if (response.ok) {
        const updatedClaim = await response.json();
        setClaim(updatedClaim);
      } else {
        console.error('Erreur lors de la mise à jour de l\'état de la réclamation:', response.statusText);
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'état de la réclamation:', error);
    }
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!claim) {
    return <div>Aucune réclamation trouvée.</div>;
  }

  return (
    <div>
      <CustomNavbar userRole='agentreparation' />
      <div className='div1'>
        <h1 className='title2'>Atelier de réparation</h1>
      </div>
      <br /> <br /> <br /> <br /> <br />
      <div id='m5'>
        <a href='/Réparation' id='a5'>
          <div className='m4' id='a4'><ArrowBackIcon /></div>
        </a>
      </div>
      <div id='messi'>
        <h2 id='titre'>Commande de réparation</h2>
      </div>
      <br /> <br />
      <div id='ftt'>
        <div className="connexion" id='coon'>
          <h5>Marque :</h5>
          <br />
          <input type="text" value={claim.idp ? claim.idp.marque : ''} readOnly />
          <br /> <br />
          <h5>Modèle:</h5>
          <br />
          <input type="text" value={claim.idp ? claim.idp.modele : ''} readOnly />
          <br /> <br />
          <h5>Description :</h5>
          <br />
          <input type="text" value={claim.description} readOnly />
          <br /> <br />
        </div>
      </div>
      <div className='buttons-container1'>
        <button className="bn632-hover bn26" onClick={handleComplete}>Marquer opération terminée</button>
      </div>
      <Footer />
    </div>
  );
}

export default Repair;
