import {
  FiArrowDown,
  FiGithub,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi'
import ParticlesBg from './ParticlesBg'
import '../Styles/Hero.css'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  const openExternalPage = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-bg-container" aria-hidden="true">
        <ParticlesBg />
      </div>

      <div className="hero-content">
        <main className="hero-inner">
          <header className="hero-header">
            <div className="hero-badge">
              <span className="hero-badge-dot" aria-hidden="true" />
              <span>Open to opportunities</span>
            </div>

            <h1 id="hero-title" className="hero-heading">
              <span className="hero-line hero-line-1">Hi, I&apos;m Darshan</span>
              <span className="hero-line hero-line-2">
                Ningappa Nandagavi
              </span>
            </h1>

            <p className="hero-subtitle">
              Full-Stack Developer · MCA Student · AI Enthusiast
            </p>

            <p className="hero-description">
              I build scalable MERN applications, secure REST APIs, machine
              learning solutions, and AI-powered products. I enjoy transforming
              complex ideas into practical, reliable, and user-friendly
              software.
            </p>
          </header>

          <nav className="hero-actions" aria-label="Portfolio actions">
            <button
              type="button"
              className="hero-button hero-button-primary"
              onClick={() => scrollToSection('contact')}
            >
              Get in touch
            </button>

            <button
              type="button"
              className="hero-button hero-button-outline"
              onClick={() => scrollToSection('projects')}
            >
              View my projects
            </button>
          </nav>

          <nav className="hero-social-nav" aria-label="Social profiles">
            <button
              type="button"
              className="hero-social-button"
              aria-label="Open Darshan's GitHub profile"
              title="GitHub"
              onClick={() =>
                openExternalPage('https://github.com/Darshannandagavi')
              }
            >
              <FiGithub size={17} aria-hidden="true" />
            </button>

            <button
              type="button"
              className="hero-social-button"
              aria-label="Open Darshan's LinkedIn profile"
              title="LinkedIn"
              onClick={() =>
                openExternalPage(
                  'https://www.linkedin.com/in/darshan-nandagavi'
                )
              }
            >
              <FiLinkedin size={17} aria-hidden="true" />
            </button>

            <button
              type="button"
              className="hero-social-button"
              aria-label="Send an email to Darshan"
              title="Email"
              onClick={() => {
                window.location.href =
                  'mailto:nandagavidarshan562@gmail.com'
              }}
            >
              <FiMail size={17} aria-hidden="true" />
            </button>
          </nav>
        </main>

        <figure className="hero-photo">
          <div className="hero-photo-glow" aria-hidden="true" />

          <img
            src="/darshan.jpg"
            alt="Darshan Ningappa Nandagavi"
            className="hero-photo-img"
          />

          <figcaption className="hero-photo-caption">
            <span>Based in Karnataka, India</span>
            <strong>Available for full-stack opportunities</strong>
          </figcaption>
        </figure>
      </div>

      <button
        type="button"
        className="scroll-indicator"
        aria-label="Scroll to the about section"
        onClick={() => scrollToSection('about')}
      >
        <span>Explore</span>
        <FiArrowDown size={18} aria-hidden="true" />
      </button>
    </section>
  )
}