import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main>
        <Routes>
          {/* Home page: works on "/" (local) and "/resume_spg/" (GitHub Pages) */}
          <Route path="/" element={<Home />} />
          <Route path="/resume_spg/" element={<Home />} />

          {/* Other pages */}
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
