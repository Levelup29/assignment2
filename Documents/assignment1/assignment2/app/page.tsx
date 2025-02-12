// app/page.tsx
import Navbar from '@/components/Navbar/Navbar';  // Use the @/ alias!
import Hero from '@/components/Hero/Hero';    // Use the @/ alias!
import ContactForm from '@/components/Contact/ContactForm'; // Use the @/ alias!
import Footer from '@/components/Footer/Footer';   // Use the @/ alias!

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ContactForm />
      <Footer />
    </div>
  );
}