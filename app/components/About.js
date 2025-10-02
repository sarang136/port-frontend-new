import { CSSSplitText, CSSCard } from './CSSAnimatedText'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <CSSSplitText text="About Me" className="mb-8" />
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full animate-pulse" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <CSSCard delay={0.2} className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Full Stack Developer with 1.5+ years of professional experience in MERN stack (MongoDB, Express.js, React.js,
              Node.js). Proficient in designing and deploying scalable web applications, responsive UIs, and RESTful APIs with
              JWT-based authentication.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Skilled in state management (Redux Toolkit, RTK Query), CI/CD workflows (GitHub
              Actions, Jenkins), and Agile methodologies, achieving up to 40% improvement in performance and user
              engagement. Experienced in cloud deployment (AWS, Firebase, Vercel, Netlify), Docker-based containerization,
              and collaborative software development
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  30+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Projects Completed
                </div>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  1.5+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Years Experience
                </div>
              </div>
            </div>
          </CSSCard>

          {/* Skills Preview */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              What I Do
            </h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Frontend Development</h4>
                  <p className="text-gray-600 dark:text-gray-300">Building responsive and interactive user interfaces</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Performance Optimization</h4>
                  <p className="text-gray-600 dark:text-gray-300">Optimizing applications for speed and efficiency</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">UI/UX Design</h4>
                  <p className="text-gray-600 dark:text-gray-300">Creating beautiful and intuitive user experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
