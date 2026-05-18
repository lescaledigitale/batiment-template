const expertises = [
  {
    title: 'Rénovation Maison',
    text: "Rénovation complète ou partielle de maisons individuelles : gros œuvre, second œuvre, finitions. Nous gérons l'intégralité de votre projet.",
    img: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=600&q=80',
    alt: "Rénovation d'une maison individuelle",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" style={{ width: 24, height: 24 }}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: 'Rénovation Appartement',
    text: 'Transformation totale de votre appartement : refonte des cloisons, rénovation de la cuisine et salle de bain, mise aux normes électriques.',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    alt: "Rénovation d'un appartement moderne",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" style={{ width: 24, height: 24 }}>
        <rect x={2} y={3} width={20} height={14} rx={2} />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: 'Locaux Professionnels',
    text: 'Aménagement et rénovation de bureaux, commerces et entrepôts. Respect des normes ERP, accessibilité PMR et réglementation incendie.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    alt: 'Rénovation de bureaux et locaux professionnels',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" style={{ width: 24, height: 24 }}>
        <rect x={2} y={7} width={20} height={14} rx={2} />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
]

export default function Expertises() {
  return (
    <section className="section-padding" id="services" aria-labelledby="expertises-title"
      style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <span className="section-label">Ce que nous faisons</span>
          <h2 className="section-title" id="expertises-title">
            Nos Expertises — Découvrez<br />notre savoir-faire en rénovation
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.75rem' }} className="expertises-grid">
          {expertises.map((item) => (
            <article
              key={item.title}
              aria-label={item.title}
              style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
                transition: 'transform 250ms ease, box-shadow 250ms ease',
              }}
              className="expertise-card"
            >
              <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img} alt={item.alt} loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 400ms ease' }}
                  className="expertise-img"
                />
              </div>
              <div style={{ padding: '1.75rem' }}>
                <div style={{
                  width: '48px', height: '48px',
                  backgroundColor: 'rgba(232,115,10,0.1)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1rem', color: 'var(--color-primary)',
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {item.text}
                </p>
                <a href="#contact" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'none' }}>
                  En savoir plus →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .expertise-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg) !important; }
        .expertise-card:hover .expertise-img { transform: scale(1.05); }
        @media (max-width: 900px) { .expertises-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .expertises-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
