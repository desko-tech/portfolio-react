'use client';

import { useEffect, useState } from "react";
import { Layers } from 'lucide-react';

const menus = [
                {key:'overview',  name: 'Overview'}, 
                {key:'demo',  name: 'Demo'},
                {key:'features',  name: 'Features'}, 
                {key:'pricing',  name: 'Pricing'}   
            ];

const Header = () => {
  
    const [activeNavSection, setActiveNavSection] = useState(null);
    const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.4 
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    setActiveNavSection(entry.target.id);   
                }
            })        
        }, options);

        menus.forEach((entry) => {
            const menuItem = document.getElementById(entry.key);
            if (menuItem) observer.observe(menuItem);
        },[menus]);

        return() => observer.disconnect();        
    });

    return (
        <header className="fixed flex content-between left-0 right-0 px-6 py-4 min-h-[var(--navigation-height)] bg-slate-900 bg-opacity-80 header-menu z-50">
            <a href="/" className="flex items-center gap-2 font-bold text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                <Layers className="text-cyan-400 w-6 h-6 inline" /> TASKFUSION
            </a>

            {/* mobile navigation - hamburger menu */}
            <div className="sm:hidden absolute right-6 top-4">
                <button aria-label="Toggle navigation menu" className={`hamburger-button ${toggleBurgerMenu ? 'cross': ''}`} onClick={() => setToggleBurgerMenu(!toggleBurgerMenu)}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </button>
            </div>

           {/* desktop navigation  */}
           <nav className={`nav-bar justify-center items-center gap-2 sm:gap-5 ${toggleBurgerMenu ? 'flex shadow-slate-500/50' : ''} sm:flex flex-col sm:flex-row mx-auto`}>
           {
                menus.map((menuItem, i) => (
                    <a key={i} href={`#${menuItem.key}`} className={`px-4 sm:text-sm leading-4 py-2 rounded-3xl text-center uppercase transition-colors duration-500 hover:bg-cyan-600 ${activeNavSection == menuItem.key ? "bg-cyan-700" : ""}`}>{menuItem.name}</a>
                ))
           }
           </nav>
        </header>
    );
};

export default Header;