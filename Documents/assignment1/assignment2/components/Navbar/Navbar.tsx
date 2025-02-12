// components/Navbar/Navbar.tsx
import { Button } from '@/components/common/Button';
import Image from 'next/image';
import Link from 'next/link'; // Import Link

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Image
            src="/images/your-logo.jpg"
            alt="Loerum Ipsum Logo"
            width={100}
            height={30}
          />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link    // Use Link instead of a
            href="/"
            className="font-nter text-2xl font-semibold text-text-dark hover:text-primary-blue transition-colors"
          >
            Lorem Ipsum
          </Link>
          <Link  // Use Link instead of a
            href="/"
            className="font-nter text-2xl font-semibold text-text-dark hover:text-primary-blue transition-colors"
          >
            Lorem Ipsum
          </Link>
          <Link   // Use Link instead of a
            href="/"
            className="font-nter text-2xl font-semibold text-text-dark hover:text-primary-blue transition-colors"
          >
            Lorem Ipsum
          </Link>
        </div>

        {/* Sign In Button */}
        <div>
          <Button>Sign In</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;