import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = ['home', 'about', 'skills', 'projects', 'contacts'];
            const scrollPosition = window.scrollY + 120;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -65;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contacts', label: 'Contact' }
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled || mobileMenuOpen ? 'bg-[#0f1117]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-md' : 'bg-transparent py-4'
        }`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Brand Logo */}
                <button 
                    onClick={() => scrollToSection('home')}
                    className="text-lg font-medium tracking-tight text-white hover:text-highlight transition-colors cursor-pointer"
                >
                    Shishir<span className="text-highlight">.</span>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                                activeSection === item.id
                                    ? 'bg-white/10 text-white shadow-xs'
                                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white bg-white/[0.05] border border-white/10 active:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Toggle navigation menu"
                >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden px-4 pt-2 pb-4 space-y-1 bg-[#0f1117]/95 backdrop-blur-md border-b border-white/10">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors cursor-pointer flex items-center justify-between ${
                                activeSection === item.id
                                    ? 'bg-white/10 text-white font-semibold'
                                    : 'text-neutral-300 hover:text-white hover:bg-white/[0.05]'
                            }`}
                        >
                            <span>{item.label}</span>
                            {activeSection === item.id && <span className="w-1.5 h-1.5 rounded-full bg-highlight"></span>}
                        </button>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar;
