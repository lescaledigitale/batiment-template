import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: 'var(--color-bg-dark)' }} aria-label="Pied de page">

      <div className="section-padding" style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: 'clamp(1.5rem, 4vw, 3rem)' }}>

          {/* Brand */}
          <div>
            <a href="#accueil" aria-label="[Nom de votre Entreprise] — Accueil">
              <Image src="/logo.svg" alt="Logo [Nom de votre Entreprise]" width={160} height={42} style={{ height: '42px', width: 'auto' }} />
            </a>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBlock: '1.25rem', maxWidth: '300px' }}>
              [Nom de votre Entreprise], votre expert en rénovation tous corps d&apos;état depuis plus de 25 ans. Qualité, transparence et savoir-faire artisanal au service de votre projet.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={`Notre page ${s.label}`} rel="noopener noreferrer"
                  className="social-icon"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '40px', height: '40px',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'rgba(255,255,255,0.6)',
                    transition: 'all 150ms ease',
                  }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: 18, height: 18 }}>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Compétences */}
          <nav aria-label="Nos compétences">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-white)', marginBottom: '1.25rem' }}>
              Nos Compétences
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {['Rénovation Maison', 'Rénovation Appartement', 'Électricité & Plomberie', 'Peinture & Sols', 'Cloisonnement'].map((l) => (
                <li key={l}><a href="#competences" className="footer-link">{l}</a></li>
              ))}
            </ul>
          </nav>

          {/* Expertises */}
          <nav aria-label="Nos expertises">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-white)', marginBottom: '1.25rem' }}>
              Nos Expertises
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {['Salle de Bain', 'Cuisine', 'Agrandissement', 'Façade & Toiture', 'Locaux Professionnels'].map((l) => (
                <li key={l}><a href="#services" className="footer-link">{l}</a></li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-white)', marginBottom: '1.25rem' }}>
              Contact
            </h3>
            <address style={{ fontStyle: 'normal', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
                <strong style={{ color: 'rgba(255,255,255,0.8)' }}>[Nom de votre Entreprise]</strong><br />
                [Votre Adresse]<br />[75000 Votre Ville]
              </p>
              <a href="tel:+33400000000" className="footer-link">📞 [04 XX XX XX XX]</a>
              <a href="mailto:contact@votre-domaine.fr" className="footer-link">✉️ contact@votre-domaine.fr</a>
              <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>Lun – Ven : 8h00 – 18h00</span>
            </address>
            <a href="#devis" className="btn btn-primary btn-sm">Devis gratuit</a>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingBlock: '1.5rem' }}>
        <div className="container footer-bottom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)' }}>
            © {year} <strong>[Nom de votre Entreprise]</strong> — Tous droits réservés.
          </p>
          <nav aria-label="Liens légaux" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['Mentions légales', 'Politique de confidentialité', 'Plan du site'].map((l) => (
              <a key={l} href="#" className="footer-link" style={{ fontSize: '0.75rem' }}>{l}</a>
            ))}
          </nav>
        </div>
        <div className="container" style={{ paddingTop: '0.75rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)' }}>
            Bâti avec 🧱 par <a href="https://lescaledigitale.fr" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 150ms' }} className="footer-link">L&apos;Escale Digitale</a>
          </p>
        </div>
      </div>

      <style>{`
        .social-icon:hover { background-color: var(--color-primary) !important; color: var(--color-white) !important; }
        .footer-link { font-size: 0.875rem; color: rgba(255,255,255,0.55); text-decoration: none; transition: color 150ms ease; }
        .footer-link:hover { color: var(--color-accent); }
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 768px)  { .footer-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 480px)  { .footer-bottom { flex-direction: column; text-align: center; } }
      `}</style>
    </footer>
  )
}
