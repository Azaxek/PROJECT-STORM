
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Twitter, Award, Satellite, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Team: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Founder Spotlight */}
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-full lg:w-2/5"
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-cyan-500/20 rounded-[3rem] blur-3xl" />
              <div className="relative rounded-[3rem] overflow-hidden border border-white/20 shadow-2xl">
                <img
                  src="https://picsum.photos/id/1012/1000/1200"
                  alt="Aryav Agrawal"
                  className="w-full object-cover grayscale"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-full lg:w-3/5"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-bold border border-cyan-500/20">
              FOUNDER & CEO
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">Aryav Agrawal</h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              Based in Houston, TX, near the heart of space exploration, Aryav Agrawal founded Earth Applications of Space Technology Project with a single vision: making complex satellite data useful for community-level humanitarian response.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="glass p-6 rounded-2xl border-white/10">
                <Award className="text-cyan-400 mb-4" size={24} />
                <h4 className="text-white font-bold mb-2">Technical Leadership</h4>
                <p className="text-sm text-slate-400">Pioneered the low-cost LEO satellite signal reception mesh for urban environments.</p>
              </div>
              <div className="glass p-6 rounded-2xl border-white/10">
                <Globe className="text-indigo-400 mb-4" size={24} />
                <h4 className="text-white font-bold mb-2">Community Impact</h4>
                <p className="text-sm text-slate-400">Deployed 270 nodes across Houston neighborhoods to protect at-risk residents.</p>
              </div>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="p-4 glass rounded-full hover:bg-cyan-500/20 transition-all text-white"><Linkedin /></a>
              <a href="#" className="p-4 glass rounded-full hover:bg-cyan-500/20 transition-all text-white"><Twitter /></a>
              <a href="#" className="p-4 glass rounded-full hover:bg-cyan-500/20 transition-all text-white"><Mail /></a>
            </div>
          </motion.div>
        </div>

        {/* Get Involved Call */}
        <div className="mt-16 p-12 lg:p-20 glass rounded-[3rem] border border-white/20 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join the Mission</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            We are constantly looking for new neighborhoods in Houston to host detection modules. Become part of the humanitarian solution.
          </p>
          <Link
            to="/contact"
            className="px-10 py-4 bg-white text-slate-950 rounded-full font-bold text-lg inline-flex items-center transition-all hover:bg-cyan-400 hover:scale-105"
          >
            Host a Detector <Satellite className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
