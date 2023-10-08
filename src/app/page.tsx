import Hero from '@/components/home/Hero';
import NewProducts from '@/components/home/NewProducts';
import Testimonial from '@/components/home/Testimonial';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K - Store | Home',
  description: 'K - Store | Home'
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
