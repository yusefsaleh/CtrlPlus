import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Briefcase, Zap, Sparkles } from 'lucide-react';
import bgEsports from '../assets/bg_service_esports.png';
import bgCorporate from '../assets/bg_service_corporate.png';
import bgBrand from '../assets/gaming_setup.png';
import bgCustom from '../assets/bg_creativity.png';

const services = [
    {
        title: 'Esports Events',
        description: 'Tournaments, live streaming, player management, refereeing/admins, production and media.',
        icon: <Gamepad2 size={40} />,
        color: 'var(--color-primary)',
        image: bgEsports
    },
    {
        title: 'Corporate Events',
        description: 'Event support, conferences, product launches, team building.',
        icon: <Briefcase size={40} />,
        color: 'var(--color-accent)',
        image: bgCorporate
    },
    {
        title: 'Brand Activations',
        description: 'Experiential marketing, campaigns, pop-ups.',
        icon: <Zap size={40} />,
        color: '#f59e0b', // Amber
        image: bgBrand
    },
    {
        title: 'Custom Events',
        description: 'If you can dream it, we can create it.',
        icon: <Sparkles size={40} />,
        color: '#ec4899', // Pink
        image: bgCustom
    }
];

const Services = () => {
    const [hoveredService, setHoveredService] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Background particles
    const particles = Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        duration: Math.random() * 12 + 6,
        delay: Math.random() * 5,
    }));

    return (
        <section id="services" className="section-padding" style={{ 
            position: 'relative', 
            overflow: 'hidden',
            background: 'linear-gradient(180deg, #000515 0%, #050510 50%, #000515 100%)'
        }}>
            {/* Animated Grid */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `
                    linear-gradient(rgba(0, 216, 255, 0.08) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 216, 255, 0.08) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                opacity: 0.5,
                zIndex: 0,
                animation: 'gridMove 20s linear infinite'
            }} />

            {/* Floating Particles */}
            {particles.map((p) => (
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
                        zIndex: 1
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, Math.random() * 40 - 20, 0],
                        opacity: [0.2, 0.7, 0.2],
                        scale: [1, 1.4, 1]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: p.delay
                    }}
                />
            ))}

            {/* Glow Effects */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '5%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(0, 216, 255, 0.25), transparent)',
                filter: 'blur(120px)',
                zIndex: 0,
                animation: 'pulseGlow 7s ease-in-out infinite'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '5%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(0, 150, 255, 0.2), transparent)',
                filter: 'blur(100px)',
                zIndex: 0,
                animation: 'pulseGlow 6s ease-in-out infinite reverse'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <motion.div 
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2 
                        style={{ 
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
                            fontWeight: '900', 
                            marginBottom: '1rem',
                            background: 'linear-gradient(135deg, #ffffff, #00D8FF)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            textShadow: '0 0 40px rgba(0, 216, 255, 0.3)'
                        }}
                    >
                        Our Services
                    </motion.h2>
                    <motion.p 
                        style={{ 
                            color: 'rgba(200, 230, 255, 0.9)', 
                            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                        }}
                    >
                        We handle every type of event with professionalism and creativity.
                    </motion.p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            onMouseEnter={() => setHoveredService(index)}
                            onMouseLeave={() => setHoveredService(null)}
                            className="glass-panel card-bg"
                            style={{
                                padding: isMobile ? '2rem 1.5rem' : '2.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                transition: 'all 0.4s ease',
                                cursor: 'pointer',
                                minHeight: isMobile ? '350px' : '400px',
                                justifyContent: 'flex-end',
                                border: hoveredService === index 
                                    ? `2px solid ${service.color === 'var(--color-primary)' ? '#8b5cf6' : service.color === 'var(--color-accent)' ? '#00D8FF' : service.color}` 
                                    : (index === 1 || index === 2 || index === 3)
                                        ? '2px solid rgba(0, 216, 255, 0.5)'
                                        : '1px solid rgba(0, 216, 255, 0.2)',
                                background: hoveredService === index 
                                    ? 'linear-gradient(135deg, rgba(0, 50, 150, 0.6), rgba(0, 100, 200, 0.5), rgba(0, 150, 255, 0.4))'
                                    : (index === 1 || index === 2 || index === 3)
                                        ? 'linear-gradient(135deg, rgba(0, 50, 150, 0.4), rgba(0, 100, 200, 0.3), rgba(0, 150, 255, 0.2))'
                                        : 'rgba(0, 0, 0, 0.6)',
                                backdropFilter: 'blur(20px)',
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: (index === 1 || index === 2 || index === 3)
                                    ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 50px rgba(0, 216, 255, 0.25)'
                                    : 'none'
                            }}
                            whileHover={{
                                y: -15,
                                scale: 1.05,
                                boxShadow: hoveredService === index 
                                    ? `0 25px 60px ${service.color === 'var(--color-primary)' ? 'rgba(139, 92, 246, 0.4)' : service.color === 'var(--color-accent)' ? 'rgba(0, 216, 255, 0.4)' : 'rgba(0, 216, 255, 0.3)'}`
                                    : '0 10px 30px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            <style>{`
                  .card-bg:nth-of-type(${index + 1})::before {
                    background-image: url(${service.image});
                  }
              `}</style>
                            {/* Animated border glow */}
                            {hoveredService === index && (
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: '-100%',
                                        width: '100%',
                                        height: '2px',
                                        background: `linear-gradient(90deg, transparent, ${service.color === 'var(--color-primary)' ? '#8b5cf6' : service.color === 'var(--color-accent)' ? '#00D8FF' : service.color}, transparent)`,
                                        boxShadow: `0 0 20px ${service.color === 'var(--color-primary)' ? '#8b5cf6' : service.color === 'var(--color-accent)' ? '#00D8FF' : service.color}`
                                    }}
                                    animate={{
                                        left: ['-100%', '100%']
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'linear'
                                    }}
                                />
                            )}

                            <motion.div 
                                style={{
                                    color: service.color === 'var(--color-primary)' ? '#8b5cf6' : service.color === 'var(--color-accent)' ? '#00D8FF' : service.color,
                                    background: hoveredService === index 
                                        ? `rgba(0, 216, 255, 0.2)` 
                                        : 'rgba(0, 0, 0, 0.7)',
                                    width: '90px',
                                    height: '90px',
                                    borderRadius: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: hoveredService === index
                                        ? `0 0 40px ${service.color === 'var(--color-primary)' ? 'rgba(139, 92, 246, 0.6)' : service.color === 'var(--color-accent)' ? 'rgba(0, 216, 255, 0.6)' : 'rgba(0, 216, 255, 0.4)'}`
                                        : `0 0 25px ${service.color === 'var(--color-primary)' ? 'rgba(139, 92, 246, 0.3)' : service.color === 'var(--color-accent)' ? 'rgba(0, 216, 255, 0.3)' : 'rgba(0, 216, 255, 0.2)'}`,
                                    border: `2px solid ${service.color === 'var(--color-primary)' ? 'rgba(139, 92, 246, 0.4)' : service.color === 'var(--color-accent)' ? 'rgba(0, 216, 255, 0.4)' : 'rgba(0, 216, 255, 0.3)'}`
                                }}
                                animate={{
                                    rotate: hoveredService === index ? [0, 10, -10, 0] : 0,
                                    scale: hoveredService === index ? 1.15 : 1
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                {service.icon}
                            </motion.div>
                            <motion.h3 
                                style={{ 
                                    fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', 
                                    fontWeight: '900', 
                                    textShadow: '0 0 20px rgba(0, 216, 255, 0.5)',
                                    color: '#ffffff',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}
                                animate={{
                                    color: hoveredService === index 
                                        ? (service.color === 'var(--color-primary)' ? '#8b5cf6' : service.color === 'var(--color-accent)' ? '#00D8FF' : service.color)
                                        : '#ffffff'
                                }}
                            >
                                {service.title}
                            </motion.h3>
                            <motion.p 
                                style={{ 
                                    color: 'rgba(255, 255, 255, 0.9)', 
                                    lineHeight: '1.7', 
                                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
                                    fontSize: '1.1rem'
                                }}
                                animate={{
                                    opacity: hoveredService === index ? 1 : 0.9
                                }}
                            >
                                {service.description}
                            </motion.p>

                            {/* Hover glow overlay */}
                            {hoveredService === index && (
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: `radial-gradient(circle at center, ${service.color === 'var(--color-primary)' ? 'rgba(139, 92, 246, 0.15)' : service.color === 'var(--color-accent)' ? 'rgba(0, 216, 255, 0.15)' : 'rgba(0, 216, 255, 0.1)'}, transparent)`,
                                        zIndex: -1,
                                        pointerEvents: 'none'
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes gridMove {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(50px, 50px); }
                }
                @keyframes pulseGlow {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.1); }
                }
            `}</style>
        </section>
    );
};

export default Services;
