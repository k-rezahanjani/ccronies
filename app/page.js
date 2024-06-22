"use client"
import About from '@/components/sections/About'
import DigitalMarketing from '@/components/sections/DigitalMarketing'
import Hero from '@/components/sections/Hero'
import Portfolio from '@/components/sections/Portfolio'
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
