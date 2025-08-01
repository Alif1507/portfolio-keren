import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./assets/ProjectCard";
import { projectsData } from "../../constant";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const grid = gridRef.current;
    const cards = cardsRef.current;

    // Set initial states
    gsap.set(title, { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    });
    
    gsap.set(grid, { 
      opacity: 0, 
      y: 40 
    });

    gsap.set(cards, { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotationY: 15
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate title with more dramatic effect
    tl.to(title, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out"
    })
    // Animate grid container
    .to(grid, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5")
    // Animate cards with stagger and 3D effect
    .to(cards, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationY: 0,
      duration: 0.8,
      stagger: {
        amount: 0.8,
        from: "start",
        ease: "power2.out"
      },
      ease: "back.out(1.2)"
    }, "-=0.4");

    // Add hover animations for cards
    cards.forEach((card) => {
      if (card) {
        const cardElement = card;
        
        cardElement.addEventListener('mouseenter', () => {
          gsap.to(cardElement, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        cardElement.addEventListener('mouseleave', () => {
          gsap.to(cardElement, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      // Remove event listeners
      cards.forEach((card) => {
        if (card) {
          card.removeEventListener('mouseenter', () => {});
          card.removeEventListener('mouseleave', () => {});
        }
      });
    };
  }, []);

  // Function to add cards to refs array
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="projects"
      ref={sectionRef}
      className="mt-32 sm:mt-40 md:mt-48 lg:mt-56 xl:mt-64 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16" 
      style={{ fontFamily: "Sora Variable" }}
    >
      <h1 
        ref={titleRef}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent font-semibold text-center relative z-50 overflow-hidden mb-8 sm:mb-12 md:mb-16 lg:mb-20"
      >
        Projects
      </h1>
      
      <div 
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10 place-items-center justify-center items-stretch max-w-7xl mx-auto"
      >
        {projectsData.map((d) => (
          <div
            key={d.id}
            ref={addToRefs}
            className="w-full max-w-md md:max-w-none"
          >
            <ProjectCard 
              gambar={d.gambar} 
              judul={d.judul} 
              parag={d.parag} 
              img1={d.img1} 
              img2={d.img2} 
              img3={d.img3} 
              img4={d.img4} 
              tech1={d.tech1} 
              tech2={d.tech2} 
              tech3={d.tech3} // Fixed typo from d.tect3
              tech4={d.tech4} // Fixed typo from d.tect4
              link={d.link} 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;