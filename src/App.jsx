import Navbar from './components/Navbar'
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger,SplitText);

function App() {

  return (
    <main className='bg-black h-[9999px]'>
      <Navbar />
    </main>
  )
}

export default App
