'use client';
import React, { useEffect, useState } from 'react';
import { Check, Play, Users, BookOpen, Menu, X } from 'lucide-react';

/* =======================
   🎞️ Animation Hook
   ======================= */
function useSlideAnimation() {
  useEffect(() => {
    const sections = document.querySelectorAll('.slide-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((s, i) => {
      if (i % 2 === 0) s.classList.add('slide-right');
      else s.classList.add('slide-left');
      observer.observe(s);
    });
  }, []);

  // navbar scroll color
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const changeNav = () => {
      if (window.scrollY > 50) {
        navbar?.classList.add('bg-[#1f2937]', 'shadow-lg', 'backdrop-blur-md');
      } else {
        navbar?.classList.remove('bg-[#1f2937]', 'shadow-lg', 'backdrop-blur-md');
      }
    };
    window.addEventListener('scroll', changeNav);
    return () => window.removeEventListener('scroll', changeNav);
  }, []);
}

/* =======================
   🔝 Navbar Component
   ======================= */
const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500 animate-fadeDown bg-transparent text-gray-100"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo */}
   <a href="#" className="font-bold text-lg tracking-wide">
  <span className="text-rose-500">PDS</span>
  <span className="text-gray-100">chool</span>
</a>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#vision" className="hover:text-rose-400 transition">الرؤية</a>
          <a href="#courses" className="hover:text-rose-400 transition">الدورات</a>
          <a href="#faq" className="hover:text-rose-400 transition">الأسئلة</a>
          <a href="#enroll" className="hover:text-rose-400 transition">تسجيل</a>
          <a
            href="#enroll"
            className="ml-4 bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition text-sm font-semibold"
          >
            ابدأ الآن
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-100 p-2 rounded hover:bg-gray-700 transition"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Drawer */}
        {open && (
          <div className="absolute top-full right-0 bg-[#1f2937] text-gray-100 rounded-bl-xl w-48 py-3 px-4 shadow-lg transition-all duration-500">
            <a href="#vision" onClick={() => setOpen(false)} className="block py-2 hover:text-rose-400">الرؤية</a>
            <a href="#courses" onClick={() => setOpen(false)} className="block py-2 hover:text-rose-400">الدورات</a>
            <a href="#faq" onClick={() => setOpen(false)} className="block py-2 hover:text-rose-400">الأسئلة</a>
            <a href="#enroll" onClick={() => setOpen(false)} className="block py-2 hover:text-rose-400">تسجيل</a>
            <a
              href="#enroll"
              className="mt-2 inline-block w-full text-center bg-rose-500 py-2 rounded-md font-semibold hover:bg-rose-600"
            >
              ابدأ الآن
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

/* =======================
   🎯 Hero Section
   ======================= */
const Hero = () => (
  <section className="bg-gradient-to-b from-[#111827] to-[#1f2937] text-gray-300 pt-32 pb-20 ">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-snug">
          Para Dental School — <span className="text-rose-500">مهارات بصرية</span> لطلاب وأطباء طب الأسنان
        </h1>
        <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-xl">
          دبلومة تطبيقية في الموشن، الجرافيك، والبرزنتيشن مخصصة لقطاع الأسنان. تطبيق عملي، بورتفوليو جاهز، وفرص دخل حقيقي.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#enroll"
            className="inline-flex justify-center items-center gap-3 bg-rose-500 text-white px-5 py-3 rounded-md shadow-lg hover:bg-rose-600 text-sm sm:text-base transition"
          >
            ابدأ الآن <Play className="w-4 h-4" />
          </a>
          <a
            href="#courses"
            className="inline-flex justify-center items-center gap-3 border border-rose-500 text-rose-400 px-5 py-3 rounded-md hover:bg-rose-600 hover:text-white transition text-sm sm:text-base"
          >
            استعرض الدورات
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-300">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-rose-400" />
            <div>
              <div className="font-semibold text-white">مجتمع تعليمي</div>
              <div className="text-xs text-gray-400">دعم ومتابعة ومشاركات طلاب</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-rose-400" />
            <div>
              <div className="font-semibold text-white">محتوى مسجل</div>
              <div className="text-xs text-gray-400">وصول مدى الحياة + تحديثات مجانية</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-6 lg:mt-0">
        <div className="bg-[#1f2937] rounded-2xl shadow-xl p-5 sm:p-6 border border-gray-700">
        <div
  className="h-56 sm:h-64 md:h-72 rounded-xl border border-gray-700 flex items-center justify-center bg-center bg-cover relative overflow-hidden"
  style={{
    backgroundImage: "url('/homepage.jpg')", 
     }}
>
  

 
      </div>


          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-[#2d3748] rounded-lg text-gray-300">
              <div className="font-semibold text-white">مدة مقترحة</div>
              <div className="text-xs">6–8 أسابيع (Self-paced)</div>
            </div>
            <div className="p-3 bg-[#2d3748] rounded-lg text-gray-300">
              <div className="font-semibold text-white">الأسعار</div>
              <div className="text-xs">خطة دفع مرنة & عروض مبكرة</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { useSlideAnimation, Navbar, Hero };
/* =======================
   🌍 Vision Section
   ======================= */
const Vision = () => (
  <section id="vision" className="slide-section opacity-0 transform transition-all duration-700 py-16 bg-[#111827] text-gray-300">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="text-3xl font-bold text-white text-center">رؤيتنا في PDS</h2>
      <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-3xl mx-auto text-center">
        نؤمن بأن طالب طب الأسنان ليس مضطرًا لانتظار التخرج لبدء العمل. تهدف دبلومتنا إلى تمكين الطلاب والأطباء بمهارات عملية تفتح أمامهم فرص عمل حقيقية، وتمنحهم قدرة على بناء علامة شخصية ومشاريع جانبية مربحة.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { title: 'تمكين مهني', desc: 'مهارات قابلة للبيع فورًا' },
          { title: 'تعليم تطبيقي', desc: 'مشاريع بورتفوليو على حالات حقيقية' },
          { title: 'دعم طويل الأمد', desc: 'مجتمع وتحديثات مجانية مدى الحياة' },
        ].map((item, i) => (
          <div key={i} className="bg-[#1f2937] p-6 rounded-lg text-center shadow border border-gray-700 hover:border-rose-500 transition">
            <div className="font-semibold text-white">{item.title}</div>
            <div className="text-sm text-gray-400 mt-2">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* =======================
   ❓ Why PDS
   ======================= */
const WhyPDS = () => (
  <section className="slide-section opacity-0 transform transition-all duration-700 py-16 bg-[#1a1a1a] text-gray-300">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
      <div className="bg-[#1f2937] p-6 rounded-xl shadow border border-gray-700">
        <h3 className="text-2xl font-bold text-white">لماذا دبلومة PDS؟</h3>
        <p className="mt-3 text-gray-300 text-base">دبلومة مهنية مخصصة لطلاب وأطباء طب الأسنان: تصميم، براندينج، وعرض احترافي مع تطبيق عملي على حالات حقيقية.</p>
        <ul className="mt-5 space-y-2 text-sm text-gray-300">
          <li className="flex items-start gap-3"><Check className="w-4 h-4 text-rose-400 mt-1" /> نتائج عملية + بورتفوليو</li>
          <li className="flex items-start gap-3"><Check className="w-4 h-4 text-rose-400 mt-1" /> مرونة التعلم + وصول مدى الحياة</li>
          <li className="flex items-start gap-3"><Check className="w-4 h-4 text-rose-400 mt-1" /> تأثير مهني فوري</li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-[#1f2937] to-[#111827] p-6 rounded-xl shadow border border-gray-700">
        <h3 className="text-2xl font-bold text-white">نتائج سريعة — كيف تسترد استثمارك؟</h3>
        <p className="mt-3 text-gray-300 text-base">
          تنفيذ مشاريع بسيطة للزملاء أو العيادة، حزم محتوى شهرية، أو تقديم خدمات تصميم كمدخل دخل إضافي.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { role: 'طالب', desc: 'تصميم 5 فيديوهات أو 3 عروض = استرجاع التكلفة' },
            { role: 'طبيب عيادة', desc: 'حزمة محتوى شهري تغطي تكاليف الدبلومة' },
            { role: 'فني معمل', desc: 'باكيدجات تصميم للمعمل لتحويلها لعملاء' },
          ].map((r, i) => (
            <div key={i} className="p-4 bg-[#2d3748] rounded-lg shadow-sm text-center border border-gray-700 hover:border-rose-400 transition">
              <div className="font-semibold text-white">{r.role}</div>
              <div className="text-sm mt-2 text-gray-300">{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* =======================
   🧩 Courses Section
   ======================= */
const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)

  const courses = [
    {
      id: 'motion-desktop',
      title: 'Dental Motion Design ',
      image: '/dentalmotion.jpg',
      pitch: 'تعلم تصميم فيديوهات موشن احترافية لشرح الحالات والتسويق للعيادات',
    },
    {
      id: 'presentation',
      title: 'Dental Presentation Design',
      image: '/homepage.jpg',
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
  ]

  const courseDetails: Record<
    string,
    {
      title: string
      subtitle: string
      description: string
      sections: { title: string; items: string[] }[]
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
          items: ['جهاز لابتوب RAM 16+', 'كارت شاشة قوي', 'اشتراك Adobe Creative Cloud'],
        },
        {
          title: 'أهمية الكورس:',
          items: [
            'احتراف عمل فيديوهات تسويقيه للعيادات والمراكز',
            'تكوين شبكه علاقات مع الاطباء من خلال تقديم خدماتك',
            'التميز الاكاديمي وشرح الحالات باسلوب بصري جذاب',
            'تسويق شخصي قوي علي السوشيال ميديا',
            'تطوير مهارات عرض الحالات والاقناع',
            'ميزه تنافسيه في سوق العمل ',
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
            'احتراف تقديم الابحاث والحالات في المؤتمرات و الجامعات',
            'جذب الانتباه والتاثير في لجان التحكيم او الحضور',
            'دعم خطط العلاج ورفع ثقه المرضي',
            'مهارة اساسية لاي طبيب بيشتغل او بيعلم',
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
            'تحويل العياده الي براند بصري مميز',
            'ابراز العروض والخدمات بشكل يشد الانتباه',
            'توفير تكاليف التصميم الخارجي والتحكم الكامل في محتواك',
            'جذب العالملين وتحويلهم لمرضي فعليين',
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
            'تقدر تعمل فيديوهات توضيحيه للحالات او العروض ف دقائق',
            'مناسب جدا للناس الي معندهاش لابتوب او وقت',
            'بدايه ذكيه للدخل اضافي من تصميم الفيديوهات',
            'قوة براند شخصي علي السوشيل ميديا من غير مصاريف عالية'
          ],
        },
      ],
    },
  }

  const selected = selectedCourse ? courseDetails[selectedCourse] : null

  return (
    <section
      id="courses"
      className="slide-section opacity-0 transform transition-all duration-700 py-16 bg-[#111827] text-gray-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* العنوان الرئيسي */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">الدورات</h2>
          <p className="mt-2 text-gray-300 text-base">
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
              <img src={c.image} alt={c.title} className="w-full h-40 object-cover" />
              
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
                <ul className="space-y-1 text-sm">
                  {sec.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-rose-400 mt-1" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

/* =======================
   🧱 Diploma Structure
   ======================= */
const DiplomaStructure = () => (
  <section className="slide-section opacity-0 transform transition-all duration-700 py-16 bg-[#1a1a1a] text-gray-300">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="text-3xl font-bold text-white text-center">هيكل الدبلومة والمدة المقترحة</h2>
      <p className="mt-3 text-gray-300 text-base text-center max-w-3xl mx-auto">
        المدة: متابعة ذاتية (Self-paced) — التوصية: 6–8 أسابيع. الآلية: فيديوهات مسجلة، ملفات قابلة للتحميل، تمارين تطبيقية، مراجعات دورية (لايف/مجتمع).
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { title: 'الأسابيع 1–2', desc: 'أساسيات التصميم والموشن، مشاريع صغيرة سريعة' },
          { title: 'الأسابيع 3–5', desc: 'مشروعات تطبيقية على حالات حقيقية وبناء بورتفوليو' },
          { title: 'الأسبوع 6–8', desc: 'تحسين المشاريع، نصائح تسويق، وتسليم البورتفوليو' },
        ].map((b, i) => (
          <div key={i} className="bg-[#1f2937] p-5 rounded-lg text-center border border-gray-700 hover:border-rose-500 transition">
            <div className="font-semibold text-white">{b.title}</div>
            <div className="text-sm mt-2 text-gray-300">{b.desc}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#1f2937] p-5 rounded-lg border border-gray-700">
          <div className="font-semibold text-white">ماذا ستتعلم عمليًا؟</div>
          <ul className="mt-3 text-sm text-gray-300 space-y-1">
            <li>إنتاج فيديو موشن لحالة سريرية</li>
            <li>بناء عرض تقديمي احترافي للحالات والمؤتمرات</li>
            <li>تصميم محتوى سوشيال وتحويل المتابعين لمرضى</li>
          </ul>
        </div>

        <div className="bg-[#1f2937] p-5 rounded-lg border border-gray-700">
          <div className="font-semibold text-white">الوصول والتحديثات</div>
          <div className="text-sm text-gray-300 mt-2">وصول مدى الحياة + تحديثات مستقبلية مجانية ودعم مجتمعي</div>
        </div>
      </div>
    </div>
  </section>
);

/* =======================
   ⚙️ Tech Specs Section
   ======================= */
const TechSpecs = () => (
  <section className="slide-section opacity-0 transform transition-all duration-700 py-16 bg-[#111827] text-gray-300">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <h3 className="text-3xl font-bold text-white text-center">متطلبات الجهاز (لكورس الموشن)</h3>
      <div className="mt-8 max-w-3xl mx-auto text-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { label: 'المعالج (CPU)', value: 'يفضل: Intel i7/i9 (جيل 11+) أو AMD Ryzen 7/9' },
          { label: 'الذاكرة (RAM)', value: 'الحد الأدنى: 16GB — الموصى به: 32GB' },
          { label: 'كارت الشاشة (GPU)', value: 'يفضل: NVIDIA RTX 3060 أو أعلى — يدعم CUDA/Metal للتسريع' },
          { label: 'التخزين (SSD)', value: 'يفضل: 512GB SSD أو أعلى — نظام + ملفات مشاريع منفصلة' },
        ].map((spec, i) => (
          <div key={i} className="p-4 bg-[#1f2937] rounded-lg border border-gray-700 hover:border-rose-500 transition">
            <div className="font-semibold text-white">{spec.label}</div>
            <div className="mt-1 text-gray-300">{spec.value}</div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-xs text-gray-400 text-center">
        * المتطلبات ضرورية فقط للكورس على اللابتوب — نسخة الهاتف لا تحتاج مواصفات عالية.
      </p>
    </div>
  </section>
);

export { Vision, WhyPDS, CoursesSection, DiplomaStructure, TechSpecs };
/* =======================
   💡 Marketing Tips
   ======================= */
const MarketingTips = () => (
  <section className="slide-section opacity-0 transform transition-all duration-700 py-16 bg-[#1a1a1a] text-gray-300">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="text-3xl font-bold text-white text-center">كيف تصل إلى العميل المناسب</h2>
      <p className="mt-3 text-gray-300 text-base text-center max-w-3xl mx-auto">نصائح عملية لبناء جمهورك وبداية تقديم خدماتك بسرعة.</p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { title: 'التواصل الشخصي', desc: 'ابدأ بعرض خدماتك مجانًا لأطباء في الكلية أو الزملاء لبناء بورتفوليو وتوصيات.' },
          { title: 'المحتوى التعليمي', desc: 'انشر فيديوهات قصيرة أثناء تعلمك — شرح أدوات أو خطوات تصميم لجذب انتباه الأطباء.' },
          { title: 'التعاون المجاني', desc: 'تعاون مع أطباء مشهورين محليًا على مشروع صغير — سيجلب لك عملاء جدد.' },
          { title: 'العروض المباشرة', desc: 'اعرض باكج شهري لوحدة عيادات: بوستات + ريلز مقابل سعر يغطي الدبلومة.' },
        ].map((t, i) => (
          <div key={i} className="bg-[#1f2937] p-5 rounded-lg border border-gray-700 hover:border-rose-500 transition">
            <div className="font-semibold text-white">{t.title}</div>
            <div className="text-sm text-gray-300 mt-2">{t.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* =======================
   💬 Testimonials
   ======================= */
const Testimonials = () => (
  <section className="slide-section opacity-0 transform transition-all duration-700 py-16 bg-[#111827] text-gray-300">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
      {/* العنوان */}
      <h2 className="text-3xl font-bold text-white">آراء طلابنا</h2>
      <p className="mt-3 text-gray-300 text-base max-w-2xl mx-auto">
        بعض الآراء الفعلية ستزيد من مصداقيتك — ضع هنا تعليقات العملاء أو لقطات من محادثات التوصية.
      </p>

      {/* الصورة بإطار متدرج جميل */}
      <div className="mt-12 flex justify-center">
        <div className="relative w-full max-w-3xl rounded-2xl p-[3px] bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500 animate-gradient-slow">
          <div className="rounded-2xl overflow-hidden bg-[#111827]">
            <img
              src="/opinion.jpg" // ← حط هنا صورة الريفيوهات المجمعة
              alt="Testimonials"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);


/* =======================
   🎯 Audience
   ======================= */
const Audience = () => (
  <section className="slide-section opacity-0 transform transition-all duration-700 py-16 bg-[#1a1a1a] text-gray-300 text-center">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="text-3xl font-bold text-white">لمن هذه الدبلومة؟</h2>
      <p className="mt-2 text-gray-300 text-base max-w-2xl mx-auto">طلاب طب الأسنان، أطباء، فنيين، وأصحاب عيادات — دبلومة تبني مهارات عملية لتحويلها لخدمات قابلة للبيع.</p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {['طلاب طب الأسنان', 'أطباء عامون', 'أصحاب العيادات', 'فنيين معامل الأسنان'].map((t, i) => (
          <div key={i} className="bg-[#1f2937] p-6 rounded-lg border border-gray-700 hover:border-rose-500 transition">
            <div className="font-semibold text-white">{t}</div>
            <div className="text-sm text-gray-400 mt-2">استفادة عملية وسرعة في توليد دخل إضافي</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* =======================
   👨‍🏫 Instructor
   ======================= */
const Instructor = () => (
  <section className="slide-section opacity-0 transform transition-all duration-700 py-16 bg-[#111827] text-gray-300 text-center">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl font-bold text-white">عن المحاضر</h2>
      <p className="mt-3 text-gray-300 text-base">DR - MOHAMED ELBAZ — مصمم بصري، مؤسس Para Dental School ووكالات إعلامية متخصصة في المجال الطبي.</p>

      <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 justify-center">
        <div className="w-28 h-28 sm:w-36 sm:h-36 bg-gray-700 rounded-full flex items-center justify-center text-gray-400">
            <img
                src="/loading2.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
        </div>
        <div className="text-center sm:text-left">
          <div className="font-semibold text-lg text-white">MOHAMED ELBAZ</div>
          <div className="text-sm text-gray-400 mt-1">Visual & Motion Designer — Founder of Para Dental School</div>
          <ul className="mt-3 space-y-1 text-sm text-gray-300">
            <li>Graphic & Motion Design</li>
            <li>3D / CGI / Presentation Design</li>
            <li>Media Buying & Videography</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/* =======================
   ❓ FAQ Section
   ======================= */
const FAQ = () => (
  <section id="faq" className="slide-section opacity-0 transform transition-all duration-700 py-16 bg-[#1a1a1a] text-gray-300">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <h3 className="text-2xl font-bold text-white text-center">الأسئلة الشائعة</h3>
      <div className="mt-8 space-y-4">
        {[
          { q: 'هل المحتوى مسجل؟', a: 'نعم، مع تحديثات مستمرة ووصول مدى الحياة.' },
          { q: 'هل أحتاج خبرة تصميم؟', a: 'لا، نبدأ من الأساسيات ونتدرج.' },
          { q: 'هل أحتاج لابتوب حديث؟', a: 'بالنسبه لكورس الموشن ديزاين باللابتوب نعم تحتاج جهاز عالي الامكانيات لان البرامج المطلوبه تحتاج رام عالي ، ولكن مع ذلك بعض طلابنا تمكنوا من تنفيذ تصاميم علي احهزه ضعيفه جدا .' },
          { q: 'هل هناك شهادة؟', a: 'نعم، شهادة إنهاء لكل متدرب اجتاز المتطلبات.' },
          {
  q: 'ما هي المواصفات المثالية للابتوب عالي الأداء؟',
  a: `
🧠 **المعالج (CPU):**
يفضل: Intel i7 أو i9 (جيل 11 أو أحدث)
أو: AMD Ryzen 7 / 9  
كل ما زادت الأنوية، زادت سرعة الرندر.

💾 **الرام (RAM):**
الحد الأدنى: 16 GB  
الموصى به: 32 GB (خصوصًا للمشاريع الكبيرة والمؤثرات).

🎮 **كارت الشاشة (GPU):**
يفضل: NVIDIA RTX 3060 أو أعلى  
على الأقل: GTX 1660 أو AMD Radeon RX 6600  
ويُفضل أن يدعم CUDA أو Metal لتسريع الرندر.

⚡ **التخزين (SSD):**
ضروري SSD مش HDD  
يفضل: 512 GB SSD أو أعلى  
ومن الأفضل يكون فيه SSD للنظام وآخر للمشاريع.

📌 **ملحوظة:**
هذه المواصفات مهمة فقط في كورس **الموشن ديزاين باللابتوب**.
`
}
,
        ].map((f, i) => (
          <details key={i} className="border border-gray-700 rounded-lg p-4 text-sm bg-[#1f2937] hover:border-rose-500 transition">
            <summary className="font-medium cursor-pointer text-white">{f.q}</summary>
            <p className="mt-2 whitespace-pre-line text-gray-300">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

/* =======================
   🚀 CTA Section
   ======================= */
const CTA = () => (
  <section id="enroll" className="slide-section opacity-0 transform transition-all duration-700 py-16 bg-rose-600 text-white text-center sm:text-left">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
      <div>
        <h3 className="text-2xl font-bold">جاهز تبني مهارات تربحك؟</h3>
        <p className="mt-2 text-sm text-rose-100 max-w-xl">
          انضم لدبلومة PDS واحصل على أدوات تصميم وموشن وبرزنتيشن جاهزة للتطبيق في العيادات والمؤتمرات.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <a href="#" className="bg-white text-rose-600 px-5 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
          سجل الآن
        </a>
      </div>
    </div>
  </section>
);

/* =======================
   🧩 Footer
   ======================= */
export default function LandingPageDark() {
  useSlideAnimation();

  return (
    <main className="min-h-screen font-sans bg-[#111827]">
      <Navbar />
      <Hero />
      <Vision />
      <WhyPDS />
      <CoursesSection />
      <DiplomaStructure />
      <TechSpecs />
      <MarketingTips />
      <Testimonials />
      <Audience />
      <Instructor />
      <FAQ />
      <CTA />

      <footer className="bg-[#1f2937] border-t border-gray-700 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <div>© {new Date().getFullYear()} Para Dental School</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-rose-400">الشروط</a>
            <a href="#" className="hover:text-rose-400">الخصوصية</a>
            <a href="#" className="hover:text-rose-400">تواصل</a>
          </div>
        </div>
      </footer>

      {/* 🌈 Animations & Global Styles */}
      <style jsx global>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeDown { animation: fadeDown 0.6s ease-out; }

        .slide-section {
          opacity: 0;
          transition: all 0.8s ease-out;
        }
        .slide-right { transform: translateX(80px); }
        .slide-left { transform: translateX(-80px); }
        .slide-section.show {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </main>
  );
}
