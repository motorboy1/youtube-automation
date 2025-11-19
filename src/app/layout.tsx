import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DanteLabs - Global Automation System',
  description: 'Unified UI Framework for 15+ automation tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
