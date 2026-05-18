const items = [
  { title: 'Électricité',        text: 'Mise aux normes NF C 15-100, tableau électrique, câblage, domotique', icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
  { title: 'Peinture',           text: 'Peinture intérieure et extérieure, enduits, décoration, papier peint', icon: 'M12 2a10 10 0 100 20A10 10 0 0012 2z M12 6v6l4 2' },
  { title: 'Plomberie',          text: 'Installation sanitaire, chauffage, remplacement canalisations, VMC', icon: 'M12 2a5 5 0 015 5c0 3-5 11-5 11S7 10 7 7a5 5 0 015-5z' },
  { title: 'Cloisonnement',      text: 'Création et suppression de cloisons, plaques de plâtre, isolation phonique', icon: 'M3 3h18v18H3zM3 9h18M9 21V9' },
  { title: 'Faux-plafonds',      text: 'Plafonds suspendus, dalles acoustiques, éclairage encastré, isolation thermique', icon: 'M2 12h20M2 6h20M2 18h20' },
  { title: 'Sols & Carrelage',   text: 'Parquet, carrelage, béton ciré, pose de chape, rénovation de sol existant', icon: 'M3 17h18v4H3zM6 17V7l6-4 6 4v10' },
  { title: 'Extensions',         text: 'Agrandissement de maison, véranda, surélévation, pergola, garage', icon: 'M3 21l18-18M3 3h7v7H3zM14 14h7v7h-7z' },
  { title: 'Rénovation Extérieure', text: 'Ravalement de façade, isolation thermique par l\'extérieur (ITE), toiture, terrasse', icon: 'M2 12h20M2 6h20M2 18h20' },
]

export default function Competences() {
  return (
    <section className="section-padding" id="competences" aria-labelledby="competences-title">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <span className="section-label">Notre savoir-faire</span>
          <h2 className="section-title" id="competences-title">Nos Compétences en Rénovation</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '640px', margin: '0 auto' }}>
            Une équipe pluridisciplinaire pour répondre à tous vos besoins de travaux
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }} className="competences-grid">
          {items.map((item) => (
            <div
              key={item.title}
              className="competence-item"
              style={{
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1.75rem 1.5rem',
                textAlign: 'center',
                transition: 'all 250ms ease',
              }}
            >
              <div className="comp-icon" style={{
                width: '64px', height: '64px',
                backgroundColor: 'var(--color-bg-light)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.25rem',
                color: 'var(--color-primary)',
                transition: 'all 250ms ease',
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" style={{ width: 28, height: 28 }}>
                  <path d={item.icon} />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .competence-item:hover {
          border-color: var(--color-primary) !important;
          box-shadow: var(--shadow-md);
          transform: translateY(-4px);
        }
        .competence-item:hover .comp-icon {
          background-color: var(--color-primary) !important;
          color: var(--color-white) !important;
        }
        @media (max-width: 1024px) { .competences-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px)  { .competences-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  )
}
