import React from 'react';
import Navbar from './Navbar';
import Particles from './Particles';

const Layout = ({ children }) => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <div className="global-grid-bg" />
            <Particles />
            <div className="scanlines" />
            <Navbar />
            <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
                {children}
            </main>
            <footer style={{ padding: '2rem 0', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '4rem', position: 'relative', zIndex: 1 }}>
                <div className="container" style={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>
                    <p>&copy; {new Date().getFullYear()} CTRL+. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
