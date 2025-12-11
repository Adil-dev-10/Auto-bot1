
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import FluidBackground from './FluidBackground';
import CustomCursor from './CustomCursor';
import { FIVERR_LINK } from '../constants';

const Layout: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (id: string) => {
        // If not on home page, navigate home first
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
            return;
        }

        scrollToSection(id);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Handle scroll after navigation
    React.useEffect(() => {
        if (location.state && location.state.scrollTo) {
            // slight delay to allow page load
            setTimeout(() => {
                scrollToSection(location.state.scrollTo);
                // Clear state so it doesn't scroll again on refresh
                window.history.replaceState({}, document.title);
            }, 100);
        } else if (location.hash) {
            const id = location.hash.replace('#', '');
            setTimeout(() => {
                scrollToSection(id);
            }, 100);
        }
    }, [location]);

    return (
        <div className="relative min-h-screen text-white selection:bg-[#4fb7b3] selection:text-black cursor-auto md:cursor-none overflow-x-hidden">
            <CustomCursor />
            <FluidBackground />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-8 py-6 mix-blend-difference w-full">
                <Link to="/" className="font-heading text-xl md:text-2xl font-bold tracking-tighter text-white cursor-default z-50 decoration-0">ADIL-DEV</Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-10 text-sm font-bold tracking-widest uppercase">
                    {['Services', 'Why Me', 'Packages'].map((item) => (
                        <button
                            key={item}
                            onClick={() => handleNavClick(item.toLowerCase().replace(' ', '-'))}
                            className="hover:text-[#a8fbd3] transition-colors text-white cursor-pointer bg-transparent border-none"
                            data-hover="true"
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <Link
                    to="/hire-me"
                    className="inline-block border border-white px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 text-white cursor-pointer bg-transparent decoration-0"
                    data-hover="true"
                >
                    Hire Me
                </Link>
            </nav>

            <main>
                <Outlet />
            </main>

            <footer className="relative z-10 border-t border-white/10 py-12 md:py-16 bg-black/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div>
                        <div className="font-heading text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-white">ADIL-DEV</div>
                        <div className="flex gap-2 text-xs font-mono text-gray-400">
                            <span>Business Automation Expert</span>
                        </div>
                    </div>

                    <div className="flex gap-6 md:gap-8 flex-wrap">
                        <a href={FIVERR_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-bold uppercase text-xs tracking-widest transition-colors cursor-pointer" data-hover="true">
                            Fiverr
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
