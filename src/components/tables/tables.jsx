import { Link } from "react-router-dom";
import styles from './style.module.css';

function Tables() {
    
    return ( 
        <div  >
            <h3>Temperature Table</h3>
            <div className={styles['card']}>
            <img  className={styles['table']} src=".\images\3.PNG" alt=""></img> 
            </div>
            <h3>Electricity Table</h3>
            <div className={styles['card']}>
            
            <img  className={styles['table']} src=".\images\2.PNG" alt=""></img> 
            </div>
            
            <h3>Gaz Table</h3>
            <div className={styles['card']}> 
           
            <img  className={styles['table']} src=".\images\1.PNG" alt=""></img> <br/>
            </div>

            <Link to="/dashboard">
            <button className={styles['btn']}>back to Dashboard</button>
            </Link> 
            <Link to="/home">
            <button className={styles['btn']}>Home</button>
            
            </Link>
           
        </div>
        

     );
}

export default Tables;