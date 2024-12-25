import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Reposhift',
    template: '%s | Reposhift',
  },
  description: 'Geração de portfolios automatizados',

  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Reposhift',
    description: 'Geração de portfolios automatizados',
    url: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    siteName: 'Reposhift',
    images: [
      {
        url: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt-BR',
    type: 'website',
  },

  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Reposhift',
  //   description: 'Geração de portfolios automatizados',
  //   images: ['XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'],
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`min-h-screen bg-[#09090B] text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
