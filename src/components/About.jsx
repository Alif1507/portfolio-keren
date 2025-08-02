import React from "react";
import Marquee from "react-fast-marquee";
import ProfileCard from "./assets/ProfileCard";

const About = () => {
  return (
    <section id="about" className="mt-64">
    <div className="flex justify-center items-center scale-130">
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
    </section>
  );
};

export default About;
