'use client';
import React, { useRef, useState } from 'react';
import './SpotlightCard.css';

interface SpotlightCardProps {
    image: string;
}

export default function SpotlightCard({ image }: SpotlightCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setPosition({ x, y });
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={cardRef}
            className="spotlight-card-wrapper"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                '--mouse-x': `${position.x}px`,
                '--mouse-y': `${position.y}px`,
            } as React.CSSProperties}
        >
            <div className="spotlight-card-content">
                <img src={image} alt="Project Spotlight" className="spotlight-card-image" />
            </div>
        </div>
    );
}
