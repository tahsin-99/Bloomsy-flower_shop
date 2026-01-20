import React from 'react';
import Image from 'next/image';

import xImg from "../../../public/x.png";
import inImg from "../../../public/in.png";
import fImg from "../../../public/f.png";
import mImg from "../../../public/m.png";
import Logo from './Logo';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer sm:footer-horizontal bg-secondary text-base-content p-10">
      <Logo />

      <nav>
        <div className="space-y-2 text-black">
          <h3 className="font-semibold">Social Links</h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image src={xImg} alt="X" width={20} height={20} />
              <a href="https://x.com/tahsinsikder00" target="_blank" rel="noopener noreferrer">
                Bloomsy System
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Image src={inImg} alt="LinkedIn" width={20} height={20} />
              <a href="https://www.linkedin.com/in/tahsin-sikder99/" target="_blank" rel="noopener noreferrer">
                Bloomsy System
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Image src={fImg} alt="Facebook" width={20} height={20} />
              <a href="https://www.facebook.com/tahsinsikder.prithul" target="_blank" rel="noopener noreferrer">
                Bloomsy System
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Image src={mImg} alt="Email" width={20} height={20} />
              <a href="mailto:support@cst.com" target="_blank" rel="noopener noreferrer">
                support@bloomsy.com
              </a>
            </div>
          </div>
        </div>
      </nav>

      <nav>
        <h6 className="footer-title">Company</h6>
        <Link href={'/about'} className="link link-hover">About us</Link>
        <Link href={'/contact'} className="link link-hover">Contact</Link>
       
      </nav>

      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link href={'/terms'} className="link link-hover">Terms of use</Link>
        <Link href={'/policy'} className="link link-hover">Privacy policy</Link>
        
      </nav>
      <p className=" text-black text-[16px] text-center mb-8">
          © 2025-26 Bloomsy All rights reserved.
        </p>
    </div>
    
  );
};

export default Footer;
