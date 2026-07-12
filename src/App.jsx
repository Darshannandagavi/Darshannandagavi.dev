import { useEffect, useRef } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Summary from './components/Summary'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Languages from './components/Languages'
import Interests from './components/Interests'
import Contact from './components/Contact'

import LigandWorkspace from './components/Projects/LigandWorkspace'
import Ekalavya from './components/Projects/Ekalavya'
import CyberAttackPredictor from './components/Projects/CyberAttackPredictor'
import MorseSecurity from './components/Projects/MorseSecurity'
import PotholeDetection from './components/Projects/PotholeDetection'
import QuickFix from './components/Projects/QuickFix'
import LetMySpace from './components/Projects/LetMySpace'
import FridayAIAssistant from './components/Projects/FridayAIAssistant'
import FridayChromeExtension from './components/Projects/FridayChromeExtension'
import MLDatasetCollector from './components/Projects/MLDatasetCollector'

import './App.css'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'

gsap.registerPlugin(ScrollTrigger)

const mobileNavigation = [
  { label: 'Home', sectionId: 'hero' },
  { label: 'About', sectionId: 'about' },
  { label: 'Experience', sectionId: 'experience' },
  { label: 'Skills', sectionId: 'skills' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'Contact', sectionId: 'contact' },
]

function PortfolioHome() {
  const mainRef = useRef(null)

  const scrollToSection = (sectionId) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const triggers = []
    const parallaxTweens = []
    const context = mainRef.current

    const fadeUp = (selector, extra = {}) => {
      gsap.utils.toArray(selector, context).forEach((element) => {
        const trigger = ScrollTrigger.create({
          trigger: element,
          start: 'top 88%',
          onEnter: () => {
            gsap.to(element, {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: 'power2.out',
              ...extra,
              overwrite: 'auto',
            })
          },
          once: true,
        })

        triggers.push(trigger)
      })
    }

    const fadeUpStagger = (selector, extra = {}) => {
      const elements = gsap.utils.toArray(selector, context)

      if (!elements.length) return

      const trigger = ScrollTrigger.create({
        trigger: elements[0].parentElement || elements[0],
        start: 'top 88%',
        onEnter: () => {
          gsap.to(elements, {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.08,
            ease: 'power2.out',
            ...extra,
            overwrite: 'auto',
          })
        },
        once: true,
      })

      triggers.push(trigger)
    }

    const scaleIn = (selector, extra = {}) => {
      gsap.utils.toArray(selector, context).forEach((element) => {
        const trigger = ScrollTrigger.create({
          trigger: element,
          start: 'top 88%',
          onEnter: () => {
            gsap.to(element, {
              scale: 1,
              opacity: 1,
              duration: 0.9,
              ease: 'power2.out',
              ...extra,
              overwrite: 'auto',
            })
          },
          once: true,
        })

        triggers.push(trigger)
      })
    }

    fadeUp('.reveal')
    fadeUp('.reveal-left', { x: 0 })
    fadeUp('.reveal-right', { x: 0 })
    scaleIn('.reveal-scale')
    fadeUpStagger('.reveal-stagger')
    fadeUpStagger('.reveal-stagger-scale', { scale: 1 })

    gsap.utils.toArray('.section-head', context).forEach((element) => {
      const trigger = ScrollTrigger.create({
        trigger: element,
        start: 'top 90%',
        onEnter: () => {
          const label = element.querySelector('.section-label')
          const title = element.querySelector('.section-title-text')
          const timeline = gsap.timeline({ overwrite: 'auto' })

          if (label) {
            timeline.fromTo(
              label,
              { y: 20, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power2.out',
              },
            )
          }

          if (title) {
            timeline.fromTo(
              title,
              { y: 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out',
              },
              '-=0.3',
            )
          }
        },
        once: true,
      })

      triggers.push(trigger)
    })

    gsap.utils.toArray('.parallax-slow', context).forEach((element) => {
      const tween = gsap.to(element, {
        y: () => element.offsetHeight * 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: element.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      parallaxTweens.push(tween)
    })

    gsap.utils.toArray('.parallax-med', context).forEach((element) => {
      const tween = gsap.to(element, {
        y: () => element.offsetHeight * 0.15,
        ease: 'none',
        scrollTrigger: {
          trigger: element.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      })

      parallaxTweens.push(tween)
    })

    const heroPhoto = context?.querySelector('.hero-photo')
    const heroSection = context?.querySelector('.hero-section')

    if (heroPhoto && heroSection) {
      const tween = gsap.to(heroPhoto, {
        y: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

      parallaxTweens.push(tween)
    }

    ScrollTrigger.refresh()

    return () => {
      triggers.forEach((trigger) => trigger.kill())

      parallaxTweens.forEach((tween) => {
        tween.scrollTrigger?.kill()
        tween.kill()
      })
    }
  }, [])

  return (
    <div className="app-layout">
      <Sidebar />

      <header className="mobile-nav">
        <div className="mobile-nav-inner">
          <div className="mobile-nav-left">
            <div className="mobile-avatar">
              <img
                src="/darshan.jpg"
                alt="Darshan Nandagavi"
                className="mobile-avatar-img"
              />
            </div>

            <span className="mobile-name">Darshan</span>
          </div>

          <nav
            className="mobile-nav-links"
            aria-label="Mobile portfolio navigation"
          >
            {mobileNavigation.map((item) => (
              <button
                key={item.sectionId}
                type="button"
                className="mobile-nav-link"
                onClick={() => scrollToSection(item.sectionId)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main ref={mainRef} className="main-content">
        <Hero />
        <Summary />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Languages />
        <Interests />
        <Contact />
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioHome />} />

      <Route
        path="/projects/ligand-workspace"
        element={<LigandWorkspace />}
      />

      <Route
        path="/projects/ekalavya"
        element={<Ekalavya />}
      />

      <Route
        path="/projects/cyber-attack-predictor"
        element={<CyberAttackPredictor />}
      />

      <Route
        path="/projects/morse-security"
        element={<MorseSecurity />}
      />

      <Route
        path="/projects/pothole-detection"
        element={<PotholeDetection />}
      />

      <Route
        path="/projects/quick-fix"
        element={<QuickFix />}
      />

      <Route
        path="/projects/letmyspace"
        element={<LetMySpace />}
      />

      <Route
        path="/projects/friday-ai-assistant"
        element={<FridayAIAssistant />}
      />

      <Route
        path="/projects/friday-chrome-extension"
        element={<FridayChromeExtension />}
      />

      <Route
        path="/projects/ml-dataset-collector"
        element={<MLDatasetCollector />}
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}