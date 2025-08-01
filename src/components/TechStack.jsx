import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { techstack } from "../../constant";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const itemsRef = useRef([]);

  console.log(techstack);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const grid = gridRef.current;
    const items = itemsRef.current;

    // Set initial states
    gsap.set(title, { 
      opacity: 0, 
      y: 50 
    });
    
    gsap.set(grid, { 
      opacity: 0, 
      y: 30 
    });

    gsap.set(items, { 
      opacity: 0, 
      scale: 0.8,
      y: 20
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

    // Animate title
    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    // Animate grid container
    .to(grid, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
    // Animate items with stagger
    .to(items, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.5,
      stagger: {
        amount: 0.6,
        from: "start"
      },
      ease: "back.out(1.7)"
    }, "-=0.3");

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Function to add items to refs array
  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="mt-16 md:mt-20 lg:mt-90 px-4 md:px-8 lg:px-16" 
      style={{ fontFamily: "Sora Variable" }}
    >
      <h1 
        ref={titleRef}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent font-semibold text-center relative z-50 overflow-hidden"
      >
        Tech Stack
      </h1>
      
      <div 
        ref={gridRef}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-8 sm:mt-12 md:mt-16 lg:mt-24 items-center justify-center max-w-7xl mx-auto"
      >
        {techstack.map((t) => (
          <div
            key={t.id}
            ref={addToRefs}
            className="flex items-center justify-center p-2 hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            <img 
              src={"/img/" + t.src} 
              alt={`${t.name || 'Tech'} Stack`}
              className="w-full h-auto max-w-[60px] sm:max-w-[70px] md:max-w-[80px] lg:max-w-[90px] object-contain filter hover:brightness-110 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;