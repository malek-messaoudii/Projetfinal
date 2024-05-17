import Swal from 'sweetalert2'
import './Smart.css'
import iphone12 from '../assets/iphone12.jpeg';
import iphone15 from '../assets/iphone15.jpeg';
import Footer from '../Footer/Footer';
import Navbar from '../navbar'
import Carousel from 'react-bootstrap/Carousel';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CustomNavbar from '../Navbar1';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IconButton } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
function Smart() {
  const [numeroSerie, setNumeroSerie] = useState('');
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [columns, setColumns] = useState(['idp', 'modele', 'marque', 'prix', 'image']); // Manually set the columns
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
          console.log(filterValue)
          console.log(item.marque)
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
        text: "Vous Devez Entrez Le Numéro de Serie Du Produit Que Vous voulez l'assurer",
       
      });
    } else {
            
        history.push('/Demande', { state: { numeroSerie } });
        
    }
  };//Fonction de Navigation:Cette fonction vérifie que le numéro de série est bien renseigné, puis utilise navigate pour rediriger vers la page /Demande, en passant numeroSerie dans state.

  return (


    <div>
       <CustomNavbar userRole='client' />   
      <div className="circle-container">
      <span className="message">Contactez l'agent d'entreprise d'assurance  </span>
      <IconButton href='/Chat'><div className="circle"> <ChatBubbleIcon/> </div></IconButton>
    </div>
        <div>
      <h2 id='titre'>Boutique des smartphones</h2>
      <div id='m5'>  <a href='/BoutiqueSP' id='a5'> <div className='m4' id='a4'><ArrowBackIcon/> </div> </a> </div>  
      </div>
        <div className='z5'>
          <div className='carree1'>
          <div id='z9'>
                <h3 className='z9'> Choisir un smartphone : </h3>
              </div>
            <div className='z3'>
              
            
    <Carousel data-bs-theme="light">
    
    {records.map((record, index) => (
              <Carousel.Item key={index}>
                {record.image ?<img className="d-block w-100" src={record.image}style={{ height: '250px'}}/>: ''}
                
                <div className="formgroup" style={{ padding: '20px' }}>
                  <div className='inp'>
                    <input type="text" id="marque" placeholder='Marque' name="marque"aria-readonly  value={record.marque} />
                  </div>
                  <div className='inp'>
                    <input type="text" id="modele" placeholder='Modèle' name="modele" aria-readonly value={record.modele} />
                  </div>
                  <div className='inp'>
                    <input type="text" id="prix" placeholder='Prix' name="prix" aria-readonly value={record.prix} />
                  </div>
                  
                  <div className='inp'>
                    <input type="text" id="numeroSerie" placeholder='Numéro série' name="numeroSerie" value={numeroSerie} onChange={handleInputChange} />
                  </div>
                </div>

                <div className='bt111'>
              <a href='/Demande' id='bout'><button className='bn632-hover bn26' id='bout' type="submit"onClick={handleNextClick}>Suivant</button></a>
              </div>
              </Carousel.Item>
            ))}
          
    </Carousel>
    </div>
          </div>
        </div>
        
      <Footer/>
    </div>
  );
}

export default Smart