import { RevealOnScroll } from "../RevealOnScroll";
import profile from "/portfolio-website/profile.jpg";


export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[75vh] flex flex-col items-center justify-center bg-white text-black relative px-8 md:px-20 pt-20 md:pt-24"
    >
      <div className="flex flex-col items-center text-center max-w-3xl w-full gap-8">
        {/* Image on Top */}
        <div className="w-full flex justify-center">
        <img
          src={profile}
          alt="Rishi"
          className="w-[10rem] sm:w-[12rem] md:w-[14rem] h-auto rounded-full object-contain shadow-xl border-4 border-red-500"
        />


        </div>

        {/* Text Below */}
        <RevealOnScroll>
          <div className="w-full">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
              Hi, I'm Rishi!
            </h1>

            <p className="text-gray-800 text-lg md:text-xl mb-6">
              I'm a software engineer specializing in AI, distributed systems, and full-stack development. With experience at AWS and AI-driven projects, I build scalable, intelligent solutions that drive impact. Currently, I'm pursuing a CS degree at Georgia Tech.
            </p>

            <div className="flex flex-wrap justify-center space-x-4">
              {/* <a
                href="#projects"
                className="bg-red-500 text-white py-3 px-6 text-lg md:text-xl rounded-lg font-semibold transition hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(239, 68, 68, 0.5)]"
              >
                View Projects
              </a> */}

              {/* <a
                href="#contact"
                className="border border-red-500/50 text-red-500 py-3 px-6 text-lg md:text-xl rounded-lg font-semibold transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(239, 68, 68, 0.3)] hover:bg-red-500/10"
              >
                Contact Me
              </a> */}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
