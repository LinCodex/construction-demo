import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LearnMore: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex-grow flex flex-col items-center justify-center px-6 py-20 min-h-[80vh] z-10">
      <div className="max-w-5xl w-full bg-white/60 backdrop-blur-xl rounded-[3rem] p-8 md:p-16 shadow-2xl border border-white">
        <div className="text-center mb-16">
            <h1 className="font-serif-display text-4xl md:text-6xl text-[#1a1a1a] mb-6">{t("Our Design Process", "我们的设计流程")}</h1>
            <p className="text-[#4a4a4a] text-lg font-light max-w-2xl mx-auto">
                {t(
                  "We don't just build houses; we curate lifestyles. Our comprehensive four-step process ensures every detail aligns with your vision of the perfect home.",
                  "我们不仅建造房屋；我们策划生活方式。我们全面的四步流程确保每一个细节都符合您对完美家园的愿景。"
                )}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <div className="flex gap-4">
                    <div className="mt-1">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2C241F] text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{t("Discovery & Vision", "探索与愿景")}</h3>
                        <p className="text-gray-600 font-light">{t("We begin with deep listening. Understanding your lifestyle, your needs for light, space, and functionality is paramount.", "我们从深度倾听开始。了解您的生活方式、对光线、空间和功能的需求至关重要。")}</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="mt-1">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2C241F] text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{t("Concept & 3D Modeling", "概念与3D建模")}</h3>
                        <p className="text-gray-600 font-light">{t("Using state-of-the-art WebGL technology, we present fully interactive 3D models of your future home before a single brick is laid.", "使用最先进的 WebGL 技术，我们在砌砖之前就为您呈现未来家园的全交互式 3D 模型。")}</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="mt-1">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2C241F] text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{t("Material Selection", "材料甄选")}</h3>
                        <p className="text-gray-600 font-light">{t("We source sustainable, high-quality materials from around the globe, ensuring longevity and eco-friendliness.", "我们从全球采购可持续、高质量的材料，确保耐用性和生态友好性。")}</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="mt-1">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2C241F] text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{t("Execution & Handover", "施工与交付")}</h3>
                        <p className="text-gray-600 font-light">{t("Our project managers oversee every step of construction, guaranteeing a pixel-perfect realization of the design.", "我们的项目经理监督施工的每一步，确保设计的完美实现。")}</p>
                    </div>
                </div>
            </div>

            <div className="bg-white/40 rounded-3xl p-8 border border-white/50 flex flex-col justify-center">
                <h3 className="font-serif-display text-3xl mb-6">{t("Why Choose Demo?", "为什么选择 Demo?")}</h3>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#2C241F]" />
                        <span className="text-gray-700">{t("Award-winning sustainable architecture", "屡获殊荣的可持续建筑")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#2C241F]" />
                        <span className="text-gray-700">{t("Complete transparency in pricing", "价格完全透明")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#2C241F]" />
                        <span className="text-gray-700">{t("Dedicated post-completion support", "专门的完工后支持")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#2C241F]" />
                        <span className="text-gray-700">{t("Global sourcing network", "全球采购网络")}</span>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};