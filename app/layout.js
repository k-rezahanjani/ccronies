import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
