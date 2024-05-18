import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from '../Navbar1';
import { useHistory } from 'react-router-dom';
import ErrorIcon from '@mui/icons-material/Error';
import axios from 'axios';
import './Auto-réclamation.css'
const backendURL = 'http://localhost:4000/demandeassurance';

function Autoréclamation() {
  const [demandeAssurances, setDemandeAssurances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Retrieve user's email from local storage (or any other mechanism you use)
  const userEmail = localStorage.getItem('userEmail');

  useEffect(() => {
    if (userEmail) {
      axios.get(`${backendURL}/getdemandeassurancebyemail/${userEmail}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}` 
        }
      })
        .then(response => {
          // Assuming response.data contains demandeAssurances and their associated produit IDs
          setDemandeAssurances(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching demandeassurances:', error);
          setError(error);
          setLoading(false);
        });
    }
  }, [userEmail]);

  const history = useHistory();

  const handleAjout = (demandeassuranceId) => {
    history.push(`/Ajout/${demandeassuranceId}`);
  };
  const handleConsult = (demandeassuranceId) => {
    history.push(`/Consultation/${demandeassuranceId}`);
  };

  return (
    <div>
      <CustomNavbar userRole='client' />   
      <div className='div2'>
        <h1 className='title3'>Réclamations</h1>
      </div>
      <div className='rr'>
        <h1 className='title3'>Vos contrats</h1>
      </div>
      <div>
        {demandeAssurances.length === 0 ? (
          <div>
            <div id='comm'>
              <h3>Aucun contrat d'assurance</h3>
            </div>
            <div id='com'><ErrorIcon /></div>
          </div>
        ) : (
          <div className='container'>
            {demandeAssurances.map((demande, index) => (
              <div key={demande._id} className='claim-container'>
                <h5 id='tut'>Contrat num : {index + 1}</h5>
                <label> Numéro série : </label> <br/>
                <input value={demande.numserieproduit} readOnly/> <br/> <br/>
                <label> Date début : </label> <br/>
                <input value={demande.datedebut.slice(0, 10)} readOnly/> <br/> <br/>
                <label> Date fin : </label> <br/>
                <input value={demande.datefin.slice(0, 10)} readOnly/> <br/> <br/>
                <div className='douv'>
                <div className='claim-details'>
                  <button onClick={() => handleAjout(demande._id)} className='bn632-hover bn26' >Ajouter une réclamation</button>
                </div> 
                <div className='claim-details'>
                  <button onClick={() => handleConsult(demande._id)} className='bn632-hover bn26'>Consulter une réclamation</button>
                </div>
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

export default Autoréclamation;
