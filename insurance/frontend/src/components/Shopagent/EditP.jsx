import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import './EditP.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Navbar from '../navbar';
import Footer from '../Footer/Footer';
import CustomNavbar from '../Navbar1';



export default function EditPoduit() {
 const {idp}=useParams();
 const [error, setError] = useState('');
 const [data,setData]=useState({})
 const navigate =useHistory()
  useEffect(()=>{
    axios.get(`http://localhost:4000/produit/getproduitbyid/${idp}`)
.then (res =>setData(res.data))
.catch (err=>console.log(err))

 },[idp])
 const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
        title: "Voulez-vous enregistrer les modifications ?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Enregistrer",
        confirmButtonColor: "#5ed977",
        customClass: {
            confirmButton: 'custom-confirm-button-class' // Classe CSS personnalisée pour le bouton "Enregistrer"
          },
        denyButtonText: "Ne pas enregistrer"
      }).then((result) => {
        if (result.isConfirmed) {
    axios.put(`http://localhost:4000/produit/updateproduit/${idp}`, data)
      .then(response => {
        Swal.fire("Enregistré !", "", "success");
       navigate.push('/Shop')
    })
      .catch(error => {
        console.error('Échec de la mise à jour du produit', error);
        setError('Failed to update boutique. Please try again.');
      });
    } else if (result.isDenied) {
        Swal.fire("Les modifications ne sont pas enregistrées", "", "info");
        navigate.push('/Shop');
      }
    });
  };

 
 
 
    return (
      
    <div>
<CustomNavbar userRole='agentboutique' />      
<div className='d1'>
      </div>
        <svg className="background--custom" id="demo" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path fill="#6DC0E3" fillOpacity="0.9" d="M-100 -100L200 -100L200 50L-100 50Z" style={{ animation: 'path0 5s linear infinite alternate' }} />
    <path fill="#B6D4F2" fillOpacity="0" d="M-100 -100L200 -100L200 50L-100 50Z" style={{ animation: 'path1 12.820512820512821s linear infinite alternate' }} />
    <path fill="#62A6C2" fillOpacity="0.8" d="M-100 -100L200 -100L200 40L-100 40Z" style={{ animation: 'path2 16.666666666666668s linear infinite alternate' }} />
    </svg>
    <div className='a1'>
      <div className="containerformeditboutique scale-in-ver-center">
      <div id='m5'>  <a href='/Boutiques' id='a5'> <div className='m4' id='a4'><ArrowBackIcon/> </div> </a></div>  
        <div className="heading">Modifier Boutique</div>
        <form className="form " onSubmit={handleSubmit} >
        <input  className="inputeditboutique scale-in-hor-left " type="text" name="idb"  value={data.idb} onChange={e => setData({...data, idb: e.target.value})}  placeholder='Entrer le nouveau ID'/>
        <input  className="inputeditboutique scale-in-hor-left " type="text" name="nom"  value={data.nom} onChange={e => setData({...data, nom: e.target.value})}   placeholder='Entrer le nouveau nom'/>
          <div className='but '>
            <input className="valid-button-modifier scale-in-hor-left " type="submit" value="Modifier" />
          </div>
        </form>
      </div>
      </div>
      <Footer/>
      </div>
  
  )
}