import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="inline-block mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl">
              AC
            </div>
          </div>
          
          <h1 className="text-gray-900 mb-4">
            Hi, I'm <span className="text-blue-600">Alex Cuesta</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I am a Computer Science student based in Dublin. Resolute, quick to learn, and highly organized, with strong critical
            thinking skills and experience supporting others in academic and exam preparation. Comfortable working in fast-paced,
            customer-facing environments.
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <a
              href="https://github.com/cuestalex"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-gray-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/alex-cuesta-barrett-907107385/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-700" />
            </a>
            <a
              href="mailto:alex.cuestabarrett2@mail.dcu.ie"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-gray-700" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
