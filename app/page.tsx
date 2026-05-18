import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Expertises from '@/app/components/Expertises'
import Competences from '@/app/components/Competences'
import Stats from '@/app/components/Stats'
import Process from '@/app/components/Process'
import Gallery from '@/app/components/Gallery'
import Testimonials from '@/app/components/Testimonials'
import CtaBanner from '@/app/components/CtaBanner'
import DevisForm from '@/app/components/DevisForm'
import Faq from '@/app/components/Faq'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Expertises />
        <Competences />
        <Stats />
        <Process />
        <Gallery />
        <Testimonials />
        <CtaBanner />
        <DevisForm />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
