import React, { useState, useEffect } from 'react';
import './Login.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/logoser.png';
import Footer from '../Footer/Footer';
import { IconButton } from '@mui/material';
import Google from '../assets/google.png';
import Facebook from '../assets/facebook.png';
import { auth, provider } from '../../Firebase';
import { useStateValue } from '../../stateprovide';
import { actionTypes } from '../../Reducer';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import CustomNavbar1 from '../Navbar/Navbar';

const backendURL = 'http://127.0.0.1:4000/user/';

function Login() {


    const [email, setEmail] = useState('');
    const [mdp, setPassword] = useState('');
    const [user, dispatch] = useStateValue();
    const [nomagence, setNomagence] = useState('');
    const [userRole, setUserRole] = useState(null); // State to store user role

    useEffect(() => {
        window.fbAsyncInit = function() {
            window.FB.init({
                appId: '1408402516461412',
                cookie: true,
                xfbml: true,
                version: 'v12.0'
            });
        };

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, []);
    const history = useHistory();
    const handleFacebookLogin = () => {
        window.FB.login(response => {
            if (response.authResponse) {
                console.log('User logged in with Facebook:', response.authResponse);
                history.push('/home');
            } else {
                toast.error('Login is cancelled or not authorized.');
            }
        }, { scope: 'email' });
    };
    const histor = useHistory();
    const handleGoogleLogin = async () => {
        try {
            const result = await auth.signInWithPopup(provider);
            const user = result.user;
            dispatch({
                type: actionTypes.SET_USER,
                user: user
            });
            histor.push('/home'); // Déplacer cette ligne ici après la mise à jour du state
        } catch (error) {
            toast.error(error.message);
        }
    };


    const handleLogin = async (ev) => {
        ev.preventDefault();
        try {
            const response = await axios.post(`${backendURL}/login1`, { email: email, mdp: mdp }, { withCredentials: true });
            if (response.data && response.data.mytoken) {
                localStorage.setItem('accessToken', response.data.mytoken);
                localStorage.setItem('userEmail', email);
                const user = await fetch(`${backendURL}/getuser/${email}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    }
                });
                const userData = await user.json();
                console.log("User data:", userData); // Log the userData to see its structure
                
                const userRole = userData.role; // Accessing user role from parsed response
                console.log("User role:", userRole); 
                setUserRole(userRole); 
                localStorage.setItem('userRole', userRole); 
                if (userRole!=='Client')
                 {   const nomagence = userData.noms; 
                console.log("Nom agence:", nomagence); 
                setNomagence(nomagence); 
                localStorage.setItem('nomagence',nomagence ); 
                }
             
                switch (userRole) {
                    case 'agentassurance':
                        history.push('/Home4');
                        break;
                    case 'agentreparation':
                        history.push('/Home2');
                        break;
                    case 'agentboutique':
                        history.push('/Home3');
                        break;
                    case 'agentpolice':
                        history.push('/Home5');
                        break;
                    default:
                        history.push('/home');
                        break;
                }
      
            } else {
                toast.error('Email ou mot de passe invalide' );
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    toast.error('Email ou mot de passe invalide');
                } else {
                    toast.error('Email ou mot de passe invalide ' );
                }
            } else if (error.request) {
                toast.error('Email ou mot de passe invalide!!');
            } else {
                toast.error('Error: ' + error.message);
            }
        }
      };
      
    

    
    
    
    
    
    
    
    
    return (
        <div>
            <Navbar expand="lg" id="navbar">
                <Navbar.Brand href="/Home1">
                    <img alt="" src={Logo} width="105" height="100" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id='nav'>
                    <Nav className="menu">
                        <Nav.Link className="menu-link" href="/Home1">Accueil </Nav.Link>
                        <Nav.Link className="menu-link" href="/Home1">  A propos de nous </Nav.Link>
                        <Nav.Link className="menu-link" href="/Home1">Nos services </Nav.Link>
                        <Nav.Link className="menu-link" href="/Contact2">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <a href='/Login' > <button className='boutton1' id='bt' > Se connecter </button> </a>
            </Navbar>
            <div className='toogle'>
                <div className='connexion'>
                    <h1 className='title2'> Connectez-vous </h1> <br/> <br/>
                    <form onSubmit={handleLogin}>
                        <div className='inpu'>
                           <label htmlfor="mdp" id=''>Adresse email : * </label>
                            <input type="email" id="password1" name="email" required placeholder='Enter votre adresse mail' onChange={(e) => setEmail(e.target.value)} />
                        </div> <br/> <br/>
                        <label htmlFor="mdp">Mot de passe : * </label>
                        <input type="password" id="password1" name="mdp" required placeholder='Entrer votre mot de passe' onChange={(e) => setPassword(e.target.value)} />
                        <div id='mdpo'> <a href="/Pass" > Mot de passe oublié? </a> </div> <br/> 
                        <div id='sec'> <button className='boutton1' type="submit">Se connecter </button> </div>
                    </form>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div id='creer'>
                        <p className='parag'> Vous n'avez pas un compte ?</p> <a href='/Createuser'> Créer maintenant</a>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <div className='rest'>
                <h3>Connectez-vous ou inscrivez-vous avec Google ou Facebook</h3>
            </div>
            <div className='rest'>
                <IconButton>
                    <button type='button' onClick={handleGoogleLogin} id='google'>
                        <img alt="" src={Google} width="50" height="50" className="google" />
                    </button>
                </IconButton>
                <IconButton>
                    <button type='button' onClick={handleFacebookLogin} id='facebook'>
                        <img alt="" src={Facebook} width="50" height="50" className="facebook" />
                    </button>
                </IconButton>
            </div>
            <Footer />
        </div>
    )
}

export default Login;