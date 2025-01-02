import Footer from '@/components/india/common/Footer';
import Header from '@/components/india/common/Header';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import { FormProvider } from '@/context/formContext';

import { Plus_Jakarta_Sans, Poppins } from 'next/font/google';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Home',
  description: 'Visa Application',
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN_URL),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} flex flex-col min-h-screen antialiased bg-background`}
      >
        <FormProvider>
          <ReactQueryProvider>
            <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
            <div className="fixed inset-0 bg-[url('/assets/images/india/common/pattern.png')] bg-repeat opacity-[0.02] pointer-events-none"></div>
            <div className="fixed inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-accent/[0.02] pointer-events-none"></div>
            <Header />
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.8),transparent_70%)] pointer-events-none"></div>
              {children}
            </div>
            <Footer />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              closeOnClick
              pauseOnHover
              theme="light"
              toastClassName="bg-white shadow-lg border border-gray-100 !rounded-xl"
              bodyClassName="text-gray-800"
              progressClassName="bg-primary"
            />
          </ReactQueryProvider>
        </FormProvider>
      </body>
    </html>
  );
}
