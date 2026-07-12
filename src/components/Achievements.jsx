import { useEffect, useState } from 'react'
import {
  FiAward,
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiCode,
  FiMaximize2,
  FiUsers,
  FiX,
} from 'react-icons/fi'
import { AnimatedLines } from './SvgDecorations'
import '../Styles/Achievements.css'

const achievements = [
  {
    title: 'Technical Lead & Developer',
    subtitle: 'Tech CivilWar — College Coding Event',
    organization: "SDVS'S BCA College, Sankeshwar",
    date: '2023',
    type: 'Leadership & Development',
    icon: FiCode,
    images: [
      {
        src: '/Achievements/techcivilwar/techcivilwar.jpg',
        alt: 'Tech CivilWar coding event opening',
      },
      {
        src: './Achievements/techcivilwar/techcivilwar2.jpg',
        alt: 'Students participating in Tech CivilWar',
      },
      {
        src: './Achievements/techcivilwar/techcivilwar3.jpg',
        alt: 'Tech CivilWar digital event platform',
      },
      {
        src: './Achievements/techcivilwar/techcivilwar4.jpg',
        alt: 'Logic Legends technical team',
      },
    ],
    description:
      'Collaborated as part of the Logic Legends team to design and develop digital platforms for college-level coding and quiz competitions organized for first- and second-year BCA students.',
    highlights: [
      'Led technical development and web design as part of the Logic Legends team.',
      'Developed event registration and information portal websites.',
      'Built dedicated platforms for coding competitions and technical events.',
      'Managed digital infrastructure that enabled a completely paperless event.',
      'Coordinated with quiz teams to integrate pre-developed competition software.',
      'Contributed to the first fully digital event in the department’s history.',
    ],
    technologies: [
      'HTML5',
      'JavaScript',
      'Bootstrap',
      'Git',
    ],
  },
  {
    title: '1st Place in Coding Competition',
    subtitle: 'MCA Coding Competition',
    organization: 'Presidency College, Bengaluru',
    date: '2025 – 2026',
    type: 'Competition Winner',
    icon: FiAward,
    images: [
      {
        src: '/Achievements/codestorm/codestorm1.jpeg',
        alt: 'Receiving first place in the MCA coding competition',
      },
      {
        src: '/Achievements/codestorm/codestorm2.png',
        alt: 'MCA coding competition certificate',
      },
      {
        src: '/Achievements/codestorm/codestorm3.png',
        alt: 'MCA coding competition event',
      },
      {
        src: '/Achievements/codestorm/codestorm4.jpeg',
        alt: 'MCA coding competition event',
      },
    ],
    description:
      'Secured first place in a coding competition conducted at Presidency College, Bengaluru, demonstrating programming knowledge, logical thinking, accuracy, and problem-solving ability.',
    highlights: [
      'Achieved first place among MCA-level participants.',
      'Solved programming challenges using logical and efficient approaches.',
      'Demonstrated strong coding, debugging, and time-management skills.',
    ],
    technologies: [
      'Programming',
      'Data Structures',
      'Problem Solving',
      'Logical Thinking',
    ],
  },
  {
    title: 'PW RIFT Hackathon',
    subtitle: 'Hackathon Participant',
    organization: 'Physics Wallah',
    date: 'Participated',
    type: 'Hackathon',
    icon: FiUsers,
    images: [
      {
        src: '/Achievements/rift/rift1.jpg',
        alt: 'PW RIFT Hackathon participation',
      },
      {
        src: '/Achievements/rift/rift2.jpg',
        alt: 'Team working at PW RIFT Hackathon',
      },
      {
        src: '/Achievements/rift/rift3.jpg',
        alt: 'PW RIFT Hackathon project presentation',
      },
    ],
    description:
      'Participated in the PW RIFT Hackathon and collaborated in a time-constrained innovation environment to explore, plan, and develop a practical technology-based solution.',
    highlights: [
      'Participated in collaborative ideation and solution development.',
      'Worked under hackathon deadlines and presentation constraints.',
      'Gained experience in teamwork, rapid prototyping, and technical communication.',
    ],
    technologies: [
      'Teamwork',
      'Rapid Prototyping',
      'Innovation',
      'Problem Solving',
    ],
  },
  {
    title: 'Avinya Hackathon',
    subtitle: 'Hackathon Participant',
    organization: 'SJIT College, Bengaluru',
    date: 'Participated',
    type: 'Hackathon',
    icon: FiUsers,
    images: [
      {
        src: '/Achievements/avinya/avinya1.jpeg',
        alt: 'Avinya Hackathon participation',
      },
    ],
    description:
      'Participated in the Avinya Hackathon at SJIT College, Bengaluru, gaining practical experience in collaborative problem-solving, solution planning, and project presentation.',
    highlights: [
      'Collaborated with team members to evaluate and develop project ideas.',
      'Applied technical knowledge to a practical hackathon challenge.',
      'Strengthened presentation, adaptability, and teamwork skills.',
    ],
    technologies: [
      'Collaboration',
      'Innovation',
      'Development',
      'Presentation',
    ],
  },
]

