import { Code2, Database, Layout, Smartphone } from 'lucide-react';

export function About() {
  const skills = [
    {
      icon: Layout,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks.',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Creating robust server-side applications with Node.js, Express, and various databases.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Crafting beautiful experiences that work seamlessly across all devices and screen sizes.',
    },
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, well-documented code following best practices and design patterns.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm a passionate developer with a love for creating elegant solutions to complex problems. 
            With expertise in modern web technologies, I bring ideas to life through code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-gray-900 mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-600">{skill.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-gray-900 mb-4">My Journey</h3>
          <p className="text-gray-600 mb-4">
            I'm a third year Computer Science student at DCU. 
            I started coding seriously during my studies and have been building projects ever since, 
            focusing on full-stack web development with Python and Flask on the backend and React on the frontend.
          </p>
          <p className="text-gray-600">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or sharing my knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
}
