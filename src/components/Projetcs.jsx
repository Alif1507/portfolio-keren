import React from "react";

const Projetcs = () => {
  return (
    <section className="mt-64" style={{ fontFamily: "Sora Variable" }}>
      <h1 className="text-6xl bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent font-semibold text-center relative z-50 overflow-hidden mt-4 mb-20">
        Projects
      </h1>
      <div className="flex justify-center items-cente">
        <div className="flex flex-col items-center w-[300px] border-white border-1 h-[525px] p-4 rounded-2xl">
          <img src="/img/BetFree.png" alt="" />
          <h1>BetFree</h1>
          <p>
            A web-based platform for online gambling rehabilitation, integrated
            with the Gemini Quiz API to assess user conditions, offering
            personalized rehabilitation plans and an interactive online forum
            for peer support and discussion.
          </p>
        </div>
        <div className="flex">
            <div><img src="/img/Laravel.png" alt="" /></div>
        </div>
      </div>
    </section>
  );
};

export default Projetcs;
