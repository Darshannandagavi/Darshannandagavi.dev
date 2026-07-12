import {
  FiAward,
  FiCalendar,
  FiDownload,
  FiExternalLink,
} from 'react-icons/fi'
import { AnimatedGrid } from './SvgDecorations'
import '../Styles/Certifications.css'

const certifications = [
  {
    name: 'C Programming Data Structures in Kannada',
    provider: 'Algorithms365',
    date: 'July 11, 2026',
    description:
      'Completed the C Programming Data Structures in Kannada course and successfully passed the online assessment.',
    image:
      '/certificates/data_structure_by_Algorithm365.png',
    downloadFile:
      '/certificates/data_structure_by_Algorithm365.png',
    verificationUrl:
      'https://skills.algorithms365.com/learn/certificate/13055274-226527',
  },
  {
    name: 'Programming in Python',
    provider: 'Meta via Coursera',
    date: 'November 28, 2025',
    description:
      'Learned Python programming fundamentals and application development.',
    image:
      '/certificates/python_programming_coursera_certificate.png',
    downloadFile:
      '/certificates/python_programming_coursera_certificate.png',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/HNKXVNJ3BU15',
  },
  {
    name: 'Verbal Mastery',
    provider: 'Board Infinity via Coursera',
    date: 'April 14, 2026',
    description:
      'Grammar, reading comprehension, and reasoning preparation for examinations and job tests.',
    image: '/certificates/math_reasoning.png',
    downloadFile: '/certificates/math_reasoning.png',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/VVEG8Q31D9ZH',
  },
  {
    name: 'Quantitative Aptitude',
    provider: 'Board Infinity via Coursera',
    date: 'April 14, 2026',
    description:
      'Quantitative aptitude preparation for competitive examinations and recruitment assessments.',
    image: '/certificates/math_aptitude.png',
    downloadFile: '/certificates/math_aptitude.png',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/2PZ1LFGV684W',
  },
]
export default function Certifications() {
  const openVerification = (url) => {
    if (!url) return

    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const downloadCertificate = (file, name) => {
    if (!file) return

    const downloadLink = document.createElement('a')

    downloadLink.href = file
    downloadLink.download = `${name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')}-certificate`

    document.body.appendChild(downloadLink)
    downloadLink.click()
    downloadLink.remove()
  }

  return (
    <section
      className="portfolio-certifications-section"
      id="certifications"
      aria-labelledby="portfolio-certifications-title"
    >
      <AnimatedGrid />

      <div
        className="portfolio-certifications-decoration parallax-slow"
        aria-hidden="true"
      />

      <div className="portfolio-certifications-container">
        <header className="section-head portfolio-certifications-header">
          <p className="section-label">Certifications</p>

          <h2
            id="portfolio-certifications-title"
            className="section-title-text"
          >
            Courses &amp; Credentials
          </h2>

          <p className="portfolio-certifications-introduction">
            Certifications representing my continued learning in
            programming, data structures, problem-solving, and
            professional aptitude.
          </p>
        </header>

        <div className="portfolio-certifications-grid">
          {certifications.map((certificate) => (
            <article
              key={certificate.name}
              className="reveal portfolio-certificate-card"
            >
              <figure className="portfolio-certificate-image-wrapper">
                <img
                  src={certificate.image}
                  alt={`${certificate.name} certificate from ${certificate.provider}`}
                  className="portfolio-certificate-image"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.parentElement.classList.add(
                      'portfolio-certificate-image-missing',
                    )
                  }}
                />

                <div
                  className="portfolio-certificate-image-placeholder"
                  aria-hidden="true"
                >
                  <FiAward size={27} />
                  <span>Certificate image</span>
                </div>

                <figcaption className="portfolio-certificate-provider-badge">
                  {certificate.provider}
                </figcaption>
              </figure>

              <div className="portfolio-certificate-content">
                <div className="portfolio-certificate-heading">
                  <div
                    className="portfolio-certificate-award-icon"
                    aria-hidden="true"
                  >
                    <FiAward size={18} />
                  </div>

                  <div>
                    <p>{certificate.provider}</p>
                    <h3>{certificate.name}</h3>
                  </div>
                </div>

                <div className="portfolio-certificate-date">
                  <FiCalendar size={13} aria-hidden="true" />
                  <time>{certificate.date}</time>
                </div>

                {certificate.certificateId && (
                  <p className="portfolio-certificate-id">
                    <span>Certificate ID</span>
                    <strong>{certificate.certificateId}</strong>
                  </p>
                )}

                <footer className="portfolio-certificate-actions">
                  {certificate.verificationUrl && (
                    <button
                      type="button"
                      className="portfolio-certificate-button portfolio-certificate-verify-button"
                      onClick={() =>
                        openVerification(
                          certificate.verificationUrl,
                        )
                      }
                    >
                      <FiExternalLink
                        size={14}
                        aria-hidden="true"
                      />
                      Verify
                    </button>
                  )}

                  <button
                    type="button"
                    className="portfolio-certificate-button portfolio-certificate-download-button"
                    onClick={() =>
                      downloadCertificate(
                        certificate.downloadFile,
                        certificate.name,
                      )
                    }
                  >
                    <FiDownload size={14} aria-hidden="true" />
                    Download
                  </button>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}