import {useEffect} from 'react';
import {useRouter} from 'next/router';


const NotFound = () => {

    const router = useRouter();

    useEffect(()=> {
       setTimeout(()=>{
            router.push('/')
       }, 3000)
    }, [])


    return(
        <div className="not-found">
            <h1>Oooops....</h1>
            <h2>Page not found</h2>
            <p> Go back to<a href="/"> Homepage</a></p>
        </div>
    )
}

export default NotFound;
