import React from 'react';
import argosLogo from '../argos_logo.png';
import './style.scss';

const SmallFormBox = props => (
   <section className="module small-form-module">
      <section className="login-icon">
         <div className="icon-container">
            <img src={argosLogo} className="img-responsive" alt="Login icon" />
         </div>
      </section>

      {props.children}
   </section>
);

export default SmallFormBox;
