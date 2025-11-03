/* =======================
   🏫 About PDS Section
   ======================= */

'use client';
import React from 'react';

const AboutPDS = () => (
  <section
    id="about-pds"
    className="slide-section opacity-0 transform transition-all duration-700 py-16  bg-[#1a1a1a] text-gray-300"
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
    <h2
  dir="rtl"
  className="relative text-3xl sm:text-4xl font-extrabold text-center mb-6 
  bg-gradient-to-r from-rose-500 to-blue-400 bg-clip-text text-transparent tracking-wide"
>
  من هي <span dir="ltr" className="inline-block text-white">Para Dental School (PDS)</span>
  <span className="block mx-auto w-20 h-1 bg-gradient-to-r from-rose-500 to-blue-400 mt-3 rounded-full"></span>
</h2>


      <p className="text-gray-300 text-base sm:text-lg max-w-4xl mx-auto text-center leading-relaxed">
        بدأت رحلتنا تحت اسم <span className="text-rose-400 font-semibold">Dentimotion</span> كأول منصة عربية متخصصة في تعليم تصميم الموشن الخاص بطب الأسنان.
        كان هدفنا منذ البداية تزويد أطباء وطلاب طب الأسنان بأداة بصرية قوية ترفع من جودة تواصلهم مع المرضى والهيئات العلمية.
      </p>

      <p className="mt-6 text-gray-300 text-base sm:text-lg max-w-4xl mx-auto text-center leading-relaxed">
        ومع مرور الوقت، لاحظنا التحديات المتزايدة التي تواجه الخريجين: المنافسة المرتفعة، ضعف فرص العمل،
        والحاجة إلى مهارات تتجاوز الجوانب الطبية. ومن هنا، جاءت نقطة التحوّل:
        توسّعنا في تقديم مهارات تطبيقية أخرى تمثّل قيمة حقيقية في سوق العمل.
      </p>

      <p className="mt-6 text-gray-300 text-base sm:text-lg max-w-4xl mx-auto text-center leading-relaxed">
        أعدنا إطلاق المنصة تحت اسم <span className="text-rose-400 font-semibold">Para Dental School (PDS)</span> لتكون أول منصة تعليمية متكاملة في العالم
        تدمج بين طب الأسنان والمهارات الربحية المرتبطة به. نحن لا نعلّم فقط التصميم أو البراندينج—بل نمنحك أدوات بناء مستقبل مهني مستقل ومربح.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {
            title: 'كورسات الدبلومة',
            desc: 'الموشن ديزاين، التصميم الجرافيكي، العروض التقديمية، التصوير الطبي (قريبًا)، البراند الشخصي (قريبًا)، والإعلانات المدفوعة (قريبًا).',
          },
          {
            title: 'تجربة واقعية',
            desc: 'كل ما نُدرّسه هو ناتج من تجارب ميدانية حقيقية مع عيادات وأطباء في الوطن العربي.',
          },
          {
            title: 'رؤية مستقبلية',
            desc: 'نؤمن أن من يتقن هذه المهارات اليوم، يملك ميزة تنافسية حقيقية في سوق الغد.',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#1f2937] p-6 rounded-lg text-center shadow border border-gray-700 hover:border-rose-500 transition"
          >
            <div className="font-semibold text-white text-lg">{item.title}</div>
            <div className="text-sm text-gray-400 mt-3 leading-relaxed">{item.desc}</div>
          </div>
        ))}
      </div>

    <p
  dir="rtl"
  className="mt-10 text-center text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
>
  لذا، فإن <span className="font-semibold text-white">Para Dental School (</span>
  <span dir="ltr" className="inline-block text-rose-400 font-semibold">PDS</span>
  <span className="font-semibold text-white">)</span> ليست مجرد منصة تعليمية—بل منصة
  <span className="font-semibold text-white"> تغيير وتمكين.</span>
</p>

    </div>
  </section>
);

export default AboutPDS;
