import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.module.css';
function Footer() {
    return ( 
      <div className={styles['footer']}>
      <div>
       <p>© 2023 All Rights Reserved by EnergyConsumption</p>
      </div>
      </div>
     );
}

export default Footer;