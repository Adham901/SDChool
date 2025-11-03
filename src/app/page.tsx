"use client";


import React, { useEffect } from 'react';

import Navbar from '@/components/home/Navbar';
import Hero from '@/components/home/Hero';
import Vision from '@/components/home/Visionsection';
import WhyPDS from '@/components/home/WhyPDS';
import CoursesSection from '@/components/home/CoursesSection';
import DiplomaStructure from '@/components/home/DiplomaStructure';
import TechSpecs from '@/components/home/TechSpecs';
import MarketingTips from '@/components/home/MarketingTips';
import Testimonials from '@/components/home/Testimonials';
import Audience from '@/components/home/Audience';
import Instructor from '@/components/home/Instructor';
import FAQ from '@/components/home/Faqsection';
import CTA from '@/components/home/Ctasection';
import AboutPDS from '@/components/home/Aboutus';
import DiplomaAudience from '@/components/home/Targetadience';
import DiplomaFeatures from '@/components/home/Diplomafeatures';
import ROISection from '@/components/home/Roi';
import GoldenIdeaSection from '@/components/home/Goldenidea';
import ReachClientSection from '@/components/home/Reachtogoal';

/* =======================
   🎞️ Animation Hook
   ======================= */
function useSlideAnimation() {
  useEffect(() => {
    const sections = document.querySelectorAll('.slide-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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



export default function LandingPageDark() {
  useSlideAnimation();

  return (
    <main className="min-h-screen font-sans bg-[#111827]">
      <Navbar />
      <Hero />
      <AboutPDS/>
      <Vision />
      <CoursesSection />
      <DiplomaAudience/>
      <DiplomaFeatures/>
      <ROISection />
      <GoldenIdeaSection />
      <ReachClientSection />
      <Testimonials />
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
