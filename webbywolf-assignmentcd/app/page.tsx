export default function Home() {
  return (
    <div className="bg-primary text-white min-h-screen p-8">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-6xl font-bold">Welcome to WebbyWolf</h1>
        <p className="mt-4 text-xl">This is a Next.js app with Tailwind CSS.</p>
        <button className="mt-8 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="mt-20">
        <h2 className="text-4xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white text-primary p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Fast Performance</h3>
            <p className="mt-4">Built with Next.js for blazing-fast performance.</p>
          </div>
          <div className="bg-white text-primary p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Responsive Design</h3>
            <p className="mt-4">Fully responsive and mobile-friendly.</p>
          </div>
          <div className="bg-white text-primary p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Easy to Customize</h3>
            <p className="mt-4">Tailwind CSS makes styling a breeze.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center">
        <p>&copy; 2024 WebbyWolf. All rights reserved.</p>
      </footer>
    </div>
  );
}

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-primary text-white min-h-screen p-8">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-20"
      >
        <h1 className="text-6xl font-bold">Welcome to WebbyWolf</h1>
        <p className="mt-4 text-xl">This is a Next.js app with Tailwind CSS.</p>
        <button className="mt-8 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get Started
        </button>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-20"
      >
        <h2 className="text-4xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white text-primary p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Fast Performance</h3>
            <p className="mt-4">Built with Next.js for blazing-fast performance.</p>
          </div>
          <div className="bg-white text-primary p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Responsive Design</h3>
            <p className="mt-4">Fully responsive and mobile-friendly.</p>
          </div>
          <div className="bg-white text-primary p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Easy to Customize</h3>
            <p className="mt-4">Tailwind CSS makes styling a breeze.</p>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="mt-20 text-center">
        <p>&copy; 2024 WebbyWolf. All rights reserved.</p>
      </footer>
    </div>
  );
}