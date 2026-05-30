'use client'

import { useEffect, useRef } from 'react'

/* ================================================================
   DONNÉES — TOUT PERSONNALISER ICI, aucune modification du JSX requise
================================================================ */

/* À PERSONNALISER — Informations générales de l'entreprise */
const COMPANY = {
  name:       '[NOM_ENTREPRISE]',       // Ex: "Rénov Pro 75"
  founded:    '[ANNÉE_FONDATION]',      // Ex: "1998"
  city:       '[VILLE]',               // Ex: "Paris"
  specialties:'[SPÉCIALITÉS]',         // Ex: "maçonnerie, peinture, carrelage"
  tagline:    '[ACCROCHE_COURTE]',     // Ex: "Artisans du bâtiment depuis 25 ans"
}

/* À PERSONNALISER — Texte de présentation */
const ABOUT_TEXT = [
  `Depuis [ANNÉE_FONDATION], [NOM_ENTREPRISE] accompagne les particuliers et les professionnels
   dans tous leurs projets de rénovation à [VILLE] et dans un rayon de 80 km. Notre équipe de
   maçons, peintres, électriciens et plombiers qualifiés intervient sur tous les corps d'état,
   du gros œuvre aux finitions.`,
  `Chaque chantier est unique : nous établissons un devis gratuit et détaillé sous 48h, puis
   nous assurons un suivi rigoureux jusqu'à la livraison clé en main. [NOM_ENTREPRISE], c'est
   [SPÉCIALITÉS] — et surtout, c'est une relation de confiance avec nos clients.`,
]

/* À PERSONNALISER — Points de réassurance (sous-bloc A) */
const ABOUT_CHECKS = [
  'Artisans qualifiés RGE, assurance décennale incluse',
  'Devis gratuit et détaillé sous 48h',
  'Suivi de chantier de A à Z, livraison clé en main',
]

/* À PERSONNALISER — Compteurs animés */
const STATS = [
  { target: 25,  suffix: '+', label: "Ans d'expérience" },
  { target: 850, suffix: '+', label: 'Chantiers réalisés' },
  { target: 32,  suffix: '',  label: 'Collaborateurs' },
  { target: 98,  suffix: '%', label: 'Clients satisfaits' },
]

/* ================================================================
   EXPERTISES — Ajouter / supprimer des cartes facilement ici
   Format : { title, subtitle, text, img, alt }
================================================================ */
const EXPERTISES = [
  {
    title: 'Peinture',
    subtitle: 'Intérieure & extérieure',
    text: "Peinture intérieure et extérieure, enduits décoratifs, ravalement de façade, papier peint. Nos peintres qualifiés travaillent sur maisons, appartements et locaux professionnels avec des finitions soignées.",
    /* REMPLACER PAR PHOTOS RÉELLES — photo de chantier peinture */
    img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=700&q=80',
    alt: 'Artisan peintre en train de peindre un mur intérieur',
    icon: '🎨',
  },
  {
    title: 'Agrandissement',
    subtitle: 'Extension & surélévation',
    text: "Extension de maison, surélévation, véranda, aménagement de combles ou de garage. Nous gérons votre projet d'agrandissement de A à Z : plans, permis de construire, gros œuvre et finitions.",
    /* REMPLACER PAR PHOTOS RÉELLES — photo d'une extension maison */
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80',
    alt: 'Extension de maison avec terrasse et grande baie vitrée',
    icon: '🏗️',
  },
  /* AJOUTER D'AUTRES CARTES ICI — copier le bloc ci-dessus */
  // {
  //   title: 'Salle de bain',
  //   subtitle: 'Rénovation complète',
  //   text: "...",
  //   img: 'https://images.unsplash.com/...',
  //   alt: '...',
  //   icon: '🚿',
  // },
]

