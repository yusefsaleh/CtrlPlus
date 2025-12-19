import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart } from 'lucide-react';
import bgControl from '../assets/bg_control.png';
import bgCreativity from '../assets/bg_creativity.png';
import bgImpact from '../assets/bg_impact.png';

const values = [
    {
        title: 'Control',
        description: 'We manage every detail so you don’t have to.',
        icon: <Target size={32} />,
        image: bgControl
    },
    {
        title: 'Creativity',
        description: 'Unique concepts tailored for your audience.',
        icon: <Lightbulb size={32} />,
        image: bgCreativity
    },
    {
        title: 'Impact',
        description: 'Memorable experiences that leave a lasting impression.',
        icon: <Heart size={32} />,
        image: bgImpact
    }
];

const About = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Floating particles for background
    const particles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * 5,
    }));

    return (
        <section id="about" className="section-padding" style={{ 
            position: 'relative', 
            overflow: 'hidden',
            background: 'linear-gradient(180deg, #000515 0%, #050510 50%, #000515 100%)'
        }}>
            {/* Animated Background Grid */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `
                    linear-gradient(rgba(0, 216, 255, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 216, 255, 0.05) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
                opacity: 0.4,
                zIndex: 0,
                animation: 'gridMove 25s linear infinite'
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
                        boxShadow: `0 0 ${p.size * 3}px rgba(0, 216, 255, 0.5)`,
                        zIndex: 1
                    }}
                    animate={{
                        y: [0, -80, 0],
                        x: [0, Math.random() * 30 - 15, 0],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.3, 1]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: p.delay
                    }}
                />
            ))}

            {/* Blue Glow Effects */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(0, 216, 255, 0.2), transparent)',
                filter: 'blur(100px)',
                zIndex: 0,
                animation: 'pulseGlow 6s ease-in-out infinite'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(0, 150, 255, 0.15), transparent)',
                filter: 'blur(80px)',
                zIndex: 0,
                animation: 'pulseGlow 5s ease-in-out infinite reverse'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    {/* Who We Are */}
                    <motion.div 
                        className="glass-panel" 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            textAlign: 'center',
                            maxWidth: '900px',
                            padding: '4rem 2rem',
                            borderRadius: '2rem',
                            width: '100%',
                            background: 'linear-gradient(135deg, rgba(0, 50, 150, 0.4), rgba(0, 100, 200, 0.3), rgba(0, 150, 255, 0.2))',
                            border: '2px solid rgba(0, 216, 255, 0.5)',
                            backdropFilter: 'blur(20px)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 60px rgba(0, 216, 255, 0.3)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Animated border glow */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: '-100%',
                                width: '100%',
                                height: '2px',
                                background: 'linear-gradient(90deg, transparent, #00D8FF, transparent)',
                                boxShadow: '0 0 20px rgba(0, 216, 255, 0.8)'
                            }}
                            animate={{
                                left: ['-100%', '100%']
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'linear'
                            }}
                        />
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            style={{ 
                                fontSize: 'clamp(2rem, 5vw, 3rem)', 
                                fontWeight: '900', 
                                marginBottom: '1.5rem', 
                                position: 'relative', 
                                zIndex: 1,
                                background: 'linear-gradient(135deg, #ffffff, #00D8FF)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em'
                            }}
                        >
                            Who We Are
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            style={{ 
                                fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', 
                                lineHeight: '1.9', 
                                color: 'rgba(255, 255, 255, 0.9)', 
                                position: 'relative', 
                                zIndex: 1,
                                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                            }}
                        >
                            <span style={{ 
                                color: '#00D8FF', 
                                fontWeight: 'bold',
                                textShadow: '0 0 20px rgba(0, 216, 255, 0.6)'
                            }}>CTRL+</span> is a premier event management company that transforms ideas into unforgettable experiences. We specialize in esports tournaments, events management, and activations, delivering innovation, precision, and total control from start to finish.
                        </motion.p>
                    </motion.div>

                    {/* Key Values */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                        gap: '2rem',
                        width: '100%'
                    }}>
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className="glass-panel card-bg-value"
                                style={{
                                    padding: isMobile ? '2rem 1.5rem' : '3rem 2rem',
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    minHeight: isMobile ? '300px' : '350px',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    isolation: 'isolate',
                                    border: hoveredCard === index 
                                        ? '2px solid rgba(0, 216, 255, 0.8)' 
                                        : (index === 1 || index === 2) 
                                            ? '2px solid rgba(0, 216, 255, 0.4)' 
                                            : '1px solid rgba(0, 216, 255, 0.2)',
                                    background: hoveredCard === index 
                                        ? 'linear-gradient(135deg, rgba(0, 50, 150, 0.5), rgba(0, 100, 200, 0.4), rgba(0, 150, 255, 0.3))'
                                        : (index === 1 || index === 2)
                                            ? 'linear-gradient(135deg, rgba(0, 50, 150, 0.4), rgba(0, 100, 200, 0.3), rgba(0, 150, 255, 0.2))'
                                            : 'rgba(0, 0, 0, 0.5)',
                                    backdropFilter: 'blur(15px)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: (index === 1 || index === 2)
                                        ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 40px rgba(0, 216, 255, 0.2)'
                                        : 'none'
                                }}
                                whileHover={{ 
                                    scale: 1.08, 
                                    y: -10,
                                    boxShadow: '0 20px 60px rgba(0, 216, 255, 0.3)'
                                }}
                            >
                                <style>{`
                  .card-bg-value:nth-of-type(${index + 1})::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: url(${value.image});
                    background-size: cover;
                    background-position: center;
                    opacity: 0.4;
                    transition: opacity 0.3s, transform 0.5s;
                    z-index: -1;
                  }
                  .card-bg-value:hover::before {
                    opacity: 0.6;
                    transform: scale(1.1);
                  }
                  .card-bg-value::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4));
                    z-index: -1;
                  }
                `}</style>
                                <motion.div 
                                    style={{
                                        color: '#00D8FF',
                                        marginBottom: '0.5rem',
                                        background: hoveredCard === index 
                                            ? 'rgba(0, 216, 255, 0.2)' 
                                            : 'rgba(0, 0, 0, 0.6)',
                                        padding: '1.5rem',
                                        borderRadius: '50%',
                                        backdropFilter: 'blur(10px)',
                                        boxShadow: hoveredCard === index
                                            ? '0 0 30px rgba(0, 216, 255, 0.8)'
                                            : '0 0 20px rgba(0, 216, 255, 0.4)',
                                        border: '2px solid rgba(0, 216, 255, 0.3)'
                                    }}
                                    animate={{
                                        rotate: hoveredCard === index ? 360 : 0,
                                        scale: hoveredCard === index ? 1.1 : 1
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {value.icon}
                                </motion.div>
                                <motion.h3 
                                    style={{ 
                                        fontSize: '1.75rem', 
                                        fontWeight: '900', 
                                        textShadow: '0 0 20px rgba(0, 216, 255, 0.5)',
                                        color: '#ffffff',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}
                                    animate={{
                                        color: hoveredCard === index ? '#00D8FF' : '#ffffff'
                                    }}
                                >
                                    {value.title}
                                </motion.h3>
                                <motion.p 
                                    style={{ 
                                        color: 'rgba(255, 255, 255, 0.9)', 
                                        textShadow: '0 2px 8px rgba(0,0,0,0.8)', 
                                        fontSize: '1.15rem',
                                        lineHeight: '1.6'
                                    }}
                                    animate={{
                                        opacity: hoveredCard === index ? 1 : 0.9
                                    }}
                                >
                                    {value.description}
                                </motion.p>
                                
                                {/* Hover glow effect */}
                                {hoveredCard === index && (
                                    <motion.div
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'radial-gradient(circle at center, rgba(0, 216, 255, 0.2), transparent)',
                                            zIndex: -1
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
            </div>

            <style>{`
                @keyframes gridMove {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(60px, 60px); }
                }
                @keyframes pulseGlow {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.1); }
                }
            `}</style>
        </section>
    );
};

export default About;
