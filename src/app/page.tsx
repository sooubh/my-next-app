"use client";

// app/page.tsx

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1">
        <Hero />
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