/* ================================================================
   GALERIE RÉALISATIONS — Remplacer par les vraies photos client
   Format : { src, alt, tag, title }
================================================================ */
const GALLERY = [
  /* REMPLACER PAR PHOTOS RÉELLES */ { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', alt: 'Rénovation complète villa contemporaine', tag: 'Maison', title: 'Rénovation villa' },
  /* REMPLACER PAR PHOTOS RÉELLES */ { src: 'https://images.unsplash.com/photo-1556909190-eccf4a8bf979?w=600&q=80', alt: 'Rénovation cuisine moderne ouverte', tag: 'Cuisine', title: 'Cuisine ouverte' },
  /* REMPLACER PAR PHOTOS RÉELLES */ { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80', alt: 'Salle de bain rénovée haut de gamme', tag: 'Salle de bain', title: 'Salle de bain luxe' },
  /* REMPLACER PAR PHOTOS RÉELLES */ { src: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=600&q=80', alt: 'Ravalement de façade maison individuelle', tag: 'Façade', title: 'Ravalement façade' },
  /* REMPLACER PAR PHOTOS RÉELLES */ { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', alt: 'Réaménagement bureau professionnel', tag: 'Pro', title: 'Bureaux rénovés' },
  /* REMPLACER PAR PHOTOS RÉELLES */ { src: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80', alt: 'Rénovation salon et séjour moderne', tag: 'Intérieur', title: 'Salon contemporain' },
]

/* À PERSONNALISER — Points "Pourquoi nous choisir" */
const TRUST_POINTS = [
  'Travaux de qualité dans le respect des normes de sécurité',
  'Solutions personnalisées selon votre budget',
  'Respect strict des délais de réalisation',
  'Transparence totale sur les coûts et matériaux',
  'Suivi du chantier de A à Z, livraison clé en main',
]

/* ================================================================
   COMPOSANT INTERNE — Compteur animé (ne pas modifier)
================================================================ */
function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const done = useRef(false)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !done.current) {
          done.current = true
          const duration = 1800
          const start = performance.now()
          const ease = (t: number) => 1 - Math.pow(1 - t, 3)
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1)
            el.textContent = Math.round(ease(p) * target).toLocaleString('fr-FR') + suffix
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          obs.unobserve(el)
        }
      })
    }, { threshold: 0.4 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, suffix])

  return (
    <span ref={ref} style={{
      display: 'block', fontFamily: 'var(--font-heading)',
      fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 900,
      color: 'var(--color-primary)', lineHeight: 1, marginBottom: '0.25rem',
    }}>
      0{suffix}
    </span>
  )
}

