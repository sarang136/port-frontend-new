import { CSSSplitText, CSSCard } from './CSSAnimatedText'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        'React',
        'Next.js',
        'JavaScript',
        'TypeScript',
        'HTML/CSS',
        'Tailwind CSS',
      ]
    },
    {
      title: 'Backend',
      skills: [
        'Node.js',
        'Express',
        'MongoDB',
        'PostgreSQL',
        'REST APIs',
        'GraphQL',
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        'Git',
        'Docker',
        'AWS',
        'Figma',
        'Jest',
        'Webpack',
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <CSSSplitText text="Skills & Technologies" className="mb-8" />
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full animate-pulse" />
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <CSSCard 
              key={categoryIndex} 
              delay={0.2 + (categoryIndex * 0.2)}
              className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium hover:scale-110 hover:bg-primary-200 dark:hover:bg-primary-800 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CSSCard>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            Additional Skills
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Responsive Design',
              'Cross-browser Compatibility',
              'SEO Optimization',
              'Performance Optimization',
              'Code Review',
              'Agile/Scrum',
              'Problem Solving',
              'Team Collaboration',
              'Mentoring',
              'Technical Writing'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
