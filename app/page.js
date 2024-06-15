"use client"
import About from '@/components/About'
import Clients from '@/components/Clients'
import DigitalMarketing from '@/components/DigitalMarketing'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import ScrollTop from '@/components/ScrollTop'
import Services from '@/components/Services'

export default function Home() {

  return (
    <main>
      {/* <section className='Header'>
        <Header />
      </section> */}
      <section className='hero'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section className='portfolio'>
        <Portfolio />
      </section>
      {/* <section className='clients'>
        <Clients/>
      </section> */}
      {/* <section className='services'>
        <Services />
      </section> */}
      <ScrollTop />
      <section className='digital-marketing'>
        <DigitalMarketing />
      </section>
      <section className='footer'>
        <Footer />
      </section>
    </main>
  )
}
