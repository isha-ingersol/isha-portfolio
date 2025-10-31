// ============================================
// App.js (IMPROVED STRUCTURE)
// Location: src/App.js
// ============================================

import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Testimonial from './components/Testimonial/Testimonial';
import Awards from './components/Awards/Awards';
import Brands from './components/Brands/Brands';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';

function App() {
  return (
    <div className="App">
      <Navigation />
      
      {/* 1. Hero - First impression */}
      <Hero />
      
      {/* 2. About - Who you are */}
      <About />
      
      {/* 3. Projects - What you've built (most important) */}
      <Projects />

      {/* 4. Testimonial - Social proof */}
      <Testimonial />

      {/* 5. Experience - Where you've worked/volunteered/led (COMBINED) */}
      <Experience />
      
      {/* 6. Brands - Companies you've worked with */}
      <Brands />
      
      {/* 7. Awards - Recognition */}
      {/* <Awards /> */}

      {/* 8. Gallery - Visual proof (photos) */}
      <Gallery />

      {/* 9. Skills - What you know */}
      <Skills />
      
      {/* 10. Contact - Call to action */}
      <Contact />
      
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;

/* ============================================
   REASONING FOR THIS ORDER:
   ============================================
   
   1. HERO - Hook them immediately
   2. ABOUT - Quick introduction to who you are
   3. PROJECTS - Most important for technical roles
   4. SKILLS - Support your projects with technical skills
   5. EXPERIENCE - All your experience (work + volunteer + leadership)
   6. TESTIMONIAL - Social proof at the right moment
   7. AWARDS - Additional credibility
   8. BRANDS - Companies you've supported (builds trust)
   9. GALLERY - Visual journey (keeps engagement high)
   10. CONTACT - Final call to action when they're convinced
   
   This follows the "narrative arc":
   - Introduction → Skills → Proof → Trust → Action
*/