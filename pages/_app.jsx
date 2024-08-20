'use client'

import { SessionProvider } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { useStore } from '@/lib/store'
import { ThemeProvider } from 'next-themes'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default function RootLayout({ children, session }) {
  const [user, setUser] = useState(null)
  const { getUser } = useStore()

  useEffect(() => {
    if (session) {
      getUser()
    }
  }, [session])

  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans">
        <ThemeProvider attribute="class">
          <SessionProvider session={session}>
            <Header />
            <Navigation />
            {children}
            <Footer />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}