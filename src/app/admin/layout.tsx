import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';

// import dynamic from 'next/dynamic';

// const Footer = dynamic(() => import('@/components/home/Footer'));

export const metadata: Metadata = {
  title: 'Admin | Dashboard',
  description: 'Admin | Dashboard'
};

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
