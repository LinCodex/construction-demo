import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (en: string, zh: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize language based on device settings
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof navigator !== 'undefined') {
      const browserLang = navigator.language || (navigator.languages && navigator.languages[0]);
      if (browserLang && browserLang.toLowerCase().startsWith('zh')) {
        return 'zh';
      }
    }
    return 'en';
  });

  const t = (en: string, zh: string) => {
    return language === 'en' ? en : zh;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};