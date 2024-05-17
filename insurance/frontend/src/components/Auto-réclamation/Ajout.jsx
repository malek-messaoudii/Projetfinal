import React, { useState } from 'react';
import './Ajout.css';
import Navbar from '../navbar';
import Footer from '../Footer/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import CustomNavbar from '../Navbar1';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const backendURL = 'http://localhost:4000/claim';

function Ajout() {
    const [formData, setFormData] = useState({
        description: '',
        etat: false,
        email:''
    });

    const [files, setFiles] = useState([]);

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        const imageFiles = selectedFiles.filter(file => file.type.startsWith('image/'));
        setFiles([...files, ...imageFiles]);
    };

    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        const newValue = name === 'etat' ? checked : value;
        setFormData(prevState => ({
            ...prevState,
            [name]: newValue
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('description', formData.description);
        formDataToSend.append('etat', formData.etat);
        formDataToSend.append('email', formData.email); 
        files.forEach(file => {
            formDataToSend.append('images', file);
        });

        try {
            const response = await fetch(`${backendURL}/addclaim`, {
                method: 'POST',
                body: formDataToSend,
                
            });
            if (response.ok) {
                toast.success('Réclamation envoyée avec succès!');
                setFormData({
                    description: '',
                    etat: false,
                    email:''
                });
                setFiles([]);
            } else {
                toast.error("Échec d'envoi.");
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
                <IconButton href='/Chat'><div className="circle"> <ChatBubbleIcon /> </div></IconButton>
            </div>
            <div className='div2'>
                <h1 className='title3'>Réclamations</h1>
            </div>
            <div id="titre" className='a2'>Ajouter une réclamation</div>
            <div id='m5'> <a href='/AutoRéclamation' id='a5'> <div className='m4' id='a4'><ArrowBackIcon /> </div> </a></div>

            <div className='a1'>
                <div className="connexion" id='container55'>
                    <div id='paraf'><p id='paraf'>NB: En cas de vol, consultez page Police pour connaitre les piéces justificatifs requises.</p> </div>
                    <form action="" className="form" id={`form-container ${formData.etat ? 'expanded' : ''}`}onSubmit={handleSubmit}>
                    <label htmlFor="etat">Email :</label> <br /> <input type="text" id='email4' name="email" onChange={handleChange} value={formData.email} required placeholder='Entrer votre email'/> <br/> <br/>
                        <label htmlFor="etat">Volé :</label> <br /> <input type="checkbox" id='a3' name="etat" onChange={handleChange} checked={formData.etat} />
                        <br />
                        <br /><br /><br />

                        {formData.etat && (
                            <div>
                                <label>Entrez les pièces justificatives nécessaires (images uniquement) :</label> <br /> <br />
                                <div id='file'><input type="file" onChange={handleFileChange} multiple accept="image/*" required /></div> <br /> <br />
                            </div>
                        )}
<label htmlFor="etat">Spécifiez la catégorie du produit en cas de panne :</label> <br /> <br/>
<select id="email4" name="category" onChange={handleChange} value={formData.category}>
    <option value="">Sélectionner une catégorie</option>
    <option value="electromenager">Électroménager</option>
    <option value="smartphones">Smartphones</option>
    <option value="ordinateurs">Ordinateurs</option>
</select> <br/> <br/>  <br /> 
                        <label htmlFor="description">Description :</label>
                        <textarea className="textarea" name="description" id="description" onChange={handleChange} value={formData.description}></textarea>
                        <div className='but'>
                            <input className="login-button" type="submit" value="Valider" />
                            <br /> <br />
                        </div>
                    </form>
                </div>
                <ToastContainer position="top-center" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                <br /> <br />
            </div>
            <Footer />
        </div>
    )
}

export default Ajout;

