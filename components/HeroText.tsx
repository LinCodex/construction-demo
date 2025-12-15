import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const HeroText: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-start z-10">
      <h1 className="font-serif-display text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.85] tracking-tight text-[#1a1a1a] mb-8">
        <span className="block">{t("WE FIX", "维修")}</span>
        <span className="block">{t("& BUILD", "建造")}</span>
        <span className="block flex items-start gap-3">
          {t("HOMES", "之 家")}
          <span className="text-xl md:text-3xl mt-3 font-sans font-light tracking-normal text-gray-500">®</span>
        </span>
      </h1>
      
      <div className="flex items-center gap-4 mb-10 pl-2">
        <div className="h-[1px] w-12 bg-gray-400"></div>
        <p className="text-lg md:text-xl text-[#4a4a4a] italic font-light tracking-wide">
          {t("Renovation, Construction & Repair", "翻新，施工与维修专家")}
        </p>
      </div>

      <Link to="/start-project" className="group relative bg-[#2C241F] text-[#F5F5F0] px-12 py-5 rounded-full text-xs font-bold tracking-[0.2em] transition-all transform hover:scale-105 hover:shadow-2xl overflow-hidden ml-1 inline-block">
        <span className="relative z-10">{t("GET A QUOTE", "获取报价")}</span>
        <div className="absolute inset-0 bg-[#3E3228] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
      </Link>
    </div>
  );
};