import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const StartProject: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex-grow flex flex-col items-center justify-center px-6 py-20 min-h-[80vh] z-10">
      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 shadow-2xl border border-white">
        <h1 className="font-serif-display text-4xl md:text-5xl text-[#1a1a1a] mb-2 text-center">{t("Start Your Project", "启动您的项目")}</h1>
        <p className="text-[#4a4a4a] text-center mb-10 font-light">{t("Tell us about your dream home.", "告诉我们关于您梦想中的家。")}</p>

        <form className="space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">{t("Name", "姓名")}</label>
                 <input type="text" className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2C241F]/20 transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">{t("Email", "邮箱")}</label>
                 <input type="email" className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2C241F]/20 transition-all" placeholder="john@example.com" />
              </div>
           </div>

           <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">{t("Project Type", "项目类型")}</label>
              <select className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2C241F]/20 transition-all text-gray-700">
                 <option>{t("New Residential Build", "新建住宅")}</option>
                 <option>{t("Full Home Renovation", "全屋翻新")}</option>
                 <option>{t("Interior Design Only", "仅室内设计")}</option>
                 <option>{t("Commercial Space", "商业空间")}</option>
              </select>
           </div>

           <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">{t("Budget Range (USD)", "预算范围 (USD)")}</label>
              <select className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2C241F]/20 transition-all text-gray-700">
                 <option>$100k - $500k</option>
                 <option>$500k - $1M</option>
                 <option>$1M - $5M</option>
                 <option>$5M+</option>
              </select>
           </div>

           <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">{t("Project Details", "项目详情")}</label>
              <textarea className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2C241F]/20 transition-all h-32" placeholder={t("Describe your vision, location, and timeline...", "描述您的愿景、位置和时间表...")}></textarea>
           </div>

           <button type="button" className="w-full bg-[#2C241F] text-white font-bold tracking-widest uppercase py-4 rounded-xl hover:bg-[#3E3228] transition-colors shadow-lg mt-4">
              {t("Submit Request", "提交请求")}
           </button>
        </form>
      </div>
    </div>
  );
};