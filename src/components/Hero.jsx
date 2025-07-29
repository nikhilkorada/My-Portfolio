import React from "react";
import Navbar from "./Navbar";
import imghero from "/imghero.png";
import github from "/github.png";
import instagram from "/instagram.png";
import linkedin from "/linkedin.png";
import Nikhil from "/Nikhil.pdf";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[600px] flex flex-col items-center bg-black">
      {/* Gradient background box */}
      <div className="md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform rotate-45 z-0 right-2 top-28 rounded-3xl"></div>

      <Navbar />

      {/* Hero Main Content */}
      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] px-6 sm:px-12 md:px-20 pt-24 md:pt-32 pb-16 gap-y-16 md:gap-x-20 z-10"
      >
        {/* Left Section */}
        <section
          className="flex-1 text-center md:text-left relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {/* Blurred circle */}
          <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12"></div>

          <header>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nikhil Korada
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-[#c744ec] mb-4">
              Software Developer
            </h2>
          </header>

          <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed">
            I'm a Software Developer with a strong foundation in Data
            Structures, Full Stack Development, and Machine Learning. I enjoy
            building efficient web applications using technologies like React,
            Node.js, and Python, and applying ML to solve real-world problems.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start items-center space-x-5 mb-6">
            <a href="https://github.com/nikhilkorada" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="Github" className="w-10 h-10" />
            </a>
            <a href="https://www.linkedin.com/in/nikhil-korada-92a403283" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="Linkedin" className="w-10 h-10" />
            </a>
            <a href="https://www.instagram.com/nikhilkorada7/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="w-10 h-10" />
            </a>
          </div>

          {/* Resume Button */}
          <a href={Nikhil} download>
            <button className="inline-flex text-white border-2 border-white py-2 px-6 hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg transition-all">
              Download Resume
            </button>
          </a>
        </section>

        {/* Right Section (Image) */}
        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex-1 flex justify-center md:justify-end"
        >
          <img
            src={imghero}
            alt="Hero"
            className="h-[260px] sm:h-[350px] md:h-[420px] w-[220px] sm:w-[360px] object-contain rounded-xl"
          />
        </figure>
      </main>
    </div>
  );
}
