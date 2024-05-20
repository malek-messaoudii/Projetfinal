import React, { useState, useEffect } from 'react';
import './Demandeassurance.css';
import Swal from 'sweetalert2';
import Navbar from '../navbar'; // Check if the path is correct
import Footer from '../Footer/Footer'; // Check if the path is correct
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CustomNavbar from '../Navbar1'; // Check if the path is correct
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IconButton } from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation,useHistory } from 'react-router-dom';
const backendURL = 'http://localhost:4000/demandeassurance';

function Demandassurance() {
  const history = useHistory();
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
  
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
  
    return `${year}-${month}-${day}`;
  };
  
  const calculateDays = (datedebut, datefin) => {
    const start = new Date(datedebut);
    const end = new Date(datefin);
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(Math.abs((end - start) / oneDay));
    return diffDays;
  };
  const location = useLocation();
  const {numeroSerie,model} = location.state || {};;
 // const numeroSerieValue = numeroSerie.state ? numeroSerie.state.numeroSerie : '';

console.log("numeroSerie:", numeroSerie);
  const [formData, setFormData] = useState({
    nomagenceassurance:'',
    typecontrat:'',
    prix:0,
    volprotection:false,
    nom:'',
    prenom:'',
    numerotel:'',
    email:'',
    datedebut:'',
    datefin:'',
    numserieproduit: numeroSerie,
    modele:model
  });

  const [pricePerDay, setPricePerDay] = useState('');
const [contractTerms, setContractTerms] = useState('');
useEffect(() => {
  const today = getCurrentDate();
  setFormData(prevState => ({
    ...prevState,
    datedebut: today
  }));
}, []);

useEffect(() => {
  console.log("formData:", formData);
}, [formData]);

useEffect(() => {
  console.log("pricePerDay:", pricePerDay);
}, [pricePerDay]);

useEffect(() => {
  console.log("contractTerms:", contractTerms);
}, [contractTerms]);

useEffect(() => {
  setFormData(prevState => ({
    ...prevState,
    numserieproduit: numeroSerie || '',
    modeleProduit:model
  }));
}, [numeroSerie]);

useEffect(() => {
  const totalDays = calculateDays(formData.datedebut, formData.datefin);
  const totalCost = parseFloat(pricePerDay) * totalDays;
  setFormData(prevState => ({
    ...prevState,
    prix: totalCost
  }));
}, [formData.datedebut, formData.datefin, pricePerDay]);

const handleChange = (event) => {
  const { name: fieldName, value, type, checked } = event.target;
  
  // Si le champ est une case à cocher, utilisez la propriété "checked" pour obtenir la valeur booléenne
  const fieldValue = type === 'checkbox' ? checked : value;

  setFormData(prevState => ({
    ...prevState,
    [fieldName]: fieldValue
  }));
};

const handleSubmit = async (event) => {
  event.preventDefault();
  // Afficher la boîte de dialogue de confirmation avec SweetAlert2
  Swal.fire({
    title: "Voulez-vous envoyer cette demande d'assurance ?",
    showDenyButton: true,
    confirmButtonText: "Envoyer",
    confirmButtonColor: "#5ed977",
    customClass: {
      confirmButton: 'custom-confirm-button-class' // Classe CSS personnalisée pour le bouton "Envoyer"
    },
    denyButtonText: "Annuler"
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const response = await axios.post(`${backendURL}/adddemandeassurance`, formData);
        if (response.status === 200) {
          const prixAss=formData.prix;
          const nomagence=formData.nomagenceassurance;
          history.push('/Paiement', { numeroSerie ,model,prixAss ,nomagence});
        } 
      } catch (error) {
        if (error.response) {
          // La requête a été effectuée et le serveur a répondu avec un code d'erreur
          console.error('Erreur de réponse du serveur:', error.response.data);
          console.error('Code d\'erreur HTTP:', error.response.status);
          Swal.fire("Échec de l'envoi de la demande", error.response.data.message || 'Erreur inconnue', "error");
        } else if (error.request) {
          // La requête a été effectuée mais aucune réponse n'a été reçue
          console.error('Aucune réponse du serveur reçue:', error.request);
          Swal.fire("Échec de l'envoi de la demande", "Aucune réponse du serveur reçue", "error");
        } else {
          // Une erreur s'est produite lors de la configuration de la requête
          console.error('Erreur de configuration de la requête:', error.message);
          Swal.fire("Échec de l'envoi de la demande", "Erreur de configuration de la requête", "error");
        }
      }
    }
  });
};


