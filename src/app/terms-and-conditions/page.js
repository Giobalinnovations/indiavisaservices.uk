export const metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and Conditions',
  alternates: {
    canonical: '/terms-and-conditions',
  },
};

const page = () => {
  return (
    <div className="container px-4 pb-12 bg-white lg:pt-24 lg:py-10 lg:px-0 md:pt-28 md:pb-0 pt-28">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <div className="relative">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Terms of Service
            </h1>
            <div className="absolute -left-4 top-0 w-2 h-full bg-primary rounded-full"></div>
          </div>
          <p className="text-lg text-secondary">
            Welcome to our service. These terms establish the rules for using
            our platform and the services we provide. By using our website, you
            agree to these terms.
          </p>
        </header>

        <div className="space-y-12">
          <section className="bg-gradient-to-r from-primary/5 to-transparent p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Service Agreement
            </h2>
            <div className="space-y-4 text-secondary">
              <p>
                By accessing and using our platform, you agree to comply with
                and be bound by these terms. We reserve the right to modify
                these terms at any time, and your continued use constitutes
                acceptance of those modifications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-medium text-primary mb-3">
                    Your Responsibilities
                  </h3>
                  <ul className="space-y-2 text-secondary">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Provide accurate information
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Maintain account security
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Comply with applicable laws
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-medium text-primary mb-3">
                    Our Commitments
                  </h3>
                  <ul className="space-y-2 text-secondary">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Provide reliable service
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Protect your privacy
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Maintain platform security
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="border-l-4 border-primary pl-8">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Usage Guidelines
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-medium text-primary mb-4">
                  Prohibited Activities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-secondary">
                  <div>
                    <p className="mb-2">You must not:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                        Use unauthorized access methods
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                        Interfere with service operation
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2">And avoid:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                        Sharing account credentials
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                        Submitting false information
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-transparent p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Legal Framework
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-medium text-primary mb-3">
                  Intellectual Property
                </h3>
                <p className="text-secondary text-sm">
                  All content and materials are protected by copyright and
                  trademark laws
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-medium text-primary mb-3">
                  Liability Limitations
                </h3>
                <p className="text-secondary text-sm">
                  Services provided &quot;as is&quot; with limited liability for
                  damages
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-medium text-primary mb-3">Governing Law</h3>
                <p className="text-secondary text-sm">
                  Terms governed by and construed in accordance with applicable
                  laws
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Account Management
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-primary/5 to-transparent rounded-xl">
                <h3 className="font-medium text-primary mb-4">
                  Account Security
                </h3>
                <ul className="space-y-3 text-secondary">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    Maintain confidentiality of credentials
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    Report unauthorized access
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    Regular security updates
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-gradient-to-br from-accent/5 to-transparent rounded-xl">
                <h3 className="font-medium text-primary mb-4">
                  Account Termination
                </h3>
                <ul className="space-y-3 text-secondary">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                    Violation of terms
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                    Extended inactivity
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                    User-initiated closure
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-100">
          <div className="text-center">
            <p className="text-secondary mb-4">
              For questions about these terms, please contact our support team
              through our secure channels.
            </p>
            <p className="text-sm text-secondary">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default page;
