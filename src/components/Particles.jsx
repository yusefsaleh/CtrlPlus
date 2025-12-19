import React from 'react';
import { motion } from 'framer-motion';

const Particles = () => {
    // Generate more random particles with varied colors
    const particles = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 10 + 5, // Faster duration
        delay: Math.random() * 5,
        color: Math.random() > 0.5 ? 'var(--color-primary)' : 'var(--color-accent)'
    }));

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0
        }}>
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    style={{
                        position: 'absolute',
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                        backgroundColor: p.color,
                        borderRadius: '50%',
                        opacity: 0.4,
                        boxShadow: `0 0 ${p.size * 3}px ${p.color}`
                    }}
                    animate={{
                        y: [0, -150, 0], // Move further
                        x: [0, Math.random() * 50 - 25, 0], // Add horizontal movement
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
        </div>
    );
};

export default Particles;
