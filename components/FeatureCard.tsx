import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const FeatureCard: React.FC = () => {
  const { t } = useLanguage();
  const [roomType, setRoomType] = useState<'living' | 'kitchen'>('living');
  const [isLoading, setIsLoading] = useState(true);

  // Trigger loading state on mount and when roomType changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 5000); // 5 seconds loading

    return () => clearTimeout(timer);
  }, [roomType]);

  // Living room embed - Updated to new model
  const livingRoomSrc = "https://sketchfab.com/models/e88651f56d78486c8e83dddf1af057c3/embed?autostart=1&transparent=1&ui_hint=0&ui_theme=dark&dnt=1&ui_infos=0&ui_avatars=0&ui_watermark=0";

  // Kitchen embed
  const kitchenSrc = "https://sketchfab.com/models/2cc658a96e304a6d9db1813233ed90d1/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_hint=0&dnt=1&ui_infos=0&ui_avatars=0&ui_watermark=0";

  return (
    <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative w-full max-w-xl mx-auto md:ml-auto transition-transform hover:-translate-y-1 duration-500">
      {/* Header tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button 
            onClick={() => setRoomType('living')}
            className={`px-5 py-2 rounded-full border text-xs font-semibold tracking-wide uppercase transition-all duration-300 ${roomType === 'living' ? 'bg-[#2C241F] text-white border-[#2C241F]' : 'bg-white/40 border-gray-100/50 text-gray-600 hover:bg-white/80'}`}
        >
            {t("Living Room", "客厅")}
        </button>
        <button 
            onClick={() => setRoomType('kitchen')}
            className={`px-5 py-2 rounded-full border text-xs font-semibold tracking-wide uppercase transition-all duration-300 ${roomType === 'kitchen' ? 'bg-[#2C241F] text-white border-[#2C241F]' : 'bg-white/40 border-gray-100/50 text-gray-600 hover:bg-white/80'}`}
        >
            {t("Kitchen", "厨房")}
        </button>
        <span className="w-8 h-8 rounded-full bg-[#2C241F] text-white flex items-center justify-center text-[10px] font-bold shadow-md">3D</span>
      </div>

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-medium text-[#1A1A1A] mb-3 leading-[0.9] tracking-tight font-serif-display">
        {t("Visualize before", "施工前")} <br /> <span className="italic text-gray-500">{t("we build", "可视化预览")}</span>
      </h2>
      <p className="text-gray-500 text-sm mb-10 font-light pl-1">{t("Explore our renovation standards in 3D.", "以3D方式探索我们的翻新标准。")}</p>

      {/* Main 3D Visual Container */}
      <div className="relative rounded-[2rem] overflow-hidden h-72 md:h-96 w-full group cursor-move bg-gray-100 shadow-inner ring-1 ring-white/50 isolate transform-gpu" style={{ maskImage: 'radial-gradient(white, black)', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}>
        
        {/* Loading Overlay */}
        {isLoading && (
            <div className="absolute inset-0 z-20 bg-[#f0f0f0] flex flex-col items-center justify-center">
                <p className="text-[#2C241F] font-bold text-sm uppercase tracking-widest mb-3">{t("Loading 3D Model...", "正在加载 3D 模型...")}</p>
                <div className="w-48 h-1 bg-gray-300 rounded-full overflow-hidden">
                    <div className="h-full bg-[#2C241F] animate-progress"></div>
                </div>
            </div>
        )}

        {/* Sketchfab Embed */}
        <iframe 
            key={roomType}
            title={roomType === 'living' ? "Simple Modern Living Room" : "Small Modern Kitchen"}
            src={roomType === 'living' ? livingRoomSrc : kitchenSrc} 
            className="w-full h-full absolute inset-0 z-0"
            {...({
                frameBorder: "0",
                allowFullScreen: true,
                mozallowfullscreen: "true",
                webkitallowfullscreen: "true",
                allow: "autoplay; fullscreen; xr-spatial-tracking",
                "xr-spatial-tracking": "true",
                "execution-while-out-of-viewport": "true",
                "execution-while-not-rendered": "true",
                "web-share": "true"
            } as any)}
        />

        {/* Subtle Credits */}
        <div className="absolute bottom-2 left-4 z-10 pointer-events-none opacity-40 text-[9px] text-gray-500 mix-blend-multiply">
            Model via Sketchfab
        </div>
      </div>
    </div>
  );
};