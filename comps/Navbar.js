import Image from 'next/image'

const Navbar = () => {
    return(
        <nav>
            <div className="logo">
                <Image src='/FB_IMG_1624568409254.jpg' alt='Students logo'  width={70} height={75} className='nil'/>
            </div>
            <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='/ninjas'>Ninjas</a>
        </nav>
    )
}

export default Navbar;


