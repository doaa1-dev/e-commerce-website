import Link from 'next/link'

const Navbar = () => {
    return (
            <div className="navcontainer">
                <Link href="/"><a className="cart"></a></Link>
                <span className='count'></span>
            </div>
    );
}

export default Navbar