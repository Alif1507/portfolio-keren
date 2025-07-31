import React from "react";

const Gallery = () => {
  return (
    <section className="mt-64" style={{ fontFamily: "Sora Variable" }}>
      <h1 className="text-6xl bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent font-semibold text-center relative z-50 overflow-hidden mt-4 mb-20">
        Gallery
      </h1>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-4 grid-rows-4 gap-2 h-screen max-h-[800px]">
          <div className="col-span-1 row-span-2 bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300">
            <img
              className="h-full w-full object-cover"
              src="/img/geler-1.png"
              alt="Interior View"
            />
          </div>

          <div className="col-span-2 row-span-1 bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300">
            <img
              className="h-full w-full object-cover"
              src="/img/galer-4.png"
              alt="Mountain View"
            />
          </div>

          <div className="col-span-1 row-span-1 bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300">
            <img
              src="/img/galer-5.png"
              className="w-full h-full object-cover"
              alt="Pet"
            />
          </div>

          <div className="col-span-2 row-span-2 bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300">
            <img
              src="/img/galer-3.png"
              className="w-full h-full object-cover"
              alt="Festival View"
            />
          </div>

          <div className="col-span-1 row-span-1 bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300">
            <img src="/img/geler-2.png" alt="" />
          </div>

          <div className="col-span-1 row-span-1 bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300">
            <img
              src="/img/galer-6.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="col-span-1 row-span-1 bg-white rounded-lg overflow-hidden relative flex flex-col p-2 hover:bg-gray-50 transition-colors duration-300">
            <div className="text-start">
              <h2 className="text-6xl font-bold text-black mb-2 tracking-tight">
                MORE
              </h2>
              <h2 className="text-6xl font-bold text-black mb-4 tracking-tight flex">
                ON
                <img
                  src="/img/instagram-galer.svg"
                  className="w-12.5 h-auto ml-8"
                  alt=""
                />
              </h2>
            </div>
            <a href="https://www.instagram.com/g0.d_usopp.ps/" target="_blank" className="hover:underline">@g0.d_usopp.ps</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
