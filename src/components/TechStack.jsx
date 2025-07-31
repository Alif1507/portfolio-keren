import React from "react";
import { techstack } from "../../constant";

const TechStack = () => {
  console.log(techstack);
  
  return (
    <section style={{ fontFamily: "Sora Variable" }}>
      <h1 className="text-6xl bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent font-semibold text-center relative z-50 overflow-hidden mt-4">
        Tech Stack
      </h1>
      <div className="grid grid-cols-9 mx-64 mt-24 gap-10 items-center justify-center">
        {techstack.map((t) => (
          <img key={t.id} src={"/img/" + t.src} alt="TechStack" />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
