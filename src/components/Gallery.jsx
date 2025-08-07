import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const gridItems = itemsRef.current;

    // Set initial states
    gsap.set(title, {
      opacity: 0,
      y: -50,
      scale: 0.8
    });

    gsap.set(gridItems, {
      opacity: 0,
      scale: 0.8,
      y: 100,
      rotation: 5
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate title first
    tl.to(title, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "back.out(1.7)"
    })

    // Animate grid items with stagger
    .to(gridItems, {
      opacity: 1,
      scale: 1,
      y: 0,
      rotation: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: {
        amount: 1.2,
        from: "random"
      }
    }, "-=0.5");

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  return (
    <section  id="gallery"
      ref={sectionRef}
      className="mt-32 md:mt-64 px-4 md:px-8" 
      style={{ fontFamily: "Sora Variable" }}
    >
      <h1 
        ref={titleRef}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent font-semibold text-center relative z-30 overflow-hidden mt-4 mb-8 md:mb-20"
      >
        Gallery
      </h1>
      
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout - Single Column Stack */}
        <div className="block md:hidden">
          <div className="flex flex-col gap-4">
            <div 
              ref={addToRefs}
              className="aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                className="h-full w-full object-cover"
                src="/img/geler-1.png"
                alt="Interior View"
              />
            </div>
            
            <div 
              ref={addToRefs}
              className="aspect-[16/9] bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                className="h-full w-full object-cover"
                src="/img/galer-4.png"
                alt="Mountain View"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div 
                ref={addToRefs}
                className="aspect-square bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="/img/galer-5.png"
                  className="w-full h-full object-cover"
                  alt="Pet"
                />
              </div>
              <div 
                ref={addToRefs}
                className="aspect-square bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="/img/geler-2.png"
                  className="w-full h-full object-cover"
                  alt="Gallery item"
                />
              </div>
            </div>
            
            <div 
              ref={addToRefs}
              className="aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src="/img/galer-3.png"
                className="w-full h-full object-cover"
                alt="Festival View"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div 
                ref={addToRefs}
                className="aspect-square bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="/img/galer-6.png"
                  className="w-full h-full object-cover"
                  alt="Gallery item"
                />
              </div>
              <a
                href="https://www.instagram.com/g0.d_usopp.ps/"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square"
              >
                <div 
                  ref={addToRefs}
                  className="h-full bg-white rounded-lg overflow-hidden relative flex flex-col justify-between p-3 hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="text-start">
                    <h2 className="text-xl font-bold text-black mb-1 tracking-tight">
                      MORE
                    </h2>
                    <div className="text-xl font-bold text-black mb-2 tracking-tight flex items-center">
                      ON
                      <img
                        src="/img/instagram-galer.svg"
                        className="w-5 h-5 ml-1"
                        alt="Instagram logo"
                      />
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 hover:underline">
                    @g0.d_usopp.ps
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Tablet Layout - 2x3 Grid */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 grid-rows-4 gap-4 h-[600px]">
            <div 
              ref={addToRefs}
              className="row-span-2 bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                className="h-full w-full object-cover"
                src="/img/geler-1.png"
                alt="Interior View"
              />
            </div>
            
            <div 
              ref={addToRefs}
              className="bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                className="h-full w-full object-cover"
                src="/img/galer-4.png"
                alt="Mountain View"
              />
            </div>
            
            <div 
              ref={addToRefs}
              className="row-span-2 bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src="/img/galer-3.png"
                className="w-full h-full object-cover"
                alt="Festival View"
              />
            </div>
            
            <div 
              ref={addToRefs}
              className="bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src="/img/galer-5.png"
                className="w-full h-full object-cover"
                alt="Pet"
              />
            </div>
            
            <div 
              ref={addToRefs}
              className="bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src="/img/geler-2.png"
                className="w-full h-full object-cover"
                alt="Gallery item"
              />
            </div>
            
            <div 
              ref={addToRefs}
              className="bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src="/img/galer-6.png"
                className="w-full h-full object-cover"
                alt="Gallery item"
              />
            </div>
            
            <a
              href="https://www.instagram.com/g0.d_usopp.ps/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div 
                ref={addToRefs}
                className="h-full bg-white rounded-lg overflow-hidden relative flex flex-col justify-between p-4 hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="text-start">
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-1 tracking-tight">
                    MORE
                  </h2>
                  <div className="text-2xl md:text-3xl font-bold text-black mb-2 tracking-tight flex items-center">
                    ON
                    <img
                      src="/img/instagram-galer.svg"
                      className="w-6 h-6 ml-2"
                      alt="Instagram logo"
                    />
                  </div>
                </div>
                <div className="text-sm text-gray-600 hover:underline">
                  @g0.d_usopp.ps
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Desktop Layout - Original 4x4 Grid */}
        <div className="hidden lg:block">
          <div 
            ref={gridRef}
            className="grid grid-cols-4 grid-rows-4 gap-2 xl:gap-4 h-screen max-h-[800px]"
          >
            <div 
              ref={addToRefs}
              className="col-span-1 row-span-2 bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                className="h-full w-full object-cover"
                src="/img/geler-1.png"
                alt="Interior View"
              />
            </div>
            
            <div 
              ref={addToRefs}
              className="col-span-2 row-span-1 bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                className="h-full w-full object-cover"
                src="/img/galer-4.png"
                alt="Mountain View"
              />
            </div>
            
            <div 
              ref={addToRefs}
              className="col-span-1 row-span-1 bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src="/img/galer-5.png"
                className="w-full h-full object-cover"
                alt="Pet"
              />
            </div>
            
            <div 
              ref={addToRefs}
              className="col-span-2 row-span-2 bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src="/img/galer-3.png"
                className="w-full h-full object-cover"
                alt="Festival View"
              />
            </div>
            
            <div 
              ref={addToRefs}
              className="col-span-1 row-span-1 bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src="/img/geler-2.png"
                className="w-full h-full object-cover"
                alt="Gallery item"
              />
            </div>
            
            <div 
              ref={addToRefs}
              className="col-span-1 row-span-1 bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src="/img/galer-6.png"
                className="w-full h-full object-cover"
                alt="Gallery item"
              />
            </div>
            
            <a
              href="https://www.instagram.com/g0.d_usopp.ps/"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-1 row-span-1"
            >
              <div 
                ref={addToRefs}
                className="h-full bg-white rounded-lg overflow-hidden relative flex flex-col justify-between p-4 hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="text-start">
                  <h2 className="text-3xl xl:text-4xl font-bold text-black mb-1 tracking-tight">
                    MORE
                  </h2>
                  <div className="text-3xl xl:text-4xl font-bold text-black mb-2 tracking-tight flex items-center">
                    ON
                    <img
                      src="/img/instagram-galer.svg"
                      className="w-7 h-7 xl:w-8 xl:h-8 ml-2"
                      alt="Instagram logo"
                    />
                  </div>
                </div>
                <div className="text-sm text-gray-600 hover:underline">
                  @g0.d_usopp.ps
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;