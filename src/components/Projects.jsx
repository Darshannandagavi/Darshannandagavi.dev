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
  codeFusion,
  mernCraft,
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
        project: codeFusion,
        path: "/projects/codefusion",
        image: "/projects/codefusion/home.png",
        imageAlt: "CodeFusion collaborative coding platform",
      },
      {
        project: morseSecurity,
        path: "/projects/morse-security",
        image: "/projects/morse_security/home.png",
        imageAlt: "Morse Security file sharing platform",
      },
      {
        project: quickFix,
        path: "/projects/quick-fix",
        image: "/projects/quickfix/home.png",
        imageAlt: "Quick Fix emergency vehicle support platform",
      },
      {
        project: letMySpace,
        path: "/projects/letmyspace",
        image: "/projects/letmyspace/Screenshot 2025-10-16 202427.png",
        imageAlt: "LetMySpace real estate platform",
      },
      {
        project: potholeDetection,
        path: "/projects/pothole-detection",
        image: "/projects/pathhole/home.png",
        imageAlt: "Pothole Detection system",
      },
      {
        project: cyberAttackPredictor,
        path: "/projects/cyber-attack-predictor",
        image: "/projects/cyberAttackPredictor/main.png",
        imageAlt: "Cyber Attack Predictor security platform",
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
        project: mernCraft, // Add this project
        path: "/projects/merncraft",
        image: "/projects/merncraft/home.png",
        imageAlt: "MernCraft MERN scaffolding CLI",
      },
      {
        project: fridayAIAssistant,
        path: "/projects/friday-ai-assistant",
        image: "/projects/friday/home.png",
        imageAlt: "Friday AI Assistant",
      },
      {
        project: fridayChromeExtension,
        path: "/projects/friday-chrome-extension",
        image: "/projects/friday_extension/home.png",
        imageAlt: "Friday AI Chrome Extension",
      },
      {
        project: mlDatasetCollector,
        path: "/projects/ml-dataset-collector",
        image: "/projects/DatasetCollector/home.png",
        imageAlt: "ML Dataset Collector",
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
