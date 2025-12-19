import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Star, Cpu, ShieldCheck, Users, Handshake } from 'lucide-react';
import bgEsports from '../assets/esports_crowd.png';
import bgImpact from '../assets/bg_impact.png';
import bgCreativity from '../assets/bg_creativity.png';
import bgControl from '../assets/bg_control.png';
import bgCorporate from '../assets/bg_service_corporate.png';
import bgSetup from '../assets/gaming_setup.png';

const goals = [
    {
        title: 'Grow Esports in Jordan',
        description: 'We aim to develop the esports ecosystem in Jordan, creating opportunities for players, teams, and fans to thrive.',
        icon: <TrendingUp size={32} />,
        image: bgEsports
    },
    {
        title: 'Deliver Unmatched Experiences',
        description: 'We make every event unforgettable, leaving a lasting impression on your audience.',
        icon: <Star size={32} />,
        image: bgImpact
    },
    {
        title: 'Innovate Every Step of the Way',
        description: 'From creative concepts to cutting-edge production, we push the boundaries of what’s possible.',
        icon: <Cpu size={32} />,
        image: bgCreativity
    },
    {
        title: 'Take Full Control',
        description: 'We handle every detail so you can focus on what matters most “enjoying the event”.',
        icon: <ShieldCheck size={32} />,
        image: bgControl
    },
    {
        title: 'Empower Brands & Communities',
        description: 'We help brands, organizations, and communities connect meaningfully with their audience through impactful events.',
        icon: <Users size={32} />,
        image: bgCorporate
    },
    {
        title: 'Build Long-Term Partnerships',
        description: 'We strive to be more than event organizers, we want to grow with our clients and create recurring success together.',
        icon: <Handshake size={32} />,
        image: bgSetup
    }
];

const Goals = () => {
    const [hoveredGoal, setHoveredGoal] = useState(null);

    // Background particles
    const particles = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * 5,
    }));

    return (
        <section id="goals" className="section-padding" style={{ 
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
                    linear-gradient(rgba(0, 216, 255, 0.06) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 216, 255, 0.06) 1px, transparent 1px)
                `,
                backgroundSize: '55px 55px',
                opacity: 0.4,
                zIndex: 0,
                animation: 'gridMove 22s linear infinite'
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
                        y: [0, -90, 0],
                        x: [0, Math.random() * 35 - 17.5, 0],
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

            {/* Glow Effects */}
            <div style={{
                position: 'absolute',
                top: '15%',
                right: '10%',
                width: '450px',
                height: '450px',
                background: 'radial-gradient(circle, rgba(0, 216, 255, 0.2), transparent)',
                filter: 'blur(110px)',
                zIndex: 0,
                animation: 'pulseGlow 6.5s ease-in-out infinite'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '15%',
                left: '10%',
                width: '350px',
                height: '350px',
                background: 'radial-gradient(circle, rgba(0, 150, 255, 0.18), transparent)',
                filter: 'blur(90px)',
                zIndex: 0,
                animation: 'pulseGlow 5.5s ease-in-out infinite reverse'
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
                        What Drives Us
                    </motion.h2>
                    <motion.p 
                        style={{ 
                            color: 'rgba(200, 230, 255, 0.9)', 
                            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                        }}
                    >
                        At CTRL+ every event we create is guided by a clear purpose and vision.
                    </motion.p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                    gap: '2rem'
                }}>
                    {goals.map((goal, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12, duration: 0.6 }}
                            onMouseEnter={() => setHoveredGoal(index)}
                            onMouseLeave={() => setHoveredGoal(null)}
                            className="glass-panel card-bg"
                            style={{
                                display: 'flex',
                                gap: '1.5rem',
                                alignItems: 'flex-start',
                                padding: '2.5rem',
                                minHeight: '220px',
                                border: hoveredGoal === index 
                                    ? '2px solid rgba(0, 216, 255, 0.8)' 
                                    : (index === 1 || index === 2 || index === 3)
                                        ? '2px solid rgba(0, 216, 255, 0.5)'
                                        : '1px solid rgba(0, 216, 255, 0.2)',
                                background: hoveredGoal === index 
                                    ? 'linear-gradient(135deg, rgba(0, 50, 150, 0.6), rgba(0, 100, 200, 0.5), rgba(0, 150, 255, 0.4))'
                                    : (index === 1 || index === 2 || index === 3)
                                        ? 'linear-gradient(135deg, rgba(0, 50, 150, 0.4), rgba(0, 100, 200, 0.3), rgba(0, 150, 255, 0.2))'
                                        : 'rgba(0, 0, 0, 0.6)',
                                backdropFilter: 'blur(20px)',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: (index === 1 || index === 2 || index === 3)
                                    ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 50px rgba(0, 216, 255, 0.25)'
                                    : 'none'
                            }}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                boxShadow: '0 20px 50px rgba(0, 216, 255, 0.3)'
                            }}
                        >
                            <style>{`
                  .card-bg:nth-child(${index + 1})::before {
                    background-image: url(${goal.image});
                  }
              `}</style>
                            {/* Animated border glow */}
                            {hoveredGoal === index && (
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
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: 'linear'
                                    }}
                                />
                            )}

                            <motion.div 
                                style={{
                                    color: '#00D8FF',
                                    background: hoveredGoal === index 
                                        ? 'rgba(0, 216, 255, 0.2)' 
                                        : 'rgba(0, 0, 0, 0.7)',
                                    padding: '1.25rem',
                                    borderRadius: '50%',
                                    flexShrink: 0,
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: hoveredGoal === index
                                        ? '0 0 35px rgba(0, 216, 255, 0.7)'
                                        : '0 0 20px rgba(0, 216, 255, 0.4)',
                                    border: '2px solid rgba(0, 216, 255, 0.3)'
                                }}
                                animate={{
                                    rotate: hoveredGoal === index ? [0, 15, -15, 0] : 0,
                                    scale: hoveredGoal === index ? 1.2 : 1
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                {goal.icon}
                            </motion.div>
                            <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
                                <motion.h3 
                                    style={{ 
                                        fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', 
                                        fontWeight: '900', 
                                        marginBottom: '0.75rem',
                                        textShadow: '0 0 20px rgba(0, 216, 255, 0.5)',
                                        color: '#ffffff',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.03em'
                                    }}
                                    animate={{
                                        color: hoveredGoal === index ? '#00D8FF' : '#ffffff'
                                    }}
                                >
                                    {goal.title}
                                </motion.h3>
                                <motion.p 
                                    style={{ 
                                        color: 'rgba(255, 255, 255, 0.9)', 
                                        lineHeight: '1.7', 
                                        fontSize: '1rem',
                                        textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
                                    }}
                                    animate={{
                                        opacity: hoveredGoal === index ? 1 : 0.9
                                    }}
                                >
                                    {goal.description}
                                </motion.p>
                            </div>

                            {/* Hover glow overlay */}
                            {hoveredGoal === index && (
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'radial-gradient(circle at center, rgba(0, 216, 255, 0.15), transparent)',
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
                    100% { transform: translate(55px, 55px); }
                }
                @keyframes pulseGlow {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.1); }
                }
            `}</style>
        </section>
    );
};

export default Goals;
