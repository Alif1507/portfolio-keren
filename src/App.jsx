import Navbar from './components/Navbar'
import { gsap } from "gsap";
import '@fontsource-variable/sora';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Gallery from './components/Gallery';
import Projetcs from './components/Projetcs';

gsap.registerPlugin(ScrollTrigger,SplitText);

function App() {

  return (
    <main className='bg-black h-[9999px]'>
      <Navbar />
      <Hero />
      <TechStack />
      <Gallery />
      <Projetcs />
    </main>
  )
}

export default App