export default function Achievements() {
  const [carouselIndexes, setCarouselIndexes] = useState({})
  const [modalImage, setModalImage] = useState(null)

  const getCurrentIndex = (achievementIndex) =>
    carouselIndexes[achievementIndex] || 0

  const changeSlide = (
    achievementIndex,
    direction,
    imageCount,
  ) => {
    setCarouselIndexes((currentIndexes) => {
      const currentIndex =
        currentIndexes[achievementIndex] || 0

      const nextIndex =
        (currentIndex + direction + imageCount) %
        imageCount

      return {
        ...currentIndexes,
        [achievementIndex]: nextIndex,
      }
    })
  }

  const selectSlide = (achievementIndex, imageIndex) => {
    setCarouselIndexes((currentIndexes) => ({
      ...currentIndexes,
      [achievementIndex]: imageIndex,
    }))
  }

  const openImageModal = (
    achievementIndex,
    imageIndex,
  ) => {
    setModalImage({
      achievementIndex,
      imageIndex,
    })
  }

  const closeImageModal = () => {
    setModalImage(null)
  }

  const changeModalImage = (direction) => {
    if (!modalImage) return

    const achievement =
      achievements[modalImage.achievementIndex]

    const nextImageIndex =
      (
        modalImage.imageIndex +
        direction +
        achievement.images.length
      ) % achievement.images.length

    setModalImage((currentModal) => ({
      ...currentModal,
      imageIndex: nextImageIndex,
    }))

    selectSlide(
      modalImage.achievementIndex,
      nextImageIndex,
    )
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!modalImage) return

      if (event.key === 'Escape') {
        closeImageModal()
      }

      if (event.key === 'ArrowLeft') {
        changeModalImage(-1)
      }

      if (event.key === 'ArrowRight') {
        changeModalImage(1)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    document.body.classList.toggle(
      'portfolio-achievement-modal-open',
      Boolean(modalImage),
    )

    return () => {
      document.removeEventListener(
        'keydown',
        handleKeyDown,
      )

      document.body.classList.remove(
        'portfolio-achievement-modal-open',
      )
    }
  }, [modalImage])

  const activeModalAchievement = modalImage
    ? achievements[modalImage.achievementIndex]
    : null

  const activeModalImage =
    activeModalAchievement && modalImage
      ? activeModalAchievement.images[
          modalImage.imageIndex
        ]
      : null

  return (
    <section
      className="portfolio-achievements-section"
      id="achievements"
      aria-labelledby="portfolio-achievements-title"
    >
      <AnimatedLines />

      <div
        className="portfolio-achievements-decoration parallax-med"
        aria-hidden="true"
      />

      <div className="portfolio-achievements-container">
        <header className="section-head portfolio-achievements-header">
          <p className="section-label">Achievements</p>

          <h2
            id="portfolio-achievements-title"
            className="section-title-text"
          >
            Milestones &amp; Recognition
          </h2>

          <p className="portfolio-achievements-introduction">
            Leadership experiences, competition achievements,
            and hackathon participation that strengthened my
            technical, collaborative, and problem-solving
            abilities.
          </p>
        </header>

        <div className="portfolio-achievements-grid">
          {achievements.map(
            (achievement, achievementIndex) => {
              const Icon = achievement.icon
              const currentIndex =
                getCurrentIndex(achievementIndex)

              const currentImage =
                achievement.images[currentIndex]

              return (
                <article
                  key={achievement.title}
                  className="reveal portfolio-achievement-card"
                >
                  <div className="portfolio-achievement-carousel">
                    <button
                      type="button"
                      className="portfolio-achievement-main-image-button"
                      aria-label={`Expand ${currentImage.alt}`}
                      onClick={() =>
                        openImageModal(
                          achievementIndex,
                          currentIndex,
                        )
                      }
                    >
                      <img
                        src={currentImage.src}
                        alt={currentImage.alt}
                        className="portfolio-achievement-image"
                      />

                      <span className="portfolio-achievement-expand-label">
                        <FiMaximize2
                          size={16}
                          aria-hidden="true"
                        />
                        View image
                      </span>
                    </button>

                    {achievement.images.length > 1 && (
                      <>
                        <button
                          type="button"
                          className="portfolio-achievement-carousel-button portfolio-achievement-carousel-previous"
                          aria-label="Show previous image"
                          onClick={() =>
                            changeSlide(
                              achievementIndex,
                              -1,
                              achievement.images.length,
                            )
                          }
                        >
                          <FiChevronLeft
                            size={19}
                            aria-hidden="true"
                          />
                        </button>

                        <button
                          type="button"
                          className="portfolio-achievement-carousel-button portfolio-achievement-carousel-next"
                          aria-label="Show next image"
                          onClick={() =>
                            changeSlide(
                              achievementIndex,
                              1,
                              achievement.images.length,
                            )
                          }
                        >
                          <FiChevronRight
                            size={19}
                            aria-hidden="true"
                          />
                        </button>
                      </>
                    )}

                    <span className="portfolio-achievement-image-counter">
                      {currentIndex + 1} /{' '}
                      {achievement.images.length}
                    </span>

                    <div
                      className="portfolio-achievement-carousel-dots"
                      aria-label="Select achievement image"
                    >
                      {achievement.images.map(
                        (image, imageIndex) => (
                          <button
                            key={image.src}
                            type="button"
                            className={
                              imageIndex === currentIndex
                                ? 'portfolio-achievement-carousel-dot portfolio-achievement-carousel-dot-active'
                                : 'portfolio-achievement-carousel-dot'
                            }
                            aria-label={`Show image ${
                              imageIndex + 1
                            }`}
                            onClick={() =>
                              selectSlide(
                                achievementIndex,
                                imageIndex,
                              )
                            }
                          />
                        ),
                      )}
                    </div>
                  </div>

                  <div className="portfolio-achievement-content">
                    <header className="portfolio-achievement-card-header">
                      <div
                        className="portfolio-achievement-icon"
                        aria-hidden="true"
                      >
                        <Icon size={18} />
                      </div>

                      <div className="portfolio-achievement-heading">
                        <p>{achievement.type}</p>
                        <h3>{achievement.title}</h3>
                      </div>
                    </header>

                    <p className="portfolio-achievement-subtitle">
                      {achievement.subtitle}
                    </p>

                    <div className="portfolio-achievement-meta">
                      <span>
                        <FiUsers size={13} />
                        {achievement.organization}
                      </span>

                      <span>
                        <FiCalendar size={13} />
                        {achievement.date}
                      </span>
                    </div>

                    <p className="portfolio-achievement-description">
                      {achievement.description}
                    </p>

                    <section className="portfolio-achievement-responsibilities">
                      <h4>Key highlights</h4>

                      <ul>
                        {achievement.highlights.map(
                          (highlight) => (
                            <li key={highlight}>
                              {highlight}
                            </li>
                          ),
                        )}
                      </ul>
                    </section>

                    <footer className="portfolio-achievement-technologies">
                      {achievement.technologies.map(
                        (technology) => (
                          <span key={technology}>
                            {technology}
                          </span>
                        ),
                      )}
                    </footer>
                  </div>
                </article>
              )
            },
          )}
        </div>
      </div>

      {activeModalAchievement && activeModalImage && (
        <div
          className="portfolio-achievement-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeModalAchievement.title} image gallery`}
          onClick={closeImageModal}
        >
          <button
            type="button"
            className="portfolio-achievement-modal-close"
            aria-label="Close image gallery"
            onClick={closeImageModal}
          >
            <FiX size={21} />
          </button>

          {activeModalAchievement.images.length > 1 && (
            <>
              <button
                type="button"
                className="portfolio-achievement-modal-navigation portfolio-achievement-modal-previous"
                aria-label="Previous image"
                onClick={(event) => {
                  event.stopPropagation()
                  changeModalImage(-1)
                }}
              >
                <FiChevronLeft size={25} />
              </button>

              <button
                type="button"
                className="portfolio-achievement-modal-navigation portfolio-achievement-modal-next"
                aria-label="Next image"
                onClick={(event) => {
                  event.stopPropagation()
                  changeModalImage(1)
                }}
              >
                <FiChevronRight size={25} />
              </button>
            </>
          )}

          <figure
            className="portfolio-achievement-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activeModalImage.src}
              alt={activeModalImage.alt}
            />

            <figcaption>
              <span>{activeModalAchievement.type}</span>

              <h2>{activeModalAchievement.title}</h2>

              <p>
                Image {modalImage.imageIndex + 1} of{' '}
                {activeModalAchievement.images.length}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}