const handleContractChange = (event) => {
  const { value } = event.target;
  let pricePerDay = 0;
  let contractTerms = '';

  if (value === 'premium') {
    pricePerDay = 2;
    contractTerms = `- Assistance routière 24h/24 et 7j/7\n- Couverture étendue en cas de sinistre\n- Promotion de 10% pour chaque mois`;
  } else if (value === 'normal') {
    pricePerDay = 1.2;
    contractTerms = `- Couverture de base en cas d'accidents\n- Assistance en cas de panne\n- Promotion de 2% pour chaque mois`;
  }

  setPricePerDay(pricePerDay);
  setContractTerms(contractTerms);
  setFormData(prevState => ({
    ...prevState,
    typecontrat: value
  }));
};

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
    <CustomNavbar userRole='client' />   
    <div className="circle-container">
      <span className="message">Contactez l'agent d'entreprise d'assurance  </span>
      <IconButton href='/Chat'><div className="circle"> <ChatBubbleIcon/> </div></IconButton>
    </div>
    <div>
    <div>
      <p>Numero Serie: {numeroSerie}</p>
      <p>Modele: {model}</p>
    </div>
      <h2 id='titre'>Demande d'assurance</h2>
      <div id='m5'>  
        <a href='/Smart' id='a5'> 
          <div className='m4' id='a4'>
            <ArrowBackIcon/> 
          </div> 
        </a> 
      </div>  
    </div>
    <div id='sec4'>
      <section className="form-container" id='carer1'>
      <div id='paraf' className='paraf'><p id='paraf'>NB: Veuillez imprimer la demande après avoir rempli le formulaire.</p> </div>
        <form className="custom-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="contract">Agence d'assurance :</label>  <br/>
            <select id="contrat" name="nomagenceassurance" value={formData.nomagenceassurance} onChange={handleChange} required>
              <option value="">Sélectionnez le nom de votre agence d'assurance</option>
              <option value="Loyd">Loyd</option>
              <option value="MAE">MAE</option>
              <option value="COMAR">COMAR</option>
              <option value="BHassurance">BHassurance</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="contract">Contrat :</label>  <br/>
            <select id="contrat" name="typecontrat" value={formData.typecontrat} onChange={handleContractChange} required>
              <option value="">Sélectionnez un contrat</option>
              <option value="premium">Contrat Premium</option>
              <option value="normal">Contrat Normal</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="pricePerDay">Prix/jour :</label>  <br/>
            <input type="text" id="pricePerDay" name="pricePerDay" value={pricePerDay} readOnly required />
          </div>
          <div className="form-group">
            <label htmlFor="volProtection">Protection vol :</label>   <br/>
            <input type="checkbox" id="vol" name="volprotection" checked={formData.volprotection} onChange={handleChange}  />
          </div>
          <div className="form-group">
            <label htmlFor="contractTerms">Termes de Contrat :</label>
            <textarea id="contractTerms" name="contractTerms" value={contractTerms} readOnly required />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">Prénom :</label>
            <input type="text" id="firstName" name="prenom" value={formData.prenom} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Nom :</label>
            <input type="text" id="lastName" name="nom" value={formData.nom} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Numéro de téléphone :</label>
            <input type="tel" id="phoneNumber" name="numerotel" value={formData.numerotel} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail :</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Date de Début :</label>
            <input type="date" id="startDate" name="datedebut" value={formData.datedebut} min={getCurrentDate()} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">Date de Fin :</label>
            <input type="date" id="date" name="datefin" value={formData.datefin} onChange={handleChange} required min={getCurrentDate()}/>
          </div>
          <div id='dmd'>
          <button className='bn632-hover bn26' id='bout' type="submit">Suivant</button> </div>
        </form>
        <br/>
        <br/>
      </section>
    </div>
    <div className='print-btn1'>
      <button className='bn632-hover bn26' type="button" onClick={handlePrint}>Imprimer</button>
    </div>
      
      <Footer/>
    </div>
  );
}

export default Demandassurance;