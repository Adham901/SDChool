/* =======================
   🌍 Vision & Why PDS Section (Styled)
   ======================= */

'use client';
import React from 'react';

const Vision = () => (
  <section
    id="vision"
    className="slide-section opacity-0 transform transition-all duration-700 py-16 bg-[#111827] text-gray-300"
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* لماذا دبلومة PDS؟ */}
      <div className="mb-20">
        <h2
          className="relative text-3xl sm:text-4xl font-extrabold text-center mb-6 
          bg-gradient-to-r from-rose-500 to-blue-400 bg-clip-text text-transparent tracking-wide"
        >
          لماذا دبلومة <span dir="ltr" className="inline-block text-white">PDS</span>
          <span className="block mx-auto w-20 h-1 bg-gradient-to-r from-rose-500 to-blue-400 mt-3 rounded-full"></span>
        </h2>

        {[
          {
            title: 'دبلومة مهارية متخصصة:',
            desc: 'مصممة للأطباء وطلاب طب الأسنان لامتلاك أدوات العصر: التصميم، البراندينج، والعرض الاحترافي.',
          },
          {
            title: 'نتائج عملية:',
            desc: 'تطبيق مباشر على حالات/عيادات حقيقية + مشاريع بورتفوليو قابلة للنشر.',
          },
          {
            title: 'مرونة كاملة:',
            desc: 'كورسات مسجلة، دخول مدى الحياة، تحديثات مستمرة، وشهادة إنهاء.',
          },
          {
            title: 'تأثير مهني فوري:',
            desc: 'تحسين قبول الحالات، رفع ثقة المريض، وتسريع نمو العيادة والسمعة الأكاديمية.',
          },
        ].map((item, i) => (
          <p
            key={i}
            dir="rtl"
            className="mt-4 text-gray-300 text-base sm:text-lg max-w-3xl mx-auto text-center leading-relaxed"
          >
            <span className="font-semibold text-white">{item.title}</span> {item.desc}
          </p>
        ))}
      </div>

      {/* رؤيتنا في PDS */}
   <h2
  dir="rtl"
  className="relative text-3xl sm:text-4xl font-extrabold text-center mb-6 
  bg-gradient-to-r from-rose-400 to-blue-500 bg-clip-text text-transparent tracking-wide"
>
  رؤيتنا في <span dir="ltr" className="inline-block text-white">PDS</span>
  <span className="block mx-auto w-20 h-1 bg-gradient-to-r from-blue-400 to-rose-500 mt-3 rounded-full"></span>
</h2>


      <p
        dir="rtl"
        className="mt-4 text-gray-300 text-base sm:text-lg max-w-3xl mx-auto text-center leading-relaxed"
      >
        نؤمن بأن طالب طب الأسنان ليس مضطرًا لانتظار التخرج لبدء العمل. تهدف دبلومتنا إلى تمكين الطلاب
        والأطباء بمهارات عملية تفتح أمامهم فرص عمل حقيقية، وتمنحهم قدرة على بناء علامة شخصية ومشاريع
        جانبية مربحة.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { title: 'تمكين مهني', desc: 'مهارات قابلة للبيع فورًا' },
          { title: 'تعليم تطبيقي', desc: 'مشاريع بورتفوليو على حالات حقيقية' },
          { title: 'دعم طويل الأمد', desc: 'مجتمع وتحديثات مجانية مدى الحياة' },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#1f2937] p-6 rounded-lg text-center shadow border border-gray-700 hover:border-rose-500 transition"
          >
            <div className="font-semibold text-white text-lg">{item.title}</div>
            <div className="text-sm text-gray-400 mt-2">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Vision;
