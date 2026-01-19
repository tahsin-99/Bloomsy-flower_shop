import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Nabvar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
           
            {children}
           
        </div>
    );
};

export default layout;