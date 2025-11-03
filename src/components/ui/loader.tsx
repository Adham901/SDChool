'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // تحريك شريط التحميل تدريجيًا
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onFinish, 500) // بعد ما يوصل 100%
          return 100
        }
        return prev + 2.5
      })
    }, 100)

    return () => clearInterval(interval)
  }, [onFinish])

  return (
    <div
      className="relative flex items-center justify-center min-h-screen w-full bg-black overflow-hidden text-white"
      style={{
        backgroundImage: "url('/loading-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* طبقة شفافة */}
      <div className="absolute inset-0 bg-black/75" />

      {/* المحتوى */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center px-4 w-full h-full animate-fadeIn">
        {/* صورة ببوردر متوهج */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-5 animate-float">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500 p-[3px] animate-borderGlow">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
              <Image
                src="/loading2.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* الاسم */}
        <h1 className="text-3xl sm:text-5xl font-bold mb-3 tracking-wide">
          <span className="text-rose-500">MOHAMED</span> ELBAZ
        </h1>

        {/* الوصف */}
        <p className="max-w-md sm:max-w-xl mx-auto text-gray-300 leading-relaxed text-sm sm:text-base opacity-90 mb-4">
          Founder of <span className="text-rose-400 font-semibold">Para Dental School (PDS)</span> — 
          the first hub to teach Dental Motion Design in the Middle East.
        </p>

        {/* المهارات */}
        <div className="text-gray-400 text-xs sm:text-sm space-y-1 mb-6">
          <p>• Motion Graphic Designer</p>
          <p>• 3D Designer (Modeling / Animation / Rendering)</p>
          <p>• UI/UX Designer</p>
          <p>• Video Editor</p>
        </div>

        {/* الشعار السفلي */}
        <p className="text-gray-400 text-2xl sm:text-3xl tracking-widest animate-pulse mb-6">
          <span className="text-rose-500 font-bold">PD</span>
          <span className="text-white">School</span>
        </p>

        {/* شريط التحميل */}
        <div className="w-64 sm:w-80 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500 transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-xs text-gray-400 mt-2 tracking-wider">{Math.round(progress)}%</p>
      </div>
    </div>
  )
}
