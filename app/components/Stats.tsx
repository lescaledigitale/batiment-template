'use client'

import { useEffect, useRef } from 'react'

const counters = [
  { target: 25,  suffix: '+',  label: "Années d'expérience" },
  { target: 850, suffix: '+',  label: 'Chantiers réalisés' },
  { target: 32,  suffix: '',   label: 'Collaborateurs' },
  { target: 98,  suffix: '%',  label: 'Clients satisfaits' },
]

const trustPoints = [
  'Travaux de qualité en respectant les normes de sécurité en vigueur',
  'Solutions personnalisées selon vos besoins et votre budget',
  'Respect strict des délais de réalisation et transparence totale',
  'Relation de confiance durable avec nos clients et partenaires',
  'Suivi du chantier de A à Z pour une livraison clé en main',
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const observed = useRef(false)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !observed.current) {
          observed.current = true
          const duration = 1800
          const start = performance.now()
          const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1)
            el.textContent = Math.round(easeOut(p) * target).toLocaleString('fr-FR') + suffix
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.4 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, suffix])

  return (
    <span ref={ref} aria-label={`${target}${suffix}`} style={{
      display: 'block',
      fontFamily: 'var(--font-heading)',
      fontSize: 'clamp(2.25rem, 5vw, 3rem)',
      fontWeight: 900,
      color: 'var(--color-accent)',
      lineHeight: 1,
      marginBottom: '0.5rem',
    }}>
      0{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="section-padding" id="stats" aria-labelledby="stats-title"
      style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      <div className="container stats-outer" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 6vw, 6rem)', alignItems: 'center' }}>

        {/* Left — Trust */}
        <div>
          <span className="section-label" style={{ color: 'var(--color-accent)' }}>Votre partenaire de confiance</span>
          <h2 className="section-title" id="stats-title" style={{ color: 'var(--color-white)' }}>
            Pourquoi choisir<br /><strong>[Nom de votre Entreprise]</strong> ?
          </h2>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', listStyle: 'none', padding: 0 }}>
            {trustPoints.map((pt) => (
              <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '24px', height: '24px', flexShrink: 0, marginTop: '0.125rem',
                  backgroundColor: 'var(--color-primary)', color: 'var(--color-white)',
                  borderRadius: '50%', fontSize: '0.7rem', fontWeight: 900,
                }}>✓</span>
                {pt}
              </li>
            ))}
          </ul>
          <a href="#devis" className="btn btn-primary">Demander un devis</a>
        </div>

        {/* Right — Counters */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {counters.map((c) => (
            <div key={c.label} style={{
              backgroundColor: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem 1.5rem',
              textAlign: 'center',
            }}>
              <AnimatedCounter target={c.target} suffix={c.suffix} />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .stats-outer { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
