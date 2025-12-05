import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        // Fallback or custom styles if tailwind isn't working perfectly yet
        background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
      }}
    >
      <div className="logo">
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          ISlam<span style={{ color: 'var(--primary)' }}>.</span>
        </h2>
      </div>

      <ul style={{ display: 'flex', gap: '2rem' }}>
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase()}`}
              style={{
                fontSize: '1rem',
                fontWeight: '500',
                position: 'relative',
              }}
              className="nav-link"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      
      <style>{`
        .nav-link:hover {
          color: var(--primary);
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
