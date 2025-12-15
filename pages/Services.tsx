import React from 'react';
import { Ruler, Hammer, Home, Wrench } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Home className="w-6 h-6" />,
      title: t("New Construction", "新建工程"),
      description: t(
        "We build custom homes from the ground up, ensuring structural integrity and modern efficiency standards.",
        "我们从零开始建造定制房屋，确保结构完整性和现代效率标准。"
      )
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: t("Home Renovation", "房屋翻新"),
      description: t(
        "Transforming outdated spaces with full remodels. Kitchens, bathrooms, and basements—we do it all.",
        "通过全面改造改变过时的空间。厨房、浴室和地下室——我们无所不能。"
      )
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: t("General Repairs", "一般维修"),
      description: t(
        "Professional fixing of electrical, plumbing, and structural issues. No job is too small for our expert team.",
        "专业维修电气、管道和结构问题。对于我们的专家团队来说，没有什么是小事。"
      )
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: t("Project Planning", "项目规划"),
      description: t(
        "Detailed blueprints, permit management, and timeline estimation to keep your build on track and on budget.",
        "详细的蓝图、许可证管理和时间表估算，确保您的建设按计划和预算进行。"
      )
    }
  ];

  return (
    <div className="flex-grow flex flex-col items-center justify-center px-6 py-20 min-h-[80vh] z-10">
      <h1 className="font-serif-display text-5xl md:text-7xl text-[#1a1a1a] mb-6 drop-shadow-lg text-center">{t("What We Do", "我们的服务")}</h1>
      <div className="h-[1px] w-24 bg-[#3E3228] mb-12"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {services.map((service, index) => (
          <div key={index} className="bg-white/30 backdrop-blur-md p-8 rounded-[2rem] border border-white/40 hover:bg-white/50 transition-all duration-500 hover:-translate-y-1 group">
            <div className="w-12 h-12 bg-[#3E3228] rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-2xl font-serif-display text-[#1a1a1a] mb-3">{service.title}</h3>
            <p className="text-[#4a4a4a] font-light leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};