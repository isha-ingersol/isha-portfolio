import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Testimonial from './components/Testimonial/Testimonial';
import Brands from './components/Brands/Brands';
import Gallery from './components/Gallery/Gallery';
import Volunteering from './components/Volunteering/Volunteering';
import Skills from './components/Skills/Skills';
import Leadership from './components/Leadership/Leadership';
import Awards from './components/Awards/Awards';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navigation />
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Testimonial />
            <Brands />
            <Gallery />
            <Volunteering />
            <Skills />
            <Leadership />
            <Awards />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;