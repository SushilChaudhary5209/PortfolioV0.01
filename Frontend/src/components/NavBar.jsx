


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { IoReorderThreeOutline } from "react-icons/io5";
// import ThemeToggle from './ThemeToggle';
// import { useTheme } from './ThemeContext';

// const NavBar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const { theme } = useTheme();

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     return (
//         <div className={`navbar ${theme} w-full sticky top-0`}>
//             <nav>
//                 <div className="py-4 px-2 md:px-8 flex justify-between items-center">
//                     <div className="text-xl flex gap-2 items-center">
//                         <img className='h-10 w-10 rounded-full ring-2 ring-red-800 ring-offset-1 ring-offset-slate-50 dark:ring-offset-white' src="/images/profile.jpg" alt="Profile" />
//                         <span> Sushil Chaudhary </span>
//                     </div>
//                     <div className="space-x-4 hidden md:flex">
//                         <div className=' md:visible'>
//                             <ThemeToggle />
//                         </div>
//                         <Link to="/" className="hover:text-gray-400">Home</Link>
//                         <Link to="/about" className="hover:text-gray-400">About</Link>
//                         <Link to="service" className="hover:text-gray-400">Services</Link>
//                         <Link to="/contact" className="hover:text-gray-400">Contact</Link>
//                     </div>

//                     <div className='flex gap-3 md:hidden'>
//                         <ThemeToggle />
//                         <div className='pe-4 block md:hidden cursor-pointer' onClick={toggleMenu}>
//                             <IoReorderThreeOutline className='size-8' />
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     {menuOpen && (
//                         <div className="flex flex-col gap-2 md:hidden text-left p-4">  
//                             <Link to="/" className="hover:text-gray-400">Home</Link>
//                             <Link to="/about" className="hover:text-gray-400">About</Link>
//                             <Link to="service" className="hover:text-gray-400">Services</Link>
//                             <Link to="/contact" className="hover:text-gray-400">Contact</Link>
//                         </div>
//                     )}
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default NavBar;




import React, { useState } from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeContext';
import Profile from "../../images/profile.png";

const NavBar = ({ refs }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme } = useTheme();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (sectionRef) => {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const sectionTop = sectionRef.current.offsetTop;
        window.scrollTo({
            top: sectionTop - navbarHeight,
            behavior: 'smooth'
        });
        setMenuOpen(false); // Close the menu after selection (for mobile view)
    };

    return (
        <div className={`navbar ${theme} w-full sticky top-0`}>
            <nav>
                <div className="py-4 px-2 md:px-8 flex justify-between items-center">
                    <div className="text-xl flex gap-2 items-center">
                        <img className='h-10 w-10 rounded-full ring-2 ring-red-800 ring-offset-1 ring-offset-slate-50 dark:ring-offset-white' src={Profile} alt="Profile" />
                        <span> Sushil Chaudhary </span>
                    </div>
                    <div className="space-x-4 hidden md:flex">
                        <div className=' md:visible'>
                            <ThemeToggle />
                        </div>
                        <button onClick={() => scrollToSection(refs.home)} className="hover:text-gray-400">Home</button>
                        <button onClick={() => scrollToSection(refs.about)} className="hover:text-gray-400">About</button>
                        <button onClick={() => scrollToSection(refs.service)} className="hover:text-gray-400">Services</button>
                        <button onClick={() => scrollToSection(refs.contact)} className="hover:text-gray-400">Contact</button>
                    </div>

                    <div className='flex gap-3 md:hidden'>
                        <ThemeToggle />
                        <div className='pe-4 block md:hidden cursor-pointer' onClick={toggleMenu}>
                            <IoReorderThreeOutline className='size-8' />
                        </div>
                    </div>
                </div>
                <div>
                    {menuOpen && (
                        <div className="flex flex-col gap-2 md:hidden text-left p-4">  
                            <button onClick={() => scrollToSection(refs.home)} className="hover:text-gray-400">Home</button>
                            <button onClick={() => scrollToSection(refs.about)} className="hover:text-gray-400">About</button>
                            <button onClick={() => scrollToSection(refs.service)} className="hover:text-gray-400">Services</button>
                            <button onClick={() => scrollToSection(refs.contact)} className="hover:text-gray-400">Contact</button>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
