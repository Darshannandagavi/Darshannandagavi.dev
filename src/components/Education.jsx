import { FiBookOpen, FiCalendar, FiAward } from 'react-icons/fi'
import { AnimatedCircle } from './SvgDecorations'
import '../Styles/Education.css'

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'Presidency College, Bengaluru',
    year: '2025 – 2027',
    result: 'CGPA: 8.5',
    description:
      'Pursuing postgraduate studies with a focus on software engineering, full-stack development, artificial intelligence, and scalable application development.',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'SDVS College, Sankeshwar, Belagavi',
    year: '2022 – 2025',
    result: 'CGPA: 8.9',
    description:
      'Graduated with strong foundations in computer applications, programming, database management, web development, data structures, and software engineering.',
  },
  {
    degree: 'Class XII — Science (PCMB)',
    school: 'SJPN College, Nidasoshi, Belagavi',
    year: '2020 – 2022',
    result: 'Percentage: 72%',
    description:
      'Completed pre-university education in the Science stream with Physics, Chemistry, Mathematics, and Biology.',
  },
  {
    degree: 'Class X — SSLC',
    school: 'Swami Vivekananda School, Sankeshwar, Belagavi',
    year: '2019 – 2020',
    result: 'Percentage: 89.76%',
    description:
      'Completed secondary education with a strong academic performance and an early interest in technology and problem-solving.',
  },
]

export default function Education() {
  return (
    <section
      className="education-section"
      id="education"
      aria-labelledby="education-title"
    >
      <AnimatedCircle />

      <div className="education-decoration" aria-hidden="true" />

      <div className="education-container">
        <header className="education-section-header">
          <p className="education-section-label">Education</p>

          <h2 id="education-title" className="education-section-title">
            My Academic Path
          </h2>
        </header>

        <div className="education-timeline">
          {education.map((item) => (
            <article
              key={`${item.degree}-${item.year}`}
              className="reveal-left education-item"
            >
              <span className="education-timeline-dot" aria-hidden="true" />

              <div className="education-card">
                <div className="education-icon" aria-hidden="true">
                  <FiBookOpen size={19} />
                </div>

                <div className="education-content">
                  <header className="education-card-header">
                    <div>
                      <h3 className="education-degree">{item.degree}</h3>
                      <p className="education-school">{item.school}</p>
                    </div>

                    <div className="education-result">
                      <FiAward size={13} aria-hidden="true" />
                      <span>{item.result}</span>
                    </div>
                  </header>

                  <p className="education-year">
                    <FiCalendar size={12} aria-hidden="true" />
                    <span>{item.year}</span>
                  </p>

                  <p className="education-description">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}