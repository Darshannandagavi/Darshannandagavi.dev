import {
  FiBookOpen,
  FiCode,
  FiCpu,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from 'react-icons/fi'
import { AnimatedGrid } from './SvgDecorations'
import '../Styles/Interests.css'


const interests = [
  {
    icon: FiCode,
    title: 'Full-Stack Development',
    description:
      'Building scalable and responsive web applications using modern JavaScript and the MERN stack.',
  },
  {
    icon: FiCpu,
    title: 'AI & Machine Learning',
    description:
      'Exploring intelligent assistants, computer vision, machine learning models, and AI-powered applications.',
  },
  {
    icon: FiTarget,
    title: 'Problem Solving',
    description:
      'Breaking complex technical challenges into practical, maintainable, and efficient solutions.',
  },
  {
    icon: FiBookOpen,
    title: 'Continuous Learning',
    description:
      'Learning new technologies, frameworks, development patterns, and software engineering practices.',
  },
  {
    icon: FiTrendingUp,
    title: 'Product Development',
    description:
      'Transforming useful ideas into complete products that solve real-world problems for users.',
  },
  {
    icon: FiUsers,
    title: 'Team Collaboration',
    description:
      'Sharing ideas, using Git-based workflows, and working with teams to deliver reliable software.',
  },
]

export default function Interests() {
  return (
    <section
      className="interests-section"
      id="interests"
      aria-labelledby="interests-title"
    >
      <AnimatedGrid />

      <div className="interests-decoration" aria-hidden="true" />

      <div className="interests-container">
        <header className="section-head interests-header">
          <p className="section-label">Interests</p>

          <h2 id="interests-title" className="section-title-text">
            What Drives Me
          </h2>

          <p className="interests-intro">
            The technologies, challenges, and professional values that
            continuously motivate me to learn, build, and improve.
          </p>
        </header>

        <div className="interests-grid">
          {interests.map((interest) => {
            const Icon = interest.icon

            return (
              <article key={interest.title} className="reveal interest-card">
                <div className="interest-icon" aria-hidden="true">
                  <Icon size={19} />
                </div>

                <h3 className="interest-title">{interest.title}</h3>

                <p className="interest-description">
                  {interest.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}