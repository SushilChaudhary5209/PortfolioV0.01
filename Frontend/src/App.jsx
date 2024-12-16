
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { ThemeProvider, useTheme } from './components/ThemeContext';
// import './App.css';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Service from './pages/Service';
// import Contact from './pages/Contact';
// import NavBar from './components/NavBar';


// const AppContent = () => {
//     const { theme } = useTheme();

//     return (
//         <div className={`app ${theme}`}>
//             <NavBar className='' />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/service" element={<Service />} />
//                 <Route path="/contact" element={<Contact />} />
//             </Routes>

//             <Footer />
//         </div>
//     );
// };

// function App() {
//     return (
//         <ThemeProvider>
//             <Router>
//                 <AppContent />
//             </Router>
//         </ThemeProvider>
//     );
// }

// export default App;




import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import './App.css';
// import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import FloatingSocialIcons from './components/FloatingSocialIcons';

const AppContent = () => {
    const { theme } = useTheme();
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const serviceRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <div className={`app ${theme}`}>
            <NavBar
                refs={{
                    home: homeRef,
                    about: aboutRef,
                    service: serviceRef,
                    contact: contactRef
                }}
            />
            <div ref={homeRef}>
                <Home />
            </div>
            <div ref={aboutRef}>
                <About />
            </div>
            <div ref={serviceRef}>
                <Service />
            </div>
            <div ref={contactRef}>
                <Contact />
            </div>
            <FloatingSocialIcons />
            {/* <Footer /> */}
        </div>
    );
};

function App() {
    return (
        <ThemeProvider>
            <Router>
                <AppContent />
            </Router>
        </ThemeProvider>
    );
}

export default App;
