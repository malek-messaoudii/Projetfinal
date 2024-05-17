import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from '../Navbar1';
import './Police.css';
import { useHistory } from 'react-router-dom';
import ErrorIcon from '@mui/icons-material/Error';


const backendURL = 'http://localhost:4000/claim';

function Police() {
  const [stolenClaims, setStolenClaims] = useState([]);

  useEffect(() => {
    getAllStolenClaims();
  }, []);

  const getAllStolenClaims = async () => {
    try {
      const response = await fetch(`${backendURL}/getstolenclaim`);
      if (response.ok) {
        const data = await response.json();
        setStolenClaims(data);
      } else {
        console.error('Erreur lors de la récupération des réclamations de vol :', response.statusText);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des réclamations de vol :', error);
    }
  };
  const history = useHistory();

  const handleConsult = (claimId) => {
    history.push(`/claim/${claimId}`);
  };

  return (
    <div>
      <CustomNavbar userRole='agentpolice' />   
      <div className='div1'>
        <h1 className='title2'> Police </h1>
      </div>
      <div>
        <h2 id='titre'>Ici vous allez gérer les réclamations spécialement les cas de vol.</h2>
        {stolenClaims.length === 0 ? (
                    <div>
                    <div id='comm'>
                      <h3>Aucun cas de vol</h3>
                    </div>
                    <div id='com'><ErrorIcon /></div>
                  </div>
        ) : (
          <div className='container'>
            {stolenClaims.map((claim, index) => (
              <div key={claim._id} className='claim-container'>
                <h5 id='tut'>Cas de vol numéro : {index + 1}</h5> {/* Ajout du numéro de réclamation */}
                <div className='claim-details'>
                  <button onClick={() => handleConsult(claim._id)}>Consultez</button>
                  {/* Ajoutez ici d'autres critères spécifiques à la réclamation */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default Police;
