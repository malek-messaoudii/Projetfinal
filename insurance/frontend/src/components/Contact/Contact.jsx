import React, { useState } from 'react';
import './Contact.css';
import Navbar from '../navbar';
import Footer from '../Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomNavbar from '../Navbar1';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IconButton } from '@mui/material';

const backendURL = 'http://localhost:4000/formcontact/';

function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    tel: '',
    email: '',
    ville: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendURL}/addcontactform`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        toast.success('Formulaire envoyé avec succés!');
        setFormData({
          nom: '',
          prenom: '',
          tel: '',
          email: '',
          ville: '',
          message: ''
        });
      } else {
        toast.error("Echec d''envoi.");
      }
    } catch (error) {
      toast.error('Erreur', error);
    }
  };

  return (
    <div>
<CustomNavbar userRole='client' />   
      <div className="circle-container">
      <span className="message">Contactez l'agent d'entreprise d'assurance  </span>
      <IconButton href='/Chat'><div className="circle"> <ChatBubbleIcon/> </div></IconButton>
    </div>        <div className='div1'>
        <h1 className='title2'> Contact <br/>
        Disponible pour vous écouter </h1>
        </div>
    <div className="form-container">
      <form className="custom-form" onSubmit={handleSubmit}>
      <div className="form-group">
      <label htmlFor="nom">Nom :</label>
      <input type="text" id="nom" name="nom" required onChange={handleChange} value={formData.nom}/>
    </div>
    <div className="form-group">
      <label htmlFor="prenom">Prénom :</label>
      <input type="text" id="prenom" name="prenom" required onChange={handleChange} value={formData.prenom}/>
    </div>
    <div className="form-group">
      <label htmlFor="tel">Numéro de téléphone :</label>
      <input type="tel" id="tel" name="tel" required onChange={handleChange} value={formData.tel}/>
    </div>
    <div className="form-group">
      <label htmlFor="email">E-mail :</label>
      <input type="email" id="email" name="email" required onChange={handleChange} value={formData.email}/>
    </div>
    <div className="form-group">
      <label htmlFor="ville">Ville :</label>
      <input type="text" id="ville" name="ville" required onChange={handleChange} value={formData.ville}/>
    </div>
    <div className="form-group">
      <label htmlFor="message">Message :</label>
      <textarea id="message" name="message" required onChange={handleChange} value={formData.message}></textarea>
    </div>
    <button className='bn632-hover bn26' type="submit" id='gd'>Envoyer</button>
  </form>
  </div>
  <ToastContainer position="top-center" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
  <div className='carte'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102183.64152176853!2d10.079258697265626!3d36.83675660000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd353c2a9bdafb%3A0xf40a3b2820de190d!2sPolytech-Intl!5e0!3m2!1sfr!2stn!4v1712863808074!5m2!1sfr!2stn" width="100%" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <Footer/>
</div>
  );
}

export default Contact;
