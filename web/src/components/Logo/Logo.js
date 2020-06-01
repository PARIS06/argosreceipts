import React from 'react';

import ArgosLogo from '../../assets/Images/amazonlogo.png';
import classes from './Logo.module.css';

const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={ArgosLogo} alt="Argos Logo" />
    </div>
);

export default Logo; 
