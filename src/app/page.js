"use client"
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import About from '@/components/sections/About'
import DigitalMarketing from '@/components/sections/DigitalMarketing'
import Hero from '@/components/sections/Hero'
import Portfolio from '@/components/sections/Portfolio'
import ScrollTop from '@/components/ScrollTop'
import { useLocale } from 'next-intl'


const mont = Montserrat({ subsets: ['latin'] })
const myFont = localFont({ src: './font/Morabba-Regular.woff' })



export default function Home() {
  const locale = useLocale();

  const isEng = locale === 'en' ? mont.className : myFont.className;

  return (
    <main className={isEng}>
      <section className='hero'>
        <Hero lang={isEng}/>
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
