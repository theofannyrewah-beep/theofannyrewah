'use client';
import React from 'react';
import './Footer.css';
import dynamic from 'next/dynamic';
import './Footer.css';

const Lanyard = dynamic(() => import('./Lanyard'), {
    ssr: false,
    loading: () => <div style={{ height: '100%', width: '100%', minHeight: '300px' }}></div>
});

export default function Footer() {
    return (
        <footer className="footer-section" id="contact">
            <div className="footer-lanyard-wrapper">
                <Lanyard position={[0, 0, 19]} gravity={[0, -40, 0]} />
            </div>
            <div className="footer-container">
                {/* Top Brand */}
                <div className="footer-top">
                    <span className="footer-brand">Portfolio</span>
                    {/* Menu is likely handling the global nav, so we leave right empty or minimal */}
                </div>

                {/* Main Content */}
                <div className="footer-bottom">
                    <div className="footer-cta">
                        <span className="footer-cta-label">Got A Project In Mind?</span>
                        <h1 className="footer-cta-title">LET'S TALK</h1>
                    </div>

                    <div className="footer-group">
                        <a href="https://instagram.com/theofannyr" className="footer-link">Instagram</a>
                        <a href="mailto:theofannyrewah@gmail.com" className="footer-link">Gmail</a>
                        <a href="https://wa.me/6285183005287" className="footer-link">Whatsapp</a>
                    </div>

                    {/* Optional Careers/Credits */}
                    {/* <div className="footer-group">
                             <a href="#" className="footer-link">Careers</a>
                        </div> */}
                </div>
            </div>

            {/* Big Arrow Icon (SVG) */}
            <div className="footer-arrow">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
            </div>
        </footer >
    );
}
