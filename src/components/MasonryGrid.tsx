'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MasonryGrid.css';

gsap.registerPlugin(ScrollTrigger);

interface MasonryGridProps {
    images: string[];
}

export default function MasonryGrid({ images }: MasonryGridProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        // Simple fade-up animation for the whole grid
        // instead of complex scattering
        const ctx = gsap.context(() => {
            gsap.fromTo(grid.children,
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1, // Stagger appearance slightly
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%", // Start when top of section is 80% down viewport
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, [images]);

    return (
        <div className="masonry-grid-section" ref={sectionRef}>
            <div className="masonry-grid-container" ref={gridRef}>
                {images.map((src, i) => (
                    <div key={i} className="masonry-card">
                        <img src={src} alt={`Project Detail ${i}`} loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    );
}
