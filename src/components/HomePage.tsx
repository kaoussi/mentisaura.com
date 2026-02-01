import React from 'react';
import { FiBook, FiTruck, FiDollarSign, FiShield } from 'react-icons/fi';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-sm text-slate-200">Philosophy Without Compromise</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 font-playfair bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Mentis Aura
          </h1>
          <p className="text-3xl md:text-4xl text-slate-300 mb-4 font-light">
            The Breeze of Mind
          </p>
          <p className="text-xl text-slate-400 italic max-w-2xl mx-auto mb-8">
            Where thought moves freely. Ideas unobstructed by algorithms or committees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="/book"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Explore The Book</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
            >
              Learn Our Philosophy
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full mb-3">
                <FiBook className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Premium Quality</h3>
              <p className="text-sm text-gray-600">Printed fresh when ordered</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-50 rounded-full mb-3">
                <FiTruck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Worldwide Shipping</h3>
              <p className="text-sm text-gray-600">7-14 day delivery</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-50 rounded-full mb-3">
                <FiDollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Fair Pricing</h3>
              <p className="text-sm text-gray-600">No middlemen markups</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-50 rounded-full mb-3">
                <FiShield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Secure Payment</h3>
              <p className="text-sm text-gray-600">Powered by Stripe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Book - Enhanced Product Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-4">
              NOW AVAILABLE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">
              The Contradicted Existence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Twenty-four philosophical essays examining the fundamental contradictions of human existence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Book Image */}
            <div className="relative group">
              <div className="h-[70vh] max-h-[600px] rounded-2xl shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300 mx-auto w-fit">
                <img
                  src="/book.jpeg"
                  alt="The Contradicted Existence by Nassim El Hassouni"
                  className="h-full w-auto object-contain"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg transform rotate-12">
                <p className="font-bold">Second Edition</p>
              </div>
            </div>

            {/* Book Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What's Inside</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This work synthesizes Western existentialism—Nietzsche's will to power, Camus' absurdism, Spinoza's unity—with Eastern mysticism (Ibn Arabi, Buddhism) to explore selfishness, consciousness, free will, death, love, and power.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Not self-help. Not transformation literature. Philosophical inquiry for readers who value rigorous examination over easy answers.
                </p>
              </div>

              {/* Format Options - Card Style */}
              <div className="bg-white rounded-xl border-2 border-gray-200 p-6 space-y-4">
                <h3 className="font-bold text-gray-900 text-lg mb-4">Available Formats</h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Paperback</p>
                        <p className="text-sm text-gray-600">5" × 8" • Perfect bound • Matte finish</p>
                      </div>
                    </div>
                    <p className="font-bold text-gray-900">$19.99</p>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border-2 border-blue-200 hover:bg-blue-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Ebook (PDF)</p>
                        <p className="text-sm text-gray-600">Instant download • All devices</p>
                      </div>
                    </div>
                    <p className="font-bold text-blue-600">$9.99</p>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Hardcover</p>
                        <p className="text-sm text-gray-600">5.5" × 8.5" • Dust jacket • Premium</p>
                      </div>
                    </div>
                    <p className="font-bold text-gray-900">$33.00</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/book"
                  className="flex-1 group relative inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>View Full Details</span>
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/samples"
                  className="flex-1 inline-flex items-center justify-center px-6 py-4 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all"
                >
                  Read Sample Chapters
                </a>
              </div>

              {/* Trust indicator */}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Ships within 7-14 business days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Direct-to-Reader - Cards Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Why Direct-to-Reader?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Philosophy requires infrastructure equal to its ambition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">No Compromise</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Books published as written. No editorial committees softening edges for commercial appeal.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Fair Pricing</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                No retail markup. No middlemen. You pay for production, shipping, and the work itself.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Quality Production</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Each book printed fresh. Premium materials. Professional binding. Built to last.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Direct Support</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Your purchase directly funds philosophical work. No corporate shareholders. Just ideas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Background effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            Begin Your Inquiry
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Examine existence honestly. Whether you ultimately agree or disagree matters less than whether you examine these questions yourself with equal honesty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition-all font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
            >
              <span>Explore the Book</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all font-semibold"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
