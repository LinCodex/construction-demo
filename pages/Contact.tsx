import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex-grow flex flex-col items-center justify-center px-6 py-20 min-h-[80vh] z-10">
       <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          
          {/* Info Card */}
          <div className="bg-[#2C241F] text-[#F5F5F0] rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-between shadow-2xl">
             <div>
                <h1 className="font-serif-display text-4xl md:text-5xl mb-8">{t("Get in Touch", "保持联系")}</h1>
                <p className="text-white/70 font-light text-lg mb-12">
                   {t("We are currently accepting new projects for 2024-2025. Let's discuss your vision.", "我们目前正在接受 2024-2025 年的新项目。让我们讨论您的愿景。")}
                </p>
             </div>
             
             <div className="space-y-6">
                <div className="flex items-start gap-4">
                   <Mail className="w-6 h-6 text-white/50 mt-1" />
                   <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-1">{t("Email", "电子邮件")}</p>
                      <p className="text-xl font-light">hello@demo.com</p>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <Phone className="w-6 h-6 text-white/50 mt-1" />
                   <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-1">{t("Phone", "电话")}</p>
                      <p className="text-xl font-light">+1 (555) 000-1234</p>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <MapPin className="w-6 h-6 text-white/50 mt-1" />
                   <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-1">{t("Office", "办公室")}</p>
                      <p className="text-xl font-light">88 Architecture Blvd.<br/>Los Angeles, CA 90012</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Map/Image Placeholder */}
          <div className="rounded-[2.5rem] overflow-hidden bg-white/20 backdrop-blur-sm border border-white/30 min-h-[400px] relative">
             <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
                alt="Office Interior" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
             />
             <div className="absolute inset-0 bg-black/10"></div>
          </div>

       </div>
    </div>
  );
};