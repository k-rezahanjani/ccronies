import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'

const mont = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Creative Cronies',
  description: 'Created by Kaveh R.H',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={mont.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
