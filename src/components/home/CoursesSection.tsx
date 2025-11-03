/* =======================
   🧩 Courses Section (Fixed RTL/LTR Issue)
   ======================= */

'use client';
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import Image from 'next/image';

const wrapLatin = (text: string) => {
  // يقسم النص إلى أجزاء (إنجليزي / عربي)
  const parts = text.split(/([A-Za-z0-9\-\+\.\(\)\/ ]+)/g);
  return parts.map((part, i) =>
    /[A-Za-z0-9]/.test(part) ? (
      <span key={i} dir="ltr" className="inline-block">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const courses = [
    {
      id: 'motion-desktop',
      title: 'Dental Motion Design',
      image: '/dentalmotion.jpg',
      pitch: 'تعلم تصميم فيديوهات موشن احترافية لشرح الحالات والتسويق للعيادات',
    },
    {
      id: 'presentation',
      title: 'Dental Presentation Design',
      image: '/Homepage.jpg',
      pitch: 'صمم عروض تقديمية علمية وسريرية احترافية للأطباء والمحاضرين',
    },
    {
      id: 'graphic',
      title: 'Dental Graphic Design',
      image: '/dental2.jpg',
      pitch: 'تعلم تصميم الهوية البصرية والبوستات التسويقية لعيادات الأسنان',
    },
    {
      id: 'motion-phone',
      title: 'Dental Motion Design With Phone',
      image: '/dentalwithphone.jpg',
      pitch: 'صمم فيديوهات سريعة باستخدام الهاتف فقط قبل/ بعد الحالات',
    },
  ];

  const courseDetails: Record<
    string,
    {
      title: string;
      subtitle: string;
      description: string;
      sections: { title: string; items: string[] }[];
    }
  > = {
    'motion-desktop': {
      title: 'Dental Motion Design',
      subtitle: 'إنتاج فيديوهات تعليمية وتسويقية متقدمة',
      description:
        'هذا الكورس يتيح لك احتراف تصميم فيديوهات موشن ديزاين متخصصة لطب الأسنان باستخدام برامج أدوبي، مع تعلم كيفية تحويل الحالات الطبية إلى فيديو جذاب ومفهوم.',
      sections: [
        { title: 'البرامج المستخدمة:', items: ['Adobe After Effects', 'Adobe Illustrator'] },
        {
          title: 'المتطلبات:',
          items: [
            'جهاز لابتوب RAM 16+',
            'كارت شاشة قوي',
            'اشتراك لبرامج ادوبي وسيتم توفيرها ف الكورس بسعر رمزي لتعاون PDS مع شركات مختصه ',
          ],
        },
        {
          title: 'أهمية الكورس:',
          items: [
            'احتراف عمل فيديوهات تسويقية للعيادات والمراكز',
            'تكوين شبكة علاقات مع الأطباء من خلال تقديم خدماتك',
            'التميز الأكاديمي وشرح الحالات بأسلوب بصري جذاب',
            'تسويق شخصي قوي على السوشيال ميديا',
            'تطوير مهارات عرض الحالات والإقناع',
            'ميزة تنافسية في سوق العمل',
          ],
        },
      ],
    },

    presentation: {
      title: 'Dental Presentation Design',
      subtitle: 'العروض التقديمية الطبية والبحثية',
      description:
        'كورس مخصص لتعلم تصميم عروض تقديمية تفاعلية توضح الحالات والعلاجات بأسلوب احترافي بصري وأكاديمي.',
      sections: [
        { title: 'البرامج المستخدمة:', items: ['PowerPoint', 'Adobe Photoshop', 'Canva'] },
        {
          title: 'المتطلبات:',
          items: ['جهاز كمبيوتر / لابتوب', 'إلمام أساسي بالتصميم', 'رغبة في عرض الحالات بشكل جذاب'],
        },
        {
          title: 'أهمية الكورس:',
          items: [
            'احتراف تقديم الأبحاث والحالات في المؤتمرات والجامعات',
            'جذب الانتباه والتأثير في لجان التحكيم أو الحضور',
            'دعم خطط العلاج ورفع ثقة المرضى',
            'مهارة أساسية لأي طبيب يعمل أو يدرّس',
          ],
        },
      ],
    },

    graphic: {
      title: 'Dental Graphic Design',
      subtitle: 'التصميم البصري لهوية العيادات',
      description:
        'في هذا الكورس ستتعلم كيفية تصميم بوستات، إعلانات، وشعارات تساعد في بناء هوية بصرية مميزة لعيادتك أو لعملائك.',
      sections: [
        { title: 'البرامج المستخدمة:', items: ['Adobe Photoshop', 'Adobe Illustrator'] },
        {
          title: 'المتطلبات:',
          items: ['جهاز كمبيوتر متوسط الأداء', 'اهتمام بالتصميم والسوشيال ميديا'],
        },
        {
          title: 'أهمية الكورس:',
          items: [
            'تحويل العيادة إلى براند بصري مميز',
            'إبراز العروض والخدمات بشكل يشد الانتباه',
            'توفير تكاليف التصميم الخارجي والتحكم الكامل في محتواك',
            'جذب العملاء وتحويلهم لمرضى فعليين',
          ],
        },
      ],
    },

    'motion-phone': {
      title: 'Dental Motion Design With Phone',
      subtitle: 'صمم محتوى احترافي باستخدام هاتفك فقط',
      description:
        'كورس عملي لتصميم فيديوهات قبل وبعد الحالات، والإعلانات القصيرة على الهاتف بدون الحاجة لبرامج معقدة.',
      sections: [
        { title: 'التطبيقات المستخدمة:', items: ['CapCut', 'VN Video Editor'] },
        {
          title: 'المتطلبات:',
          items: ['هاتف حديث بكاميرا جيدة', 'تطبيقات مجانية', 'إبداع في العرض'],
        },
        {
          title: 'أهمية الكورس:',
          items: [
            'تقدر تعمل فيديوهات توضيحية للحالات أو العروض في دقائق',
            'مناسب جدًا للناس اللي معندهاش لابتوب أو وقت',
            'بداية ذكية لدخل إضافي من تصميم الفيديوهات',
            'قوة براند شخصي على السوشيال ميديا بدون مصاريف عالية',
          ],
        },
      ],
    },
  };

  const selected = selectedCourse ? courseDetails[selectedCourse] : null;

  return (
    <section
      id="courses"
      dir="rtl"
      className="slide-section opacity-0 transform transition-all duration-700 py-16 bg-[#1a1a1a] text-gray-300"
    >
      <div className="max-w-6xl mx-auto   px-4 sm:px-6">
        {/* العنوان الرئيسي */}
        <div className="text-center ">
          <h2 className="text-3xl font-bold text-white">الدورات
    
  <span className="block mx-auto w-20 h-1 bg-gradient-to-r from-rose-500 to-blue-400 mt-3 rounded-full "></span>
</h2>

         
          <p className="mt-4 text-gray-300 text-base ">
            مجموعة من الدورات العملية التي تبني مهارات قابلة للبيع في سوق طب الأسنان.
          </p>
        </div>

        {/* الكروت */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c) => (
            <article
              key={c.id}
              className="border border-gray-700 rounded-xl overflow-hidden shadow-sm hover:border-rose-500 transition bg-[#1f2937] flex flex-col"
            >
              <div className="relative w-full h-40">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  priority
                />
              </div>

              <div className="flex flex-col justify-between flex-grow p-5 text-center">
                <div>
                  <h3 className="font-semibold text-lg text-white">{c.title}</h3>
                  <p className="text-gray-400 mt-2 text-sm">{c.pitch}</p>
                </div>

                {/* الأزرار */}
                <div className="mt-6 flex justify-center gap-4">
                  <a
                    className="bg-rose-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-rose-600 transition"
                    href="#enroll"
                  >
                    سجل الآن
                  </a>
                  <button
                    className="border border-gray-500 text-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition"
                    onClick={() => setSelectedCourse(c.id)}
                  >
                    تفاصيل
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* المودال */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1f2937] text-gray-200 max-w-2xl w-full rounded-xl p-6 relative">
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold text-white mb-1">{selected.title}</h2>
            <p className="text-rose-400 text-sm mb-4">{selected.subtitle}</p>
            <p className="text-gray-300 mb-6">{selected.description}</p>

            {selected.sections.map((sec, i) => (
              <div key={i} className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">{sec.title}</h3>
                <ul className="space-y-1 text-sm" dir="auto">
                  {sec.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-rose-400 mt-1" />
                      <span className="leading-tight">{wrapLatin(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default CoursesSection;
