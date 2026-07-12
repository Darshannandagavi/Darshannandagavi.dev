import { useState } from 'react'
import { FiArrowLeft, FiExternalLink, FiGithub, FiMaximize2, FiX } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import './ProjectDetail.css'

export default function ProjectDetail({ project }) {
  const navigate = useNavigate()
  const [preview, setPreview] = useState(null)
  const open = (url) => window.open(url, '_blank', 'noopener,noreferrer')

  return <main className="detail-page">
    <div className="detail-orb detail-orb-one"/><div className="detail-orb detail-orb-two"/>
    <nav className="detail-nav" aria-label="Project navigation">
      <button type="button" onClick={() => navigate('/')}><FiArrowLeft/> All projects</button>
      <span>Darshan Nandagavi · Portfolio</span>
    </nav>

    <header className="detail-hero">
      <p className="detail-kicker">{project.category}</p>
      <h1>{project.title}</h1>
      <p className="detail-subtitle">{project.subtitle}</p>
      <div className="detail-meta"><span>{project.year}</span><span>{project.role}</span></div>
      <p className="detail-lead">{project.overview}</p>
      {(project.liveUrl || project.githubUrl) && <nav className="detail-actions" aria-label="External project links">
        {project.liveUrl && <button type="button" onClick={() => open(project.liveUrl)}><FiExternalLink/> Live project</button>}
        {project.githubUrl && <button type="button" onClick={() => open(project.githubUrl)}><FiGithub/> Source code</button>}
      </nav>}
    </header>

    <section className="detail-section"><div className="detail-heading"><span>01</span><h2>Project gallery</h2></div>
      <div className="gallery-grid">{project.images.map((image, index) => <button type="button" className="image-placeholder" key={image} onClick={() => setPreview({image,index})}>
        <span className="placeholder-index">{String(index + 1).padStart(2,'0')}</span><FiMaximize2/><strong>{image}</strong><small>Screenshot placeholder · Click to expand</small>
      </button>)}</div>
    </section>

    <section className="detail-section split-section"><div className="detail-heading"><span>02</span><h2>Core features</h2></div>
      <ul className="feature-list">{project.features.map(item => <li key={item}>{item}</li>)}</ul>
    </section>

    <section className="detail-section"><div className="detail-heading"><span>03</span><h2>System architecture</h2></div>
      <div className="architecture-grid">{project.architecture.map(item => <article key={item.title}><p>{item.title}</p><span>{item.text}</span></article>)}</div>
    </section>

    {project.challenges?.length > 0 && <section className="detail-section"><div className="detail-heading"><span>04</span><h2>Challenges & solutions</h2></div>
      <div className="challenge-grid">{project.challenges.map(item => <article key={item.challenge}><h3>{item.challenge}</h3><p>{item.solution}</p></article>)}</div>
    </section>}

    <section className="detail-section"><div className="detail-heading"><span>05</span><h2>Technology stack</h2></div>
      <ul className="stack-list">{project.stack.map(item => <li key={item}>{item}</li>)}</ul>
    </section>

    <section className="detail-section outcome"><div className="detail-heading"><span>06</span><h2>Results & learning</h2></div>
      <ul>{project.outcomes.map(item => <li key={item}>{item}</li>)}</ul>
    </section>

    {preview && <div className="preview-modal" role="dialog" aria-modal="true" aria-label={preview.image} onClick={() => setPreview(null)}>
      <button type="button" aria-label="Close preview" onClick={() => setPreview(null)}><FiX/></button>
      <div onClick={event => event.stopPropagation()}><span>Screenshot {preview.index + 1}</span><h2>{preview.image}</h2><p>Replace this placeholder with the corresponding project screenshot.</p></div>
    </div>}
  </main>
}
