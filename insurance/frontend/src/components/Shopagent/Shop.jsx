import React, { useState, useEffect } from 'react';
import './Shop.css'
import Navbar from '../navbar'
import Footer from '../Footer/Footer'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'; 
import Swal from 'sweetalert2';
import InfoIcon from '@mui/icons-material/Info';
import CustomNavbar from '../Navbar1';


function Shop() {
  const [columns, setColumns] = useState(['idp', 'categorie', 'modele', 'marque','prix', 'image','idb', 'Modification', 'Suppression']); // Manually set the columns
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/produit/allproduits')
      .then(res => {
        const filteredData = res.data.map(item => ({
          idp: item.idp,
          categorie: item.categorie,
          modele: item.modele,
          marque:item.marque,
          prix: item.prix,
          image:  item.image ? item.image.replace(/\\/g, '/') : '',
          idb: item.idb
        }));
        setRecords(filteredData);
      })
      .catch(err => console.error("Error fetching data: ", err));
  }, []);

  const handleDelete = (idp) => {
    Swal.fire({
      title: 'Êtes-vous sûr(e) ?',
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5ed977',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, Supprime!'
    }).then((result) => {
      if (result.isConfirmed) {
    axios.delete(`http://localhost:4000/produit/deleteproduit/${idp}`)
      .then(() => {
        Swal.fire(
          'Produit!',
          ' a été supprimée ave succés',
          ' Succés !!'
        );
       
      })
      .catch(error => {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to delete the product.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        console.error('Erreur lors de la suppression', error);
      });
    }
      });
  }
  return (
    <div>
<CustomNavbar userRole='agentboutique' />       
<div className='div1'>
        <h1 className='title2'> Produits </h1>
        </div>
        
        <div>
          <h2 id='titre'> Ici vous pouvez manipuler vos <br/> produits</h2>
        </div> 
       <div className='tabtab'>
       <table >
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td>{record.idp}</td>
              <td>{record.categorie}</td>
              <td>{record.modele}</td>
              <td>{record.marque}</td>
              <td>{record.prix}</td>
              <td>
              {record.image ? <img src={record.image} alt="Produit" style={{ maxWidth: '100px' }} /> : ''}
                </td>
              <td>{record.idb}</td>
              <td> <button id="beditsupp"> <svg className="iconeditdelete"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#5ed977" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg></button> </td>
              <td><button onClick={() => handleDelete(record.idp)} id="beditsupp"><svg  className="iconeditdelete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#f02424" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div id='btn1'>
    <a href='/AddP'><button className='btn1'> Ajouter un produit </button></a>
    </div>
    <Footer/>
    </div>
  )
}

export default Shop