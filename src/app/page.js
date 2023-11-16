
import Contact from '../../components/Contact'
import Steps from '../../components/Steps'
import styles from './page.module.css'
import Header from '../../components/Header'

export default function Home() {
  return (
 <>
 <Header/>
   <div className={styles.container}>
    
    <div className={styles.item1}>
     <Steps />
    </div>
     <div className={styles.item2}>
        <Contact/>
    </div>
    
  </div>
    
    
    
</>
   
  )
}
