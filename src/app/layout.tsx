'use client';
import HeaderTop from '@/components/home/HeaderTop';
import React from 'react';
import NextTopLoader from 'nextjs-toploader';
import { Inter } from 'next/font/google';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './globals.css';
import { Providers } from '@/redux/provider';

import HeaderMain from '@/components/home/HeaderMain';
import Navbar from '@/components/home/Navbar';
import MobNavbar from '@/components/home/MobNavbar';
import Footer from '@/components/home/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <NextTopLoader />

        <Providers>
          <HeaderTop />
          <HeaderMain />
          <Navbar />
          <MobNavbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
