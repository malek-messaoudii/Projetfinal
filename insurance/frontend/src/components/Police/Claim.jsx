import React, { useEffect, useState } from 'react';
import './Claim.css';
import CustomNavbar from '../Navbar1';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const backendURL = 'http://localhost:4000';

function Claim() {
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

  const handleRefund = async () => {
    console.log(`Rembourser la réclamation avec l'ID : ${claimId}`);
  };

  const handleReject = async () => {
    console.log(`Rejeter la réclamation avec l'ID : ${claimId}`);
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!claim) {
    return <div>Aucune réclamation trouvée.</div>;
  }

  return (
    <div>
      <CustomNavbar userRole='agentpolice' />
      <div className='div1'>
        <h1 className='title2'>Police</h1>
      </div> <br/> <br/> <br/> <br/> <br/>
      <div id='m5'>  <a href='/Police' id='a5'> <div className='m4' id='a4'><ArrowBackIcon/> </div> </a> </div>   
      <div id='ftt'>
        <div className="connexion" id='coon'>
          <h5>Description :</h5> <br/>
          <input type="text" value={claim.description} readOnly />
          <br/> <br/>
          <h5>Volé :</h5> <br/>
          <input type="text" value={claim.etat ? 'Oui' : 'Non'} readOnly className='status' />
          <br/> <br/>
          <h5>Pièces justificatives : </h5> <br/>
          <div className='images-container'>
            {claim.images && claim.images.length > 0 ? (
              claim.images.map((image, index) => (
                <img key={index} src={image} alt={`Claim ${index}`} className='image' />
              ))
            ) : (
              <p>Aucune image téléchargée.</p>
            )}
          </div>
        </div>
      </div>
      <div className='buttons-container'>
        <button onClick={handleRefund} className='btn-refund'>Rembourser</button>
        <button onClick={handleReject} className='btn-reject'>Rejeter</button>
      </div>
      <Footer />
    </div>
  );
}

export default Claim;
