export default function Hero() {
  return (
    <section
      id="accueil"
      aria-label="Présentation principale"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'var(--header-height)',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt=""
          aria-hidden="true"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          fetchPriority="high"
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(17,24,39,0.82) 0%, rgba(28,43,74,0.65) 50%, rgba(17,24,39,0.42) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 1, paddingBlock: '4rem', maxWidth: '800px' }}>
        <span style={{
          display: 'inline-block',
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-white)',
          fontFamily: 'var(--font-heading)',
          fontSize: '0.75rem', fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '0.375rem 1rem',
          borderRadius: 'var(--radius-sm)',
          marginBottom: '1.5rem',
        }}>
          Artisans qualifiés — Devis gratuit
        </span>

        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.875rem, 6vw, 3.75rem)',
          fontWeight: 900,
          color: 'var(--color-white)',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: '1.5rem',
        }}>
          ENTREPRISE DE RÉNOVATION<br />
          <span style={{ color: 'var(--color-accent)' }}>TOUS CORPS D&apos;ÉTAT</span>
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'rgba(255,255,255,0.88)',
          maxWidth: '580px',
          marginBottom: '2.5rem',
          lineHeight: 1.7,
        }}>
          Nous vous accompagnons depuis plus de 20 ans dans vos projets de rénovation
          intérieure et extérieure — de la maison individuelle aux locaux professionnels.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <a href="#devis" className="btn btn-primary btn-lg">Demander un devis gratuit</a>
          <a href="#services" className="btn btn-outline-white btn-lg">Nos expertises</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Défiler vers le bas"
        style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '40px', height: '40px',
          border: '2px solid rgba(255,255,255,0.5)',
          borderRadius: '50%',
          color: 'rgba(255,255,255,0.8)',
          fontSize: '1rem',
          animation: 'bounce 2s infinite',
          textDecoration: 'none',
        }}
      >↓</a>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(6px); }
        }
        @media (max-width: 480px) {
          #accueil .hero-actions { flex-direction: column; }
          #accueil .hero-actions a { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  )
}
