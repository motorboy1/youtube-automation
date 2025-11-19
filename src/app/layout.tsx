import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DanteLabs YouTube Automation',
  description: 'Comprehensive YouTube automation tools suite',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
