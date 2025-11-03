/* =======================
   💡 Golden Idea & Structure Section
   ======================= */

'use client';
import React from 'react';
import { Star, Clock, FileText, Globe } from 'lucide-react';

const GoldenIdeaSection = () => {
  const highlights = [
    {
      icon: <Star className="w-6 h-6 text-white" />,
      title: 'الفكرة الذهبية',
      desc: 'نفّذ مشروعين صغيرين بسعر معقول من مهاراتك الجديدة = استرجاع استثمارك بالكامل. ثم كل مشروع إضافي = أرباح.',
      bg: 'from-rose-500 to-blue-400',
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: 'المدة',
      desc: 'متابعة ذاتية (Self-paced) – توصية: 6–8 أسابيع.',
      bg: 'from-blue-400 to-rose-500',
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: 'الآلية',
      desc: 'مشاهدة مسجلة + ملفات قابلة للتحميل + تمارين تطبيقية + مراجعات دورية (لايف/مجتمع).',
      bg: 'from-rose-500 to-blue-400',
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: 'الوصول واللغة',
      desc: 'الوصول: مدى الحياة + تحديثات مستقبلية. اللغة: عربي مع مصطلحات إنجليزية متخصصة.',
      bg: 'from-blue-400 to-rose-500',
    },
  ];

  return (
    <section
      id="golden-idea"
      className="slide-section opacity-0 transform transition-all duration-700 py-16 bg-[#111827] text-gray-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2
          dir="rtl"
          className="relative text-3xl sm:text-4xl font-extrabold text-center mb-12 text-white tracking-wide"
        >
          الفكرة الذهبية وهيكل الدبلومة
          <span className="block mx-auto w-20 h-1 bg-gradient-to-r from-rose-500 to-blue-400 mt-3 rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <div
              key={i}
              dir="rtl"
              className={`p-6 rounded-xl shadow-lg border border-gray-700 bg-gradient-to-br ${item.bg} hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center`}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-200 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoldenIdeaSection;
