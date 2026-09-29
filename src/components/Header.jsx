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
        <header className="fixed left-0 right-0 px-6 py-4 line-clamp-1 min-h-[4.3rem] bg-slate-900 bg-opacity-80 header-menu z-50">
            <div className="items-center gap-2 absolute left-6 top-4">
                <a href="/" className="flex items-center gap-2 font-bold text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                    <Layers className="text-cyan-400 w-6 h-6 inline" /> TASKFUSION
                </a>
            </div> 

            {/* mobile navigation - hamburger menu */}
            <div className="sm:hidden absolute right-6 top-4">
                <button className={`hamburger-button ${toggleBurgerMenu ? 'cross': ''}`} onClick={() => setToggleBurgerMenu(!toggleBurgerMenu)}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </button>
            </div>

           {/* desktop navigation  */}
           <nav className={`justify-center gap-2 sm:gap-5 ${toggleBurgerMenu ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row pt-12 pb-4 max-w-xs mx-auto sm:pt-[2px] sm:pb-0 sm:px-5`}>
           {
                menus.map((menuItem, i) => (
                    <a key={i} href={`#${menuItem.key}`} className={`px-4 text-sm leading-4 py-1 rounded-3xl text-center uppercase transition-colors duration-500 hover:bg-cyan-600 ${activeNavSection == menuItem.key ? "bg-cyan-700" : ""}`}>{menuItem.name}</a>
                ))
           }
           </nav>
        </header>
    );
};

export default Header;