import React, { useState, useEffect, useCallback } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Automatic active section tracking via IntersectionObserver
    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const matched = portfolioData.navigation.find(
              (item) => item.href === `#${id}`
            );
            if (matched) {
              setActiveLink(matched.label);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Prevent background scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Reliable navigation handler for both desktop and mobile
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
      setActiveLink(label);
      setMobileMenuOpen(false);
      document.body.style.overflow = '';

      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.replace('#', '');

        if (!targetId || targetId === 'home') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
          window.history.pushState(null, '', '#home');
          return;
        }

        const element = document.getElementById(targetId);
        if (element) {
          // Scroll element into view with header offset
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
          window.history.pushState(null, '', href);
        }
      }
    },
    []
  );

  const isHeaderSolid = isScrolled || mobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHeaderSolid
            ? 'py-3.5 bg-[#2C3531]/95 backdrop-blur-md border-b border-[#D1E8E2]/15 shadow-lg shadow-black/25'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            {/* Logo / Personal Brand */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home', 'Home')}
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#116466] rounded-lg p-1"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#116466] to-[#0c4d4f] border border-[#D1E8E2]/20 shadow-md shadow-[#116466]/20 transition-transform duration-300 group-hover:scale-105">
                <span className="font-mono font-bold text-base text-[#D1E8E2] group-hover:text-[#FFCB9A] transition-colors">
                  K
                </span>
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#116466] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFCB9A]"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-lg tracking-tight text-[#D1E8E2] group-hover:text-[#FFCB9A] transition-colors">
                  {portfolioData.personal.name}
                </span>
                <span className="font-mono text-[10px] text-[#D9B08C] tracking-widest uppercase">
                  ENGINEER / AI
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#2C3531]/70 border border-[#D1E8E2]/10 backdrop-blur-md shadow-inner">
              {portfolioData.navigation.map((item) => {
                const isActive = activeLink === item.label;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href, item.label)}
                      className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-[#FFCB9A] bg-[#116466]/40 shadow-sm'
                          : 'text-[#D1E8E2]/80 hover:text-[#D1E8E2] hover:bg-[#116466]/15'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="activePill"
                          className="absolute inset-0 rounded-full border border-[#116466]/60 pointer-events-none"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Right Action: Resume Button */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={portfolioData.personal.resumePath}
                download="Kamalesh_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-lg text-[#D1E8E2] bg-[#116466]/30 hover:bg-[#116466] border border-[#116466] hover:border-[#116466] transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-[#116466]/30 active:scale-95 group"
                title="Download Resume PDF"
              >
                <Download className="w-3.5 h-3.5 text-[#FFCB9A] group-hover:translate-y-0.5 transition-transform" />
                <span>Resume</span>
              </a>
            </div>

            {/* Mobile Menu Button (44px touch target) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl text-[#D1E8E2] hover:text-[#FFCB9A] hover:bg-[#116466]/25 border border-[#D1E8E2]/15 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#116466]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="md:hidden border-t border-[#D1E8E2]/10 bg-[#2C3531]/98 backdrop-blur-2xl px-5 pt-3 pb-6 shadow-2xl"
            >
              <ul className="flex flex-col space-y-1.5 pt-2">
                {portfolioData.navigation.map((item) => {
                  const isActive = activeLink === item.label;
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href, item.label)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                          isActive
                            ? 'text-[#FFCB9A] bg-[#116466]/35 border-l-4 border-[#116466]'
                            : 'text-[#D1E8E2]/85 hover:text-[#D1E8E2] hover:bg-[#116466]/15'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FFCB9A]" />}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-5 pt-4 border-t border-[#D1E8E2]/10 flex flex-col gap-3">
                <a
                  href={portfolioData.personal.resumePath}
                  download="Kamalesh_Resume.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2.5 px-4 py-3 text-sm font-mono font-medium rounded-xl text-[#D1E8E2] bg-[#116466] hover:bg-[#167e80] shadow-lg shadow-[#116466]/30 transition-all active:scale-98"
                >
                  <Download className="w-4 h-4 text-[#FFCB9A]" />
                  <span>Download Resume</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Dimmed backdrop overlay when mobile menu is open */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
};

