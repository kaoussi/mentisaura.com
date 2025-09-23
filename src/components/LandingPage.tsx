import React from 'react';

const LandingPage = () => {
  return (
    <div className="w-screen h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 sm:py-6">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <span className="text-xl sm:text-2xl font-bold text-indigo-600 font-playfair">
                Mentis Aura LLC
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="bg-gradient-to-br from-blue-50 to-indigo-100 flex-grow flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 sm:mb-6 font-playfair leading-tight">
              Mentis Aura LLC
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-600/80">
              Publishing Company
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 sm:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center sm:text-left">
                <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4 font-playfair">
                  Mentis Aura LLC
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Publishing Company
                </p>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                  Contact
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Phone: +1 251 384 3909
                </p>
              </div>
              <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
                <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                  Address
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  30 N Gould St Ste R<br />
                  Sheridan, WY 82801
                </p>
              </div>
            </div>
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800">
              <p className="text-center text-gray-400 text-xs sm:text-sm">
                © {new Date().getFullYear()} Mentis Aura LLC. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;