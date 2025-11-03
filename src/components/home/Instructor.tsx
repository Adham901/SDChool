/* =======================
   👨‍🏫 Instructor
   ======================= */
import React from 'react';
import Image from 'next/image';

const Instructor = () => (
  <section className="slide-section opacity-0 transform transition-all duration-700 py-16 bg-[#1a1a1a] text-gray-300">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide text-center relative">
  عن المحاضر
  <span className="block mx-auto w-20 h-1 bg-gradient-to-r from-rose-500 to-blue-400 mt-3 rounded-full"></span>
</h2>

      <p className="mt-3 text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
        DR - MOHAMED ELBAZ — مصمم بصري، مؤسس Para Dental School ووكالات إعلامية متخصصة في المجال الطبي.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center gap-8 justify-center">
        {/* الصورة */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden flex items-center justify-center shadow-lg border-4 border-gray-800">
          <Image
            src="/loading2.jpg"
            alt="Profile"
            fill
            className="object-cover rounded-full"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>

        {/* النصوص */}
        <div className="text-center sm:text-left max-w-md">
          <div className="font-bold text-xl sm:text-2xl text-white">{`MOHAMED ELBAZ`}</div>
          <div className="text-sm sm:text-base text-rose-400 mt-1">
            Visual & Motion Designer — Founder of Para Dental School
          </div>
          <ul className="mt-4 space-y-1 text-sm sm:text-base text-gray-300">
            <li>Graphic & Motion Design</li>
            <li>3D / CGI / Presentation Design</li>
            <li>Media Buying & Videography</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Instructor;
