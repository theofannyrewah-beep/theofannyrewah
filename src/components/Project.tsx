import React from 'react';
import './Project.css';
import ScatteredStack from './ScatteredStack';
import MasonryGrid from './MasonryGrid';

export default function Project() {
    return (
        <section className="project-section" id="project">
            <div className="project-container">
                <div className="project-header">
                    <div className="project-title-group">
                        <h2 className="project-title">MY PROJECT</h2>
                        <p className="project-subtitle">Flyer & Social Media Design</p>
                    </div>
                    <span className="project-number">01</span>
                </div>
                <ScatteredStack images={[
                    "images/1.png",
                    "images/2.png",
                    "images/3.png",
                    "images/4.png",
                    "images/5.png",
                    "images/6.png",
                    "images/7.png",
                    "images/8.png",
                    "images/9.png"
                ]}>
                    <div className="project-image-container">
                        <img src="images/Instagram Post Story Mockup.png" alt="Project 01 Preview" className="project-image" />
                    </div>
                </ScatteredStack>
            </div>
            <div className="project-container" style={{ marginTop: '0px' }}>
                <div className="project-header">
                    <div className="project-title-group">
                        <h2 className="project-title">MY PROJECT</h2>
                        <p className="project-subtitle">Web Developer & UI/UX</p>
                    </div>
                    <span className="project-number">02</span>
                </div>
                <ScatteredStack
                    variant="landscape"
                    images={[
                        "images/10.png",
                        "images/11.png",
                        "images/12.png",
                        "images/13.png",
                        "images/14.png",
                        "images/15.png",
                        "images/16.png",
                        "images/17.png",
                        "images/18.png"
                    ]}>
                    <div className="project-image-container">
                        <img src="images/Scene-8.jpg" alt="Project 02 Preview" className="project-image" />
                    </div>
                </ScatteredStack>
            </div>
            <div className="project-container" style={{ marginTop: '0px' }}>
                <div className="project-header">
                    <div className="project-title-group">
                        <h2 className="project-title">MY PROJECT</h2>
                        <p className="project-subtitle">Graphic Design</p>
                    </div>
                    <span className="project-number">03</span>
                </div>
                <MasonryGrid
                    images={[
                        "images/25.jpg",
                        "images/32.jpg",
                        "images/19.jpg.jpeg",
                        "images/28.jpg",
                        "images/21.jpg.jpeg",
                        "images/33.jpg",
                        "images/24.jpg",
                        "images/30.jpg",
                        "images/22.jpg",
                        "images/27.jpg",
                        "images/34.jpg",
                        "images/23.jpg",
                        "images/29.jpg",
                        "images/26.jpg",
                        "images/31.jpg",
                        "images/20.jpg.jpeg"
                    ]}
                />
            </div>
            <div className="project-container" style={{ marginTop: '0px' }}>
                <div className="project-header">
                    <div className="project-title-group">
                        <h2 className="project-title">MY PROJECT</h2>
                        <p className="project-subtitle">Current Project</p>
                    </div>
                    <span className="project-number">04</span>
                </div>
                <div className="project-image-container full-width">
                    <img src="images/webmupel.png" alt="Project 04 Preview" className="project-image" />
                </div>
            </div>
        </section >
    );
}
