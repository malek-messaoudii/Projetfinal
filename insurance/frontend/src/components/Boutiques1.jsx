import React from 'react'
import './Boutiques1.css'
import ordinateur from './assets/ordinateur.png';
import smartphone from './assets/smartphone.png';
import electromenager from './assets/electromenager.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton} from '@mui/material';


function Boutiques1() {
  return (
    <div>
       <div className='div1'>
        <h1 className='title2'> Boutique  </h1>
        </div>
        <div>
        <h3 id='titre'>  Assurez vos ordinateurs, vos smartphones ou bien vos <br/> produits électroménagers  </h3>
        </div>
        <div className='carreau3'>
            <div className='care1'>
                <h4> Vos ordinateurs </h4>
                <div className='image1'> 
                <img alt="" src={ordinateur} width="250" height="250" />
                </div>
                <p className='p1'> <b> Passez une assurance pour <br/> vos ordinateurs </b></p>
                <div className='boutton'> 
                <IconButton href='/Boutiqueor'>
                <div className='rectangle'>
                <div className='icon'>
                   <ArrowForwardIcon />
                </div> 
                </div>               
                </IconButton>
                </div>
            </div>
            <div className='care2'>
              <h4> Vos smartphones </h4>
              <div className='image2'> 
                <img alt="" src={smartphone} width="150" height="150" className="smartphone" />
                </div>
                <p className='p2'> <b> Passez une assurance pour <br/> vos smartphones </b></p>
                <div className='boutton'> 
                <IconButton>
                <div className='rectangle'>
                <a href='/BoutiqueSP'> <div className='icon'>
                   <ArrowForwardIcon />
                </div> </a> 
                </div>               
                </IconButton>
                </div>
                
            </div>
            <div className='care3'>
            <h4> Vos électroménagers </h4>
                <div className='image3'> 
                <img alt="" src={electromenager} width="250" height="200" className="electromenager" />
                </div>
                <p className='p3'> <b> Passez une assurance pour <br/> vos produits électroménagers </b></p>
                <div className='boutton'> 
                <IconButton>
                <div className='rectangle'>
                <div className='icon'>
                   <ArrowForwardIcon />
                </div> 
                </div>               
                </IconButton>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Boutiques1