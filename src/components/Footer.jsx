import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const lineRef = useRef(null);
  const logoSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const socialSectionRef = useRef(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const footer = footerRef.current;
    const line = lineRef.current;
    const logoSection = logoSectionRef.current;
    const contactSection = contactSectionRef.current;
    const socialSection = socialSectionRef.current;

    if (!footer || !line || !logoSection || !contactSection || !socialSection)
      return;

    // Set initial states
    gsap.set(line, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    gsap.set([logoSection, contactSection, socialSection], {
      opacity: 0,
      y: 40,
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate line first
    tl.to(line, {
      scaleX: 1,
      duration: 1.2,
      ease: "power2.out",
    })
      // Then animate sections with stagger
      .to(
        [logoSection, contactSection, socialSection],
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.6"
      );

    // Add hover animations for social icons
    const socialIcons = socialSection.querySelectorAll("a img");
    socialIcons.forEach((icon) => {
      const handleMouseEnter = () => {
        gsap.to(icon, {
          scale: 1.2,
          rotation: 5,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      icon.addEventListener("mouseenter", handleMouseEnter);
      icon.addEventListener("mouseleave", handleMouseLeave);

      // Store handlers for cleanup
      icon._hoverHandlers = { handleMouseEnter, handleMouseLeave };
    });

    // Add button hover animation
    const button = contactSection.querySelector("button");
    if (button) {
      const handleButtonEnter = () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleButtonLeave = () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      button.addEventListener("mouseenter", handleButtonEnter);
      button.addEventListener("mouseleave", handleButtonLeave);

      // Store handlers for cleanup
      button._hoverHandlers = { handleButtonEnter, handleButtonLeave };
    }

    // Cleanup function
    return () => {
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Clean up event listeners
      socialIcons.forEach((icon) => {
        if (icon._hoverHandlers) {
          icon.removeEventListener(
            "mouseenter",
            icon._hoverHandlers.handleMouseEnter
          );
          icon.removeEventListener(
            "mouseleave",
            icon._hoverHandlers.handleMouseLeave
          );
        }
      });

      if (button && button._hoverHandlers) {
        button.removeEventListener(
          "mouseenter",
          button._hoverHandlers.handleButtonEnter
        );
        button.removeEventListener(
          "mouseleave",
          button._hoverHandlers.handleButtonLeave
        );
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Handle form submission logic here
    console.log("Email submitted:", email);
    setEmail("");

    // Optional: Show success message
    // You can add a toast notification here
  };

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="relative overflow-hidden mt-32 sm:mt-40 md:mt-48 lg:mt-56 xl:mt-64 px-4 sm:px-6 md:px-8 lg:px-12 pb-20 sm:pb-24 md:pb-28 lg:pb-32"
      style={{ fontFamily: "Sora Variable" }}
    >
      {/* Top line */}
      <div
        ref={lineRef}
        className="absolute top-0 left-0 w-full h-0.5 sm:h-1 opacity-40 bg-white"
      />

      {/* Footer content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-12 lg:gap-8 pt-12 sm:pt-16 md:pt-20 max-w-7xl mx-auto">
        {/* Logo Section */}
        <div
          ref={logoSectionRef}
          className="flex flex-col items-center lg:items-start order-1 lg:order-1"
        >
          <img
            src="/img/mawlogo.png"
            className="w-24 sm:w-32 md:w-36 lg:w-[142px] hover:scale-110 transition-transform duration-300"
            alt="LOGO MAW"
          />
          <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl mt-2 sm:mt-3">
            MAW
          </h1>
        </div>

        {/* Contact Section */}
        <div
          ref={contactSectionRef}
          className="flex flex-col items-center lg:items-center order-2 lg:order-2 w-full lg:w-auto max-w-md lg:max-w-none"
        >
          {/* Contact Info */}
          <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-center">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
              Contact
            </h2>
            <div className="flex gap-2 items-center justify-center">
              <img
                src="/img/email.png"
                alt="Email icon"
                className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
              />
              <h3 className="text-white text-xs sm:text-sm md:text-base break-all">
                m.alifwahyudi2007@gmail.com
              </h3>
            </div>
          </div>

          {/* Collaboration Form */}
          <div className="flex flex-col items-center text-center w-full">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 lg:mb-7">
              Want To Collab?
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 sm:gap-0 w-full lg:w-auto items-center"
            >
              <input
                className="bg-white w-full sm:w-64 md:w-72 h-10 sm:h-12 px-3 rounded sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#280087] to-[#C00000] text-white font-bold text-sm md:text-base whitespace-nowrap px-4 sm:px-6 py-2 sm:py-3 rounded sm:rounded-r-md sm:rounded-l-none hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Social Section */}
        <div
          ref={socialSectionRef}
          className="flex flex-col items-center lg:items-end order-3 lg:order-3"
        >
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-center lg:text-right">
            Social
          </h2>
          <div className="flex justify-center gap-4 sm:gap-6 items-center">
            <a
              href="https://www.instagram.com/m._a_.w/"
              target="_blank"
              className="block group"
              aria-label="Instagram"
            >
              <img
                src="/img/instagram.png"
                alt="Instagram"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 cursor-pointer transition-all duration-300"
              />
            </a>
            <a
              href="https://www.youtube.com/@Alif2007_"
              target="_blank"
              className="block group"
              aria-label="YouTube"
            >
              <img
                src="/img/youtube.png"
                alt="YouTube"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 cursor-pointer transition-all duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-alif-wahyudi-06617b305/"
              target="_blank"
              className="block group"
              aria-label="LinkedIn"
            >
              <img
                src="/img/linkin.png"
                alt="LinkedIn"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 cursor-pointer transition-all duration-300"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="flex relative justify-center items-center mt-28">
        <div
          ref={lineRef}
          className="absolute -top-10 left-1/2 w-10/12 -translate-x-1/2 h-0.5 sm:h-1 opacity-20 bg-white"
        />
        <h1 className="text-white font-bold">MAW • 2025</h1>
      </div>
    </footer>
  );
};

export default Footer;
