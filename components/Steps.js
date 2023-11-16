import React from 'react'

import styles from './Steps.module.css'
import Symbol from './Symbol'

function Steps() {
  return (
    <>

   <div className={styles.text}>  Quelle sera la prochaine étape?  </div> 
   
   <div className={styles.container}>
   <div className={styles.item} >
   <Symbol/>
   </div>

   <div>
    <div className={styles.description}>
     
        <p>Nous préparons une proposition</p>
        <p>Nous discutons ensemble</p>
        <p>Nous commençons</p>
    </div >
   </div>
   
   </div>
    
   </>
   
  )
}

export default Steps
