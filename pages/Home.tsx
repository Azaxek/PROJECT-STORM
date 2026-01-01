
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Shield, Zap, Radio, Globe, 
  MapPin, Database, Satellite, Wind 
} from 'lucide-react';
import StatsPanel from '../components/StatsPanel';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative"
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
        {/* Background Image/Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950 z-10" />
          <img 
            src="https://picsum.photos/id/111/1920/1080?grayscale" 
            className="w-full h-full object-cover opacity-30"
            alt="Space Background"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-1.5 mb-8 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-semibold tracking-wide"
          >
            <Satellite className="w-4 h-4 mr-2" />
            Empowering Houston Communities
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-tight"
          >
            Harnessing Space Technology for <span className="text-gradient">Humanitarian Meteorology</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Project STORM uses a decentralized network of 270 home satellite detectors to monitor and respond to extreme weather events with unprecedented precision.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link 
              to="/about"
              className="group px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg flex items-center transition-all hover:bg-cyan-400 hover:scale-105 active:scale-95 shadow-xl"
            >
              Learn More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link 
              to="/data"
              className="px-8 py-4 glass border-white/20 text-white rounded-full font-bold text-lg flex items-center transition-all hover:bg-white/10 active:scale-95"
            >
              Explore the Data
            </Link>
          </motion.div>
        </div>

        {/* Floating Icons for 3D feel */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[10%] top-[30%] hidden lg:block opacity-40 text-cyan-400"
        >
          <Wind size={64} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[15%] top-[20%] hidden lg:block opacity-40 text-indigo-400"
        >
          <Zap size={56} />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <StatsPanel />
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 to-indigo-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative rounded-3xl overflow-hidden glass border-white/20">
              <img 
                src="https://picsum.photos/id/1012/800/800" 
                alt="Aryav Agrawal"
                className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-6 glass-dark rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-1">Aryav Agrawal</h3>
              <p className="text-cyan-400 font-medium">Founder & CEO</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Driven by <span className="text-gradient">Humanitarian Innovation</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Founded near the NASA Johnson Space Center in Houston, Project STORM was born from a realization that centralized meteorological data often misses localized humanitarian emergencies.
            </p>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              Aryav Agrawal lead the initiative to build 270 satellite detectors in neighborhoods surrounding the space center, creating one of the most dense weather-monitoring clusters in the world.
            </p>
            <Link 
              to="/team"
              className="inline-flex items-center text-cyan-400 font-bold text-lg hover:text-cyan-300 transition-colors"
            >
              Read full founder story <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
