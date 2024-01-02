import { Montserrat } from 'next/font/google'
import './globals.css'

const mont = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Creative Cronies',
  description: 'Created by Kaveh R.H',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={mont.className}>{children}</body>
    </html>
  )
}
