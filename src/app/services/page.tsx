"use client";
import Navbar from "../components/Navbar";

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Web Development</h3>
                <p className="text-gray-600">
                  We create modern, responsive websites that deliver exceptional user experiences
                  and drive business growth.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Mobile Apps</h3>
                <p className="text-gray-600">
                  Native and cross-platform mobile applications that engage users and
                  provide seamless functionality.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
                <p className="text-gray-600">
                  Beautiful, intuitive designs that enhance user experience and
                  improve conversion rates.
                </p>
              </div>

              {/* Service 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Consulting</h3>
                <p className="text-gray-600">
                  Strategic technology consulting to help your business make informed
                  decisions and achieve digital transformation.
                </p>
              </div>

              {/* Service 5 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Maintenance</h3>
                <p className="text-gray-600">
                  Ongoing support and maintenance services to keep your applications
                  running smoothly and securely.
                </p>
              </div>

              {/* Service 6 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">SEO & Marketing</h3>
                <p className="text-gray-600">
                  Digital marketing strategies and SEO optimization to increase your
                  online visibility and reach.
                </p>
              </div>
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
