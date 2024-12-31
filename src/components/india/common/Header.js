'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ bgcolor }) => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => {
    setClick(!click);
    if (!click) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        click &&
        !event.target.closest('.mobile-menu') &&
        !event.target.closest('.menu-button')
      ) {
        setClick(false);
        document.body.style.overflow = 'unset';
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [click]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg shadow-black/[0.03]'
          : 'bg-gradient-to-b from-black/30 to-transparent'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] to-accent/[0.02]"></div>

      <nav className="container relative mx-auto">
        <div className="flex items-center justify-between h-20 px-4 md:px-0">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={
                scrolled
                  ? '/assets/images/india/common/logo.png'
                  : '/assets/images/india/common/logo-white.png'
              }
              width={144}
              height={40}
              alt="logo"
              className="w-36 transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span
                className={`text-sm font-medium transition-all duration-200 hover:text-primary relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Home
              </span>
            </Link>
            <Link href="#">
              <span
                className={`text-sm font-medium transition-all duration-200 hover:text-primary relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Contact Us
              </span>
            </Link>
            <Link href="/visa/step-one">
              <span className="relative px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 transform hover:-translate-y-0.5 inline-block">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-primary to-accent rounded-full animate-gradient"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative">Apply E-VISA</span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden focus:outline-none menu-button z-50"
            onClick={handleClick}
            aria-label="Toggle menu"
          >
            {click ? (
              <FaTimes className="w-6 h-6 text-gray-800" />
            ) : (
              <FaBars
                className={`w-6 h-6 transition-all duration-300 ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}
              />
            )}
          </button>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
              click ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={handleClick}
          ></div>

          {/* Mobile Menu */}
          <div
            className={`
              fixed top-0 right-0 h-full w-[300px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40
              ${click ? 'translate-x-0' : 'translate-x-full'}
              md:hidden mobile-menu
            `}
          >
            <div className="flex flex-col h-full pt-24">
              <Link href="/" onClick={handleClick}>
                <div className="px-8 py-4 transition-all duration-200 border-b border-gray-100 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5">
                  <span className="text-base font-medium text-gray-800">
                    Home
                  </span>
                </div>
              </Link>
              <Link href="#" onClick={handleClick}>
                <div className="px-8 py-4 transition-all duration-200 border-b border-gray-100 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5">
                  <span className="text-base font-medium text-gray-800">
                    Contact Us
                  </span>
                </div>
              </Link>
              <Link href="/visa/step-one" onClick={handleClick}>
                <div className="px-8 py-4 transition-all duration-200 border-b border-gray-100 bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10">
                  <span className="text-base font-semibold text-primary">
                    Apply E-VISA
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Border */}
      {bgcolor && scrolled && (
        <div className="h-px bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
      )}
    </div>
  );
};

export default Header;
