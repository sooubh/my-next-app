"use client";
import Navbar from "../components/Navbar";

export default function BlogPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Blog Post 1 */}
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Getting Started with Next.js</h3>
                  <p className="text-gray-600 mb-4">
                    Learn the basics of Next.js and how to create your first application
                    with this powerful React framework.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">January 15, 2024</span>
                    <button className="text-blue-600 hover:text-blue-800">Read More</button>
                  </div>
                </div>
              </article>

              {/* Blog Post 2 */}
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Modern Web Development Trends</h3>
                  <p className="text-gray-600 mb-4">
                    Explore the latest trends in web development and how they&apos;re shaping
                    the future of the internet.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">January 10, 2024</span>
                    <button className="text-blue-600 hover:text-blue-800">Read More</button>
                  </div>
                </div>
              </article>

              {/* Blog Post 3 */}
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">UI/UX Design Principles</h3>
                  <p className="text-gray-600 mb-4">
                    Discover the fundamental principles of good UI/UX design and how
                    they can improve user experience.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">January 5, 2024</span>
                    <button className="text-blue-600 hover:text-blue-800">Read More</button>
                  </div>
                </div>
              </article>

              {/* Blog Post 4 */}
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Mobile App Development Guide</h3>
                  <p className="text-gray-600 mb-4">
                    A comprehensive guide to mobile app development, from planning to
                    deployment and everything in between.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">December 28, 2023</span>
                    <button className="text-blue-600 hover:text-blue-800">Read More</button>
                  </div>
                </div>
              </article>

              {/* Blog Post 5 */}
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">SEO Best Practices</h3>
                  <p className="text-gray-600 mb-4">
                    Learn the essential SEO techniques that will help your website rank
                    higher in search engine results.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">December 20, 2023</span>
                    <button className="text-blue-600 hover:text-blue-800">Read More</button>
                  </div>
                </div>
              </article>

              {/* Blog Post 6 */}
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Cloud Computing Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Understanding cloud computing and how it can benefit your business
                    operations and scalability.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">December 15, 2023</span>
                    <button className="text-blue-600 hover:text-blue-800">Read More</button>
                  </div>
                </div>
              </article>
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
