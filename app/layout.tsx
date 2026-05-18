import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "[Nom de votre Entreprise] — Expert en Rénovation & Maçonnerie",
  description:
    "[Nom de votre Entreprise] — Entreprise de rénovation tous corps d'état depuis plus de 20 ans. Rénovation intérieure, extérieure, maisons, appartements, locaux professionnels. Devis gratuit.",
  openGraph: {
    title: "[Nom de votre Entreprise] — Expert en Rénovation",
    description: "Votre partenaire de confiance pour tous vos projets de rénovation.",
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
