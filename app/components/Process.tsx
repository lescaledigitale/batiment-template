import { Fragment } from 'react'

const steps = [
  {
    num: '01', title: 'Analyse & Devis',
    text: 'Prise de contact, visite du chantier et établissement d\'un devis détaillé et gratuit sous 48h.',
    icon: 'M9 11l3 3L22 4 M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11',
  },
  {
    num: '02', title: 'Démolition & Préparation',
    text: 'Démolition maîtrisée, évacuation des gravats et protection de vos espaces de vie.',
    icon: 'M14.5 10l-5 5M9.5 10l5 5 M12 21a9 9 0 100-18 9 9 0 000 18z',
  },
  {
    num: '03', title: 'Réalisation des Travaux',
    text: 'Exécution des travaux par nos artisans qualifiés, dans le respect des délais et des normes.',
    icon: 'M2 3h20v14a2 2 0 01-2 2H4a2 2 0 01-2-2V3z M8 21h8M12 17v4',
  },
  {
    num: '04', title: 'Nettoyage & Livraison',
    text: 'Nettoyage complet du chantier, réception des travaux et remise des clés. Votre satisfaction est notre priorité.',
    icon: 'M5 12l5 5L20 7',
  },
]

export default function Process() {
  return (
    <section className="section-padding" id="process" aria-labelledby="process-title">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <span className="section-label">Comment ça se passe ?</span>
          <h2 className="section-title" id="process-title">Votre rénovation, étape par étape</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '640px', margin: '0 auto' }}>
            Un processus clair et transparent pour que votre projet se déroule sereinement
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }} className="process-row">
          {steps.map((step, i) => (
            <Fragment key={step.num}>
              <div
                style={{ flex: 1, textAlign: 'center', padding: '2rem 1.25rem', minWidth: '180px' }}
                className="process-step"
              >
                <div style={{
                  fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 800,
                  letterSpacing: '0.1em', color: 'var(--color-primary)',
                  textTransform: 'uppercase', marginBottom: '1rem',
                }}>{step.num}</div>
                <div className="process-icon" style={{
                  width: '72px', height: '72px',
                  backgroundColor: 'var(--color-bg-light)',
                  border: '2px solid var(--color-border)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                  color: 'var(--color-primary)',
                  transition: 'all 250ms ease',
                }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" style={{ width: 30, height: 30 }}>
                    <path d={step.icon} />
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                  {step.text}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="process-connector" style={{
                  width: '48px', height: '2px', flexShrink: 0, marginTop: '5.5rem',
                  background: 'linear-gradient(to right, var(--color-primary), var(--color-accent))',
                  borderRadius: '2px',
                }} />
              )}
            </Fragment>
          ))}
        </div>
      </div>

      <style>{`
        .process-step:hover .process-icon {
          background-color: var(--color-primary) !important;
          border-color: var(--color-primary) !important;
          color: var(--color-white) !important;
        }
        @media (max-width: 900px) {
          .process-row { flex-direction: column; align-items: center; }
          .process-connector { display: none; }
          .process-step { width: 100%; max-width: 400px; }
        }
      `}</style>
    </section>
  )
}
