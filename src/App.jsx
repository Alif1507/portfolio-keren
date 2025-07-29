import Navbar from './components/Navbar'
import { gsap } from "gsap";
import '@fontsource-variable/sora';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Hero from './components/Hero';

gsap.registerPlugin(ScrollTrigger,SplitText);

function App() {

  return (
    <main className='bg-black h-[9999px]'>
      <Navbar />
      <Hero />
    </main>
  )
}

export default App
