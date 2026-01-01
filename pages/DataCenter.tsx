
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, AreaChart, Area,
  LineChart, Line
} from 'recharts';
import { 
  Map as MapIcon, Activity, Wind, CloudRain, 
  AlertTriangle, Filter, Search, Satellite,
  Database, ShieldAlert
} from 'lucide-react';
import HoustonMap from '../components/HoustonMap';

const data = [
  { time: '00:00', intensity: 20, points: 1500 },
  { time: '04:00', intensity: 25, points: 1800 },
  { time: '08:00', intensity: 45, points: 2200 },
  { time: '12:00', intensity: 65, points: 4100 },
  { time: '16:00', intensity: 85, points: 3800 },
  { time: '20:00', intensity: 55, points: 2900 },
  { time: '23:59', intensity: 30, points: 2100 },
];

const DataCenter: React.FC = () => {
  const [activeTab, setActiveTab] = useState('map');
  const [filter, setFilter] = useState('All');
  const [simulatedPoints, setSimulatedPoints] = useState(25432);

  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedPoints(prev => prev + Math.floor(Math.random() * 5));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      {/* Dashboard Header */}
      <div className="glass-dark border-b border-white/10 sticky top-20 z-40 px-4 md:px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
              <Activity className="mr-3 text-cyan-400" />
              STORM Live Monitoring
            </h1>
            <p className="text-slate-400 text-sm">Real-time cluster data from 270 detectors across Houston.</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="glass px-4 py-2 rounded-xl flex items-center space-x-3 border-white/20">
              <Database className="text-cyan-400" size={18} />
              <span className="text-slate-300 text-xs font-bold uppercase tracking-wider">Processed</span>
              <span className="text-white font-mono font-bold">{simulatedPoints.toLocaleString()}</span>
            </div>
            <div className="flex glass rounded-xl overflow-hidden border-white/20">
              <button 
                onClick={() => setActiveTab('map')}
                className={`px-4 py-2 flex items-center gap-2 text-sm font-bold transition-colors ${activeTab === 'map' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                <MapIcon size={16} /> Cluster Map
              </button>
              <button 
                onClick={() => setActiveTab('charts')}
                className={`px-4 py-2 flex items-center gap-2 text-sm font-bold transition-colors ${activeTab === 'charts' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                <Activity size={16} /> Analytics
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        {activeTab === 'map' ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Controls */}
              <div className="lg:col-span-1 space-y-6">
                <div className="glass p-6 rounded-3xl border-white/10">
                  <h4 className="text-white font-bold mb-4 flex items-center">
                    <Filter size={18} className="mr-2 text-cyan-400" /> Filters
                  </h4>
                  <div className="space-y-3">
                    {['All Detectors', 'High Intensity', 'Low Battery', 'Warning Areas'].map((f) => (
                      <label key={f} className="flex items-center space-x-3 cursor-pointer group">
                        <input 
                          type="radio" 
                          name="filter" 
                          checked={filter === f} 
                          onChange={() => setFilter(f)}
                          className="w-4 h-4 accent-cyan-400 bg-slate-800 border-white/20 rounded"
                        />
                        <span className={`text-sm transition-colors ${filter === f ? 'text-cyan-400 font-medium' : 'text-slate-400 group-hover:text-white'}`}>
                          {f}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="glass p-6 rounded-3xl border-white/10">
                  <h4 className="text-white font-bold mb-4">Legend</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50" />
                      <span className="text-xs text-slate-400">Normal Signal</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50" />
                      <span className="text-xs text-slate-400">Moderate Turbulence</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
                      <span className="text-xs text-slate-400">Storm Warning</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Map View */}
              <div className="lg:col-span-3">
                <div className="glass rounded-[2rem] border-white/10 overflow-hidden relative h-[600px] bg-slate-900/40">
                  <HoustonMap />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-3xl border-white/10 h-[400px]">
                <h3 className="text-xl font-bold text-white mb-8">Signal Intensity (24h)</h3>
                <ResponsiveContainer width="100%" height="80%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorInt" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                    <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} />
                    <YAxis stroke="#94a3b8" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff20', borderRadius: '12px' }}
                      itemStyle={{ color: '#22d3ee' }}
                    />
                    <Area type="monotone" dataKey="intensity" stroke="#22d3ee" fillOpacity={1} fill="url(#colorInt)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="glass p-8 rounded-3xl border-white/10 h-[400px]">
                <h3 className="text-xl font-bold text-white mb-8">Data Points Processed</h3>
                <ResponsiveContainer width="100%" height="80%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                    <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} />
                    <YAxis stroke="#94a3b8" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff20', borderRadius: '12px' }}
                      itemStyle={{ color: '#818cf8' }}
                    />
                    <Bar dataKey="points" fill="#818cf8" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="glass p-12 rounded-3xl border-white/10">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold text-white mb-6">How It Works</h3>
                <p className="text-slate-400 mb-10 leading-relaxed">
                  Every one of our 270 detectors is a localized satellite receiver. When LEO meteorological satellites pass over the Gulf Coast, our mesh network intercepts multiple telemetry streams simultaneously.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      <Satellite size={24} />
                    </div>
                    <h5 className="font-bold text-white">Detection</h5>
                    <p className="text-sm text-slate-500">Signal capture from NOAA and private satellite constellations.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                      <Wind size={24} />
                    </div>
                    <h5 className="font-bold text-white">Analysis</h5>
                    <p className="text-sm text-slate-500">Cross-referencing telemetry across 270 geographically distinct nodes.</p>
                  </div>
                  <div className="space-y-4">
                    {/* Added ShieldAlert to imports above to fix missing reference */}
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <ShieldAlert size={24} />
                    </div>
                    <h5 className="font-bold text-white">Response</h5>
                    <p className="text-sm text-slate-500">Automated humanitarian alerts issued via local SMS grids.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default DataCenter;
