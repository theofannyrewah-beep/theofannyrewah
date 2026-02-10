import './About.css';

const About = () => {
    return (
        <section id="about" className="about-redesign">
            {/* Background removed as per request */}

            <div className="about-grid" style={{ zIndex: 1, position: 'relative' }}>
                {/* Left Column: Title & Name */}
                <div className="about-left">
                    <div className="about-title-group">
                        <span className="about-greeting">HELLO, I'M</span>
                        <h2 className="about-name">THEO FANNY</h2>
                    </div>
                    <img src="/profile.png" alt="Theo Fanny" className="about-photo" />
                    <div className="about-description-group">
                        <span className="about-title">BEHIND THE SCENES THINKER WITH A JOURNEY MINDSET!</span>
                        <span className="about-subtitle">I’m someone who enjoys working behind
                            the scenes to make sure things run
                            smoothly. I’m detail-oriented, calm under
                            pressure, and used to handling structure,
                            documentation, and coordination. Outside
                            of work, hiking is a big part of my life—and it
                            has shaped how I think about planning,
                            responsibility, and managing journeys.</span>
                    </div>


                </div>

                {/* Right Column: Content */}
                <div className="about-right">

                    {/* Experiences */}
                    <div className="info-section">
                        <h3 className="info-label">EXPERIENCES</h3>
                        <div className="info-list">
                            <div className="info-item">
                                <span className="item-year">2020 - 2026</span>
                                <div className="item-details">
                                    <h4 className="item-title">Lembaga GPIB Pasar Minggu</h4>
                                    <p className="item-desc">Internal Control & Data Management</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="item-year">2023 - 2024</span>
                                <div className="item-details">
                                    <h4 className="item-title">Lembaga GPIB Pasar Minggu</h4>
                                    <p className="item-desc">Finance & Administration Staff</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="item-year">2024 - 2025</span>
                                <div className="item-details">
                                    <h4 className="item-title">UnNamed Football Club</h4>
                                    <p className="item-desc">Graphic Designer</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="item-year">2016 - 2019</span>
                                <div className="item-details">
                                    <h4 className="item-title">PT. Aryan Indonesia</h4>
                                    <p className="item-desc">Educator & Ticketing</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="item-year">2020</span>
                                <div className="item-details">
                                    <h4 className="item-title">PSMEDIA</h4>
                                    <p className="item-desc">Church Streaming Operators  & Camera Operator</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Education, Tools, Skills */}
                    <div className="bottom-info-grid">
                        {/* Education */}
                        <div className="info-section">
                            <h3 className="info-label">EDUCATION</h3>
                            <div className="info-list compact">
                                <div className="info-item">
                                    <span className="item-year">2024 - Present</span>
                                    <div className="item-details">
                                        <h4 className="item-title">Universitas Terbuka</h4>
                                        <p className="item-desc">Information System</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Tools & Skills Row */}
                        <div className="tools-skills-wrapper">
                            {/* Tools */}
                            <div className="info-section">
                                <h3 className="info-label">TOOLS</h3>
                                <ul className="text-list">
                                    <li>Photoshop</li>
                                    <li>Illustrator</li>
                                    <li>InDesign</li>
                                    <li>Canva</li>
                                    <li>Capcut</li>
                                    <li>Premiere Pro</li>
                                </ul>
                                <ul className="text-list">
                                    <li>HTML / CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Node.js</li>
                                    <li>Next.js</li>
                                    <li>PHP / MySQL</li>
                                </ul>
                                <ul className="text-list">
                                    <li>Vmix Software Streaming</li>
                                    <li> OBS</li>
                                    <li> Black Magic</li>
                                </ul>
                            </div>

                            {/* Skills */}
                            <div className="info-section">
                                <h3 className="info-label">SKILLS</h3>
                                <div className="skills-cols">
                                    <ul className="text-list">
                                        <li>Graphic Design</li>
                                        <li>Branding</li>
                                        <li>Typescript</li>
                                        <li>Planning</li>
                                    </ul>
                                    <ul className="text-list">
                                        <li>Team Work</li>
                                        <li>Adaptability</li>
                                        <li>Attention To Detail</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default About;
