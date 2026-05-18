const photos = [
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', alt: 'Rénovation complète villa contemporaine', tag: 'Maison', title: 'Rénovation villa contemporaine', large: true },
  { src: 'https://images.unsplash.com/photo-1556909190-eccf4a8bf979?w=600&q=80', alt: 'Rénovation cuisine moderne', tag: 'Cuisine', title: 'Cuisine ouverte moderne', large: false },
  { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80', alt: 'Rénovation salle de bain luxe', tag: 'Salle de bain', title: 'Salle de bain haut de gamme', large: false },
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', alt: 'Extension maison terrasse', tag: 'Extension', title: 'Agrandissement avec terrasse', large: false },
  { src: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80', alt: 'Rénovation bureaux professionnels', tag: 'Professionnel', title: 'Réaménagement bureaux', large: false },
]

export default function Gallery() {
  return (
    <section className="section-padding" id="realisations" aria-labelledby="gallery-title"
      style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <span className="section-label">Notre portfolio</span>
          <h2 className="section-title" id="gallery-title">Nos Réalisations</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '640px', margin: '0 auto' }}>
            Découvrez quelques-uns de nos projets récents réalisés avec passion
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'auto auto',
          gap: '1rem',
        }} className="gallery-grid">
          {photos.map((p, i) => (
            <figure
              key={p.title}
              className="gallery-item"
              style={{
                position: 'relative', overflow: 'hidden',
                borderRadius: 'var(--radius-md)',
                margin: 0, cursor: 'pointer',
                gridColumn: p.large ? '1 / 2' : undefined,
                gridRow: p.large ? '1 / 3' : undefined,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src} alt={p.alt} loading={i === 0 ? 'eager' : 'lazy'}
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  aspectRatio: p.large ? '3/4' : '4/3',
                  transition: 'transform 400ms ease',
                  display: 'block',
                }}
                className="gallery-img"
              />
              <figcaption className="gallery-caption" style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(17,24,39,0.85) 0%, transparent 100%)',
                padding: '1.5rem 1rem 1rem',
                display: 'flex', flexDirection: 'column', gap: '0.25rem',
                opacity: 0, transform: 'translateY(8px)',
                transition: 'all 250ms ease',
              }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>{p.tag}</span>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-white)' }}>{p.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#contact" className="btn btn-primary">Voir toutes nos réalisations</a>
        </div>
      </div>

      <style>{`
        .gallery-item:hover .gallery-img { transform: scale(1.06); }
        .gallery-item:hover .gallery-caption { opacity: 1 !important; transform: translateY(0) !important; }
        @media (max-width: 900px) {
          .gallery-grid { grid-template-columns: 1fr 1fr !important; }
          .gallery-grid figure:first-child { grid-column: 1 / 3 !important; grid-row: auto !important; }
          .gallery-grid figure:first-child img { aspect-ratio: 16/9 !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
          .gallery-grid figure:first-child { grid-column: 1 !important; }
        }
      `}</style>
    </section>
  )
}
