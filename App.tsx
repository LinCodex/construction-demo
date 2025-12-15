import React, { useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Homes } from './pages/Homes';
import { About } from './pages/About';
import { Cases } from './pages/Cases';
import { Contact } from './pages/Contact';
import { StartProject } from './pages/StartProject';
import { LearnMore } from './pages/LearnMore';
import { LanguageProvider } from './context/LanguageContext';

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

const AppContent: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let requestId: number;

    const handleScroll = () => {
      if (!parallaxRef.current) return;

      // Disable parallax on mobile (width < 768px) to prevent jitter
      // On mobile, the CSS handles the fixed full coverage
      if (window.innerWidth < 768) {
        parallaxRef.current.style.transform = 'translateY(0px)';
        return;
      }

      const scrolled = window.scrollY;
      parallaxRef.current.style.transform = `translateY(-${scrolled * 0.15}px)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(requestId);
      requestId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleScroll); // Check on resize too
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image Container */}
      {/* Mobile: top-[-4vh] h-[108vh] per user request to cover edges completely */}
      {/* Desktop: top-[-10vh] h-[120vh] allows for parallax movement */}
      <div 
        ref={parallaxRef} 
        className="fixed left-0 w-full z-0 top-[-4vh] h-[108vh] md:top-[-10vh] md:h-[120vh]"
        style={{ willChange: 'transform' }}
      >
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=3540&auto=format&fit=crop" 
          alt="Misty Landscape" 
          className="w-full h-full object-cover object-bottom"
        />
        
        {/* Deep bottom gradient for stats readability */}
        <div className="absolute inset-x-0 bottom-0 h-[70vh] bg-gradient-to-t from-[#1a1512] via-[#2C241F]/90 to-transparent"></div>
        
        {/* REDUCED OPACITY: Strong light top gradient for crisp nav and hero text readability */}
        <div className="absolute top-0 inset-x-0 h-[90vh] bg-gradient-to-b from-[#f2f2f2]/80 via-[#f2f2f2]/40 to-transparent"></div>
        
        {/* Extra radial fade for the top-left text area to guarantee contrast */}
        <div className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] rounded-full bg-white/40 blur-[100px] pointer-events-none"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen max-w-[1800px] mx-auto">
        <ScrollToTop />
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/homes" element={<Homes />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/start-project" element={<StartProject />} />
            <Route path="/learn-more" element={<LearnMore />} />
        </Routes>
      </div>
    </div>
  );
};

const App: React.FC = () => {
    return (
        <LanguageProvider>
            <Router>
                <AppContent />
            </Router>
        </LanguageProvider>
    );
}

export default App;