"use client";
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import About from '@/components/sections/About';
import DigitalMarketing from '@/components/sections/DigitalMarketing';
import Hero from '@/components/sections/Hero';
import Portfolio from '@/components/sections/Portfolio';
import ScrollTop from '@/components/ScrollTop';
import { useLocale } from 'next-intl';

// Import fonts
const mont = Montserrat({ subsets: ['latin'] });
const myFont = localFont({ src: './font/Morabba-Regular.woff' });

export default function Home() {
  const locale = useLocale();

  // Determine the class for fonts based on locale
  const fontClass = locale === 'fa' ? myFont.className : mont.className;

  // Determine the direction and alignment based on locale
  const direction = locale === 'fa' ? 'rtl' : 'ltr';
  const textAlign = locale === 'fa' ? 'right' : 'left';

  return (
    <main className={`${fontClass}`} style={{ direction, textAlign }}>
      <section className="hero">
        <Hero lang={locale} />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section className="portfolio">
        <Portfolio />
      </section>
      <ScrollTop />
      <section className="digital-marketing">
        <DigitalMarketing />
      </section>
    </main>
  );
}
