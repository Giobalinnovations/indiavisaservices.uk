import Image from 'next/image';
import Link from 'next/link';

const ApplySection = () => {
  const visaCategories = [
    {
      title: 'Tourist e-Visa',
      description:
        "Discover India's rich cultural heritage and diverse landscapes with our streamlined tourist visa service. Perfect for holiday travel and cultural exploration.",
      duration: 'Up to 1 year',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      title: 'Business e-Visa',
      description:
        'Facilitate your business ventures in India with our efficient business visa processing. Ideal for corporate meetings, trade shows, and business negotiations.',
      duration: 'Up to 5 years',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Medical e-Visa',
      description:
        "Access India's world-class healthcare facilities with our specialized medical visa service. Suitable for medical treatments, consultations, and wellness procedures.",
      duration: 'Triple entry',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: 'Conference e-Visa',
      description:
        'Attend professional conferences and seminars in India with our dedicated conference visa service. Designed for international delegates and speakers.',
      duration: 'Single entry',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  const applicationSteps = [
    {
      title: 'Complete Online Form',
      description:
        'Fill out our user-friendly digital application with your personal and travel details. Our smart form technology ensures accuracy and completeness.',
      number: '01',
    },
    {
      title: 'Document Submission',
      description:
        'Upload your passport, photo, and supporting documents through our secure portal. Our system verifies document quality instantly.',
      number: '02',
    },
    {
      title: 'Secure Payment',
      description:
        'Process your visa fee through our encrypted payment gateway. Multiple payment options available for your convenience.',
      number: '03',
    },
    {
      title: 'Visa Processing',
      description:
        'Track your application status in real-time. Receive instant notifications about your visa progress via email and SMS.',
      number: '04',
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Visa Categories Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Comprehensive <span className="text-primary">e-Visa Services</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Choose from our range of specialized Indian e-Visa services, each
            designed to meet your specific travel requirements with maximum
            efficiency and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visaCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-accent/[0.03] rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary mb-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary bg-primary/5 px-3 py-1 rounded-full">
                    {category.duration}
                  </span>
                  <Link
                    href="/visa/step-one"
                    className="inline-flex items-center text-primary font-medium text-sm group-hover:text-accent transition-colors duration-300"
                  >
                    Apply Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Process Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Advanced <span className="text-primary">Digital Process</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Experience our streamlined digital visa application system, designed
            to make your Indian visa application process smooth, secure, and
            efficient
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {applicationSteps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/[0.08] to-accent/[0.08] rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative p-6 bg-white rounded-2xl">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary/20 to-accent/20 text-transparent bg-clip-text mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
              {index < applicationSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-primary/20 to-accent/20 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/visa/step-one"
            className="group inline-flex items-center justify-center"
          >
            <span className="relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 transform hover:-translate-y-1">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent rounded-xl"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent to-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center text-lg">
                Begin Your Application
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
      </div>
    </div>
  );
};

export default ApplySection;
