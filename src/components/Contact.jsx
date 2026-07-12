import { useState } from 'react'
import {
  FiSend,
  FiMail,
  FiPhone,
  FiMapPin,
} from 'react-icons/fi'
import { AnimatedDots } from './SvgDecorations'
import '../Styles/Contact.css'

const contactDetails = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'nandagavidarshan562@gmail.com',
    action: 'mailto:nandagavidarshan562@gmail.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 6362460082',
    action: 'tel:+916362460082',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Karnataka, India',
    action: null,
  },
]

const initialForm = {
  name: '',
  email: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  const handleContactAction = (action) => {
    if (action) {
      window.location.href = action
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(
      `Portfolio message from ${form.name}`,
    )

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    )

    window.location.href =
      `mailto:nandagavidarshan562@gmail.com?subject=${subject}&body=${body}`

    setSubmitted(true)
    setForm(initialForm)

    window.setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <AnimatedDots />

      <div
        className="contact-background-glow parallax-slow"
        aria-hidden="true"
      />

      <div className="contact-container">
        <header className="section-head contact-header">
          <p className="section-label">Contact</p>

          <h2 id="contact-title" className="section-title-text">
            Let&apos;s Work Together
          </h2>

          <p className="contact-introduction">
            Have an opportunity, project idea, or technical challenge in mind?
            Send me a message and I&apos;ll be happy to discuss it.
          </p>
        </header>

        <div className="contact-grid">
          <aside
            className="contact-information"
            aria-label="Contact information"
          >
            {contactDetails.map((item) => {
              const Icon = item.icon
              const isInteractive = Boolean(item.action)

              return (
                <article
                  key={item.label}
                  className="reveal-left contact-information-card"
                >
                  <div
                    className="contact-information-icon"
                    aria-hidden="true"
                  >
                    <Icon size={17} />
                  </div>

                  <div className="contact-information-content">
                    <p className="contact-information-label">
                      {item.label}
                    </p>

                    {isInteractive ? (
                      <button
                        type="button"
                        className="contact-information-value contact-information-button"
                        onClick={() =>
                          handleContactAction(item.action)
                        }
                      >
                        {item.value}
                      </button>
                    ) : (
                      <p className="contact-information-value">
                        {item.value}
                      </p>
                    )}
                  </div>
                </article>
              )
            })}
          </aside>

          <form
            className="reveal contact-form"
            onSubmit={handleSubmit}
          >
            <div className="contact-form-group">
              <label htmlFor="contact-name">Your name</label>

              <input
                id="contact-name"
                name="name"
                type="text"
                className="contact-form-input"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-email">Email address</label>

              <input
                id="contact-email"
                name="email"
                type="email"
                className="contact-form-input"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-message">Message</label>

              <textarea
                id="contact-message"
                name="message"
                className="contact-form-input contact-form-textarea"
                placeholder="Tell me about your project or opportunity"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit-button">
              {submitted ? (
                <span>Opening email application...</span>
              ) : (
                <>
                  <FiSend size={15} aria-hidden="true" />
                  <span>Send message</span>
                </>
              )}
            </button>
          </form>
        </div>

        <footer className="contact-footer">
          <p>
            &copy; {new Date().getFullYear()} Darshan Ningappa
            Nandagavi. Built with care.
          </p>
        </footer>
      </div>
    </section>
  )
}