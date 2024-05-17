import React, { useEffect, useState } from 'react';
import './Réclamation.css';
import Footer from '../Footer/Footer';
import Navbar from '../navbar'
import CustomNavbar from '../Navbar1';
import { useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const backendURL = 'http://localhost:4000';




function Reclamation() {
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
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().slice(0, 10);
  };

  return (
    <div>
      <CustomNavbar userRole='agentassurance' />
      <div className='div1'>
        <h1 className='title2'>Gestion des réclamations</h1>
      </div> <br/> <br/> <br/> <br/> <br/>
      <div id='m5'>  <a href='/Gestion' id='a5'> <div className='m4' id='a4'><ArrowBackIcon/> </div> </a> </div>  
      <div id='messi'>
        <h2 id='titre'>Réclamation à traiter</h2>
      </div>  <br/> <br/> 
      <div id='ftt'>
        <div className="connexion" id='coon'>
        <h5>Email :</h5> <br/>
          <input type="text" value={claim.email} readOnly />
          <br/> <br/>
          <h5>Description :</h5> <br/>
          <input type="text" value={claim.description} readOnly />
          <br/> <br/>
          <h5>Volé :</h5> <br/>
          <input type="text" value={claim.etat ? 'Oui' : 'Non'} readOnly className='status' />
          <br/> <br/>
          <h5>Date :</h5> <br/>
          <input type="text" value={formatDate(claim.date)} readOnly />
          <br/> <br/>
       
        <div className='but'>
        <input className="login-button" type="submit" value="Rejeter" />
        <input className="login-button" type="submit" value="Réparer" />
        <input className="login-button" type="submit" value="Rembourser" />
        </div>
        </div>
      </div>
      

      <Footer />
    </div>
  );
}

  
  export default Reclamation

