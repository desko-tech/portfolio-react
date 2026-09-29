import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Layers, Sparkles, Zap, ArrowRight, Plus, Trash2, Clock } from 'lucide-react';

import Header from './components/Header';
import Hero from './components/Hero';
import Collaboration from './components/Collaboration';
import Preview from './components/Preview';
import Features from './components/Features';
import Footer from './components/Footer';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Header />

      <section id="overview">  
        <Hero />
        <Collaboration />
      </section>

      {/* QUICK INTERACTIVE PREVIEW */}
      <section id="demo" className="max-w-4xl mx-auto px-6 py-36">
        <Preview />
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-7xl mx-auto px-6">
        <Features />
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="max-w-3xl mx-auto px-6 py-24 text-center border-t border-slate-900">
        <Pricing />
      </section>

      {/* FOOTER */}
      <Footer/>
    </div>
  );
}        

export default App;   