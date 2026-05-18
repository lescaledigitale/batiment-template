'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

const reviews = [
  { stars: 5, text: '"Une équipe professionnelle et sérieuse. Les travaux ont été réalisés dans les délais et le résultat dépasse nos attentes. Je recommande vivement [Nom de votre Entreprise] pour toute rénovation."', name: 'Marie L.', role: 'Propriétaire, rénovation complète maison', initials: 'ML' },
  { stars: 5, text: '"Très satisfait du travail effectué dans notre appartement. Devis clair, artisans ponctuels et courtois, nettoyage impeccable à la fin du chantier. Prix juste pour une qualité au rendez-vous."', name: 'Pierre D.', role: 'Investisseur, rénovation appartement locatif', initials: 'PD' },
  { stars: 5, text: '"Rénovation de notre local commercial réalisée en un temps record sans perturber notre activité. Le chef de chantier a su s\'adapter à nos contraintes. Bravo à toute l\'équipe !"', name: 'Sophie B.', role: 'Gérante, rénovation local commercial', initials: 'SB' },
  { stars: 4, text: '"Très bonne expérience globale. Équipe réactive, travail soigné notamment pour la salle de bain. Je referai appel à eux sans hésiter pour nos futurs projets de rénovation."', name: 'Jean-Marc T.', role: 'Particulier, rénovation salle de bain', initials: 'JM' },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [perView, setPerView] = useState(3)

  const maxIndex = Math.max(0, reviews.length - perView)

  const goTo = useCallback((i: number) => {
    setCurrent(Math.max(0, Math.min(i, maxIndex)))
  }, [maxIndex])

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1))
    }, 5000)
  }, [maxIndex])

  useEffect(() => {
    const update = () => setPerView(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => { resetTimer(); return () => { if (timerRef.current) clearInterval(timerRef.current) } }, [resetTimer])

  useEffect(() => {
    if (!trackRef.current) return
    const card = trackRef.current.querySelector('.testimonial-card') as HTMLElement
    if (!card) return
    const gap = 24
    trackRef.current.style.transform = `translateX(-${current * (card.offsetWidth + gap)}px)`
  }, [current, perView])

  const handleNav = (dir: number) => { goTo(current + dir); resetTimer() }

  return (
    <section className="section-padding" id="temoignages" aria-labelledby="temoignages-title">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <span className="section-label">Ils nous font confiance</span>
          <h2 className="section-title" id="temoignages-title">Ce que nos clients disent de nous</h2>
        </div>

        <div style={{ overflow: 'hidden', marginBottom: '2rem' }}>
          <div ref={trackRef} style={{ display: 'flex', gap: '1.5rem', transition: 'transform 400ms ease' }}>
            {reviews.map((r) => (
              <blockquote
                key={r.name}
                className="testimonial-card"
                style={{
                  flex: `0 0 calc(${100 / perView}% - ${(24 * (perView - 1)) / perView}px)`,
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-card)',
                  margin: 0,
                }}
              >
                <div style={{ fontSize: '1.25rem', color: 'var(--color-accent)', marginBottom: '1rem', letterSpacing: '0.1em' }}>
                  {'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}
                </div>
                <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  {r.text}
                </p>
                <footer style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '48px', height: '48px',
                    backgroundColor: 'var(--color-secondary)', color: 'var(--color-white)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 700, flexShrink: 0,
                  }}>{r.initials}</div>
                  <div>
                    <cite style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-secondary)', fontStyle: 'normal' }}>{r.name}</cite>
                    <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.125rem' }}>{r.role}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
          <button onClick={() => handleNav(-1)} aria-label="Témoignage précédent" className="slider-btn-style">‹</button>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button key={i} onClick={() => { goTo(i); resetTimer() }} aria-label={`Témoignage ${i + 1}`}
                style={{
                  width: '8px', height: '8px', borderRadius: '50%', border: 'none', padding: 0, cursor: 'pointer',
                  backgroundColor: i === current ? 'var(--color-primary)' : 'var(--color-border)',
                  transform: i === current ? 'scale(1.3)' : 'scale(1)',
                  transition: 'all 150ms ease',
                }}
              />
            ))}
          </div>
          <button onClick={() => handleNav(1)} aria-label="Témoignage suivant" className="slider-btn-style">›</button>
        </div>
      </div>

      <style>{`
        .slider-btn-style {
          width: 44px; height: 44px; border-radius: 50%;
          background-color: var(--color-bg-light);
          border: 2px solid var(--color-border);
          color: var(--color-secondary);
          font-size: 1.5rem; line-height: 1;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 150ms ease;
        }
        .slider-btn-style:hover {
          background-color: var(--color-primary);
          border-color: var(--color-primary);
          color: var(--color-white);
        }
      `}</style>
    </section>
  )
}
