import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';

import './globals.css';

const mont = Montserrat({ subsets: ['latin'] });

const myFont = localFont({ src: './font/Morabba-Regular.woff' });

export const metadata = {
  title: 'Creative Cronies',
  description: 'Created by Kaveh R.H',
  icons: {
    icon: './favicon.ico',
  },
};

export default async function RootLayout({ children, params: {locale} }) {
  unstable_setRequestLocale("fa")
  const messages = await getMessages();

  return (
    <html lang="fa" className="scroll-smooth">
      <body className={myFont.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
