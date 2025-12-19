import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isTablet, setIsTablet] = useState(window.innerWidth > 768 && window.innerWidth <= 1024);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navLinks = [
        { name: 'About Us', href: '#about' },
        { name: 'Our Service', href: '#services' },
        { name: 'Our Goals', href: '#goals' },
        { name: 'Contact Us', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
            style={{
                background: isScrolled
                    ? 'linear-gradient(135deg, rgba(0, 20, 50, 0.95), rgba(0, 50, 100, 0.9), rgba(0, 30, 60, 0.95))'
                    : 'linear-gradient(135deg, rgba(0, 20, 50, 0.6), rgba(0, 50, 100, 0.5), rgba(0, 30, 60, 0.6))',
                backdropFilter: 'blur(20px)',
                borderBottom: isScrolled
                    ? '1px solid rgba(0, 216, 255, 0.4)'
                    : '1px solid rgba(0, 216, 255, 0.2)',
                padding: isScrolled ? '1rem 0' : '1.5rem 0',
                boxShadow: isScrolled
                    ? '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 216, 255, 0.2)'
                    : '0 0 20px rgba(0, 216, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Animated background pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                    linear-gradient(rgba(0, 216, 255, 0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 216, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px',
                opacity: 0.5,
                zIndex: 0,
                animation: 'gridMoveNav 15s linear infinite'
            }} />

            {/* Blue glow effects */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '20%',
                transform: 'translateY(-50%)',
                width: '300px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(0, 216, 255, 0.15), transparent)',
                filter: 'blur(60px)',
                zIndex: 0,
                animation: 'pulseGlowNav 4s ease-in-out infinite'
            }} />
            <div style={{
                position: 'absolute',
                top: '50%',
                right: '20%',
                transform: 'translateY(-50%)',
                width: '300px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(0, 150, 255, 0.12), transparent)',
                filter: 'blur(60px)',
                zIndex: 0,
                animation: 'pulseGlowNav 5s ease-in-out infinite reverse'
            }} />

            {/* Animated border glow effect */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #00D8FF, transparent)',
                opacity: isScrolled ? 0.8 : 0.5,
                animation: 'shimmer 3s infinite',
                boxShadow: '0 0 15px rgba(0, 216, 255, 0.7)',
                zIndex: 1
            }} />

            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: '1000px',
                margin: '0 auto',
                padding: isMobile ? '0 1rem' : '0 2rem',
                position: 'relative',
                zIndex: 2
            }}>
                <motion.a
                    href="#home"
                    className="text-2xl font-bold flex items-center gap-2"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        textDecoration: 'none',
                        position: 'relative',
                        marginLeft: isMobile ? '0' : '-7rem'
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div style={{
                        padding: '0.25rem',
                        borderRadius: '8px',
                        background: 'rgba(0, 216, 255, 0.1)',
                        backdropFilter: 'blur(5px)',
                        border: '1px solid rgba(0, 216, 255, 0.2)'
                    }}>
                        <Logo height={50} showTagline={false} />
                    </div>
                </motion.a>

                {/* Desktop Menu */}
                <div className="md-flex" style={{
                    gap: '2.5rem',
                    alignItems: 'center',
                    marginRight: isMobile ? '0' : '-13rem'
                }}>
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-white transition-colors"
                            style={{
                                color: '#ffffff',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                padding: isTablet || isMobile ? '0.5rem 0.75rem' : '0.85rem 1.25rem',
                                fontSize: isTablet || isMobile ? '0.9rem' : '1.2rem',
                                fontWeight: '500',
                                textDecoration: 'none',
                                borderRadius: '8px',
                                background: hoveredLink === link.name
                                    ? 'rgba(0, 216, 255, 0.1)'
                                    : 'transparent'
                            }}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredLink(link.name)}
                            onMouseLeave={() => setHoveredLink(null)}
                            whileHover={{
                                scale: 1.05,
                                color: '#00D8FF'
                            }}
                        >
                            {link.name}
                            {hoveredLink === link.name && (
                                <>
                                    <motion.span
                                        layoutId="underline"
                                        style={{
                                            position: 'absolute',
                                            bottom: '0.5rem',
                                            left: '1rem',
                                            right: '1rem',
                                            height: '2px',
                                            background: 'linear-gradient(90deg, transparent, #00D8FF, transparent)',
                                            boxShadow: '0 0 10px rgba(0, 216, 255, 0.8)'
                                        }}
                                        initial={{ opacity: 0, scaleX: 0 }}
                                        animate={{ opacity: 1, scaleX: 1 }}
                                        exit={{ opacity: 0, scaleX: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <motion.div
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            borderRadius: '8px',
                                            border: '1px solid rgba(0, 216, 255, 0.3)',
                                            boxShadow: '0 0 15px rgba(0, 216, 255, 0.3)',
                                            pointerEvents: 'none'
                                        }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    />
                                </>
                            )}
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <motion.button
                    className="md-hidden text-white"
                    style={{
                        background: 'rgba(0, 216, 255, 0.1)',
                        border: '1px solid rgba(0, 216, 255, 0.3)',
                        borderRadius: '8px',
                        padding: '0.5rem',
                        color: 'white',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    whileHover={{
                        scale: 1.1,
                        background: 'rgba(0, 216, 255, 0.2)',
                        boxShadow: '0 0 15px rgba(0, 216, 255, 0.4)'
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md-hidden"
                    style={{
                        background: 'linear-gradient(135deg, rgba(0, 20, 50, 0.98), rgba(0, 50, 100, 0.95), rgba(0, 30, 60, 0.98))',
                        borderTop: '1px solid rgba(0, 216, 255, 0.4)',
                        borderBottom: '1px solid rgba(0, 216, 255, 0.3)',
                        padding: '1.5rem 0',
                        backdropFilter: 'blur(20px)',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 216, 255, 0.2)'
                    }}
                >
                    <div className="container flex flex-col gap-4" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                        maxWidth: '1000px',
                        margin: '0 auto',
                        padding: '0 2rem'
                    }}>
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-white py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{
                                    color: '#ffffff',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    background: 'rgba(0, 216, 255, 0.05)',
                                    border: '1px solid rgba(0, 216, 255, 0.2)',
                                    transition: 'all 0.3s ease'
                                }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{
                                    background: 'rgba(0, 216, 255, 0.15)',
                                    borderColor: 'rgba(0, 216, 255, 0.4)',
                                    color: '#00D8FF',
                                    x: 10
                                }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            )}

            <style>{`
                @keyframes shimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
                @keyframes gridMoveNav {
                    0% {
                        transform: translate(0, 0);
                    }
                    100% {
                        transform: translate(30px, 30px);
                    }
                }
                @keyframes pulseGlowNav {
                    0%, 100% {
                        opacity: 0.3;
                        transform: translateY(-50%) scale(1);
                    }
                    50% {
                        opacity: 0.6;
                        transform: translateY(-50%) scale(1.2);
                    }
                }
            `}</style>
        </motion.nav>
    );
};

export default Navbar;
