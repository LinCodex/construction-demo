import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const StatsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-8 h-full">
      
      {/* Customers Stat */}
      <div className="flex flex-col items-center md:items-start gap-3">
        <div className="flex -space-x-4 pl-2">
            <img className="w-14 h-14 rounded-full border-[3px] border-white/10 shadow-lg object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces" alt="Client" />
            <img className="w-14 h-14 rounded-full border-[3px] border-white/10 shadow-lg object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces" alt="Client" />
            <div className="w-14 h-14 rounded-full border-[3px] border-white/10 bg-[#3E3228] flex items-center justify-center text-white text-xs font-medium shadow-lg z-10">
                +2k
            </div>
        </div>
        <div className="text-center md:text-left">
             <span className="font-serif-display text-5xl italic text-white/95 drop-shadow-sm">12m+</span>
             <p className="text-white/70 text-sm font-light tracking-wide uppercase mt-1">{t("Homes Fixed", "已修复房屋")}</p>
        </div>
      </div>

      {/* Main Text */}
      <div className="flex flex-col items-end text-right">
        <h3 className="text-white/95 text-xl md:text-2xl font-light leading-snug max-w-xs mb-8 tracking-wide drop-shadow-md">
          {t("REPAIR", "维修")} <br/>
          <span className="font-serif-display italic font-normal">{t("& BUILD", "与建造")}</span> <br/>
          {t("EXPERTS", "专家")}
        </h3>
        <Link to="/learn-more" className="group flex items-center gap-2 text-white text-xs font-bold tracking-[0.15em] hover:text-white/80 transition-colors">
            {t("OUR PROCESS", "我们的流程")}
            <span className="block h-[1px] w-8 bg-white/50 group-hover:w-12 transition-all duration-300"></span>
        </Link>
      </div>
    </div>
  );
};