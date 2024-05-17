import React, { useState } from 'react';
import './AddP.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom'; 
import Navbar from '../navbar';
import Footer from '../Footer/Footer';
import CustomNavbar from '../Navbar1';

function AddP() {
  const [produit, setProduit] = useState({
    idp: '',
    categorie: '',
    modele: '',
    prix: '',
    image: null, // Changed to accept file input
    idb: '',
  });
  const history = useHistory();
  const handleChange = (event) => {
    if (event.target.name === 'image') {
      const file = event.target.files[0];
      setProduit(prevState => ({
        ...prevState,
        image: file,
      }));
    } else {
      const { name, value } = event.target;
      setProduit(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    Object.keys(produit).forEach(key => {
      formData.append(key, produit[key]);
    });

    Swal.fire({
      title: "Voulez-vous ajouter ce produit ?",
      showDenyButton: true,
      confirmButtonText: "Ajouter",
      confirmButtonColor: "#5ed977",
      customClass: {
        confirmButton: 'custom-confirm-button-class',
      },
      denyButtonText: "Annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post('http://localhost:4000/produit/addproduit', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(response => {
          Swal.fire("Produit ajouté !", "", "success");
          history.push('/Shop');
        })
        .catch(error => {
          console.error('Failed to add product:', error.response.data);
          Swal.fire("Échec de l'ajout du produit", error.response.data.message || 'Erreur inconnue', "error");
        });
      }
    });
  };

  return (
    <div>
      <CustomNavbar userRole='agentboutique' />
      <div className='add'>
        <div className="containergestiondonnées">
          <div className="containerform">
            <div id='m555'>
              <a href='/Shop' id='a55'>
                <div className='m44' id='a44'>
                  <ArrowBackIcon/>
                </div>
              </a>
            </div>
            <div className="heading">Nouveau Produit</div>
            <form className="form1" onSubmit={handleSubmit}>
              <input className="input" type="text" name="idp" placeholder="Entrer l'ID du produit" value={produit.idp} onChange={handleChange} required/>
              <input className="input" type="text" name="categorie" placeholder="Entrer la categorie du produit" value={produit.categorie} onChange={handleChange}/>
              <input className="input" type="text" name="modele" placeholder="Entrer le modele du produit" value={produit.modele} onChange={handleChange}/>
              <input className="input" type="text" name="marque" placeholder="Entrer la marque du produit" value={produit.marque} onChange={handleChange}/>
              <input className="input" type="text" name="prix" placeholder="Entrer le prix du produit" value={produit.prix} onChange={handleChange}/>
              <input className="input" type="file" name="image"  onChange={handleChange} id='fich' required />
              <input className="input" type="text" name="idb" placeholder="Entrer l'ID de la boutique" value={produit.idb} onChange={handleChange} />
              <div className='but'>
                <input className="valid-button" type="submit" value="Valider" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default AddP;