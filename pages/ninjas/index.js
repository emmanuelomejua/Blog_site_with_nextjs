import Link from 'next/link';
import styles from '../../styles/ninja.module.css';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()
    

    return {
        props: { ninjas: data }
    }
}

const Ninjas = ({ninjas}) => {
    return(
        <div>
           
            <h1 className={styles.nil}>All Students</h1>
            {ninjas.map(ninja => (
                <div className={styles.single}>
                    <Link href={'/ninjas/' + ninja.id} key={ninja.id}>                   
                        <h3>Name: {ninja.name}</h3>                         
                    </Link>
                </div>
            ))}
            
        </div>
    )
}

export default Ninjas;
