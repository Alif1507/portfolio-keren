import Navbar from './components/Navbar'
import { gsap } from "gsap";
import '@fontsource-variable/sora';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Gallery from './components/Gallery';
import Projetcs from './components/Projetcs';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import About from './components/About';

gsap.registerPlugin(ScrollTrigger,SplitText);

function App() {

  return (
    <main className='bg-black overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Gallery />
      <Projetcs />
      <Achievements />
      <Footer />
    </main>
  )
}

export default App
