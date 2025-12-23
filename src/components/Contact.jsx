import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Mail, Phone, MapPin } from 'lucide-react';

// Social Media Icons
const InstagramIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor" />
    </svg>
);

const XIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
    </svg>
);

const TikTokIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor" />
    </svg>
);

const FacebookIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor" />
    </svg>
);

const Contact = () => {
    const [isHovered, setIsHovered] = useState(false);
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

    // Floating particles
    const particles = Array.from({ length: 35 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * 5,
    }));

    const contactInfo = [
        { icon: <Mail size={24} />, text: 'info@ctrlplusevents.com', link: 'mailto:info@ctrlplusevents.com' },
        { icon: <Phone size={24} />, text: '+9627 9785 5584', link: 'tel:+962797855584' },
        { icon: <MapPin size={24} />, text: 'Amman, Jordan', link: '#' }
    ];

    return (
        <section id="contact" className="section-padding" style={{
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
                animation: 'gridMove 18s linear infinite'
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
                        y: [0, -120, 0],
                        x: [0, Math.random() * 50 - 25, 0],
                        opacity: [0.2, 0.8, 0.2],
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
                left: '15%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(0, 216, 255, 0.3), transparent)',
                filter: 'blur(130px)',
                zIndex: 0,
                animation: 'pulseGlow 7s ease-in-out infinite'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '15%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(0, 150, 255, 0.25), transparent)',
                filter: 'blur(110px)',
                zIndex: 0,
                animation: 'pulseGlow 6s ease-in-out infinite reverse'
            }} />
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '700px',
                height: '700px',
                background: 'radial-gradient(circle, rgba(0, 216, 255, 0.2), transparent)',
                filter: 'blur(140px)',
                zIndex: 0,
                animation: 'pulseGlow 8s ease-in-out infinite'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 30 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel"
                    style={{
                        padding: isMobile ? '3rem 1.5rem' : isTablet ? '4rem 2rem' : '5rem 3rem',
                        maxWidth: '900px',
                        margin: '0 auto',
                        border: '2px solid rgba(0, 216, 255, 0.3)',
                        background: 'rgba(0, 0, 0, 0.7)',
                        backdropFilter: 'blur(25px)',
                        borderRadius: isMobile ? '1.5rem' : '2rem',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 50px rgba(0, 216, 255, 0.2)',
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
                            boxShadow: '0 0 30px rgba(0, 216, 255, 1)'
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
                        style={{
                            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                            fontWeight: '900',
                            marginBottom: '1.5rem',
                            lineHeight: 1.2,
                            background: 'linear-gradient(135deg, #ffffff, #00D8FF, #0099FF)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            textShadow: '0 0 50px rgba(0, 216, 255, 0.4)'
                        }}
                        animate={{
                            textShadow: [
                                '0 0 30px rgba(0, 216, 255, 0.4)',
                                '0 0 60px rgba(0, 216, 255, 0.7)',
                                '0 0 30px rgba(0, 216, 255, 0.4)'
                            ]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        Press <span style={{
                            color: '#00D8FF',
                            textShadow: '0 0 40px rgba(0, 216, 255, 0.8)'
                        }}>Play</span>. <br />
                        We'll Control the Rest.
                    </motion.h2>

                    <motion.p
                        style={{
                            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                            color: 'rgba(200, 230, 255, 0.9)',
                            marginBottom: '3rem',
                            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                            lineHeight: '1.7'
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Ready to create an unforgettable event? Let's make it happen.
                    </motion.p>

                    {/* Contact Info */}
                    <motion.div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: isMobile ? '1rem' : '2rem',
                            marginBottom: isMobile ? '2rem' : '3rem'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={index}
                                href={info.link}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    textDecoration: 'none',
                                    padding: isMobile ? '0.75rem 1rem' : '1rem 1.5rem',
                                    borderRadius: '12px',
                                    fontSize: isMobile ? '0.9rem' : '1rem',
                                    background: 'rgba(0, 0, 0, 0.5)',
                                    border: '1px solid rgba(0, 216, 255, 0.2)',
                                    backdropFilter: 'blur(10px)',
                                    transition: 'all 0.3s ease'
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    borderColor: 'rgba(0, 216, 255, 0.6)',
                                    background: 'rgba(0, 216, 255, 0.1)',
                                    boxShadow: '0 0 25px rgba(0, 216, 255, 0.4)',
                                    color: '#00D8FF'
                                }}
                            >
                                <div style={{ color: '#00D8FF' }}>
                                    {info.icon}
                                </div>
                                <span>{info.text}</span>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Social Media Icons */}
                    <motion.div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: isMobile ? '1rem' : '1.5rem',
                            marginBottom: isMobile ? '2rem' : '3rem',
                            flexWrap: 'wrap'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                    >
                        {[
                            {
                                icon: <InstagramIcon size={28} />,
                                name: 'Instagram',
                                link: 'https://www.instagram.com/ctrlplus.jo/?igsh=MTl0NjNjcGFnNmMzeg%3D%3D#',
                                color: '#E4405F'
                            },
                            {
                                icon: <XIcon size={28} />,
                                name: 'X (Twitter)',
                                link: 'https://x.com/ControlPlusJO',
                                color: '#000000'
                            },
                            {
                                icon: <TikTokIcon size={28} />,
                                name: 'TikTok',
                                link: 'http://www.tiktok.com/@ctrlplusjo',
                                color: '#000000'
                            },
                            {
                                icon: <FacebookIcon size={28} />,
                                name: 'Facebook',
                                link: 'https://www.facebook.com/share/1BBFn2M3rY/',
                                color: '#1877F2'
                            }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: isMobile ? '50px' : '60px',
                                    height: isMobile ? '50px' : '60px',
                                    borderRadius: '50%',
                                    background: 'rgba(0, 0, 0, 0.6)',
                                    border: '2px solid rgba(0, 216, 255, 0.3)',
                                    backdropFilter: 'blur(10px)',
                                    color: '#00D8FF',
                                    textDecoration: 'none',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                whileHover={{
                                    scale: 1.15,
                                    borderColor: '#00D8FF',
                                    background: 'rgba(0, 216, 255, 0.15)',
                                    boxShadow: '0 0 30px rgba(0, 216, 255, 0.6)',
                                    rotate: 360
                                }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    {social.icon}
                                </motion.div>
                                {/* Tooltip */}
                                <motion.span
                                    style={{
                                        position: 'absolute',
                                        bottom: '-40px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        fontSize: '0.75rem',
                                        whiteSpace: 'nowrap',
                                        background: 'rgba(0, 0, 0, 0.9)',
                                        padding: '0.25rem 0.5rem',
                                        borderRadius: '4px',
                                        border: '1px solid rgba(0, 216, 255, 0.3)',
                                        opacity: 0,
                                        pointerEvents: 'none'
                                    }}
                                    whileHover={{ opacity: 1, bottom: '-35px' }}
                                >
                                    {social.name}
                                </motion.span>
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.button
                        className="btn-primary"
                        style={{
                            fontSize: isMobile ? '1.1rem' : '1.5rem',
                            padding: isMobile ? '1rem 2.5rem' : '1.25rem 4rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            background: 'linear-gradient(135deg, #00D8FF, #0099FF, #0066FF)',
                            border: 'none',
                            borderRadius: '50px',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            boxShadow: '0 0 40px rgba(0, 216, 255, 0.5)',
                            position: 'relative',
                            overflow: 'hidden',
                            cursor: 'pointer'
                        }}
                        onClick={() => window.location.href = 'mailto:info@ctriplusevents.com'}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        whileHover={{
                            scale: 1.1,
                            boxShadow: '0 0 60px rgba(0, 216, 255, 0.8)'
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Animated background */}
                        {isHovered && (
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(135deg, #0099FF, #00D8FF)',
                                    zIndex: -1
                                }}
                                initial={{ x: '-100%' }}
                                animate={{ x: '100%' }}
                                transition={{ duration: 0.6 }}
                            />
                        )}
                        <motion.div
                            animate={{
                                rotate: isHovered ? 360 : 0,
                                scale: isHovered ? 1.2 : 1
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <Play size={28} fill="currentColor" />
                        </motion.div>
                        Get in Touch
                    </motion.button>
                </motion.div>
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

export default Contact;
