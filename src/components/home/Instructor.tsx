/* =======================
   👨‍🏫 Instructor (Compact Card Layout)
   ======================= */
'use client';
import React from 'react';
import Image from 'next/image';

const Instructor = () => (
  <section className="slide-section opacity-0 transform transition-all duration-700 py-16 bg-[#1a1a1a] text-gray-300">
    <div className="max-w-3xl mx-auto px-4 text-center">
      {/* ===== Title ===== */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide mb-8">
        About Me
        <span className="block mx-auto w-20 h-1 bg-red-600 rounded-full mt-2"></span>
      </h2>

      {/* ===== Image ===== */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-gray-700">
        <Image
          src="/loading2.jpg"
          alt="Profile"
          fill
          className="object-cover rounded-full"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>

      {/* ===== Card ===== */}
      <div className="mt-10 bg-[#2a2a2a] text-gray-200 rounded-2xl shadow-lg border border-gray-700 p-6 sm:p-8 text-left space-y-6">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 border-b border-red-600 pb-1 inline-block">
            About
          </h3>
          <p className="text-sm sm:text-base leading-relaxed">
            A visual designer and the founder of <span className="text-white font-semibold">Para Dental School</span> — 
            the first platform in the Middle East focused on teaching visual and media skills for dental professionals.
            <br />
            Specialized in integrating creative tools into dental communication and marketing.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 border-b border-red-600 pb-1 inline-block">
            Skills
          </h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm sm:text-base">
            <p>• Graphic Design</p>
            <p>• Motion Graphics</p>
            <p>• 3D & CGI Design</p>
            <p>• Presentation Design</p>
            <p>• UI/UX Design</p>
            <p>• Videography</p>
            <p>• Video Editing</p>
            <p>• Media Buying</p>
          </div>
        </div>

        {/* Entrepreneur */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 border-b border-red-600 pb-1 inline-block">
            Entrepreneur
          </h3>
          <ul className="text-sm sm:text-base leading-relaxed space-y-1">
            <li>• Founder of Para Dental School (PDS) – The first hub to teach Dental Motion Design in the Middle East.</li>
            <li>• Founder of ZED – A specialized dental marketing agency.</li>
            <li>• Founder of Five Slash – One of the largest cafés in Mansoura, Egypt.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Instructor;
