"use client"
import About from '@/components/About'
import DigitalMarketing from '@/components/DigitalMarketing'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import ScrollTop from '@/components/ScrollTop'


export default function Home() {

  return (
    <main>
      <section className='hero'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section className='portfolio'>
        <Portfolio />
      </section>
      <ScrollTop />
      <section className='digital-marketing'>
        <DigitalMarketing />
      </section>
    </main>
  )
}
