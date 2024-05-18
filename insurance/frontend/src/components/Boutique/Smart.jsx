import Swal from 'sweetalert2';
import './Smart.css';
import Footer from '../Footer/Footer';
import CustomNavbar from '../Navbar1';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IconButton } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Smart() {
  const [numeroSerie, setNumeroSerie] = useState('');
  const [records, setRecords] = useState([]);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filterValue = params.get('filter')?.toLowerCase();
    console.log('Filter Value:', filterValue);
    axios.get('http://localhost:4000/produit/allproduits')
      .then(res => {
        const filteredData = res.data
          .filter(item => {
            const isFiltered = item.marque.toLowerCase() === filterValue && item.categorie.toLowerCase() === 'smartphone';
            console.log('Item:', item, 'Is Filtered:', isFiltered);
            return isFiltered;
          })
          .map(item => ({
            idp: item.idp,
            modele: item.modele,
            marque: item.marque,
            prix: item.prix,
            image: item.image ? item.image.replace(/\\/g, '/') : '',
          }));
        setRecords(filteredData);
      })
      .catch(err => console.error("Error fetching data: ", err));
  }, [location.search]);

  const handleInputChange = (event) => {
    setNumeroSerie(event.target.value);
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    if (numeroSerie.trim() === '') {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Vous devez entrer le numéro de série du produit que vous voulez assurer",
      });
    } else {
      history.push('/Demande', { state: { numeroSerie } });
    }
  };

  return (
    <div>
      <CustomNavbar userRole='client' />
      <div className="circle-container">
        <span className="message">Contactez l'agent d'entreprise d'assurance</span>
        <IconButton href='/Chat'><div className="circle"><ChatBubbleIcon /></div></IconButton>
      </div>
      <div>
        <h2 id='titre'>Boutique des smartphones</h2>
        <div id='m5'>
          <a href='/BoutiqueSP' id='a5'>
            <div className='m4' id='a4'><ArrowBackIcon /></div>
          </a>
        </div>
      </div>
      <div className='z5'>
        <div className='carree1' id='prd'>
          <div id='z9'>
            <h3 className='z9'>Choisir un smartphone :</h3>
          </div>
          <div className='z3'>
            <Carousel data-bs-theme="light">
              {records.map((record, index) => (
                <Carousel.Item key={index}>
                  {record.image && <img  src={record.image} style={{ height: '250px' }} alt={`Smartphone ${index}`} />}
                  <div className="formgroup">
                    <div className='inp'>
                      <div className='lbl'><label>Marque : </label></div>
                      <input type="text" id="numeroSerie" placeholder='Marque' name="marque" readOnly value={record.marque} />
                    </div>
                    <div className='inp'>
                    <div className='lbl'><label >Modele : </label></div>
                      <input type="text" id="numeroSerie" placeholder='Modèle' name="modele" readOnly value={record.modele} />
                    </div>
                    <div className='inp'>
                    <div className='lbl'><label >Prix : </label></div>
                      <input type="text" id="numeroSerie" placeholder='Prix' name="prix" readOnly value={record.prix} />
                    </div>
                    <div className='inp'>
                      <input type="text" id="numeroSerie" placeholder='Tapez votre numéro série' name="numeroSerie" value={numeroSerie} onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className='bt111'>
                    <button className='bn632-hover bn26' id='bout' type="submit" onClick={handleNextClick}>Suivant</button>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Smart;
