import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { AnimatedGrid, AnimatedLines } from './SvgDecorations'
import '../Styles/Summary.css'

export default function Summary() {
  return (
    <section id="about" className="summary-section" aria-labelledby="about-title">
      <AnimatedGrid />
      <AnimatedLines />

      <div className="summary-background-glow" aria-hidden="true" />

      <div className="summary-container">
        <header className="summary-header">
          <p className="summary-section-label">About</p>
          <h2 id="about-title" className="summary-section-title">
            About Me
          </h2>
        </header>

        <div className="summary-grid">
          <article className="summary-content">
            <p className="summary-text">
              I&apos;m Darshan Ningappa Nandagavi, a Full-Stack Developer and
              MCA student at Presidency College, Bengaluru. I have hands-on
              experience building and deploying scalable MERN applications,
              secure REST APIs, machine learning solutions, and AI-powered web
              products.
            </p>

            <p className="summary-text">
              At Ligand Software Solutions, I have contributed to more than
              five full-stack applications and developed over 99 REST API
              endpoints for an LMS serving more than 700 students. My work
              includes authentication, academic management, AI interview
              coaching, administrative dashboards, and production deployments.
            </p>

            <p className="summary-text">
              I enjoy solving real-world problems using React.js, Node.js,
              Express.js, MongoDB, Python, Flask, and Scikit-learn. I&apos;m
              committed to building reliable software while continuously
              improving my technical knowledge and problem-solving abilities.
            </p>

            <address className="summary-contacts">
              <button
                type="button"
                className="summary-contact-item"
                onClick={() => {
                  window.location.href =
                    'mailto:nandagavidarshan562@gmail.com'
                }}
              >
                <FiMail
                  size={15}
                  className="summary-contact-icon"
                  aria-hidden="true"
                />
                <span>nandagavidarshan562@gmail.com</span>
              </button>

              <button
                type="button"
                className="summary-contact-item"
                onClick={() => {
                  window.location.href = 'tel:+916362460082'
                }}
              >
                <FiPhone
                  size={15}
                  className="summary-contact-icon"
                  aria-hidden="true"
                />
                <span>+91 6362460082</span>
              </button>

              <div className="summary-contact-item summary-location">
                <FiMapPin
                  size={15}
                  className="summary-contact-icon"
                  aria-hidden="true"
                />
                <span>Karnataka, India</span>
              </div>
            </address>
          </article>

          <aside className="summary-stats" aria-label="Professional highlights">
            <article className="reveal-stagger-scale summary-stat-card">
              <strong className="summary-stat-number">5+</strong>
              <span className="summary-stat-label">
                Full-Stack Applications
              </span>
            </article>

            <article className="reveal-stagger-scale summary-stat-card">
              <strong className="summary-stat-number">99+</strong>
              <span className="summary-stat-label">REST API Endpoints</span>
            </article>

            <article className="reveal-stagger-scale summary-stat-card">
              <strong className="summary-stat-number">700+</strong>
              <span className="summary-stat-label">LMS Students Served</span>
            </article>

            <article className="reveal-stagger-scale summary-stat-card">
              <strong className="summary-stat-number">3+</strong>
              <span className="summary-stat-label">AI/ML Applications</span>
            </article>

            <article className="reveal-stagger-scale summary-stat-card">
              <strong className="summary-stat-number">8.9</strong>
              <span className="summary-stat-label">BCA CGPA</span>
            </article>

            <article className="reveal-stagger-scale summary-stat-card">
              <strong className="summary-stat-number">MERN</strong>
              <span className="summary-stat-label">Primary Technology Stack</span>
            </article>
          </aside>
        </div>
      </div>
    </section>
  )
}