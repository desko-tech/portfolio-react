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

      <main>
        <section id="overview">  
          <Hero />
          <Collaboration />
        </section>

        {/* QUICK INTERACTIVE PREVIEW */}
        <section id="demo" className="common-section max-w-4xl">
          <Preview />
        </section>

        {/* FEATURES */}
        <section id="features" className="common-section max-w-7xl">
          <Features />
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="common-section text-center max-w-3xl">
          <Pricing />
        </section>
      </main>

      {/* FOOTER */}
      <Footer/>
    </div>
  );
}        

export default App;   