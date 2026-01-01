
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Satellite, Activity } from 'lucide-react';

const HoustonMap = () => {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  // Generate 270 nodes around a central point (NASA JSC area)
  const nodes = useMemo(() => {
    return Array.from({ length: 270 }).map((_, i) => ({
      id: i,
      x: 350 + (Math.random() - 0.5) * 600,
      y: 350 + (Math.random() - 0.5) * 400,
      status: Math.random() > 0.9 ? 'warning' : 'ok',
      intensity: Math.floor(Math.random() * 100),
      label: `Node #${1000 + i}`
    }));
  }, []);

  return (
    <div className="w-full h-full relative cursor-crosshair overflow-hidden bg-slate-950">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Simulation HUD Overlay */}
      <div className="absolute top-6 left-6 p-4 glass-dark rounded-xl border border-white/10 z-10">
        <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-tighter mb-1">Sector HUD</div>
        <div className="text-white font-mono text-xs">LAT: 29.5593° N</div>
        <div className="text-white font-mono text-xs">LNG: 95.0900° W</div>
        <div className="mt-2 text-green-400 text-[10px] font-bold animate-pulse">● NETWORK SYNCED</div>
      </div>

      <svg viewBox="0 0 1000 800" className="w-full h-full drop-shadow-2xl">
        {/* Connection Lines (Selective) */}
        {nodes.filter((_, i) => i % 10 === 0).map((node, i) => (
          <line
            key={`line-${i}`}
            x1={node.x} y1={node.y}
            x2={500} y2={400}
            stroke="rgba(34, 211, 238, 0.05)"
            strokeWidth="1"
          />
        ))}

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={hoveredNode === node.id ? 8 : 4}
            fill={node.status === 'warning' ? '#f59e0b' : '#22d3ee'}
            className="cursor-pointer"
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: node.status === 'warning' ? [0.6, 1, 0.6] : 1,
              scale: hoveredNode === node.id ? 1.5 : 1
            }}
            transition={{ 
              opacity: { duration: 1.5, repeat: Infinity },
              scale: { type: 'spring', stiffness: 300 } 
            }}
          />
        ))}

        {/* Center Point - NASA JSC */}
        <g transform="translate(500, 400)">
          <circle r="12" fill="none" stroke="#6366f1" strokeWidth="2">
            <animate attributeName="r" from="10" to="30" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="1" to="0" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle r="6" fill="#6366f1" />
        </g>
      </svg>

      {/* Tooltip */}
      <AnimatePresence>
        {hoveredNode !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute p-4 glass-dark rounded-xl border border-white/20 z-50 pointer-events-none"
            style={{ 
              left: nodes[hoveredNode].x > 700 ? nodes[hoveredNode].x / 10 + '%' : (nodes[hoveredNode].x / 10 + 2) + '%',
              top: nodes[hoveredNode].y / 10 + '%'
            }}
          >
            <div className="text-cyan-400 font-bold mb-1">{nodes[hoveredNode].label}</div>
            <div className="text-white text-xs space-y-1">
              <div className="flex justify-between gap-4"><span>Signal:</span> <span>Excellent</span></div>
              <div className="flex justify-between gap-4"><span>Intensity:</span> <span>{nodes[hoveredNode].intensity}%</span></div>
              <div className="flex justify-between gap-4"><span>Last Sync:</span> <span>2s ago</span></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-6 right-6 flex items-center space-x-2 text-slate-500 text-[10px] font-mono">
        <Activity size={12} className="text-cyan-400 animate-pulse" />
        <span>ACTIVE MESH SCANNER v4.2</span>
      </div>
    </div>
  );
};

export default HoustonMap;
