/* =======================
   💰 ROI Section
   ======================= */

'use client';
import React from 'react';
import { User, UserCheck, Users, Wrench , Check } from 'lucide-react';

const ROISection = () => {
  const roiItems = [
    {
      icon: <User className="w-8 h-8 text-rose-400 mx-auto mb-3" />,
      title: 'طالب',
      points: [
        'هتتعلم أدوات موشن وتصميم تقدر تقدمها كـ خدمات بسيطة لأطباء.',
        'تنفيذ 5 فيديوهات موشن فقط لأطباء في الكلية أو تدريباتك = استرجاع المبلغ.',
        'تصميم 3 عروض تقديمية لأصحابك أو مشاريع جماعية = قيمة مماثلة.',
        'تقدر تعمل باكيدج محتوى لطبيب واحد (بروفايل، فيديو، بوستات) مقابل أجر يغطي الدبلومة.',
        'تبدأ تدريب بسيط مدفوع لطلبة أصغر منك يطلبوا مساعدتك في التصميم/العروض.',
      ],
    },
    {
      icon: <UserCheck className="w-8 h-8 text-rose-400 mx-auto mb-3" />,
      title: 'طبيب امتياز',
      points: [
        'هتستخدم مهاراتك في بناء محتوى للعيادة مباشرة.',
        'تنفيذ باكيدج شهرية: 6 بوستات + 2 ريلز = سعر الدبلومه',
        'شراء الدبلومه وتعليمها لاحد المساعدين معك يوفر عليك الاشتراك مع شركات تسويق مدى الحياة.',
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-rose-400 mx-auto mb-3" />,
      title: 'طبيب محاضر',
      points: [
        'تبني عروض علمية جذابة وسريعة التجهيز (بحث، حالة، بوستر).',
        'تقدر تعرض نموذجك في المؤتمرات وتحوّله إلى مصدر دخل جانبي.',
        'شراء الدبلومه وتعليمها لاحد المساعدين معك يوفر عليك الاشتراك مع شركات تسويق مدى الحياة.',
      ],
    },
    {
      icon: <Wrench  className="w-8 h-8 text-rose-400 mx-auto mb-3" />,
      title: 'فني معمل أسنان',
      points: [
        'تعمل كتالوج رقمي موحّد للخدمات، توزعه على العيادات.',
        'تعمل فيديوهات موشن تشرح خطوات تصنيع التركيبات.',
        'تعرض حزمة تصميم محتوى للمعمل (فلايرز، كاروسيل، سوشيال) تغطي تكلفة الدبلومة.',
        'تبني عروض تقديمية لمعامل أو مستثمرين أو شراكات.',
        'تبدأ تدريب بسيط مدفوع لطلبة أصغر منك يطلبوا مساعدتك في التصميم/العروض.',
      ],
    },
  ];

  return (
    <section
      id="roi"
      className="slide-section opacity-0 transform transition-all duration-700 py-16 bg-[#111827] text-gray-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* العنوان */}
        <h2
          dir="rtl"
          className="relative text-3xl sm:text-4xl font-extrabold text-center mb-10 text-white tracking-wide"
        >
          كيف تسترجع قيمة الاستثمار في الدبلومة
          <span className="block mx-auto w-20 h-1 bg-gradient-to-r from-rose-500 to-blue-400 mt-3 rounded-full"></span>
        </h2>

        
        {/* الكروت */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
  {roiItems.map((item, i) => (
    <div
      key={i}
      dir="rtl"
      className="bg-[#1f2937] p-6 rounded-lg shadow-lg border border-gray-700 hover:border-rose-500 transition flex flex-col"
    >
      {item.icon}
      <h3 className="text-white font-semibold text-lg text-center mb-3">{item.title}</h3>
      <ul className="text-sm text-gray-400 space-y-2 leading-relaxed">
        {item.points.map((point, j) => (
          <li key={j} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-rose-400 mt-1 flex-shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default ROISection;
