import React from "react";
import DarkVeil from "./assets/Darkveil";

const Hero = () => {
  return (
    <section
      style={{ fontFamily: "Sora Variable" }}
      className=" font-sora flex flex-col items-center relative"
    >
      import LightRays from './LightRays';

import DarkVeil from './DarkVeil';

<div style={{ width: '100%', height: '600px', }} className="absolute top-0">
  <DarkVeil />
</div>
      <div className="relative z-10 mt-[155px]">
        <h2 className="text-3xl bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent">
          Hi,I'm
        </h2>
        <h1 className="text-[81px] text-white font-bold">
          Muhammad Alif Wahyudi
        </h1>
        <p className="text-3xl bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent text-center">
          I’m a Full Stack Developer, UI/UX Designer, Data <br /> Analyst and
          Photographer. Enjoy my Portfolio.
        </p>
      </div>

      <div className="mt-[155px] flex flex-col items-center gap-10 relative z-10">
        <h1 className="text-3xl bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent font-extralight ">
          Scrool Down
        </h1>
        <div className="animate-bounce">
          <img src="/img/Arrow 1.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
