
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Heart, Layers, Satellite, Zap } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: "Precision Mission",
      desc: "To fill the gap between high-level satellite imagery and ground-level humanitarian reality."
    },
    {
      icon: ShieldCheck,
      title: "Resilient Network",
      desc: "A decentralized mesh of 270 sensors that remains operational when main grids fail."
    },
    {
      icon: Heart,
      title: "Humanitarian Focus",
      desc: "Born out of a need to protect vulnerable coastal communities from rapid intensification storms."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-bold mb-8"
          >
            The Mission of <span className="text-gradient">Project STORM</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 leading-relaxed"
          >
            Project STORM stands at the intersection of satellite engineering and humanitarian service. 
            By leveraging home-based detection modules, we provide a granular view of meteorology 
            that traditional systems miss.
          </motion.p>
        </div>

        {/* Vision/Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass rounded-3xl border border-white/10"
            >
              <div className="p-4 bg-cyan-500/10 rounded-2xl w-fit mb-6 text-cyan-400">
                <v.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{v.title}</h3>
              <p className="text-slate-400 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Innovation Section */}
        <div className="relative glass rounded-[3rem] p-12 lg:p-20 overflow-hidden mb-32 border border-white/20">
          <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
            <img 
              src="https://picsum.photos/id/122/800/800?grayscale" 
              className="w-full h-full object-cover opacity-20"
              alt="Technology"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl font-bold mb-8">Technical Innovation</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400">
                  <Satellite size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Micro-Satellite Array</h4>
                  <p className="text-slate-400">Custom localized receivers that intercept specialized LEO meteorological signals for high-frequency ground updates.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Real-time Processing</h4>
                  <p className="text-slate-400">Our custom algorithm processes 25,000+ data points every second, filtering noise and highlighting critical storm patterns.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                  <Layers size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Open Data Layer</h4>
                  <p className="text-slate-400">We believe safety data should be free. Our Houston mesh provides open-access telemetry for local emergency responders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stat */}
        <div className="text-center py-20">
            <p className="text-cyan-400 font-bold uppercase tracking-widest mb-4">Project Growth</p>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">Expanding Horizons</h2>
            <div className="flex flex-wrap justify-center gap-12">
                <div>
                    <div className="text-4xl font-bold text-gradient">270+</div>
                    <p className="text-slate-500">Detectors Built</p>
                </div>
                <div className="w-px h-16 bg-white/10 hidden md:block"></div>
                <div>
                    <div className="text-4xl font-bold text-gradient">15</div>
                    <p className="text-slate-500">Suburbs Monitored</p>
                </div>
                <div className="w-px h-16 bg-white/10 hidden md:block"></div>
                <div>
                    <div className="text-4xl font-bold text-gradient">25K</div>
                    <p className="text-slate-500">Points Processed</p>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
