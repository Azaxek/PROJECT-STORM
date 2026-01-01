
import React from 'react';
import { motion } from 'framer-motion';
import { Satellite, Database, ShieldAlert, Globe, MapPin, Zap } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label, sublabel }: any) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="p-8 glass rounded-3xl border border-white/10 flex flex-col items-center text-center group"
  >
    <div className="p-4 bg-white/5 rounded-2xl mb-6 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
      <Icon size={32} />
    </div>
    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{value}</div>
    <div className="text-slate-200 font-semibold mb-1 uppercase tracking-widest text-xs">{label}</div>
    <div className="text-slate-400 text-sm">{sublabel}</div>
  </motion.div>
);

const StatsPanel: React.FC = () => {
  const stats = [
    {
      icon: Satellite,
      value: "270",
      label: "Detectors",
      sublabel: "Active Home Satellite Units"
    },
    {
      icon: Database,
      value: "25k+",
      label: "Data Points",
      sublabel: "Daily Processed Telemetry"
    },
    {
      icon: MapPin,
      value: "98%",
      label: "Houston Coverage",
      sublabel: "NASA JSC Adjacent Cluster"
    },
    {
      icon: ShieldAlert,
      value: "140",
      label: "Alerts Issued",
      sublabel: "Humanitarian Safety Signals"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, idx) => (
        <StatCard key={idx} {...stat} />
      ))}
    </div>
  );
};

export default StatsPanel;
