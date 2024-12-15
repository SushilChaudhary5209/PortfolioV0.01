

import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useTheme } from './ThemeContext';

function Footer() {
    const { theme } = useTheme();
    
    return (
        <div className={`footer ${theme} py-6`}>
            <div className=' flex flex-col items-center justify-center gap-4'>
                <p className='pb-6 text-3xl font-bold'>Thank you for visiting my portfolio!</p>
                <div className='flex items-center gap-3'>
                    <div className='flex justify-center items-center'>
                        <a href="https://www.facebook.com/sushilchaudharySC" className=" text-blue-500 rounded-[4px]"><FaSquareFacebook className='size-10' /></a>
                    </div>
                    <div className='insta-gradient-text size-9 rounded-[4px] flex justify-center items-center'>
                        <a href="https://www.instagram.com/sushil_14ry/" className="bg-instagram-gradient rounded-[4px] text-white"><FaInstagram className='size-9' /></a>
                    </div>
                    <div className='bg-'>
                        <a href="https://www.linkedin.com/in/sushilchaudhary0408/" className="text-[#0882BD]"><FaLinkedin className='size-10' /></a>
                    </div>
                    <div className=''>
                        <a href="#" className=""><FaSquareXTwitter className='size-10' /></a>
                    </div>
                </div>
                <p>Copyright © 2024 SushilChaudhary.com</p>
            </div>
        </div>
    );
}

export default Footer;
