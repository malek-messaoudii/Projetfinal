import React, { useState, useEffect } from 'react';
import './Objets.css';
import Navbar from '../navbar';
import LogoutIcon from '@mui/icons-material/Logout';
import Footer from '../Footer/Footer';
import InfoIcon from '@mui/icons-material/Info';
import CustomNavbar from '../Navbar1';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IconButton } from '@mui/material';

function Compte() {
  const [columns, setColumns] = useState(['N° contrat', "Date d'effet", "Date d'échéance", "Modéle", "Produit", "Etat"]);
  const [records, setRecords] = useState([]);

  return (
    <div>
<CustomNavbar userRole='client' />   
      <div className="circle-container">
      <span className="message">Contactez l'agent d'entreprise d'assurance  </span>
      <IconButton href='/Chat'><div className="circle"> <ChatBubbleIcon/> </div></IconButton>
    </div>      <div className='div2'>
        <h1 className='title3'> Tableau de bord  </h1>
      </div>
      <div className='rec2'>
        <div id='rec3'>
          <div>
            <a href='/Compte'><button className='button'> Mon compte</button></a>
            
          </div>
          <div>
            <a href='/Objets'><button className='button'>Mes objets assurés</button></a>
          </div>
          <div>
            <a href='/Remboursement'><button className='button'>Mes remboursements</button></a>
            <div className='petit'></div>
          </div>
          <div>
            <a href='/Contact'><button className='button'>Contactez-nous</button></a>
          </div>
        </div>
      </div>
      <div id='divi1'>
      <h2 className='titrage'>Ici, vous trouvez vos remboursements</h2>
      <br/>
        <table>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {records.length === 0 ? (
              <tr>
                <td colSpan={columns.length} style={{ textAlign: 'center' }}>
                  <InfoIcon style={{ marginRight: '5px' }} />
                  <p>Vous n'avez pas encore de contrat d'assurance actif</p>
                </td>
              </tr>
            ) : (
              records.map((record, index) => (
                <tr key={index}>
                  <td>{record.Ncontrat}</td>
                  <td>{record.DateEf}</td>
                  <td>{record.DateEc}</td>
                  <td>{record.Modéle}</td>
                  <td>{record.Produit}</td>
                  <td>{record.Etat}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default Compte;
