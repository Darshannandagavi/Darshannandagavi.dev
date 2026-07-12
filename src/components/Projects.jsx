import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
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
} from "./Projects/projectData";
import "../Styles/Projects.css";

const projectGroups = [
  {
    number: "01",
    title: "Production & Client Projects",
    description:
      "Platforms built for real users, organizations, and operational workflows.",
    projects: [
      {
        project: ligandWorkspace,
        path: "/projects/ligand-workspace",
        image: "/ligand-workspace.jpg",
        imageAlt: "Ligand Work-Space learning management platform",
      },
      {
        project: ekalavya,
        path: "/projects/ekalavya",
        image: "/ekalavya.jpg",
        imageAlt: "Ekalavya academic notes platform",
      },
    ],
  },
  {
    number: "02",
    title: "Full-Stack & AI Projects",
    description:
      "Full-stack, machine-learning, security, and academic applications built to solve practical problems.",
    projects: [
      
      {
        project: morseSecurity,
        path: "/projects/morse-security",
      },
      {
        project: quickFix,
        path: "/projects/quick-fix",
      },
      
      {
        project: letMySpace,
        path: "/projects/letmyspace",
      },
      {
        project: potholeDetection,
        path: "/projects/pothole-detection",
      },
      {
        project: cyberAttackPredictor,
        path: "/projects/cyber-attack-predictor",
      },
      
      
    ],
  },
  {
    number: "03",
    title: "Independent Projects",
    description:
      "Personal AI products, browser experiences, and developer tools created through independent exploration.",
    projects: [
      {
        project: fridayAIAssistant,
        path: "/projects/friday-ai-assistant",
      },
      {
        project: fridayChromeExtension,
        path: "/projects/friday-chrome-extension",
      },
      {
        project: mlDatasetCollector,
        path: "/projects/ml-dataset-collector",
      },
    ],
  },
];

export default function Projects() {
  const navigate = useNavigate();

  const totalProjects = projectGroups.reduce(
    (total, group) => total + group.projects.length,
    0,
  );

  const openProject = (path) => {
    navigate(path);

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  const handleCardKeyDown = (event, path) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(path);
    }
  };

  return (
    <section
      className="portfolio-projects-section"
      id="projects"
      aria-labelledby="portfolio-projects-title"
    >
      <div className="portfolio-projects-container">
        <header className="portfolio-projects-introduction">
          <p className="portfolio-projects-label">Selected work</p>

          <h2 id="portfolio-projects-title">
            Projects built for <span>real-world impact.</span>
          </h2>

          <div className="portfolio-projects-summary">
            <p>
              Full-stack platforms, intelligent systems, client products,
              academic applications, and independent experiments.
            </p>

            <strong>{totalProjects} Projects</strong>
          </div>
        </header>

        {projectGroups.map((group) => (
          <section
            className={`portfolio-project-group ${
              group.number === "01" ? "portfolio-client-project-group" : ""
            }`}
            key={group.title}
            aria-labelledby={`portfolio-project-group-${group.number}`}
          >
            <header className="portfolio-project-group-header">
              <span>{group.number}</span>

              <div>
                <h3 id={`portfolio-project-group-${group.number}`}>
                  {group.title}
                </h3>

                <p>{group.description}</p>
              </div>
            </header>

            <div className="portfolio-projects-grid">
              {group.projects.map(
                ({ project, path, image, imageAlt }, index) => (
                  <article
                    key={project.title}
                    className={`portfolio-project-card ${
                      image ? "portfolio-project-card-with-image" : ""
                    }`}
                    role="link"
                    tabIndex={0}
                    aria-label={`View ${project.title} project`}
                    onClick={() => openProject(path)}
                    onKeyDown={(event) => handleCardKeyDown(event, path)}
                  >
                    {image && (
                      <figure className="portfolio-project-card-image">
                        <img
                          src={image}
                          alt={imageAlt}
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget
                              .closest(".portfolio-project-card-image")
                              ?.classList.add(
                                "portfolio-project-image-unavailable",
                              );
                          }}
                        />

                        <figcaption>Production project</figcaption>
                      </figure>
                    )}

                    <button
                      type="button"
                      className="portfolio-project-open-button"
                      aria-label={`Open ${project.title}`}
                      onClick={(event) => {
                        event.stopPropagation();
                        openProject(path);
                      }}
                    >
                      <FiArrowUpRight aria-hidden="true" />
                    </button>

                    <span
                      className="portfolio-project-card-number"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="portfolio-project-card-content">
                      <p>{project.subtitle}</p>

                      <h4>{project.title}</h4>

                      <span>{project.overview}</span>
                    </div>

                    <ul
                      className="portfolio-project-technologies"
                      aria-label={`${project.title} technologies`}
                    >
                      {project.stack.slice(0, 5).map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                  </article>
                ),
              )}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
