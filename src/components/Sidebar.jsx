import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiGithub,
  FiGlobe,
  FiGrid,
  FiHeart,
  FiHome,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiMessageCircle,
  FiTool,
  FiUser,
  FiX,
} from 'react-icons/fi'
import '../Styles/Sidebar.css'

const portfolioSidebarLinks = [
  {
    label: 'Home',
    sectionId: 'hero',
    icon: FiHome,
  },
  {
    label: 'About',
    sectionId: 'about',
    icon: FiUser,
  },
  {
    label: 'Experience',
    sectionId: 'experience',
    icon: FiBriefcase,
  },
  {
    label: 'Education',
    sectionId: 'education',
    icon: FiBookOpen,
  },
  {
    label: 'Skills',
    sectionId: 'skills',
    icon: FiCode,
  },
  {
    label: 'Projects',
    sectionId: 'projects',
    icon: FiGrid,
  },
  {
    label: 'Certifications',
    sectionId: 'certifications',
    icon: FiAward,
  },
  {
    label: 'Achievements',
    sectionId: 'achievements',
    icon: FiTool,
  },
  {
    label: 'Languages',
    sectionId: 'languages',
    icon: FiGlobe,
  },
  {
    label: 'Interests',
    sectionId: 'interests',
    icon: FiHeart,
  },
  {
    label: 'Contact',
    sectionId: 'contact',
    icon: FiMessageCircle,
  },
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
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] =
    useState(false)

  const [activeSection, setActiveSection] =
    useState('hero')

  const observerRef = useRef(null)

  const closeMobileSidebar = useCallback(() => {
    setIsMobileSidebarOpen(false)
  }, [])

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(
      (currentValue) => !currentValue,
    )
  }

  const scrollToSection = useCallback(
    (sectionId) => {
      closeMobileSidebar()
      setActiveSection(sectionId)

      window.setTimeout(() => {
        const section =
          document.getElementById(sectionId)

        if (!section) return

        const mobileHeaderHeight =
          window.innerWidth <= 480
            ? 62
            : window.innerWidth <= 900
              ? 68
              : 0

        const extraSpacing = 18

        const targetPosition =
          section.getBoundingClientRect().top +
          window.scrollY -
          mobileHeaderHeight -
          extraSpacing

        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: 'smooth',
        })
      }, 150)
    },
    [closeMobileSidebar],
  )

  const openExternalPage = (url) => {
    window.open(
      url,
      '_blank',
      'noopener,noreferrer',
    )
  }

  const sendEmail = () => {
    window.location.href =
      'mailto:nandagavidarshan562@gmail.com'
  }

  useEffect(() => {
    const sectionElements =
      portfolioSidebarLinks
        .map((link) =>
          document.getElementById(link.sectionId),
        )
        .filter(Boolean)

    observerRef.current?.disconnect()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(
          (entry) => entry.isIntersecting,
        )

        if (!visibleEntries.length) return

        const mostVisible = visibleEntries.reduce(
          (previous, current) =>
            previous.intersectionRatio >
            current.intersectionRatio
              ? previous
              : current,
        )

        setActiveSection(mostVisible.target.id)
      },
      {
        rootMargin: '-15% 0px -65% 0px',
        threshold: [
          0,
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ],
      },
    )

    sectionElements.forEach((element) => {
      observerRef.current?.observe(element)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeMobileSidebar()
      }
    }

    document.addEventListener(
      'keydown',
      handleEscapeKey,
    )

    document.body.classList.toggle(
      'portfolio-mobile-navigation-open',
      isMobileSidebarOpen,
    )

    return () => {
      document.removeEventListener(
        'keydown',
        handleEscapeKey,
      )

      document.body.classList.remove(
        'portfolio-mobile-navigation-open',
      )
    }
  }, [isMobileSidebarOpen, closeMobileSidebar])

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
          isMobileSidebarOpen
            ? 'portfolio-sidebar-overlay-visible'
            : ''
        }`}
        aria-label="Close navigation menu"
        tabIndex={isMobileSidebarOpen ? 0 : -1}
        onClick={closeMobileSidebar}
      />

      <aside
        id="portfolio-navigation-sidebar"
        className={`portfolio-sidebar ${
          isMobileSidebarOpen
            ? 'portfolio-sidebar-mobile-open'
            : ''
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

          <h1 className="portfolio-sidebar-name">
            Darshan Nandagavi
          </h1>

          <p className="portfolio-sidebar-title">
            Full-Stack Developer &amp; MCA Student
          </p>

          <nav
            className="portfolio-sidebar-socials"
            aria-label="Social profiles"
          >
            {portfolioSocialLinks.map((social) => {
              const SocialIcon = social.icon

              return (
                <button
                  key={social.label}
                  type="button"
                  className="portfolio-sidebar-social-button"
                  aria-label={`Open ${social.label} profile`}
                  title={social.label}
                  onClick={() =>
                    openExternalPage(social.url)
                  }
                >
                  <SocialIcon
                    size={15}
                    aria-hidden="true"
                  />
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

        <nav
          className="portfolio-sidebar-navigation"
          aria-label="Portfolio sections"
        >
          {portfolioSidebarLinks.map((link) => {
            const NavigationIcon = link.icon
            const isActive =
              activeSection === link.sectionId

            return (
              <button
                key={link.sectionId}
                type="button"
                className={`portfolio-sidebar-navigation-button ${
                  isActive ? 'is-active' : ''
                }`}
                onClick={() =>
                  scrollToSection(link.sectionId)
                }
                aria-current={
                  isActive ? 'location' : undefined
                }
              >
                <NavigationIcon
                  className="portfolio-sidebar-navigation-icon"
                  size={15}
                  aria-hidden="true"
                />

                <span>{link.label}</span>
              </button>
            )
          })}
        </nav>

        <footer className="portfolio-sidebar-footer">
          <span>
            &copy; {new Date().getFullYear()}{' '}
            Darshan Nandagavi
          </span>

          <span className="portfolio-sidebar-location">
            Karnataka, India
          </span>
        </footer>
      </aside>
    </>
  )
}