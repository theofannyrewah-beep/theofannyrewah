import {
    SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiAdobepremierepro,
    SiCanva, SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs,
    SiNextdotjs, SiPhp, SiMysql, SiObsstudio, SiBlackmagicdesign, SiTailwindcss
} from 'react-icons/si';
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

                        <a href="https://drive.google.com/file/d/10FQJBQfCnZSxldF-uWuKe3_5fJkFC3is/view?usp=sharing" className="resume-button" target="_blank" rel="noopener noreferrer">
                            MY RESUME
                        </a>
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
                                <div className="tools-grid">
                                    {/* Design & Editing */}
                                    <SiAdobephotoshop size={90} color="#31A8FF" title="Photoshop" />
                                    <SiAdobeillustrator size={90} color="#FF9A00" title="Illustrator" />
                                    <SiAdobeindesign size={90} color="#FF3366" title="InDesign" />
                                    <SiCanva size={90} color="#00C4CC" title="Canva" />
                                    {/* CapCut - using SVG fallback as it might be missing in react-icons */}
                                    {/* CapCut - PNG Image */}
                                    <img
                                        src="/images/Capcut.png"
                                        alt="CapCut"
                                        width={90}
                                        height={90}
                                        title="CapCut"
                                    />
                                    <SiAdobepremierepro size={90} color="#9999FF" title="Premiere Pro" />

                                    {/* Tech Stack */}
                                    <SiHtml5 size={90} color="#E34F26" title="HTML5" />
                                    <SiCss3 size={90} color="#1572B6" title="CSS3" />
                                    <SiJavascript size={90} color="#F7DF1E" title="JavaScript" />
                                    <SiTailwindcss size={90} color="#06B6D4" title="Tailwind CSS" />
                                    <SiReact size={90} color="#61DAFB" title="React" />
                                    <SiNodedotjs size={90} color="#339933" title="Node.js" />
                                    <SiNextdotjs size={90} color="#000000" title="Next.js" />
                                    <SiPhp size={90} color="#777BB4" title="PHP" />
                                    <SiMysql size={90} color="#4479A1" title="MySQL" />

                                    {/* New Media / Broadcasting */}
                                    {/* vMix - Custom Grid Icon */}
                                    <svg viewBox="0 0 100 100" width="90" height="90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <title>vMix</title>
                                        {/* Row 1 */}
                                        <rect x="0" y="0" width="30" height="30" fill="#3678BD" />
                                        <rect x="35" y="0" width="30" height="30" fill="#3678BD" />
                                        <rect x="70" y="0" width="30" height="30" fill="#70BC58" />
                                        {/* Row 2 */}
                                        <rect x="0" y="35" width="30" height="30" fill="#3678BD" />
                                        <rect x="35" y="35" width="30" height="30" fill="#3678BD" />
                                        <rect x="70" y="35" width="30" height="30" fill="#3678BD" />
                                        {/* Row 3 */}
                                        <rect x="0" y="70" width="30" height="30" fill="#F2A032" />
                                        <rect x="35" y="70" width="30" height="30" fill="#3678BD" />
                                        <rect x="70" y="70" width="30" height="30" fill="#3678BD" />
                                    </svg>
                                    <SiObsstudio size={90} color="#000000" title="OBS" />
                                    <SiBlackmagicdesign size={90} color="#000000" title="Blackmagic Design" />
                                </div>
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
