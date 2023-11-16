import React from "react"
import styles from './Contact.module.css'


export default function Header(){
    return(
    <div className={styles.background}>
        <br></br>
        <br></br>
        <br></br>
        <div className={styles.title}>Contactez-nous</div>
        <div className={styles.description}>Pour toutes demandes de partenariat, d’informations, vous pouvez remplir le formulaire! </div>
    </div>
    
    )
}