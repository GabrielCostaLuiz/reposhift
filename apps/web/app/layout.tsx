import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RepoShift',
  description: 'Geração de portfolios automatizados',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`min-h-screen antialiased`}>{children}</body>
    </html>
  )
}
