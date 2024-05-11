import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import defaultImage from '@/public/default.jpeg'
import "./navbar.css";

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>Hotel Haven</h1>
            <div className='navlinks'>
                <Link href={'/'}>Sign In</Link>
                <Link href={'/signUp'}>Sign UP</Link>
                <Link href={'/'}></Link>
                
            </div>
            <div className='users'>
                <Image className='img' src={defaultImage} alt='default' />
            </div>
        </div>
    );
};

export default Navbar;