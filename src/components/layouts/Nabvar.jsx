"use client"
import React, { useEffect, useState } from 'react';
import Logo from './Logo';

import NavLink from '../buttons/NavLink';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';



const Navbar = () => {
   const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if auth cookie exists
    setIsLoggedIn(Cookies.get("auth") === "true");
  }, []);

  const handleLogout = () => {
    Cookies.remove("auth");
    setIsLoggedIn(false);
    router.push("/login");
  };
  const nav=<>
  <li>
    <NavLink href={'/'}>Home</NavLink>
  </li>
  <li>
    <NavLink href={'/about'}>About</NavLink>
  </li>
  <li>
    <NavLink href={'/all-flowers'}>All flowers</NavLink>
  </li>
  <li>
    <NavLink href={'/contact'}>Contact</NavLink>
  </li>
  </>
    return (
      <>
        <div className="navbar fixed top-0 left-0 z-50 bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {nav}
      </ul>
    </div>
     <Logo></Logo>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {nav}
    </ul>
  </div>
   <div className="navbar-end">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="btn btn-primary btn-outline">
            Logout
          </button>
        ) : (
          <Link href={"/login"}>
            <button className="btn btn-primary btn-outline">Login</button>
          </Link>
        )}
      </div>
</div>
      </>
    );
};

export default Navbar;