import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const MaterialsCard: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] p-8 text-white relative overflow-hidden h-full min-h-[340px] flex flex-col justify-between group cursor-pointer shadow-2xl transition-all hover:bg-white/15 hover:shadow-3xl hover:border-white/30">
      <div className="z-10 relative max-w-[60%]">
        <h3 className="text-3xl font-normal leading-tight mb-4 font-serif-display drop-shadow-md">
          {t("Premium tools &", "优质工具与")} <br /> {t("parts", "配件")}
        </h3>
        <p className="text-white/80 text-sm font-light leading-relaxed drop-shadow-sm">
          {t("We use industrial-grade materials for repairs that last.", "我们使用工业级材料，确保维修经久耐用。")}
        </p>
      </div>

      {/* Decorative wall section graphic */}
      <div className="absolute bottom-0 right-0 w-52 h-52 md:w-60 md:h-60 transform translate-x-6 translate-y-6">
         <div className="relative w-full h-full">
            <img 
                src="https://i.ibb.co/99HrjPKr/front-panel-ackpn-ne1-64127.jpg"
                alt="Construction Materials"
                className="w-full h-full object-cover rounded-tl-[2rem] shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Glass border effect */}
            <div className="absolute inset-0 rounded-tl-[2rem] border-t border-l border-white/20 pointer-events-none"></div>
         </div>
      </div>
    </div>
  );
};