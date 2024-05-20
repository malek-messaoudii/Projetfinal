
import Swal from 'sweetalert2';
import './demandeassCompte2.css';
import { motion } from 'framer-motion';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Copmte2Demandass() {
  const formatDate = (dateString) => {
    return dateString.split('T')[0];
  };
  const [demandes, setDemandes] = useState([]);

  useEffect(() => {
    const fetchDemandes = async () => {
      try {
        const nomagence = localStorage.getItem('nomagence'); 
        const response = await axios.get(`http://localhost:4000/demandeassurance/getDemandeAssurancetByAgenceName/${nomagence}`);
        setDemandes(response.data);
        if (response.data.length === 0) {
          Swal.fire({
            title: 'Pas De Nouvelles Demandes à Gérer',
            text: 'Il n\'y a pas de nouvelles demandes pour cette agence.',
            icon: 'info',
            confirmButtonText: 'OK'
          });
        }
      } catch (error) {
        console.error('Error fetching the demandes:', error);
      }
    };

    fetchDemandes();
  }, []);

  const handleValiderClick = async (id) => {
    try {
      await axios.put(`http://localhost:4000/demandeassurance/updatdemandeassurancevalid/${id}`, { etat: true });
      // Update the local state to reflect the change
      setDemandes(demandes.map(demande => 
        demande._id === id ? { ...demande,  etattraitement: 'Validé' } : demande
      ));
      Swal.fire('Success', 'Demande validée', 'success');
    } catch (error) {
      Swal.fire('Error', 'Failed to update demande', 'error');
    }
  };
  const handleRefuserClick = async (id) => {
    try {
      await axios.put(`http://localhost:4000/demandeassurance/updateDemandeAssurancerefus/${id}`, { etattraitement: 'Refusé' });
      // Update the local state to reflect the change
      setDemandes(demandes.map(demande => 
        demande._id === id ? { ...demande, etattraitement: 'Refusé' } : demande
      ));
      Swal.fire('Success', 'Demande refusée', 'success');
    } catch (error) {
      Swal.fire('Error', 'Failed to refuse demande', 'error');
    }
  };

  return (
    <div>
      <div className='div1'>
        <h1 className='title2'>Gestion Des Demandes D'Assurances</h1>
      </div>
      
      <div className='header2'>
      {demandes.map((demande) => (
        <div id='b112'>
          <div id='carreau32'>
            <div id='care12'>
             
                <div className="formgroup" key={demande._id}>
                  <div className="inp">
                    <div className="lbl"><label>Id Demande: </label></div>
                    <input type="text" id="ida" name="idass" value={demande._id} readOnly />
                  </div>
                  <div className="inp">
                    <div className="lbl"><label>PrenomClient: </label></div>
                    <input type="text" id="prenom" name="prenom" value={demande.prenom} readOnly />
                  </div>
                  <div className="inp">
                    <div className="lbl"><label>NomClient: </label></div>
                    <input type="text" id="nom" name="nom" value={demande.nom} readOnly />
                  </div>
                  <div className="inp">
                    <div className="lbl"><label>Email: </label></div>
                    <input type="text" id="email" name="email" value={demande.email} readOnly />
                  </div>
                  <div className="inp">
                    <div className="lbl"><label>Contrat: </label></div>
                    <input type="text" id="typecontrat" name="typecontrat" value={demande.typecontrat} readOnly />
                  </div>
                  <div className="inp">
                    <div className="lbl"><label>Produit: </label></div>
                    <input type="text" id="produit" name="produit" value={demande. modeleProduit} readOnly />
                  </div>
                  <div className="inp">
                    <div className="lbl"><label>Date debut: </label></div>
                    <input type="text" id="datedebut" name="datedebut" value={formatDate(demande.datedebut)} readOnly />
                  </div>
                  <div className="inp">
                    <div className="lbl"><label>Date fin: </label></div>
                    <input type="text" id="datefin" name="datefin" value={formatDate(demande.datefin)} readOnly />
                  </div>
                  <div className="butvalidenonvalide">
                    <button className="button-33" role="button" onClick={() => handleValiderClick(demande._id)}>Valider</button>
                    <button className="button-45" role="button" onClick={() => handleRefuserClick(demande._id)} >Refuser</button>
                  </div>
                </div>
             
            </div>
          </div>
        </div>
       ))}
      </div>
     
    </div>
  );
}

export default Copmte2Demandass;
