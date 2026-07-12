import { FiArrowUpRight } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import {
  ligandWorkspace,
  ekalavya,
  cyberAttackPredictor,
  morseSecurity,
  potholeDetection,
  quickFix,
  letMySpace,
  fridayChromeExtension,
  fridayAIAssistant,
  mlDatasetCollector,
} from './Projects/projectData'
import '../Styles/Projects.css'

const groups = [
  {
    number: '01',
    title: 'Production & Client Projects',
    description:
      'Platforms built for real users, organizations and operational workflows.',
    projects: [
      {
        project: ligandWorkspace,
        path: '/projects/ligand-workspace',
        image: './ligand-workspace.jpg',
        imageAlt: 'Ligand Work-Space learning management platform',
      },
      {
        project: ekalavya,
        path: '/projects/ekalavya',
        image: './ekalavya.jpg',
        imageAlt: 'Ekalavya academic notes platform',
      },
    ],
  },
  {
    number: '02',
    title: 'Full-Stack & AI Projects',
    description:
      'MERN, machine-learning and security systems solving practical problems.',
    projects: [
      {
        project: cyberAttackPredictor,
        path: '/projects/cyber-attack-predictor',
      },
      {
        project: morseSecurity,
        path: '/projects/morse-security',
      },
      {
        project: potholeDetection,
        path: '/projects/pothole-detection',
      },
      {
        project: quickFix,
        path: '/projects/quick-fix',
      },
    ],
  },
  {
    number: '03',
    title: 'Selected Projects',
    description:
      'Academic work demonstrating collaboration and complete product delivery.',
    projects: [
      {
        project: letMySpace,
        path: '/projects/letmyspace',
      },
    ],
  },
  {
    number: '04',
    title: 'Independent Projects',
    description:
      'Personal products and developer tools created through independent exploration.',
    projects: [
      {
        project: fridayAIAssistant,
        path: '/projects/friday-ai-assistant',
      },
      {
        project: fridayChromeExtension,
        path: '/projects/friday-chrome-extension',
      },
      {
        project: mlDatasetCollector,
        path: '/projects/ml-dataset-collector',
      },
    ],
  },
]

export default function Projects() {
  const navigate = useNavigate()

  const openProject = (path) => {
    navigate(path)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const handleCardKeyDown = (event, path) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openProject(path)
    }
  }

  return (
    <section className="projects-page" id="projects">
      <header className="projects-intro">
        <p>Selected work</p>

        <h2>
          Projects built for
          
          <span>real-world impact.</span>
        </h2>

        <div>
          <p>
            Full-stack platforms, intelligent systems, client products and
            independent experiments.
          </p>

          <strong>10 Projects</strong>
        </div>
      </header>

      {groups.map((group) => (
        <section className="project-group" key={group.title}>
          <header className="group-header">
            <span>{group.number}</span>

            <div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>
          </header>

          <div className="project-list">
            {group.projects.map(
              ({ project, path, image, imageAlt }, index) => (
                <article
                  key={project.title}
                  className={`premium-project-card ${
                    image ? 'premium-project-card-with-image' : ''
                  }`}
                  role="link"
                  tabIndex={0}
                  aria-label={`View ${project.title} project`}
                  onClick={() => openProject(path)}
                  onKeyDown={(event) =>
                    handleCardKeyDown(event, path)
                  }
                >
                  {image && (
                    <figure className="project-card-image">
                      <img
                        src={image}
                        alt={imageAlt}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.parentElement.classList.add(
                            'project-image-unavailable',
                          )
                        }}
                      />

                      <figcaption>
                        Production project
                      </figcaption>
                    </figure>
                  )}

                  <button
                    type="button"
                    className="project-open-button"
                    aria-label={`Open ${project.title}`}
                    onClick={(event) => {
                      event.stopPropagation()
                      openProject(path)
                    }}
                  >
                    <FiArrowUpRight aria-hidden="true" />
                  </button>

                  <div className="card-index">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="card-copy">
                    <p>{project.subtitle}</p>
                    <h4>{project.title}</h4>
                    <span>{project.overview}</span>
                  </div>

                  <ul aria-label={`${project.title} technologies`}>
                    {project.stack.slice(0, 5).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ),
            )}
          </div>
        </section>
      ))}
    </section>
  )
}