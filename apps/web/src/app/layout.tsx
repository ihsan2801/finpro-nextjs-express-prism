import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Event Management Platform',
  description: 'Discover and manage events seamlessly',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description ?? 'Default Description'} />
        <title>{String(metadata.title ?? 'Default Title')}</title>
      </head>
      <body className={`${inter.className} min-h-screen bg-gray-100 text-gray-900`}>
        <Header />
        <main className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
