
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Globe, MessageSquare, CheckCircle2, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div>
            <h1 className="text-5xl font-bold text-white mb-8">Get in <span className="text-gradient">Touch</span></h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-12">
              Interested in collaborating, hosting a detector, or supporting our humanitarian mission? We'd love to hear from you.
            </p>

            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-cyan-500/10 rounded-2xl text-cyan-400">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-slate-400">info@projectstorm.org</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-400">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-slate-400">+1 (713) 526-1700</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-400">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Location</h4>
                  <p className="text-slate-400">Houston, TX (NASA JSC Area)</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400">
                  <MessageSquare size={28} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Social Media</h4>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">Twitter</a>
                    <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">LinkedIn</a>
                    <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 rounded-[2rem] blur-2xl" />
            <div className="relative glass p-10 rounded-[2rem] border border-white/20">
              {submitted ? (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400">Thanks for reaching out. Aryav and the team will get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Tell us how you'd like to get involved..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold text-lg flex items-center justify-center transition-all shadow-lg shadow-cyan-900/40 active:scale-[0.98]"
                  >
                    Send Message <Send className="ml-2" size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
