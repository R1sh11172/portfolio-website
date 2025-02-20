import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-white text-black py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent text-center">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fracture Classifier */}
            <ProjectCard
              title="Fracture Classifier"
              description="AI model that classifies 10 types of fractures using computer vision and deep learning."
              technologies={["PyTorch", "Python", "VisionTransformer", "Gradio"]}
              link="https://github.com/R1sh11172/Fracture-Classification"
            />

            {/* VentureEval */}
            <ProjectCard
              title="VentureEval"
              description="Full-stack platform for managing and analyzing venture capital data with AI-powered keyword extraction."
              technologies={[
                "React",
                "Python",
                "PostgreSQL",
                "LLM",
                "Express",
              ]}
              link="#"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

/* Reusable Project Card Component */
const ProjectCard = ({ title, description, technologies, link }) => (
  <div className="p-6 rounded-xl border border-red-300 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-800 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {technologies.map((tech, key) => (
        <span
          key={key}
          className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm font-semibold hover:bg-red-500/20 transition"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex justify-between items-center">
      <a
        href={link}
        className="text-red-500 hover:text-red-400 transition-colors my-4"
      >
        View Project →
      </a>
    </div>
  </div>
);
