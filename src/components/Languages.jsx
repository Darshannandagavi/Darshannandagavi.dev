import { FiMessageCircle } from 'react-icons/fi'
import Tilt from 'react-parallax-tilt'
import { AnimatedDots } from './SvgDecorations'
import '../Styles/Languages.css'

const spokenLanguages = [
  {
    name: 'English',
    shortName: 'EN',
    level: 'Professional proficiency',
    description:
      'Comfortable with professional communication, documentation, presentations, and technical discussions.',
    proficiency: 85,
  },
  {
    name: 'Hindi',
    shortName: 'HI',
    level: 'Professional proficiency',
    description:
      'Confident in conversations, collaboration, and clear communication in professional environments.',
    proficiency: 85,
  },
  {
    name: 'Kannada',
    shortName: 'KN',
    level: 'Native proficiency',
    description:
      'Native language with complete fluency in speaking, reading, writing, and everyday communication.',
    proficiency: 100,
  },
]

export default function Languages() {
  return (
    <section
      className="portfolio-languages-section"
      id="languages"
      aria-labelledby="portfolio-languages-title"
    >
      <AnimatedDots />

      <div
        className="portfolio-languages-decoration parallax-slow"
        aria-hidden="true"
      />

      <div className="portfolio-languages-container">
        <header className="section-head portfolio-languages-header">
          <p className="section-label">Languages</p>

          <h2
            id="portfolio-languages-title"
            className="section-title-text"
          >
            Languages I Speak
          </h2>

          <p className="portfolio-languages-introduction">
            Languages I use for everyday conversations, professional
            communication, collaboration, and technical discussions.
          </p>
        </header>

        <div className="portfolio-languages-grid">
          {spokenLanguages.map((language) => (
            <Tilt
              key={language.name}
              className="reveal-stagger-scale portfolio-language-tilt"
              tiltMaxAngleX={14}
              tiltMaxAngleY={14}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1000}
              glareEnable
              glareMaxOpacity={0.2}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="17px"
              gyroscope
              tiltReverse={true}
            >
              <article className="portfolio-language-card">
                {/* Card header with 3D effect */}
                <header className="portfolio-language-card-header">
                  <div
                    className="portfolio-language-symbol"
                    aria-hidden="true"
                  >
                    {language.shortName}
                  </div>

                  <div className="portfolio-language-heading">
                    <h3>{language.name}</h3>
                    <p>{language.level}</p>
                  </div>

                  
                </header>

                {/* Description with 3D effect */}
                <p className="portfolio-language-description">
                  {language.description}
                </p>

                {/* Proficiency section with 3D effect */}
                <footer className="portfolio-language-proficiency">
                  <div className="portfolio-language-proficiency-label">
                    <span>Proficiency</span>
                    <strong>{language.proficiency}%</strong>
                  </div>

                  <div
                    className="portfolio-language-progress-track"
                    role="progressbar"
                    aria-label={`${language.name} proficiency`}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={language.proficiency}
                  >
                    <span
                      className="portfolio-language-progress-value"
                      style={{ width: `${language.proficiency}%` }}
                    />
                  </div>
                </footer>
              </article>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  )
}