/* ================================================================
   COMPOSANT PRINCIPAL
================================================================ */
export default function Presentation() {
  return (
    <>
      {/* ===========================================================
          SOUS-BLOC A — Résumé de l'entreprise
          =========================================================== */}
      <section
        className="section-padding"
        id="about"
        aria-labelledby="about-title"
      >
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 6vw, 5rem)', alignItems: 'center' }} className="about-grid">

            {/* Texte */}
            <div>
              <span className="section-label">À propos</span>
              <h2 className="section-title" id="about-title">
                {/* À PERSONNALISER */}
                Votre expert en rénovation<br />
                <strong>tous corps d&apos;état</strong>
              </h2>

              {ABOUT_TEXT.map((p, i) => (
                <p key={i} style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem', lineHeight: 1.8 }}>
                  {/* À PERSONNALISER — remplacer les placeholders [NOM_ENTREPRISE], [VILLE], etc. */}
                  {p}
                </p>
              ))}

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', listStyle: 'none', padding: 0 }}>
                {ABOUT_CHECKS.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: 'var(--color-secondary)' }}>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      width: '24px', height: '24px', flexShrink: 0,
                      backgroundColor: 'var(--color-primary)', color: 'var(--color-white)',
                      borderRadius: '50%', fontSize: '0.7rem', fontWeight: 900,
                    }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn btn-primary">Contactez-nous</a>
            </div>

            {/* Image + badge expérience */}
            <div style={{ position: 'relative' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                /* REMPLACER PAR PHOTOS RÉELLES — photo équipe ou chantier */
                alt="Artisan en train de rénover un intérieur"
                loading="lazy"
                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', width: '100%', aspectRatio: '4/3', objectFit: 'cover' }}
              />
              {/* Badge années d'expérience — À PERSONNALISER */}
              <div style={{
                position: 'absolute', bottom: '-1.5rem', left: '-1.5rem',
                backgroundColor: 'var(--color-primary)', color: 'var(--color-white)',
                borderRadius: 'var(--radius-md)', padding: '1.25rem 1.75rem',
                textAlign: 'center', boxShadow: 'var(--shadow-lg)',
              }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 900, lineHeight: 1 }}>
                  {COMPANY.founded !== '[ANNÉE_FONDATION]'
                    ? `${new Date().getFullYear() - parseInt(COMPANY.founded)}+`
                    : '25+'}
                </span>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, opacity: 0.9 }}>Ans d&apos;expérience</span>
              </div>
            </div>
          </div>

          {/* Compteurs — rangée sous le grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginTop: 'clamp(3rem, 6vw, 5rem)', paddingTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--color-border)' }} className="stats-row">
            {STATS.map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <AnimatedCounter target={s.target} suffix={s.suffix} />
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================================================
          SOUS-BLOC B — Nos expertises
          Ajouter des cartes dans le tableau EXPERTISES en haut du fichier
          =========================================================== */}
      <section
        className="section-padding"
        id="services"
        aria-labelledby="expertises-title"
        style={{ backgroundColor: 'var(--color-bg-light)' }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="section-label">Ce que nous faisons</span>
            <h2 className="section-title" id="expertises-title">
              {/* À PERSONNALISER */}
              Nos Expertises
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              {/* À PERSONNALISER */}
              Découvrez nos principaux domaines d&apos;intervention — ajoutez facilement de nouvelles cartes dans le fichier.
            </p>
          </div>

          {/*
            LAYOUT GRID — 2 colonnes min sur desktop, 1 colonne sur mobile.
            Pour ajouter une carte : dupliquer un objet dans le tableau EXPERTISES en haut du fichier.
          */}
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
            className="expertises-grid"
          >
            {EXPERTISES.map((item) => (
              <article
                key={item.title}
                className="expertise-card"
                aria-label={item.title}
                style={{
                  backgroundColor: 'var(--color-white)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-card)',
                  transition: 'transform 250ms ease, box-shadow 250ms ease',
                }}
              >
                {/* Image — REMPLACER PAR PHOTOS RÉELLES dans le tableau EXPERTISES */}
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 400ms ease', display: 'block' }}
                    className="expertise-img"
                  />
                </div>

                <div style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.75rem' }} aria-hidden="true">{item.icon}</span>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-secondary)', lineHeight: 1.2 }}>
                        {item.title}
                      </h3>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
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
      </section>

      {/* ===========================================================
          SOUS-BLOC C — Pourquoi nous choisir + Galerie réalisations
          =========================================================== */}
      <section
        className="section-padding"
        id="realisations"
        aria-labelledby="whyus-title"
        style={{ backgroundColor: 'var(--color-bg-dark)' }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="section-label" style={{ color: 'var(--color-accent)' }}>Nos atouts &amp; réalisations</span>
            <h2 className="section-title section-title--light" id="whyus-title" style={{ color: 'var(--color-white)' }}>
              {/* À PERSONNALISER */}
              Pourquoi nous choisir ?
            </h2>
          </div>

          {/* Grid 2 colonnes : arguments gauche / galerie droite */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'start' }} className="whyus-grid">

            {/* Colonne gauche — arguments */}
            <div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2.5rem', listStyle: 'none', padding: 0 }}>
                {TRUST_POINTS.map((pt) => (
                  <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.6, fontSize: '0.9375rem' }}>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      width: '24px', height: '24px', flexShrink: 0, marginTop: '0.125rem',
                      backgroundColor: 'var(--color-primary)', color: 'var(--color-white)',
                      borderRadius: '50%', fontSize: '0.7rem', fontWeight: 900,
                    }}>✓</span>
                    {/* À PERSONNALISER */}
                    {pt}
                  </li>
                ))}
              </ul>
              <a href="#devis" className="btn btn-primary">Demander un devis gratuit</a>
            </div>

            {/* Colonne droite — galerie 3 colonnes avec zoom hover */}
            <div>
              {/*
                GALERIE — Remplacer les images dans le tableau GALLERY en haut du fichier.
                Layout : 3 colonnes, 2 rangées, zoom hover.
                REMPLACER PAR PHOTOS RÉELLES
              */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }} className="gallery-inner">
                {GALLERY.map((photo, i) => (
                  <figure
                    key={photo.title}
                    className="gallery-thumb"
                    style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-sm)', margin: 0, cursor: 'zoom-in' }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.src}
                      /* REMPLACER PAR PHOTOS RÉELLES */
                      alt={photo.alt}
                      loading={i < 3 ? 'eager' : 'lazy'}
                      style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block', transition: 'transform 350ms ease' }}
                      className="gallery-thumb-img"
                    />
                    <figcaption
                      className="gallery-thumb-cap"
                      style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
                        padding: '1rem 0.625rem 0.5rem',
                        opacity: 0, transition: 'opacity 250ms ease',
                      }}
                    >
                      <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>{photo.tag}</span>
                      <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-white)' }}>{photo.title}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.75rem', textAlign: 'right' }}>
                {/* REMPLACER PAR PHOTOS RÉELLES — photos de chantiers terminés */}
                Photos illustratives — à remplacer par les réalisations réelles de l&apos;entreprise
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Styles de la section ── */}
      <style>{`
        /* Sous-bloc A */
        @media (max-width: 768px) {
          .about-grid   { grid-template-columns: 1fr !important; }
          .stats-row    { grid-template-columns: 1fr 1fr !important; }
        }
        /* Sous-bloc B */
        .expertise-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg) !important; }
        .expertise-card:hover .expertise-img { transform: scale(1.05); }
        /* Sous-bloc C */
        .gallery-thumb:hover .gallery-thumb-img { transform: scale(1.08); }
        .gallery-thumb:hover .gallery-thumb-cap { opacity: 1 !important; }
        @media (max-width: 900px) {
          .whyus-grid    { grid-template-columns: 1fr !important; }
          .gallery-inner { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .gallery-inner { grid-template-columns: 1fr 1fr !important; }
          .stats-row     { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  )
}
