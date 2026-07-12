import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function AnimatedLines() {
  const svgRef = useRef(null)

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll('.anim-line')
    if (!paths) return
    paths.forEach((path) => {
      const length = path.getTotalLength()
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
      ScrollTrigger.create({
        trigger: path.closest('.section-wrap') || path.closest('section'),
        start: 'top 85%',
        onEnter: () => {
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1.2,
            ease: 'power2.out',
            overwrite: 'auto',
          })
        },
        once: true,
      })
    })
  }, [])

  return (
    <svg ref={svgRef} className="svg-decor svg-lines" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="anim-line" d="M20 180 Q60 160 100 170 T180 140" stroke="#10a37f" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path className="anim-line" d="M30 150 Q80 130 120 145 T190 110" stroke="#10a37f" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <path className="anim-line" d="M10 120 Q50 100 90 115 T170 80" stroke="#333" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}

export function AnimatedDots() {
  const svgRef = useRef(null)

  useEffect(() => {
    const dots = svgRef.current?.querySelectorAll('.anim-dot')
    if (!dots) return
    dots.forEach((dot, i) => {
      ScrollTrigger.create({
        trigger: dot.closest('.section-wrap') || dot.closest('section'),
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(dot,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, delay: i * 0.06, ease: 'back.out(2)', overwrite: 'auto' }
          )
        },
        once: true,
      })
    })
  }, [])

  return (
    <svg ref={svgRef} className="svg-decor svg-dots" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[
        [30, 30], [50, 40], [160, 30], [180, 50],
        [20, 80], [40, 90], [170, 100], [190, 120],
        [25, 150], [55, 170], [150, 160], [175, 180],
      ].map(([cx, cy], i) => (
        <circle key={i} className="anim-dot" cx={cx} cy={cy} r={2.5} fill={i % 3 === 0 ? '#10a37f' : '#333'} opacity="0.4" />
      ))}
    </svg>
  )
}

export function AnimatedCircle() {
  const svgRef = useRef(null)

  useEffect(() => {
    const circle = svgRef.current?.querySelector('.anim-circle')
    if (!circle) return
    const length = circle.getTotalLength()
    gsap.set(circle, { strokeDasharray: length, strokeDashoffset: length })
    const t = ScrollTrigger.create({
      trigger: circle.closest('.section-wrap') || circle.closest('section'),
      start: 'top 80%',
      onEnter: () => {
        gsap.to(circle, { strokeDashoffset: 0, duration: 1.5, ease: 'power2.inOut', overwrite: 'auto' })
      },
      once: true,
    })
    return () => t.kill()
  }, [])

  return (
    <svg ref={svgRef} className="svg-decor svg-circle" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle className="anim-circle" cx="60" cy="60" r="50" stroke="#10a37f" strokeWidth="1" opacity="0.25" />
    </svg>
  )
}

export function AnimatedGrid() {
  const svgRef = useRef(null)

  useEffect(() => {
    const items = svgRef.current?.querySelectorAll('.anim-grid')
    if (!items) return
    const t = ScrollTrigger.create({
      trigger: svgRef.current.closest('.section-wrap') || svgRef.current.closest('section'),
      start: 'top 80%',
      onEnter: () => {
        gsap.to(items, { opacity: 1, duration: 0.8, stagger: 0.02, ease: 'power2.out', overwrite: 'auto' })
      },
      once: true,
    })
    return () => t.kill()
  }, [])

  return (
    <svg ref={svgRef} className="svg-decor svg-grid" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[20, 40, 60, 80, 100].flatMap((x) =>
        [20, 40, 60, 80, 100].map((y) => (
          <rect key={`${x}-${y}`} className="anim-grid" x={x - 2} y={y - 2} width={4} height={4} rx={2} fill="#333" opacity="0" />
        ))
      )}
    </svg>
  )
}
