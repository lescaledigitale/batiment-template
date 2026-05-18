'use client'

import { useState, FormEvent } from 'react'

type Fields = {
  prenom: string; nom: string; email: string; telephone: string;
  typetravaux: string; message: string; rgpd: boolean;
}

const initFields: Fields = { prenom: '', nom: '', email: '', telephone: '', typetravaux: '', message: '', rgpd: false }

export default function DevisForm() {
  const [fields, setFields] = useState<Fields>(initFields)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [sent, setSent]     = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e: Partial<Record<keyof Fields, string>> = {}
    if (!fields.prenom.trim())   e.prenom = 'Ce champ est obligatoire.'
    if (!fields.nom.trim())      e.nom = 'Ce champ est obligatoire.'
    if (!fields.email.trim())    e.email = 'Ce champ est obligatoire.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Email invalide.'
    if (!fields.typetravaux) e.typetravaux = 'Veuillez sélectionner un type de travaux.'
    if (!fields.message.trim())  e.message = 'Ce champ est obligatoire.'
    if (!fields.rgpd)            e.rgpd = 'Vous devez accepter la politique de confidentialité.'
    return e
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length) return
    setLoading(true)
    setTimeout(() => { setSent(true); setLoading(false); setFields(initFields) }, 1200)
  }

  const inputStyle = (hasErr: boolean) => ({
    padding: '0.75rem 1rem',
    border: `2px solid ${hasErr ? 'var(--color-error)' : 'var(--color-border)'}`,
    borderRadius: 'var(--radius-sm)',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    color: 'var(--color-text-main)',
    width: '100%',
    outline: 'none',
    transition: 'border-color 150ms',
  })

  return (
    <section className="section-padding" id="devis" aria-labelledby="devis-title">
      <div className="container devis-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(2rem, 6vw, 5rem)', alignItems: 'start' }}>

        {/* Info left */}
        <div id="contact">
          <span className="section-label">Devis gratuit</span>
          <h2 className="section-title" id="devis-title">
            Demandez votre devis<br /><strong>sous 48h</strong>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', marginBlock: '1.5rem', lineHeight: 1.8 }}>
            Remplissez le formulaire et notre équipe vous contactera rapidement pour établir un devis détaillé et personnalisé.
          </p>
          {[
            { icon: '📞', label: 'Appelez-nous',  val: '[04 XX XX XX XX]', href: 'tel:+33400000000' },
            { icon: '✉️', label: 'Écrivez-nous',  val: 'contact@votre-domaine.fr', href: 'mailto:contact@votre-domaine.fr' },
            { icon: '📍', label: 'Adresse',        val: '[Votre Adresse, 75000 Paris]', href: undefined },
          ].map((c) => (
            <div key={c.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.25rem', flexShrink: 0, marginTop: '0.125rem' }}>{c.icon}</span>
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>{c.label}</span>
                {c.href ? (
                  <a href={c.href} style={{ fontWeight: 600, color: 'var(--color-secondary)', textDecoration: 'none' }}>{c.val}</a>
                ) : (
                  <span style={{ fontWeight: 600, color: 'var(--color-secondary)' }}>{c.val}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Form right */}
        <div style={{ backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-lg)', padding: 'clamp(1.5rem, 4vw, 2.5rem)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-border)' }}>
          {sent ? (
            <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'rgba(16,185,129,0.1)', border: '1px solid var(--color-success)', borderRadius: 'var(--radius-sm)', color: '#065F46', fontWeight: 600 }}>
              ✓ Votre message a bien été envoyé ! Nous vous répondrons sous 48h.
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate aria-label="Formulaire de demande de devis">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                {(['prenom', 'nom'] as const).map((f) => (
                  <div key={f}>
                    <label htmlFor={f} style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-secondary)', marginBottom: '0.375rem' }}>
                      {f === 'prenom' ? 'Prénom' : 'Nom'} <span aria-hidden="true">*</span>
                    </label>
                    <input id={f} type="text" value={fields[f]} onChange={(e) => setFields({ ...fields, [f]: e.target.value })}
                      style={inputStyle(!!errors[f])} placeholder={f === 'prenom' ? 'Jean' : 'Dupont'} required />
                    {errors[f] && <span style={{ fontSize: '0.75rem', color: 'var(--color-error)' }}>{errors[f]}</span>}
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-secondary)', marginBottom: '0.375rem' }}>Email <span aria-hidden="true">*</span></label>
                  <input id="email" type="email" value={fields.email} onChange={(e) => setFields({ ...fields, email: e.target.value })}
                    style={inputStyle(!!errors.email)} placeholder="jean@email.fr" required />
                  {errors.email && <span style={{ fontSize: '0.75rem', color: 'var(--color-error)' }}>{errors.email}</span>}
                </div>
                <div>
                  <label htmlFor="tel" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-secondary)', marginBottom: '0.375rem' }}>Téléphone</label>
                  <input id="tel" type="tel" value={fields.telephone} onChange={(e) => setFields({ ...fields, telephone: e.target.value })}
                    style={inputStyle(false)} placeholder="06 XX XX XX XX" />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="typetravaux" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-secondary)', marginBottom: '0.375rem' }}>Type de travaux <span aria-hidden="true">*</span></label>
                <select id="typetravaux" value={fields.typetravaux} onChange={(e) => setFields({ ...fields, typetravaux: e.target.value })}
                  style={{ ...inputStyle(!!errors.typetravaux), appearance: 'none', cursor: 'pointer' }} required>
                  <option value="" disabled>Sélectionnez le type de travaux</option>
                  {['Rénovation maison', 'Rénovation appartement', 'Salle de bain', 'Cuisine', 'Extension / Agrandissement', 'Ravalement de façade', 'Locaux professionnels', 'Autre'].map((o) => (
                    <option key={o} value={o.toLowerCase()}>{o}</option>
                  ))}
                </select>
                {errors.typetravaux && <span style={{ fontSize: '0.75rem', color: 'var(--color-error)' }}>{errors.typetravaux}</span>}
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-secondary)', marginBottom: '0.375rem' }}>Décrivez votre projet <span aria-hidden="true">*</span></label>
                <textarea id="message" value={fields.message} onChange={(e) => setFields({ ...fields, message: e.target.value })}
                  rows={5} style={{ ...inputStyle(!!errors.message), resize: 'vertical', minHeight: '130px' }}
                  placeholder="Décrivez brièvement vos travaux, la superficie, vos contraintes..." required />
                {errors.message && <span style={{ fontSize: '0.75rem', color: 'var(--color-error)' }}>{errors.message}</span>}
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <input id="rgpd" type="checkbox" checked={fields.rgpd} onChange={(e) => setFields({ ...fields, rgpd: e.target.checked })}
                  style={{ width: '18px', height: '18px', flexShrink: 0, marginTop: '2px', accentColor: 'var(--color-primary)', cursor: 'pointer' }} required />
                <label htmlFor="rgpd" style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.5, cursor: 'pointer' }}>
                  J&apos;accepte que mes données soient utilisées pour traiter ma demande, conformément à la{' '}
                  <a href="#" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>politique de confidentialité</a>. <span aria-hidden="true">*</span>
                </label>
              </div>
              {errors.rgpd && <p style={{ fontSize: '0.75rem', color: 'var(--color-error)', marginBottom: '1rem' }}>{errors.rgpd}</p>}

              <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                {loading ? 'Envoi en cours…' : 'Envoyer ma demande →'}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .devis-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
