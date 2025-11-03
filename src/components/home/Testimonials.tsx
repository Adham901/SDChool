/* =======================
   💬 Testimonials
   ======================= */
   'use client';
import React from 'react';

import Image from 'next/image';
const Testimonials = () => (
  <section className="slide-section opacity-0 transform transition-all duration-700 py-16 bg-[#111827] text-gray-300">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
      {/* العنوان */}
      <h2 className="text-3xl font-bold text-white text-center relative">
  آراء طلابنا
  <span className="block mx-auto w-20 h-1 bg-gradient-to-r from-rose-500 to-blue-400 mt-3 rounded-full"></span>
</h2>

      <p className="mt-3 text-gray-300 text-base max-w-2xl mx-auto">
        بعض الآراء الفعلية ستزيد من مصداقيتك — ضع هنا تعليقات العملاء أو لقطات من محادثات التوصية.
      </p>

      {/* الصورة بإطار متدرج جميل */}
      <div className="mt-12 flex justify-center">
        <div className="relative w-full max-w-3xl rounded-2xl p-[3px] bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500 animate-gradient-slow">
        <div className="rounded-2xl overflow-hidden bg-[#111827] flex items-center justify-center">
  <Image
    src="/opinion.jpg" // ← صورة الريفيوهات
    alt="Testimonials"
    width={800} // تقدر تعدّل الأبعاد حسب تصميمك
    height={600}
    className="rounded-2xl object-contain"
  />
</div>

        </div>
      </div>
    </div>
  </section>
);

export default Testimonials