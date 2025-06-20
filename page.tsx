import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/sections/Hero'
import { Pillars } from '@/components/sections/Pillars'
import { Services } from '@/components/sections/Services'
import { About } from '@/components/sections/About'
import { Clients } from '@/components/sections/Clients'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/ui/floating-cta'

export default function Home() {
  console.log('Home page rendered')
  
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Pillars />
      <Services />
      <About />
      <Clients />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
