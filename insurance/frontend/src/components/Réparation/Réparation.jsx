import React, { useState, useEffect } from 'react';
import './Réparation.css';
import CustomNavbar from '../Navbar1';
import Footer from '../Footer/Footer';
import { useHistory } from 'react-router-dom';
import ErrorIcon from '@mui/icons-material/Error';

const backendURL = 'http://localhost:4000/claim';

function Réparation() {
  const [claimsWithDescription, setClaims] = useState([]);

  useEffect(() => {
    fetchClaims();
  }, []);

  const fetchClaims = async () => {
    try {
      const response = await fetch(`${backendURL}/getclaimswithdesc`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}` // Assuming you're using JWT for authentication
        }
      });
      if (response.ok) {
        const data = await response.json();
        setClaims(data);
      } else {
        console.error('Erreur lors de la récupération des réclamations! :', response.statusText);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des réclamations :', error);
    }
  };

  const history = useHistory();

  const handleConsult = (claimId) => {
    history.push(`/repair/${claimId}`);
  };

  return (
    <div>
      <CustomNavbar userRole='agentpolice' />
      <div className='div1'>
        <h1 className='title2'>Atelier de réparation</h1>
      </div>
      <div>
        <h2 id='titre'>Ici vous allez trouvez les commandes de réparation à examiner.</h2>
        {claimsWithDescription.length === 0 ? (
          <div>
            <div id='comm'>
              <h3>Aucune commande en suspens</h3>
            </div>
            <div id='com'><ErrorIcon /></div>
          </div>
        ) : (
          <div className='container'>
            {claimsWithDescription.map((claim, index) => (
              <div key={claim._id} className='claim-container'>
                <h5 id='tut'>Réclamation numéro : {index + 1}</h5>
                <div className='claim-details'>
                  <button onClick={() => handleConsult(claim._id)}>Consultez</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Réparation;
