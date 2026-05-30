'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const navItems = [
  { label: 'Accueil', href: '#accueil' },
  {
    label: 'Rénovation',
    href: '#services',
    dropdown: ['Rénovation Maison', 'Rénovation Appartement', 'Rénovation Salle de Bain'],
  },
  { label: 'Compétences', href: '#competences' },
  { label: 'Réalisations', href: '#realisations' }, // Pointe vers la galerie fusionnée dans la section Présentation
]

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    closeMenu()
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (!el) return
    const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 10) || 80
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' })
  }

  return (
    <header
      id="site-header"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: scrolled ? 'var(--header-height-scrolled)' : 'var(--header-height)',
        backgroundColor: scrolled ? 'var(--color-white)' : 'transparent',
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
        transition: 'all 250ms ease',
      }}
    >
      <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>

        {/* Logo */}
        <a href="#accueil" onClick={(e) => scrollTo(e, '#accueil')} aria-label="[Nom de votre Entreprise] — Accueil">
          <Image
            src="/logo.svg"
            alt="Logo [Nom de votre Entreprise]"
            width={180}
            height={48}
            priority
            style={{ height: scrolled ? '36px' : '44px', width: 'auto', transition: 'height 250ms ease' }}
          />
        </a>

        {/* Nav desktop */}
        <nav ref={navRef} aria-label="Navigation principale" style={{ flex: 1 }}>
          <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', listStyle: 'none', padding: 0, margin: 0 }}>
            {navItems.map((item) => (
              <li key={item.label} style={{ position: 'relative' }} className={item.dropdown ? 'group' : ''}>
                <a
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.25rem',
                    padding: '0.5rem 0.875rem',
                    fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.875rem',
                    color: scrolled ? 'var(--color-secondary)' : 'var(--color-white)',
                    borderRadius: 'var(--radius-sm)',
                    transition: 'color 150ms, background-color 150ms',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                  }}
                  className="nav-link-hover"
                >
                  {item.label}
                  {item.dropdown && <span style={{ fontSize: '0.65em' }}>▾</span>}
                </a>
                {item.dropdown && (
                  <ul
                    className="dropdown-menu"
                    style={{ listStyle: 'none', padding: '0.5rem', margin: 0 }}
                    aria-label={`Sous-menu ${item.label}`}
                  >
                    {item.dropdown.map((sub) => (
                      <li key={sub}>
                        <a
                          href={item.href}
                          onClick={(e) => scrollTo(e, item.href)}
                          style={{
                            display: 'block', padding: '0.625rem 1rem',
                            fontSize: '0.875rem', fontWeight: 600,
                            color: 'var(--color-secondary)',
                            borderRadius: 'var(--radius-sm)',
                            textDecoration: 'none',
                            transition: 'background-color 150ms, color 150ms',
                          }}
                          className="dropdown-link-hover"
                        >
                          {sub}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA desktop */}
        {/* CTA principal — href pointe vers #contact */}
        <a
          href="#contact"
          onClick={(e) => scrollTo(e, '#contact')}
          className="btn btn-primary btn-sm desktop-cta"
        >
          Contactez-nous {/* À PERSONNALISER — ex: "Nous contacter", "Devis gratuit", etc. */}
        </a>

        {/* Burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="burger-btn-mobile"
          style={{
            display: 'none', flexDirection: 'column', gap: '5px',
            padding: '0.5rem', border: 'none', background: 'none', cursor: 'pointer',
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block', width: '24px', height: '2px',
                backgroundColor: scrolled ? 'var(--color-secondary)' : 'var(--color-white)',
                borderRadius: '2px',
                transition: 'all 250ms ease',
                transform: menuOpen
                  ? i === 0 ? 'translateY(7px) rotate(45deg)'
                  : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                  : 'none'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <nav
          aria-label="Menu mobile"
          style={{
            position: 'fixed', top: 'var(--header-height)', left: 0, right: 0, bottom: 0,
            backgroundColor: 'var(--color-secondary)',
            padding: '2rem clamp(1rem, 4vw, 2rem)',
            overflowY: 'auto', zIndex: 999,
          }}
        >
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  style={{
                    display: 'block', padding: '0.75rem 0',
                    fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.125rem',
                    color: 'var(--color-white)', textDecoration: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {item.label}
                </a>
                {item.dropdown && (
                  <ul style={{ listStyle: 'none', padding: '0.5rem 0 0 1rem', margin: 0 }}>
                    {item.dropdown.map((sub) => (
                      <li key={sub}>
                        <a
                          href={item.href}
                          onClick={(e) => scrollTo(e, item.href)}
                          style={{
                            display: 'block', padding: '0.5rem 0',
                            fontSize: '1rem', color: 'rgba(255,255,255,0.65)', textDecoration: 'none',
                          }}
                        >
                          {sub}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li style={{ marginTop: '1.5rem' }}>
              <a href="#devis" onClick={(e) => scrollTo(e, '#devis')} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Demandez un devis gratuit
              </a>
            </li>
          </ul>
        </nav>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-cta { display: none !important; }
          .burger-btn-mobile { display: flex !important; }
          nav > ul { display: none !important; }
        }
        .group:hover .dropdown-menu,
        .group:focus-within .dropdown-menu { opacity: 1 !important; visibility: visible !important; transform: translateY(0) !important; }
        .dropdown-menu {
          position: absolute; top: calc(100% + 0.5rem); left: 0; min-width: 220px;
          background-color: var(--color-white);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          border-top: 3px solid var(--color-primary);
          opacity: 0; visibility: hidden;
          transform: translateY(-8px);
          transition: all 150ms ease;
        }
        .dropdown-link-hover:hover { background-color: var(--color-bg-light); color: var(--color-primary) !important; }
      `}</style>
    </header>
  )
}
