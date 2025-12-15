import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Homes: React.FC = () => {
  const { t } = useLanguage();

  const homes = [
    {
      name: t("The Cliff Residence", "悬崖公馆"),
      location: t("California, USA", "美国加州"),
      image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop"
    },
    {
      name: t("Forest Retreat", "森林隐居"),
      location: t("Kyoto, Japan", "日本京都"),
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
    },
    {
      name: t("Urban Sanctuary", "城市避风港"),
      location: t("Berlin, Germany", "德国柏林"),
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
    },
    {
      name: t("Desert Oasis", "沙漠绿洲"),
      location: t("Arizona, USA", "美国亚利桑那"),
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex-grow flex flex-col items-center px-6 py-20 min-h-[80vh] z-10">
      <div className="text-center mb-16">
        <h1 className="font-serif-display text-5xl md:text-7xl text-[#1a1a1a] mb-4">{t("Selected Works", "精选案例")}</h1>
        <p className="text-[#4a4a4a] text-lg font-light tracking-wide">{t("Where design meets nature.", "当设计遇见自然。")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl w-full">
        {homes.map((home, index) => (
          <div key={index} className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/3] cursor-pointer">
            <img 
              src={home.image} 
              alt={home.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <h3 className="text-white font-serif-display text-3xl mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{home.name}</h3>
              <p className="text-white/80 text-sm font-light uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{home.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};