import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Boutique from './components/Boutique/boutique';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'; 
import Contact from './components/Contact/Contact';
import Compte from './components/Compte/Compte';
import Réparation from './components/Réparation/Réparation';
import Autoréclamation from './components/Auto-réclamation/Auto-réclamation';
import Createuser from './components/Login/createuser';
import Createsoc from './components/Login/createsoc';
import Pass from './components/Login/Pass';
import Opération from './components/Réparation/Opération';
import Nvpass from './components/Login/Nvpass';
import Réclamation from './components/Réclamation/Réclamation';
import Login from './components/Login/Login';
import Home2 from './components/Home2/Home2';
import Contact2 from './components/Contact2/Contact2';
import Nvpass2 from './components/Compte/Nvpass2';
import BoutiqueSP from './components/Boutique/BoutiqueSP';
import Smart from './components/Boutique/Smart';
import Ajout from './components/Auto-réclamation/Ajout';
import Consultation from './components/Auto-réclamation/Consultation';
import Demandassurance from './components/Demandeassurance/Demandeassurance';
import Paiement from './components/Paiement/Paiement';
import Objets from './components/Compte/Objets';
import Rembourssement from './components/Compte/Rembourssement'
import Chat from './components/Chat/Chat';
import Shop from './components/Shopagent/Shop';
import AddP from './components/Shopagent/AddP';
import Home3 from './components/Home3/Home3'
import EditP from './components/Shopagent/EditP';
import Pol from './components/Police/Pol';
import Repd from './components/Réparation/Rep';
import Assur from './components/Réclamation/Assur';
import Contact3 from './components/Contact/Contact3';
import Home4 from './components/Home4/Home4';
import Bout from './components/Boutique/Bout';
import Pol1 from './components/Police/Pol1';
import Rep1 from './components/Réparation/Rep1';
import Contact4 from './components/Contact/Contact4';
import Rep2 from './components/Réparation/Rep2';
import Pol2 from './components/Police/Pol2';
import Assur2 from './components/Réclamation/Assur2';
import Contact5 from './components/Contact/Contact5';
import Bout2 from './components/Boutique/Bout2';
import Home1 from './components/Home/Home1';
import Assur1 from './components/Réclamation/Assur1';
import Compte4 from './components/Compte/Compte4';
import Policeuse from './components/Police/Policeuse';
import Home5 from './components/Home/Home5';
import Bout3 from './components/Boutique/Bout3';
import Police from './components/Police/Police';
import Rep3 from './components/Réparation/Rep3';
import Assur3 from './components/Réclamation/Assur3';
import Contact1 from './components/Contact/Contact1';
import Compte5 from './components/Compte/Compte5';
import Claim from './components/Police/Claim';
import Boutiqueor from './components/Boutique/Boutiqueor';
import Repair from './components/Réparation/Repair';
import Gestion from './components/Réclamation/Gestion';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch> 
            <Route exact path="/" component={Home1} />
            <Route path="/login" component={Login} />
            <Route path="/Home1" component={Home1} />
            <Route path="/home" component={Home} />
            <Route path="/boutique" component={Boutique} />
            <Route path="/contact" component={Contact} />
            <Route path="/Compte" component={Compte} />
            <Route path="/Réparation" component={Réparation} />
            <Route path="/Autoréclamation" component={Autoréclamation} />
            <Route path="/Createuser" component={Createuser} />
            <Route path="/Createsoc" component={Createsoc} />
            <Route path="/Pass" component={Pass} />
            <Route path="/Opération" component={Opération} />
            <Route path="/Nvpass" component={Nvpass} />
            <Route path="/Réclamation/:claimId" component={Réclamation} />
            <Route path="/Home2" component={Home2} />
            <Route path="/Contact2" component={Contact2} />
            <Route path="/Nvpass2" component={Nvpass2} />
            <Route path="/BoutiqueSP" component={BoutiqueSP} />
            <Route path="/Smart" component={Smart} />
            <Route path="/Ajout" component={Ajout} />
            <Route path="/Consultation" component={Consultation} />
            <Route path="/Demande" component={Demandassurance} />
            <Route path="/Paiement" component={Paiement} />
            <Route path="/Objets" component={Objets} />
            <Route path="/Remboursement" component={Rembourssement} />
            <Route path="/Chat" component={Chat} />
            <Route path="/Shop" component={Shop} />
            <Route path="/AddP" component={AddP} />
            <Route path="/EditP" component={AddP} />
            <Route path="/Home3" component={Home3} />
            <Route path="/Pol" component={Pol} />
            <Route path="/Rep" component={Repd} />
            <Route path="/Assur" component={Assur} />
            <Route path="/contact3" component={Contact3} />
            <Route path="/Home4" component={Home4} />
            <Route path="/Bout" component={Bout} />
            <Route path="/Pol1" component={Pol1} />
            <Route path="/Rep1" component={Rep1} />
            <Route path="/contact4" component={Contact4} />
            <Route path="/Rep2" component={Rep2} />
            <Route path="/Pol2" component={Pol2} />
            <Route path="/Assur2" component={Assur2} />
            <Route path="/contact5" component={Contact5} />
            <Route path="/Bout2" component={Bout2} />
            <Route path="/Assur1" component={Assur1} />
            <Route path="/Compte4" component={Compte4} />
            <Route path="/Policeuse" component={Policeuse} />
            <Route path="/contact1" component={Contact1} />
            <Route path="/Bout3" component={Bout3} />
            <Route path="/Assur3" component={Assur3} />
            <Route path="/Rep3" component={Rep3} />
            <Route path="/Home5" component={Home5} />
            <Route path="/Compte5" component={Compte5} />
            <Route path="/Police" component={Police} />
            <Route path="/claim/:claimId" component={Claim} />
            <Route path="/Boutiqueor" component={Boutiqueor} />
            <Route path="/repair/:claimId" component={Repair} />
            <Route path="/Gestion" component={Gestion} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
