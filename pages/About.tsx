import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex-grow flex flex-col items-center justify-center px-6 py-20 min-h-[80vh] z-10">
      <div className="max-w-4xl w-full bg-white/40 backdrop-blur-xl rounded-[3rem] p-8 md:p-16 border border-white/50 shadow-xl text-center">
        <h1 className="font-serif-display text-5xl md:text-7xl text-[#1a1a1a] mb-8 drop-shadow-sm">{t("Built to Last", "经久耐用")}</h1>
        
        <div className="flex flex-col items-center">
            <div className="space-y-8 text-[#4a4a4a] text-xl font-light leading-relaxed max-w-3xl">
                <p>
                    {t(
                      "At Demo, we believe a home should be safe, functional, and beautiful. Since 2010, our team of contractors and engineers has dedicated themselves to high-quality construction and reliable repairs.",
                      "在 Demo，我们相信家应该是安全、实用和美丽的。自2010年以来，我们的承包商和工程师团队一直致力于高质量的施工和可靠的维修。"
                    )}
                </p>
                <p>
                    {t(
                      "Whether it's fixing a leaky roof, adding a new room, or building a house from scratch, we prioritize craftsmanship and durability. We don't just design; we get our hands dirty to ensure your home stands the test of time.",
                      "无论是修复漏水的屋顶、增加新房间，还是从头开始建造房屋，我们都优先考虑工艺和耐用性。我们不只是设计；我们亲自动手，确保您的家经得起时间的考验。"
                    )}
                </p>
            </div>
            
            <div className="mt-12 w-24 h-1 bg-[#2C241F]"></div>
            <p className="mt-6 text-sm font-bold uppercase tracking-widest opacity-50">{t("Established 2010", "始于 2010")}</p>
        </div>
      </div>
    </div>
  );
};