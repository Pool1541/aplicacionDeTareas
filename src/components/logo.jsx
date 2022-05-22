import React from 'react';
import freeCodeCampLogo from '../images/freecodecamplogo.png';
import '../stylesheets/logo.css';

function Logo() {
  return(
    <div className='freecodecamp-logo-contenedor'>
      <img src={freeCodeCampLogo} className='freecodecamp-logo'/>
    </div>

  )
}

export default Logo;