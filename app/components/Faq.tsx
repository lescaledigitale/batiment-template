'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Quels types de travaux réalisez-vous ?',
    a: "Nous intervenons sur tous types de travaux de rénovation : rénovation complète de maisons et appartements, rénovation de salles de bain et cuisines, ravalement de façade, extension et agrandissement, aménagement de combles, ainsi que la rénovation de locaux professionnels (bureaux, commerces, restaurants). Nos artisans couvrent tous les corps d'état : électricité, plomberie, chauffage, maçonnerie, peinture, carrelage et menuiserie.",
  },
  {
    q: 'Comment se passe une demande de devis ?',
    a: "La démarche est simple et sans engagement. Remplissez notre formulaire de contact ou appelez-nous directement. Nous convenons d'un rendez-vous sur place pour visiter votre chantier et comprendre vos besoins. Sous 48h, nous vous remettons un devis détaillé et transparent, sans frais. Si vous l'acceptez, nous planifions les travaux ensemble selon votre agenda.",
  },
  {
    q: 'Êtes-vous assurés et certifiés ?',
    a: "Oui, absolument. [Nom de votre Entreprise] est titulaire de la garantie décennale et de la responsabilité civile professionnelle. Nos artisans disposent des qualifications RGE (Reconnu Garant de l'Environnement) pour les travaux éligibles aux aides de l'État (MaPrimeRénov', TVA réduite à 5,5%). Nous vous fournirons toutes les attestations nécessaires avant le début du chantier.",
  },
  {
    q: "Puis-je bénéficier d'aides financières pour mes travaux ?",
    a: "Oui ! De nombreux dispositifs existent pour financer vos travaux de rénovation énergétique : MaPrimeRénov', les Certificats d'Économies d'Énergie (CEE), l'Éco-prêt à taux zéro (Éco-PTZ), et la TVA réduite à 5,5% ou 10% selon les travaux. Nous vous accompagnons dans le montage de votre dossier d'aides pour maximiser votre financement.",
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section-padding" id="faq" aria-labelledby="faq-title"
      style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <span className="section-label">Vos questions</span>
          <h2 className="section-title" id="faq-title">Foire aux questions</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '640px', margin: '0 auto' }}>
            Les réponses aux questions les plus fréquentes sur nos prestations de rénovation
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{
              border: `1px solid ${open === i ? 'var(--color-primary)' : 'var(--color-border)'}`,
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              backgroundColor: 'var(--color-white)',
              boxShadow: open === i ? 'var(--shadow-sm)' : 'none',
              transition: 'border-color 150ms, box-shadow 150ms',
            }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-btn-${i}`}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '1.25rem 1.5rem',
                  fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700,
                  color: open === i ? 'var(--color-primary)' : 'var(--color-secondary)',
                  textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer',
                  transition: 'color 150ms',
                }}
              >
                {faq.q}
                <span style={{
                  fontSize: '1.25rem', fontWeight: 300, color: 'var(--color-primary)',
                  transform: open === i ? 'rotate(45deg)' : 'none',
                  transition: 'transform 250ms ease', flexShrink: 0, marginLeft: '1rem',
                }}>+</span>
              </button>

              {open === i && (
                <div id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-btn-${i}`}
                  style={{ padding: '0 1.5rem 1.5rem', fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
