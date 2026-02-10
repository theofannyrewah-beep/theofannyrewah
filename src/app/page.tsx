import Hero from '../components/Hero';
import About from '../components/About';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import Footer from '../components/Footer';


export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <Project />
            <Footer />
        </main>
    );
}
