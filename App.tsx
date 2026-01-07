
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Radio, Database, ShieldAlert, 
  Map as MapIcon, Users, MessageSquare, 
  ChevronRight, Globe, Wind, Zap, Satellite, Phone
} from 'lucide-react';

import Home from './pages/Home';
import About from './pages/About';
import DataCenter from './pages/DataCenter';
import Team from './pages/Team';
import Contact from './pages/Contact';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Data Center', path: '/data' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/40 transition-colors">
              <Satellite className="w-6 h-6 text-cyan-400" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Earth Applications of <span className="text-cyan-400">Space Technology Project</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                  location.pathname === link.path ? 'text-cyan-400' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/data"
              className="px-5 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-cyan-900/20"
            >
              Live Monitor
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-300 hover:text-cyan-400 border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Link
                  to="/data"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex justify-center px-5 py-3 bg-cyan-600 text-white rounded-xl text-center font-bold"
                >
                  Live Monitor
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="relative z-10 glass-dark border-t border-white/10 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-6">
            <Satellite className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold tracking-tight text-white">
              Earth Applications of <span className="text-cyan-400">Space Technology Project</span>
            </span>
          </div>
          <p className="text-slate-400 max-w-md leading-relaxed">
            Revolutionizing meteorology through decentralized satellite detection networks. 
            Empowering communities with real-time humanitarian data to respond to escalating climatic events.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Navigation</h4>
          <ul className="space-y-4 text-slate-400">
            <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Mission</Link></li>
            <li><Link to="/data" className="hover:text-cyan-400 transition-colors">Data Visualization</Link></li>
            <li><Link to="/team" className="hover:text-cyan-400 transition-colors">Founder & Team</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Get Involved</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-slate-400">
            <li>Email: info@earthspaceapps.org</li>
            <li>Phone: +1 (713) 526-1700</li>
            <li>HQ: Houston, TX (Near NASA JSC)</li>
            <li className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-cyan-400"><Globe size={20} /></a>
              <a href="#" className="hover:text-cyan-400"><MessageSquare size={20} /></a>
              <a href="#" className="hover:text-cyan-400"><Database size={20} /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Earth Applications of Space Technology Project. All rights reserved.</p>
        <p>Founded by Aryav Agrawal</p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen relative flex flex-col">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/10 blur-[120px] rounded-full" />
          <div className="absolute top-[20%] right-[10%] w-[10%] h-[10%] bg-blue-500/10 blur-[80px] rounded-full" />
        </div>

        <Navbar />
        
        <main className="flex-grow pt-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/data" element={<DataCenter />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
