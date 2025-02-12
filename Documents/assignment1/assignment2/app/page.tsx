// app/page.tsx
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import ContactForm from '@/components/Contact/ContactForm';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    
      <Navbar />
      <Hero />
      <ContactForm />
      <Footer />
    
  );
}