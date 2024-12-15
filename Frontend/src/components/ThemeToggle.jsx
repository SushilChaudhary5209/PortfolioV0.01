
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className=''>
            {theme === 'light' ? <FaMoon className='text-2xl' /> : <FaSun className='text-2xl' />}
        </button>
    );
};

export default ThemeToggle;
