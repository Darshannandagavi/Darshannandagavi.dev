import { useEffect, useState, useCallback, useRef } from 'react'
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiX,
} from 'react-icons/fi'
import '../Styles/Sidebar.css'

const portfolioSidebarLinks = [
  { label: 'Home', sectionId: 'hero' },
  { label: 'About', sectionId: 'about' },
  { label: 'Experience', sectionId: 'experience' },
  { label: 'Education', sectionId: 'education' },
  { label: 'Skills', sectionId: 'skills' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'Certifications', sectionId: 'certifications' },
  { label: 'Achievements', sectionId: 'achievements' },
  { label: 'Languages', sectionId: 'languages' },
  { label: 'Interests', sectionId: 'interests' },
  { label: 'Contact', sectionId: 'contact' },
]

const portfolioSocialLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/Darshannandagavi',
    icon: FiGithub,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/darshan-nandagavi',
    icon: FiLinkedin,
  },
]

export default function Sidebar() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const observerRef = useRef(null)

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false)
  }

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen((currentValue) => !currentValue)
  }

  const scrollToSection = useCallback((sectionId) => {
    closeMobileSidebar()
    setActiveSection(sectionId)

    window.setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }, [])

  const openExternalPage = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const sendEmail = () => {
    window.location.href = 'mailto:nandagavidarshan562@gmail.com'
  }

  // Intersection Observer to detect active section
  useEffect(() => {
    const sectionIds = portfolioSidebarLinks.map(link => link.sectionId)
    
    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Filter entries that are currently intersecting
        const visibleEntries = entries.filter(entry => entry.isIntersecting)
        
        if (visibleEntries.length > 0) {
          // If multiple sections are visible, pick the one with the highest intersection ratio
          const mostVisible = visibleEntries.reduce((prev, current) => {
            return prev.intersectionRatio > current.intersectionRatio ? prev : current
          })
          
          setActiveSection(mostVisible.target.id)
        }
      },
      {
        rootMargin: '-10% 0px -80% 0px', // Adjust these values to control when a section is considered "active"
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
      }
    )

    // Observe all sections
    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        observerRef.current.observe(element)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  // Handle escape key and body scroll lock
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeMobileSidebar()
      }
    }

    document.addEventListener('keydown', handleEscapeKey)

    if (isMobileSidebarOpen) {
      document.body.classList.add('portfolio-mobile-navigation-open')
    } else {
      document.body.classList.remove('portfolio-mobile-navigation-open')
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.classList.remove('portfolio-mobile-navigation-open')
    }
  }, [isMobileSidebarOpen])

  return (
    <>
      <header className="portfolio-mobile-header">
        <button
          type="button"
          className="portfolio-mobile-profile"
          onClick={() => scrollToSection('hero')}
          aria-label="Go to home section"
        >
          <img
            src="/darshan.jpg"
            alt=""
            className="portfolio-mobile-profile-image"
          />
          <span>
            <strong>Darshan Nandagavi</strong>
            <small>Full-Stack Developer</small>
          </span>
        </button>

        <button
          type="button"
          className="portfolio-mobile-menu-button"
          aria-label={
            isMobileSidebarOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={isMobileSidebarOpen}
          aria-controls="portfolio-navigation-sidebar"
          onClick={toggleMobileSidebar}
        >
          {isMobileSidebarOpen ? (
            <FiX size={21} aria-hidden="true" />
          ) : (
            <FiMenu size={21} aria-hidden="true" />
          )}
        </button>
      </header>

      <button
        type="button"
        className={`portfolio-sidebar-overlay ${
          isMobileSidebarOpen ? 'portfolio-sidebar-overlay-visible' : ''
        }`}
        aria-label="Close navigation menu"
        tabIndex={isMobileSidebarOpen ? 0 : -1}
        onClick={closeMobileSidebar}
      />

      <aside
        id="portfolio-navigation-sidebar"
        className={`portfolio-sidebar ${
          isMobileSidebarOpen ? 'portfolio-sidebar-mobile-open' : ''
        }`}
        aria-label="Portfolio sidebar"
      >
        <button
          type="button"
          className="portfolio-sidebar-close-button"
          aria-label="Close navigation menu"
          onClick={closeMobileSidebar}
        >
          <FiX size={19} aria-hidden="true" />
        </button>

        <header className="portfolio-sidebar-header">
          <div className="portfolio-sidebar-avatar">
            <img
              src="/darshan.jpg"
              alt="Darshan Ningappa Nandagavi"
              className="portfolio-sidebar-avatar-image"
            />
          </div>

          <h1 className="portfolio-sidebar-name">Darshan Nandagavi</h1>

          <p className="portfolio-sidebar-title">
            Full-Stack Developer &amp; MCA Student
          </p>

          <nav className="portfolio-sidebar-socials" aria-label="Social profiles">
            {portfolioSocialLinks.map((social) => {
              const Icon = social.icon
              return (
                <button
                  key={social.label}
                  type="button"
                  className="portfolio-sidebar-social-button"
                  aria-label={`Open ${social.label} profile`}
                  title={social.label}
                  onClick={() => openExternalPage(social.url)}
                >
                  <Icon size={15} aria-hidden="true" />
                </button>
              )
            })}

            <button
              type="button"
              className="portfolio-sidebar-social-button"
              aria-label="Send an email to Darshan"
              title="Email"
              onClick={sendEmail}
            >
              <FiMail size={15} aria-hidden="true" />
            </button>
          </nav>
        </header>

        <nav className="portfolio-sidebar-navigation" aria-label="Portfolio sections">
          {portfolioSidebarLinks.map((link) => (
            <button
              key={link.sectionId}
              type="button"
              className={`portfolio-sidebar-navigation-button ${
                activeSection === link.sectionId ? 'is-active' : ''
              }`}
              onClick={() => scrollToSection(link.sectionId)}
              aria-current={activeSection === link.sectionId ? 'true' : 'false'}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <footer className="portfolio-sidebar-footer">
          <span>&copy; {new Date().getFullYear()} Darshan Nandagavi</span>
          <span className="portfolio-sidebar-location">Karnataka, India</span>
        </footer>
      </aside>
    </>
  )
}