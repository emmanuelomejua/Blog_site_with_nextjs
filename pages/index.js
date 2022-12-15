import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Student's list || Home</title>
      </Head>
        <div> 
        
          <h1 className={styles.title}>Home </h1>
          <p className={styles.title}>This is a question that you might be asking given that each Ubuntu version comes with its own set of repositories which provide a wide selection of software packages. In fact, Ubuntu has over 47,000 software packages provided by the 4 main repositories.  Each version of Ubuntu comes with 4 main repositories:</p>
          
          <p className={styles.title}>This is a question that you might be asking given that each Ubuntu version comes with its own set of repositories which provide a wide selection of software packages. In fact, Ubuntu has over 47,000 software packages provided by the 4 main repositories.  Each version of Ubuntu comes with 4 main repositories:</p>
          <a href='/ninjas'  className={styles.btn}>See Ninja List</a>
         
       </div>
     </>   
  )
}
