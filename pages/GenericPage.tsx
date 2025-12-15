import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface GenericPageProps {
    title: string;
    subtitle: string;
}

export const GenericPage: React.FC<GenericPageProps> = ({ title, subtitle }) => {
  const { t } = useLanguage();
  return (
    <div className="flex-grow flex flex-col items-center justify-center text-center px-6 min-h-[60vh] z-10">
      <h1 className="font-serif-display text-5xl md:text-7xl text-[#1a1a1a] mb-6 drop-shadow-lg">{title}</h1>
      <div className="h-[1px] w-24 bg-gray-500 mb-6"></div>
      <p className="text-xl text-[#4a4a4a] font-light max-w-2xl leading-relaxed">
        {subtitle}
      </p>
      <div className="mt-12 p-8 bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 max-w-3xl w-full text-left">
        <div className="w-full h-48 bg-gray-200/50 rounded-2xl flex items-center justify-center mb-6">
            <span className="text-gray-500 font-medium tracking-widest">{t("CONTENT PLACEHOLDER", "内容占位符")}</span>
        </div>
        <p className="text-gray-600">{t(`This page is currently under construction. Please check back later for updates on our ${title.toLowerCase()}.`, `此页面目前正在建设中。请稍后回来查看关于我们 ${title.toLowerCase()} 的更新。`)}</p>
      </div>
    </div>
  );
};