import Hero from '@/components/home/Hero';
import NewProducts from '@/components/home/NewProducts';
import Testimonial from '@/components/home/Testimonial';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site title here',
  description: 'Site description here',
  openGraph: {
    locale: 'fr_FR',
    url: 'url here',
    description: 'description here',
    title: 'Title here',
    images: {
      url: 'https://prismic-io.s3.amazonaws.com/gary-blog%2F3297f290-a885-4cc6-9b19-3235e3026646_default.jpg',
      width: 1200,
      height: 1200
    }
  }
};

export default async function Home() {
  return (
    <main>
      <Hero />
      <NewProducts />
      <Testimonial />
    </main>
  );
}
