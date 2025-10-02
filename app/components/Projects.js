import Image from 'next/image'
import { CSSSplitText, CSSCard } from './CSSAnimatedText'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'ERP Platform',
      description: 'A full-stack ERP commerce platform built with React.js, Node.js, Express.js, MongoDb featuring user authentication, admin and super admin dashboard.',
      image: 'https://www.tranktechnologies.com/blog/wp-content/uploads/2023/01/ERP-Application-Developmen-1.jpeg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Python'],
      liveUrl: '',
      githubUrl: 'https://github.com/',
      featured: true
    },
    {
      id: 2,
      title: 'Fellow Devs (insta clone)',
      description: 'Full-stack app with secure JWT authentication, content sharing for 1,000+ users, and 99% API uptime.',
      image: 'https://res.cloudinary.com/ddx27iwjp/image/upload/v1759035812/vyapari/wauxssv81wql8h0tznwt.png',
      technologies: ['React.Js', 'Node.Js', 'Socket.io', 'Express', 'MongoDB'],
      liveUrl: 'https://insta-frontend-seven.vercel.app/',
      githubUrl: 'https://github.com/',
      featured: true
    },
    {
      id: 3,
      title: 'Scholarship Management Portal',
      description: 'Streamlined application processing for 5,000+ users using HTML, CSS, and JavaScript.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Tailwind CSS', 'OpenWeather API', 'Chart.js'],
      liveUrl: '',
      githubUrl: 'https://github.com/',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      liveUrl: '',
      githubUrl: 'https://github.com/',
      featured: false
    },
    {
      id: 5,
      title: 'BookMyShow Clone ',
      description: 'Built a ticket booking system with React.js and Node.js, handling 1,000+ bookings with integrated payment gateway',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL', 'Vercel'],
      liveUrl: '',
      githubUrl: 'https://github.com/',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <CSSSplitText text="Featured Projects" className="mb-8" />
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full animate-pulse" />
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <CSSCard
              key={project.id}
              delay={0.2 + (index * 0.3)}
              className="bg-gray-50 dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden flex items-center justify-center relative">
                <img
                  src={project.image}
                  alt={project.title || "Project image"}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium transition-colors duration-200"
                  >
                    {/* <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg> */}
                    {/* <span>Code</span> */}
                  </a>
                </div>
              </div>
            </CSSCard>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            Other Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className="bg-gray-50 dark:bg-slate-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">💻</div>
                    <p className="font-semibold">{project.title}</p>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    {/* <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium transition-colors duration-200"
                    >
                      Live Demo
                    </a> */}
                    {/* <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm font-medium transition-colors duration-200"
                    >
                      Code
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
