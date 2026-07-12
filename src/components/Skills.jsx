import { AnimatedDots } from './SvgDecorations'
import '../Styles/Skills.css'

const skillCategories = [
  {
    name: 'Programming Languages',
    skills: ['JavaScript (ES6+)', 'Python', 'C'],
  },
  {
    name: 'Frontend Development',
    skills: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Axios'],
  },
  {
    name: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'Flask', 'REST API Development'],
  },
  {
    name: 'Database & Storage',
    skills: ['MongoDB', 'MongoDB Atlas', 'Cloudinary'],
  },
  {
    name: 'AI & Machine Learning',
    skills: [
      'Scikit-learn',
      'OpenCV',
      'LLM Integration',
      'Model Integration',
      'Flask APIs',
    ],
  },
  {
    name: 'Tools & Platforms',
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'VS Code',
      'Vercel',
      'Render',
    ],
  },
  {
    name: 'Development Practices',
    skills: [
      'JWT Authentication',
      'API Integration',
      'Role-Based Access',
      'Responsive Design',
      'Deployment',
    ],
  },
  {
    name: 'Soft Skills',
    skills: [
      'Analytical Thinking',
      'Self-Motivation',
      'Adaptability',
      'Collaboration',
      'Problem-Solving',
    ],
  },
]

export default function Skills() {
  return (
    <section
      className="skills-section"
      id="skills"
      aria-labelledby="skills-title"
    >
      <AnimatedDots />

      <div className="skills-background-glow" aria-hidden="true" />

      <div className="skills-container">
        <header className="skills-section-header">
          <p className="skills-section-label">Skills</p>

          <h2 id="skills-title" className="skills-section-title">
            Technologies &amp; Expertise
          </h2>

          <p className="skills-section-description">
            Technologies, development tools, and professional skills I use to
            build secure, scalable, and AI-powered software solutions.
          </p>
        </header>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <article
              key={category.name}
              className="reveal-stagger-scale skill-category"
            >
              <h3 className="skill-category-name">{category.name}</h3>

              <ul className="skill-list">
                {category.skills.map((skill) => (
                  <li key={skill} className="skill-list-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}