import WhatsAppFloatingButton from '@/components/ui/WhatsAppFloatingButton';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sonu Tours and Travels',
  description: 'Book your premium taxi service for airport transfers, corporate travel, events, and more with Sonu Tours and Travels. Professional drivers and comfortable vehicles at competitive rates.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
          <WhatsAppFloatingButton />
      </body>
    </html>
  );
}