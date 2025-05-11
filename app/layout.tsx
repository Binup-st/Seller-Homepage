import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';
import { PageWrapper } from '@/components/layout/page-wrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Colour - Seller Dashboard',
  description: 'A seller dashboard for cosmetics businesses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <PageWrapper>{children}</PageWrapper>
        </Providers>
      </body>
    </html>
  );
}