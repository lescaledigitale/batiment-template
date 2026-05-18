export default function About() {
  return (
    <section className="section-padding" id="about" aria-labelledby="about-title">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 6vw, 5rem)', alignItems: 'center' }}>

        {/* Texte */}
        <div>
          <span className="section-label">À propos</span>
          <h2 className="section-title" id="about-title">
            Votre expert en rénovation<br /><strong>tous corps d&apos;état</strong>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem', lineHeight: 1.8 }}>
            Depuis plus de 25 ans, <strong>[Nom de votre Entreprise]</strong> intervient auprès des particuliers
            et des professionnels pour tous leurs travaux de rénovation, d&apos;agrandissement et de construction.
            Notre équipe de <strong>maçons, électriciens, plombiers et peintres qualifiés</strong> s&apos;engage
            à vous livrer des chantiers impeccables, dans les délais convenus et dans le respect de votre budget.
          </p>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.75rem', lineHeight: 1.8 }}>
            Basés dans votre région, nous intervenons dans un rayon de 80 km pour vous apporter une expertise
            locale et réactive. Chaque projet est unique : nous vous proposons une solution personnalisée après
            une analyse approfondie de vos besoins.
          </p>

          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', listStyle: 'none', padding: 0 }}>
            {[
              'Artisans qualifiés RGE et assurés décennaux',
              'Devis détaillé gratuit sous 48h',
              'Suivi de chantier de A à Z',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: 'var(--color-secondary)' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '24px', height: '24px',
                  backgroundColor: 'var(--color-primary)', color: 'var(--color-white)',
                  borderRadius: '50%', fontSize: '0.7rem', fontWeight: 900, flexShrink: 0,
                }}>✓</span>
                {item}
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn-primary">Contactez-nous</a>
        </div>

        {/* Image */}
        <div style={{ position: 'relative' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
            alt="Artisan en train de rénover un intérieur"
            loading="lazy"
            style={{
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-lg)',
              width: '100%',
              aspectRatio: '4/3',
              objectFit: 'cover',
            }}
          />
          <div style={{
            position: 'absolute', bottom: '-1.5rem', left: '-1.5rem',
            backgroundColor: 'var(--color-primary)', color: 'var(--color-white)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem 1.75rem',
            textAlign: 'center',
            boxShadow: 'var(--shadow-lg)',
          }}>
            <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 900, lineHeight: 1 }}>25+</span>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, opacity: 0.9 }}>Ans d&apos;expérience</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
