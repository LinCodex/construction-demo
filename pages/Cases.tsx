import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CaseStudy {
    title: string;
    client: string;
    year: string;
    desc: string;
    details: string;
    image: string;
}

export const Cases: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const cases: CaseStudy[] = [
    {
      title: t("Sustainable Renovation", "可持续翻新"),
      client: t("Private Client", "私人客户"),
      year: "2023",
      desc: t("Transforming a 1950s bungalow into a net-zero energy home without compromising on style.", "将1950年代的平房改造成净零能耗住宅，同时不失风格。"),
      details: t("This project involved stripping back a mid-century structure to its bones. We installed geothermal heating, triple-glazed windows, and a solar roof system that generates 120% of the home's energy needs. The interior features reclaimed oak flooring and low-VOC finishes throughout.", "该项目涉及将中世纪的结构彻底拆解。我们安装了地热供暖、三层玻璃窗和太阳能屋顶系统，可产生房屋所需能源的120%。室内全部采用再生橡木地板和低VOC涂料。"),
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2565&auto=format&fit=crop"
    },
    {
      title: t("Micro-Living Concept", "微生活概念"),
      client: t("Urban Develop Co.", "城市开发公司"),
      year: "2022",
      desc: t("Maximizing utility in a 40sqm footprint using convertible furniture and smart storage solutions.", "利用可转换家具和智能存储解决方案，在40平方米的占地面积内最大化效用。"),
      details: t("In the heart of Tokyo, space is a luxury. We designed a movable wall system that allows the living room to transform into a bedroom or a home office. Hidden storage within the floor and ceiling maximizes every cubic inch of volume.", "在东京市中心，空间是一种奢侈。我们设计了一个可移动墙系统，使客厅可以变成卧室或家庭办公室。地板和天花板内的隐藏存储最大化了每一立方英寸的容积。"),
      image: "https://images.unsplash.com/photo-1502005229766-939cb2899638?q=80&w=2673&auto=format&fit=crop"
    },
    {
      title: t("Coastal Villa", "海滨别墅"),
      client: t("The Smith Family", "史密斯家族"),
      year: "2024",
      desc: t("A brutalist concrete structure softened by warm wood interiors, designed to withstand coastal storms.", "野兽派混凝土结构，辅以温暖的木质内饰，设计用于抵御沿海风暴。"),
      details: t("Perched on a windy bluff, this home required robust materials. We used raw, board-formed concrete to resist the salt air, while the interior is lined with warm cedar to create a cozy refuge. Large cantilevered overhangs provide shade and protect the glazing.", "这座房子坐落在多风的悬崖上，需要坚固的材料。我们使用原始的板式混凝土来抵御盐雾，而内部则内衬温暖的雪松，营造出舒适的避难所。大型悬臂式悬挑提供遮荫并保护玻璃。"),
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2670&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex-grow flex flex-col items-center justify-center px-6 py-20 min-h-[80vh] z-10 relative">
      <h1 className="font-serif-display text-5xl md:text-7xl text-[#1a1a1a] mb-12 drop-shadow-lg text-center">{t("Case Studies", "案例研究")}</h1>
      
      <div className="max-w-5xl w-full flex flex-col gap-6">
        {cases.map((item, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedCase(item)}
            className="bg-white/40 backdrop-blur-md rounded-[2rem] p-8 md:p-12 border border-white/40 hover:bg-white/60 transition-colors group cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          >
             <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest bg-[#2C241F] text-white px-3 py-1 rounded-full">{item.year}</span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#555]">{item.client}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif-display text-[#1a1a1a] mb-3">{item.title}</h2>
                <p className="text-[#4a4a4a] font-light max-w-xl">{item.desc}</p>
             </div>
             
             <div className="w-12 h-12 rounded-full border border-[#2C241F] flex items-center justify-center group-hover:bg-[#2C241F] group-hover:text-white transition-all">
                <ArrowRight className="w-5 h-5" />
             </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedCase(null)}></div>
            <div className="bg-[#f2f2f2] rounded-[2.5rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl flex flex-col md:flex-row overflow-hidden">
                
                <button 
                    onClick={() => setSelectedCase(null)}
                    className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/50 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                    <X className="w-5 h-5 text-black" />
                </button>

                <div className="w-full md:w-1/2 h-64 md:h-auto">
                    <img src={selectedCase.image} alt={selectedCase.title} className="w-full h-full object-cover" />
                </div>
                
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                    <div className="mb-6">
                        <span className="text-xs font-bold uppercase tracking-widest bg-[#2C241F] text-white px-3 py-1 rounded-full">{selectedCase.year}</span>
                        <span className="ml-3 text-xs font-bold uppercase tracking-widest text-gray-500">{selectedCase.client}</span>
                    </div>
                    <h2 className="font-serif-display text-4xl mb-6 text-[#1a1a1a]">{selectedCase.title}</h2>
                    <p className="text-gray-700 leading-relaxed mb-6 font-light text-lg">
                        {selectedCase.details}
                    </p>
                    <div className="mt-auto">
                         <h4 className="font-bold text-sm uppercase tracking-widest mb-2 text-[#2C241F]">{t("Project Highlights", "项目亮点")}</h4>
                         <ul className="list-disc list-inside text-gray-600 font-light text-sm space-y-1">
                             <li>{t("Energy efficient design", "节能设计")}</li>
                             <li>{t("Sustainable materials", "可持续材料")}</li>
                             <li>{t("Custom joinery", "定制细木工")}</li>
                         </ul>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};