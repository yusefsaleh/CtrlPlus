import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import esportsCrowd from '../assets/esports_crowd.png';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isTablet, setIsTablet] = useState(window.innerWidth > 768 && window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Generate floating particles for gaming effect
    const floatingParticles = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 8 + 4,
        delay: Math.random() * 3,
    }));

    return (
        <section id="home" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #0a0a1a 0%, #050510 50%, #000515 100%)'
        }}>
            {/* Main Background Image - Esports Crowd */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${esportsCrowd})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0.4,
                zIndex: 0,
                filter: 'brightness(0.3) contrast(1.2)'
            }} />

            {/* Blue Overlay Gradient */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(0, 100, 200, 0.3) 0%, rgba(0, 50, 150, 0.4) 50%, rgba(0, 0, 50, 0.5) 100%)',
                zIndex: 1
            }} />

            {/* Animated Grid Pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `
                    linear-gradient(rgba(0, 216, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 216, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                opacity: 0.3,
                zIndex: 2,
                animation: 'gridMove 20s linear infinite'
            }} />

            {/* Floating Particles */}
            {floatingParticles.map((p) => (
                <motion.div
                    key={p.id}
                    style={{
                        position: 'absolute',
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        background: 'radial-gradient(circle, #00D8FF, transparent)',
                        borderRadius: '50%',
                        boxShadow: `0 0 ${p.size * 4}px rgba(0, 216, 255, 0.6)`,
                        zIndex: 2
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, Math.random() * 40 - 20, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.5, 1]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: p.delay
                    }}
                />
            ))}

            {/* Multiple Glow Effects */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(0, 216, 255, 0.3), transparent)',
                filter: 'blur(80px)',
                zIndex: 1,
                animation: 'pulseGlow 4s ease-in-out infinite'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(0, 150, 255, 0.25), transparent)',
                filter: 'blur(100px)',
                zIndex: 1,
                animation: 'pulseGlow 5s ease-in-out infinite reverse'
            }} />
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(0, 216, 255, 0.15), transparent)',
                filter: 'blur(120px)',
                zIndex: 1,
                animation: 'pulseGlow 6s ease-in-out infinite'
            }} />

            {/* Scanline Effect */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(transparent 50%, rgba(0, 216, 255, 0.03) 50%)',
                backgroundSize: '100% 4px',
                zIndex: 3,
                pointerEvents: 'none',
                opacity: 0.5
            }} />

            {/* Content */}
            <div className="container" style={{
                position: 'relative',
                zIndex: 4,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                maxWidth: '1200px',
                padding: '2rem'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '2.5rem',
                        maxWidth: '1000px',
                        width: '100%'
                    }}
                >
                    {/* Logo and Headline Container - Centered Together */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2rem',
                        width: '100%'
                    }}>
                        {/* Logo with Glow Effect */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{
                                position: 'relative',
                                filter: 'drop-shadow(0 0 30px rgba(0, 216, 255, 0.5))',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%'
                            }}
                        >
                            <div style={{ position: 'relative' }}>
                                <Logo height={isMobile ? 150 : isTablet ? 200 : 250} showTagline={!isMobile} />
                                {/* Pulsing glow around logo */}
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '120%',
                                        height: '120%',
                                        background: 'radial-gradient(circle, rgba(0, 216, 255, 0.3), transparent)',
                                        borderRadius: '50%',
                                        filter: 'blur(40px)',
                                        zIndex: -1
                                    }}
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.6, 0.3]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </div>
                        </motion.div>

                        {/* Headline with Gaming Style - Centered with Logo */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            style={{
                                fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                                fontWeight: '900',
                                lineHeight: 1.1,
                                color: '#ffffff',
                                margin: 0,
                                textShadow: '0 0 40px rgba(0, 216, 255, 0.6), 0 0 80px rgba(0, 216, 255, 0.3)',
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                                position: 'relative',
                                textAlign: 'center',
                                width: '100%'
                            }}
                        >
                            We Don't Just Run Events.{' '}
                            <motion.span
                                style={{
                                    background: 'linear-gradient(135deg, #00D8FF, #0099FF, #0066FF)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    display: 'inline-block',
                                    position: 'relative'
                                }}
                                animate={{
                                    textShadow: [
                                        '0 0 20px rgba(0, 216, 255, 0.8)',
                                        '0 0 40px rgba(0, 216, 255, 1)',
                                        '0 0 20px rgba(0, 216, 255, 0.8)'
                                    ]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                We Control Them.
                            </motion.span>
                        </motion.h1>
                    </div>

                    {/* Subheadline with Blue Accent */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        style={{
                            fontSize: 'clamp(1.1rem, 3vw, 1.75rem)',
                            color: 'rgba(200, 230, 255, 0.9)',
                            lineHeight: 1.7,
                            margin: 0,
                            maxWidth: '800px',
                            fontWeight: '400',
                            letterSpacing: '0.03em',
                            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                            position: 'relative'
                        }}
                    >
                        From esports tournaments to events management, we take your idea to the next level.
                    </motion.p>

                    {/* Decorative Lines */}
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        style={{
                            width: '200px',
                            height: '2px',
                            background: 'linear-gradient(90deg, transparent, #00D8FF, transparent)',
                            boxShadow: '0 0 20px rgba(0, 216, 255, 0.8)',
                            marginTop: '1rem'
                        }}
                    />
                </motion.div>
            </div>

            {/* Bottom Glow Bar */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '150px',
                background: 'linear-gradient(to top, rgba(0, 216, 255, 0.2), transparent)',
                zIndex: 2,
                filter: 'blur(60px)'
            }} />

            <style>{`
                @keyframes gridMove {
                    0% {
                        transform: translate(0, 0);
                    }
                    100% {
                        transform: translate(50px, 50px);
                    }
                }
                
                @keyframes pulseGlow {
                    0%, 100% {
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.6;
                        transform: scale(1.1);
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
