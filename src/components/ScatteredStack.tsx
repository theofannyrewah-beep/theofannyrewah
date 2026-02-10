'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScatteredStack.css';

gsap.registerPlugin(ScrollTrigger);

interface ScatteredStackProps {
    images: string[];
    children: React.ReactNode;
    variant?: 'portrait' | 'landscape' | 'masonry'; // Added masonry
}

export default function ScatteredStack({ images, children, variant = 'portrait' }: ScatteredStackProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const section = sectionRef.current;
        const cards = cardsRef.current.filter(Boolean);

        if (!section || cards.length === 0) return;

        // context for cleanup
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    // CONTROL SPEED HERE:
                    // "+=1500%" means you have to scroll 15 screens to finish.
                    // Lower it (e.g. "+=1000%") to make it FASTER (less scrolling).
                    // Increase it (e.g. "+=2000%") to make it SLOWER (more scrolling).
                    end: "+=1500%",

                    // CONTROL SMOOTHNESS HERE:
                    // Higher number (e.g 3) = smoother but "laggier".
                    // Lower number (e.g 1) = tighter to scroll bar.
                    scrub: 2.5,
                    pin: true,
                    // markers: true, // debug
                }
            });

            // Refactored to single stagger for random order "ngacak"
            // Refactored to single stagger for random order "ngacak"
            // Portrait spacing: 270 (user set), Landscape: 450 (tight overlap for 550px cards)
            const spacing = variant === 'landscape' ? 450 : 270;

            tl.fromTo(cards,
                {
                    opacity: 1,
                    scale: 1.2,
                    y: "110vh",
                    x: (i) => (Math.random() - 0.5) * 50,
                    rotation: (i) => (Math.random() - 0.5) * 20,
                },
                {
                    opacity: 1,
                    scale: 1,
                    // Function-based values to maintain specific layout for each card index
                    y: (i) => {
                        if (variant === 'masonry') return 0; // Let CSS handle position

                        if (variant === 'landscape') {
                            // 3 rows: 0-2 (Top), 3-5 (Middle), 6-8 (Bottom)
                            if (i < 3) return -250; // Top
                            if (i < 6) return -50;  // Middle
                            return 150;             // Bottom
                        }
                        // Portrait: 5 top, 4 bottom
                        const isTopRow = i < 5;
                        return isTopRow ? -200 : 100;
                    },
                    x: (i) => {
                        if (variant === 'masonry') return 0; // Let CSS handle position

                        if (variant === 'landscape') {
                            // 3 items per row, centered on index 1 (relative)
                            // Row 1: 0,1,2 -> -1, 0, 1
                            // Row 2: 3,4,5 -> -1, 0, 1
                            // Row 3: 6,7,8 -> -1, 0, 1
                            const colIndex = i % 3;
                            return (colIndex - 1) * spacing;
                        }

                        const isTopRow = i < 5;
                        if (isTopRow) return (i - 2) * spacing;
                        return ((i - 5) - 1.5) * spacing;
                    },
                    rotation: (i) => (Math.random() - 0.5) * 10,
                    duration: 1,
                    ease: "power2.out",
                    stagger: {
                        each: 0.5,
                        from: "random", // Randomize the start order!
                        amount: 4 // Spread starts over time
                    }
                }
            );
        }, section);

        return () => ctx.revert();
    }, [images]);

    return (
        <div className="scattered-stack-section" ref={sectionRef}>
            <div className="scattered-base-content">
                {children}
            </div>
            <div className={`scattered-stack-container ${variant === 'masonry' ? 'masonry' : ''}`}>
                {images.map((src, i) => (
                    <div
                        key={i}
                        className={`scattered-card ${variant}`}
                        ref={el => { cardsRef.current[i] = el; }}
                    >
                        <img src={src} alt={`Project Detail ${i}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}
