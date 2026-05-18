export default function CtaBanner() {
  return (
    <section style={{ position: 'relative', paddingBlock: 'clamp(4rem, 10vw, 8rem)', textAlign: 'center', overflow: 'hidden' }} aria-labelledby="cta-banner-title">
      <div style={{ position: 'absolute', inset: 0 }} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80" alt="" loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(28,43,74,0.88) 0%, rgba(17,24,39,0.75) 100%)' }} />
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 id="cta-banner-title" style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.5rem, 4vw, 3rem)',
          fontWeight: 900, color: 'var(--color-white)', marginBottom: '1rem',
        }}>
          Vous avez un projet de travaux ?
        </h2>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'rgba(255,255,255,0.8)', maxWidth: '560px', margin: '0 auto 2.5rem' }}>
          Contactez-nous dès aujourd&apos;hui pour obtenir votre devis gratuit et sans engagement.
        </p>
        <a href="#devis" className="btn btn-primary btn-lg">Obtenir mon devis gratuit</a>
      </div>
    </section>
  )
}
