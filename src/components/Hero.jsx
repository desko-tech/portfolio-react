import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {

    const [heroText, setHeroText] = useState("Work Smarter.");
    const [showCursor, setShowCursor] = useState(true);

    // Change the text after 5 seconds and hide the cursor after the second typing cycle
    React.useEffect(() => {
        // Change the text after 5 seconds
        const textTimer = setTimeout(() => {
            setHeroText("Organize Better.");
        }, 5000);

        // Hide the cursor after 7 seconds (once the new text has finished typing)
        const cursorTimer = setTimeout(() => {
            setShowCursor(false);
        }, 7000);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(cursorTimer);
        };
    }, []);

    return (
      <section className="relative max-w-7xl common-section hero-text text-center">
        {/* Background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fuchsia-500/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/20 mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Productivity Redefined
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto mb-6 leading-tight flex flex-col md:block items-center justify-center">
            <span>Turn Chaos Into Structure.</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r leading-[1.5] from-cyan-400 via-purple-400 to-fuchsia-500 inline-flex items-center relative whitespace-nowrap">
                {/* Schreibmaschinen-Effekt mit Key-Trigger für Re-Animation beim Textwechsel */}
                <span key={heroText}>
                    {heroText.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: index * 0.08, // Startet sofort beim Rendern, tippt alle 80ms
                            duration: 0.01
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                    ))}
                </span>
                
                {/* Blinking cursor (removed completely after 7 seconds) */} 
                <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                    className={`inline-block w-[4px] h-[0.8em] bg-fuchsia-500 ml-1 translate-y-[0.1em] ${showCursor ? "" : "invisible"}`}
                />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            Connect your thoughts, plan your to-dos, and achieve your goals with the most elegant and fastest task manager of the next generation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#demo">    
                <button aria-label="Get Started" className="main group">
                    Get Started 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </a>
            <a href="#features">
                <button aria-label="View Features" className="secondary">
                    View Features
                </button>
            </a>    
          </div>
        </motion.div>
      </section>     
    )
}

export default Hero