import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const skills = {
    Languages: [
      "Java",
      "Python",
      "TypeScript",
      "JavaScript",
      "C",
      "C++",
      "Swift",
      "Kotlin",
      "HTML/CSS",
    ],
    Frameworks: ["React", "Express", "Django", "Spring", "Next.js"],
    "AI & ML": ["PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV"],
    Databases: ["PostgreSQL", "DynamoDB", "MongoDB", "Firebase"],
  };

  const experiences = [
    {
      role: "Software Development Engineer Intern",
      company: "Amazon Web Services",
      logo: "/aws_logo.jpeg",
      date: "May 2024 - Aug 2024",
      points: [
        "Developed a user management system for 16 internal fraud detection services using TypeScript, DynamoDB, and GraphQL.",
        "Optimized data retrieval time by 40% with advanced indexing techniques.",
        "Automated CI/CD pipelines and implemented AWS CloudWatch monitoring for operational excellence.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Green SFS",
      logo: "/greensfs_logo.jpeg",
      date: "May 2023 - Aug 2023",
      points: [
        "Built AI models to detect plant diseases using PyTorch, TensorFlow, and Apache Spark.",
        "Managed 15GB of agricultural data using Hadoop Distributed File System.",
        "Achieved 77% classification accuracy with CNNs on GPU-accelerated training.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Esper.io",
      logo: "/esper-logo.png",
      date: "Jun 2021 - Aug 2021",
      points: [
        "Developed a scheduling app with Kotlin and Java for 50+ employees.",
        "Integrated Google Cloud APIs for seamless meeting scheduling.",
        "Optimized CI/CD pipeline with Jenkins, improving deployment efficiency by 20%.",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center bg-white text-black py-20 px-6"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Skills Section */}
          <div className="rounded-xl p-8 border border-red-300 shadow-md hover:-translate-y-1 transition-all mb-10">
            <h3 className="text-2xl font-bold mb-6 text-center">Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <SkillCard key={category} title={category} skills={skillList} />
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="p-6 rounded-xl border border-red-300 shadow-md hover:-translate-y-1 transition-all mb-10">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Work Experience
            </h3>
            <div className="relative border-l-4 border-red-500 pl-6 space-y-6">
              {experiences.map((exp, idx) => (
                <ExperienceItem key={idx} {...exp} />
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="p-6 rounded-xl border border-red-300 shadow-md hover:-translate-y-1 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Education
            </h3>
            <ul className="text-gray-800 space-y-2 text-lg">
              <li>
                <strong>B.S. in Computer Science</strong> – Georgia Institute of
                Technology
                <span className="block text-sm text-gray-600">
                  <strong>Dates: </strong>Aug 2022 - May 2025
                </span>
                <span className="block text-sm text-gray-600">
                  <strong>GPA:</strong> 3.92
                </span>
              </li>
              <li>
                <strong>Specializations:</strong> AI & Information Internetworks
              </li>
              <li>
                <strong>Coursework:</strong>
              </li>
              
              {/* Key Courses - Tag Style */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Data Structures and Algorithms",
                  "Object-Oriented Programming",
                  "Machine Learning",
                  "Artificial Intelligence",
                  "Linear Algebra",
                  "Computer Systems and Networking",
                  "Information Security",
                  "Computer Vision",
                  "Natural Language Processing",
                  "Mobile Apps and Services",
                  "Databases",
                ].map((course, idx) => (
                  <span
                    key={idx}
                    className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm font-medium hover:bg-red-500/20 transition"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

/* Skill Card */
const SkillCard = ({ title, skills }) => (
  <div className="rounded-lg p-4 border border-red-300 shadow-md">
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, key) => (
        <span
          key={key}
          className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm font-medium hover:bg-red-500/20 
                    hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

/* Experience Item - Timeline Style with Logo */
const ExperienceItem = ({ role, company, date, points, logo }) => (
  <div className="relative pl-4">
    <div className="absolute -left-4 top-2 w-3 h-3 bg-red-500 rounded-full"></div>
    <div className="flex items-center gap-3">
      {logo && (
        <img
          src={logo}
          alt={company}
          className="h-10 md:h-12 object-contain border border-gray-300 rounded-md p-1"
        />
      )}
      <h4 className="font-semibold text-lg">
        {role} – <span className="text-red-500">{company}</span>
      </h4>
    </div>
    <p className="text-gray-600 text-sm">{date}</p>
    <ul className="list-disc list-inside text-gray-800 text-md space-y-2 mt-2">
      {points.map((point, idx) => (
        <li key={idx}>{point}</li>
      ))}
    </ul>
  </div>
);
