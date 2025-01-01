'use client';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] sm:min-h-[600px] mt-16 sm:mt-20">
      {/* Background Image with Overlay - Enhanced gradients */}
      <div className="absolute inset-0 z-0">
        <div
          className="relative w-full h-full bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: 'url("/assets/images/india/home/banner.png")',
          }}
        >
          {/* Optimized overlay gradients for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
          <div className="absolute inset-0 bg-black/15"></div>
        </div>
      </div>

      {/* Content - Enhanced responsive layout */}
      <div className="container relative z-10 h-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center h-full py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="relative w-full max-w-2xl text-white">
            {/* Improved content backdrop for better visibility */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl"></div>

            {/* Enhanced responsive content spacing */}
            <div className="relative p-4 sm:p-6 md:p-8 lg:p-10">
              {/* Responsive typography */}
              <h1 className="mb-3 sm:mb-4 md:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                <span className="text-primary">Indian Visa</span> Application
                Made Simple
              </h1>

              <p className="mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base lg:text-lg text-gray-200">
                Fast, secure, and reliable visa services with expert guidance at
                every step
              </p>

              {/* Responsive button sizing */}
              <div className="mb-6 sm:mb-8 md:mb-10">
                <Link href="/visa/step-one" className="inline-block group">
                  <span className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 transform hover:-translate-y-0.5">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-primary to-accent rounded-xl animate-gradient"></span>
                    <span className="absolute inset-0 w-full h-full transition-opacity duration-500 opacity-0 bg-gradient-to-r from-primary via-accent to-primary rounded-xl group-hover:opacity-100"></span>
                    <span className="relative flex items-center">
                      Apply Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </span>
                </Link>
              </div>

              {/* Responsive trust indicators */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 pt-4 sm:pt-6 md:pt-8 border-t border-white/10">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-white/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-medium">
                    Secure Process
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-white/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-medium">
                    24/7 Support
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-white/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-medium">
                    Fast Processing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
    </div>
  );
};

export default Banner;
