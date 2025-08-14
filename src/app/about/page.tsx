"use client";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-6">
                Welcome to our company! We are passionate about creating amazing experiences
                and delivering value to our customers.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team consists of dedicated professionals who work tirelessly to bring
                innovative solutions to life. We believe in the power of technology to
                transform businesses and improve lives.
              </p>
              <p className="text-lg text-gray-600">
                Founded with a vision to make a difference, we continue to grow and evolve,
                always staying true to our core values of excellence, integrity, and innovation.
              </p>
            </div>
          </div>
        </section>
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
