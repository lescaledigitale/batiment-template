import Header       from '@/app/components/Header'
import Hero          from '@/app/components/Hero'
import Presentation  from '@/app/components/Presentation'  // Section 2 — About + Expertises + Gallery fusionnés
import Testimonials  from '@/app/components/Testimonials'  // Section 5 — Avis clients (conditionnel)
import Process       from '@/app/components/Process'       // Section 6 — Ne pas toucher
import CtaBanner     from '@/app/components/CtaBanner'     // Section 7 — Ne pas toucher
import DevisForm     from '@/app/components/DevisForm'     // Section 3 — Formulaire devis
import Footer        from '@/app/components/Footer'

// ──────────────────────────────────────────────────────────────────
// SECTION 5 — Avis clients Google My Business
//
// → Mettre à true UNIQUEMENT si le client a un compte Google My Business
//   avec des avis vérifiés configurés.
// → Laisser à false par défaut (bloc masqué).
// ──────────────────────────────────────────────────────────────────
const SHOW_GOOGLE_REVIEWS = false // ← ACTIVER ICI si compte Google My Business disponible

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1 — Hero */}
        <Hero />

        {/* Section 2 — Présentation (About + Expertises + Compétences + Galerie fusionnés) */}
        <Presentation />

        {/* Section 5 — Avis clients Google
            ACTIVER SI LE CLIENT A UN COMPTE GOOGLE MY BUSINESS AVEC DES AVIS
            DÉSACTIVER (SHOW_GOOGLE_REVIEWS = false) si pas de compte Google */}
        {SHOW_GOOGLE_REVIEWS && <Testimonials />}

        {/* Sections 6 & 7 — Ne pas toucher */}
        <Process />
        <CtaBanner />

        {/* Section 3 — Formulaire de devis */}
        <DevisForm />
      </main>
      <Footer />
    </>
  )
}
