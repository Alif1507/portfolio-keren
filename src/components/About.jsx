import React from "react";
import Marquee from "react-fast-marquee";
import ProfileCard from "./assets/ProfileCard";

const About = () => {
  return (
    <section id="about" className="mt-64 relative">
    <div className="flex justify-center items-center scale-130 relative z-20">
        <ProfileCard
        name="M. Alif Wahyudi"
        title="Full Stack Developer"
        handle="MAW"
        status="Online"
        contactText="Contact Me"
        avatarUrl="/img/foto-diri.png"
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={() => console.log("Contact clicked")}
      />
    </div>
    <div>
      <div className="flex flex-col gap-10 absolute top-0 rotate-6">
      <Marquee>
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
      </Marquee>

      <Marquee direction="right">
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
      </Marquee>

      <Marquee >
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
      </Marquee>

      <Marquee direction="right" >
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
      </Marquee>

      <Marquee>
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
        <img className="mx-6" src="/img/MAW.png" alt="MAW" />
      </Marquee>
    </div>
    </div>

    </section>
  );
};

export default About;
