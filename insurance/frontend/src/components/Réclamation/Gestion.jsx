import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from '../Navbar1';
import './Gestion.css';
import { useHistory } from 'react-router-dom';
import ErrorIcon from '@mui/icons-material/Error';


const backendURL = 'http://localhost:4000/claim';

function Gestion() {
  const [Claims, setClaims] = useState([]);

  useEffect(() => {
    getAllClaims();
  }, []);

  const getAllClaims = async () => {
    try {
      const response = await fetch(`${backendURL}/getallclaims`);
      if (response.ok) {
        const data = await response.json();
        setClaims(data);
      } else {
        console.error('Erreur lors de la récupération des réclamations de vol :', response.statusText);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des réclamations de vol :', error);
    }
  };
  const history = useHistory();

  const handleConsult = (claimId) => {
    history.push(`/Réclamation/${claimId}`);
  };

  return (
    <div>
      <CustomNavbar userRole='agentassurance' />   
      <div className='div1'>
        <h1 className='title2'> Gestion des réclamations </h1>
      </div>
      <div>
        <h2 id='titre'>Ici vous allez trouvez toutes les réclamations que vous devez gérer.</h2>
        {Claims.length === 0 ? (
                    <div>
                    <div id='comm'>
                      <h3>Aucune réclamation</h3>
                    </div>
                    <div id='com'><ErrorIcon /></div>
                  </div>
        ) : (
          <div className='container'>
            {Claims.map((claim, index) => (
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
      <Footer/>
    </div>
  );
}

export default Gestion;
