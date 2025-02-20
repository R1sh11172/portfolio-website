import { RevealOnScroll } from "../RevealOnScroll";
import mail from "../../assets/mail-201.png";
import github from "../../assets/github.svg.png";
import linkedin from "../../assets/LinkedIn_icon.svg.webp";
import leetcode from "../../assets/LeetCode_logo_black.png";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-white text-black py-20"
    >
      <RevealOnScroll>
        <div className="px-6 w-full flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <p className="text-lg text-gray-700 mb-8 text-center">
            Feel free to connect with me through any of the platforms below!
          </p>

          {/* Contact Icons */}
          <div className="flex space-x-6">
            {/* Email */}
            <a
              href="mailto:your.email@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition transform hover:scale-110"
            >
              <img src={mail} alt="Email" className="w-12 h-12" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/R1sh11172"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition transform hover:scale-110"
            >
              <img src={github} alt="GitHub" className="w-12 h-12" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rishi-aniga-007292202/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition transform hover:scale-110"
            >
              <img src={linkedin} alt="LinkedIn" className="w-12 h-12" />
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/R44895/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition transform hover:scale-110"
            >
              <img src={leetcode} alt="LeetCode" className="w-12 h-12" />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
