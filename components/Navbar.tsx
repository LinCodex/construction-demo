import React, { useState } from 'react';
import { Menu, Globe, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="w-full flex justify-between items-center py-6 px-6 md:px-12 z-50 relative text-[#1A1A1A]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer group z-50">
          <div className="w-5 h-5 bg-[#3E3228] rounded-sm transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
          <span className="text-xl font-bold tracking-widest text-[#3E3228]">DEMO</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12 text-sm font-medium text-gray-700">
          <Link to="/services" className="hover:text-black transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              {t("Services", "服务")}
          </Link>
          <Link to="/homes" className="hover:text-black transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              {t("Portfolio", "项目案例")}
          </Link>
          <Link to="/about-us" className="hover:text-black transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              {t("About us", "关于我们")}
          </Link>
          <Link to="/cases" className="hover:text-black transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              {t("Stories", "客户故事")}
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 md:gap-8 z-50">
          <button 
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-gray-600 transition-colors"
          >
              <Globe className="w-4 h-4" />
              {language === 'en' ? '中文' : 'ENG'}
          </button>
          <Link to="/contact-us" className="hidden md:block text-sm font-bold border-b border-black pb-0.5 hover:opacity-70 transition-opacity">
            {t("CONTACT US", "联系我们")}
          </Link>
          
          {/* Mobile Toggles */}
          <div className="md:hidden flex items-center gap-4">
              <button 
                  onClick={toggleLanguage}
                  className="text-sm font-medium hover:text-gray-600"
              >
                  {language === 'en' ? 'CN' : 'EN'}
              </button>
              <button onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#e0e0e0] flex flex-col items-center justify-center space-y-8 md:hidden">
            <Link to="/services" onClick={toggleMobileMenu} className="text-2xl font-serif-display text-[#1A1A1A]">{t("Services", "服务")}</Link>
            <Link to="/homes" onClick={toggleMobileMenu} className="text-2xl font-serif-display text-[#1A1A1A]">{t("Portfolio", "项目案例")}</Link>
            <Link to="/about-us" onClick={toggleMobileMenu} className="text-2xl font-serif-display text-[#1A1A1A]">{t("About us", "关于我们")}</Link>
            <Link to="/cases" onClick={toggleMobileMenu} className="text-2xl font-serif-display text-[#1A1A1A]">{t("Stories", "客户故事")}</Link>
            <Link to="/contact-us" onClick={toggleMobileMenu} className="text-lg font-bold border-b border-black pb-1 mt-8">{t("CONTACT US", "联系我们")}</Link>
        </div>
      )}
    </>
  );
};