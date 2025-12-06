import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
      }}
    >
      <div className="logo" style={{ zIndex: 60 }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          ISlam<span style={{ color: 'var(--primary)' }}>.</span>
        </h2>
      </div>

      {/* Desktop Menu */}
      <ul className="desktop-menu" style={{ display: 'flex', gap: '2rem' }}>
        {navLinks.map((item) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              style={{ fontSize: '1rem', fontWeight: '500', position: 'relative' }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ fontSize: '1.5rem', cursor: 'pointer', zIndex: 60, display: 'none' }}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(5, 5, 5, 0.95)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 50,
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
              {navLinks.map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    style={{ fontSize: '2rem', fontWeight: '600', color: '#fff' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style>{`
        .nav-link:hover {
          color: var(--primary);
        }
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
