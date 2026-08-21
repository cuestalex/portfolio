import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
const projects = [
  {
    title: 'URL Shortener',
    description: 'A full-stack web app that converts long URLs into clean, shareable short links. Supports custom short codes, optional expiry dates, and tracks click counts for every link you create.',
    technologies: ['Python', 'Flask', 'SQLAlchemy', 'PostgreSQL'],
    githubUrl: 'https://github.com/cuestalex/url-shortener',
    liveUrl: 'https://url-shortener-2vgj.onrender.com',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop',
  },
  {
    title: 'Weather Dashboard',
    description: 'A full-stack weather app that lets you search any city and instantly see current conditions, an hourly forecast, a 5-day outlook, and an interactive map. Save your favourite cities for quick access.',
    technologies: ['Python', 'Flask', 'OpenWeatherMap API', 'Leaflet.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/cuestalex/weather-dashboard',
    liveUrl: 'https://weather-dashboard-50hm.onrender.com',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop',
  },
];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden bg-gray-200">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-xl font-semibold">{project.title}</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
