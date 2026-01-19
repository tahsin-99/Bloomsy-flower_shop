import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={'/'} className='flex items-center'>
            <Image alt='logo-fruits' src={'/logo.jpg'} width={80} height={70}>

            </Image>
            <h2 className='text-xl font-bold'>Bloomsy</h2>
        </Link>
    );
};

export default Logo;