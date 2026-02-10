'use client';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-container">
                {/* Center Content: Blurred Title + Name */}
                <div className="hero-center">
                    <div className="hero-title-group">
                        <span className="hero-blur-text">portf</span>
                        <span className="hero-blur-text">olio</span>
                    </div>
                    <div className="hero-author-name">
                        THEO FANNY REWAH
                    </div>
                </div>
            </div>

            {/* Bottom Visual Elements */}
            <div className="hero-bottom-nav">
                <span className="nav-item-visual">UI/UX</span>
                <span className="nav-item-visual">Web Developer</span>
                <span className="nav-item-visual">Graphic Design</span>
                <span className="nav-item-visual">Streaming Operator</span>
            </div>


        </section>
    );
};

export default Hero;
