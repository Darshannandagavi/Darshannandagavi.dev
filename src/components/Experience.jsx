import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'
import { AnimatedCircle } from './SvgDecorations'
import '../Styles/Experience.css'

const responsibilities = [
  'Developed and maintained 5+ full-stack web applications using React.js, Node.js, Express.js, and MongoDB, contributing to feature development and production deployments.',
  'Designed and implemented 99+ REST API endpoints for a MERN-based learning management system serving 700+ students.',
  'Built features supporting secure authentication, academic management, attendance, homework, fees, examinations, project management, AI interview coaching, and administrative operations.',
  'Contributed to 3+ AI/ML and LLM-powered applications using Python, Flask, Scikit-learn, and modern AI development tools.',
  'Collaborated in Git-based development environments to debug issues, integrate frontend and backend systems, manage databases, and deliver production-ready functionality.',
]

const technologies = [
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Python',
  'Flask',
  'Scikit-learn',
  'REST APIs',
  'Git',
]

export default function Experience() {
  return (
    <section
      className="experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <AnimatedCircle />

      <div className="experience-decoration" aria-hidden="true" />

      <div className="experience-container">
        <header className="experience-section-header">
          <p className="experience-section-label">Experience</p>

          <h2 id="experience-title" className="experience-section-title">
            Where I&apos;ve Worked
          </h2>
        </header>

        <article className="reveal experience-card">
          <header className="experience-card-header">
            <div className="experience-icon-wrapper" aria-hidden="true">
              <FiBriefcase size={22} />
            </div>

            <div className="experience-heading-content">
              <h3 className="experience-role">
                Full-Stack Development Intern
              </h3>

              <p className="experience-company">
                Ligand Software Solutions
              </p>

              <div className="experience-meta">
                <span className="experience-meta-item">
                  <FiCalendar size={13} aria-hidden="true" />
                  February 2025 – Present
                </span>

                <span className="experience-meta-item">
                  <FiMapPin size={13} aria-hidden="true" />
                  Sankeshwar, Karnataka
                </span>
              </div>
            </div>
          </header>

          <section
            className="experience-details"
            aria-label="Role responsibilities"
          >
            <ul className="experience-list">
              {responsibilities.map((responsibility) => (
                <li
                  key={responsibility}
                  className="experience-list-item"
                >
                  {responsibility}
                </li>
              ))}
            </ul>
          </section>

          <footer className="experience-tags" aria-label="Technologies used">
            {technologies.map((technology) => (
              <span key={technology} className="experience-tag">
                {technology}
              </span>
            ))}
          </footer>
        </article>
      </div>
    </section>
  )
}