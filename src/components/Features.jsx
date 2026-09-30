'use client';

import React, { useState } from 'react'

import { ArrowUpRight, Clock, Command, Layers, Sparkles, Zap, Check, GitBranch, CalendarDays, FileText, Divide} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.2, 1, 0.7, 1],
        },
    },
};

const glowColors = {
    cyan: "bg-cyan-500/10 group-hover:bg-cyan-500/20",
    fuchsia: "bg-fuchsia-500/10 group-hover:bg-fuchsia-500/20",
    emerald: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
};

/* FeatureCard */
function FeatureCard({ icon, color, eyebrow, title, description, children, use_gridparent=false}) {
    return (
        <motion.div initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className={`group relative mb-6 overflow-hidden rounded-[2rem] border border-white/[0.1] bg-gradient-to-br from-slate-800 to-${color}-950/40`}>
        
            {/* Hover glow */}
            <div className={`pointer-events-none absolute -right-32 -top-32 z-0 h-96 w-96 rounded-full blur-3xl transition-colors duration-500 ${glowColors[color] ?? glowColors.cyan}`} />

            <div className={`relative z-10 p-12 ${use_gridparent ? "grid items-center gap-10 lg:grid-cols-[1fr_auto]" : ""}`}>
                {/* Multi fusion */}
                <div className="relative flex flex-col justify-center">
                    <div className={`mb-7 text-${color}-400`}>
                        {React.createElement(icon, {className: "h-9 w-9"})}
                    </div>

                    <div className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] text-${color}-400`}>
                        {eyebrow}
                    </div>

                    <h3 className="text-2xl font-extrabold sm:text-3xl">
                        {title}
                    </h3>

                    <p className="mt-5 max-w-xl">
                        {description}
                    </p>
                </div>

                {children}
            </div>
        </motion.div>
    );
}

export const Features = () => {

    const [isInView, setIsInView] = React.useState(false);
    const [heroText, setHeroText] = React.useState("To-Do List.");
    const [additionalHeroText, setAdditionalHeroText] = React.useState("It's a Multi-Fusion Hub!");

    return (
        <section className="relative overflow-hidden bg-slate-950">
            <motion.div initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="mx-auto mb-20 max-w-3xl text-center">

            <div className="section-tag border-cyan-400 bg-cyan-400/20 text-cyan-400">
                <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" /></span>
                One workspace. Zero friction.
            </div>

            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                <motion.div initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            onViewportEnter={() => setIsInView(true)}>
                
                        <div className='leading-[1.3]'>
                            More than just a
                        </div>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r leading-[1.3] from-cyan-400 via-purple-400 to-fuchsia-500 inline-flex items-center relative whitespace-nowrap">
                            {heroText.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{
                                        delay: index * 0.08,
                                        duration: 0.01,
                                        ease: "linear",
                                    }}
                                    >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </div>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r leading-[1.3] from-cyan-400 via-purple-400 to-fuchsia-500 inline-flex items-center relative whitespace-nowrap">  
                            {additionalHeroText.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{
                                        delay: 5 + index * 0.08,
                                        duration: 0.01,
                                        ease: "linear",
                                    }}
                                    >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>           
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8">
                    Taskfusion brings tasks, calendars, knowledge, and focus together
                    in one interface that adapts to your workflow.
                </p>
            </motion.div>
            
            <div className='grid sm:grid-cols-2 sm:gap-6'>
                <FeatureCard 
                    color="cyan"
                    icon={Layers} 
                    eyebrow="Everything connected"
                    title="Multi-Fusion"
                    description="Your tasks do not exist in isolation. TaskFusion brings tickets, events, and knowledge from your most important tools together - automatically and in context.">

                    <div className="mt-8 flex flex-wrap gap-2">
                        {[
                            ["GitHub", "text-cyan-500"],
                            ["Jira", "text-blue-400"],
                            ["Google Calendar", "text-purple-400"],
                            ["Notion", "text-fuchsia-400"],
                        ].map(([name, color]) => (
                            <span key={name} className={`rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium ${color}`}>
                                {name}
                            </span>
                        ))}
                    </div>
                </FeatureCard>

                <FeatureCard
                    color="fuchsia"
                    icon={Clock}
                    eyebrow="Smart Scheduling"
                    title="Your time. Used intelligently."
                    description="TaskFusion identifies your available time slots and automatically schedules flexible tasks where they work best.">  

                    <div className="relative mt-8 rounded-xl border border-white/[0.1] bg-slate-950/60 p-4">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pb-2">
                            Today
                        </div>

                        <div className="space-y-2">
                            {[
                                ["09:00", "Prepare Presenation", "bg-cyan-400"],
                                ["11:00", "Team Meeting", "bg-slate-400"],
                                ["13:30", "Fix authentication", "bg-fuchsia-400"],
                                ["15:00", "Creative Work", "bg-cyan-400"],
                            ].map(([time, task, color], i) => (
                                <motion.div key={task}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-center gap-3">
                                    <span className="w-10 text-[9px] text-slate-500">
                                        {time}
                                    </span>

                                    <div className={`h-7 flex-1 rounded-md ${color}/10 border border-white/[0.1] px-3 flex items-center`}>
                                        <span className="text-[10px] text-slate-300">
                                            {task}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </FeatureCard>                
            </div>                    

            <FeatureCard
                color="emerald"
                icon={Sparkles}
                eyebrow="Understand your work"
                title="Deep Work Analytics"
                description="Don't just see what you've completed. Understand how you actually work. Identify focus periods, time sinks, and patterns in your workflow."
                use_gridparent={true}>  

                {/* Analytics */}
                <div className="relative w-full max-w-md rounded-2xl border border-white/[0.06] bg-slate-950 p-5 shadow-2xl lg:w-[360px]">
                    <div className="mb-5 flex items-start justify-between">
                    <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            Focus score
                        </div>
                        <div className="mt-1 text-3xl font-black text-emerald-400">
                            +18%
                        </div>
                    </div>

                    <div className="rounded-lg bg-emerald-400/10 px-2 py-1 text-[9px] font-bold text-emerald-400">
                        This Week
                    </div>
                    </div>

                    <div className="flex h-28 items-end gap-2">
                        {[35, 48, 40, 65, 55, 80, 100, 72, 88, 100, 90, 100].map(
                            (height, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${height}%` }}
                                    transition={{ delay: i * 0.04, duration: 0.6, ease: "easeOut",}}
                                    className={`flex-1 rounded-t-sm ${ i > 7 ? "bg-emerald-400": "bg-emerald-400/30"}`}
                                />
                            )
                        )}
                    </div>

                    <div className="mt-3 flex justify-between text-[9px] text-slate-400">
                        <span>Mon</span>
                        <span>Wed</span>
                        <span>Fri</span>
                        <span>Sun</span>
                    </div>
                </div>
            </FeatureCard>
        </section>
    );
}

export default Features;