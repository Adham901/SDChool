import './globals.css'
import ClientLoader from '../components/ui/clientloader'
import Script from 'next/script' // ⬅️ أضف هذا الاستيراد
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: 'PDSchool',
  description: 'Welcome to PDSchool',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <ClientLoader>{children}</ClientLoader>
        <Analytics />
        {/* ✅ Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ABCDEFG123"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7F6C65H8WD');
          `}
        </Script>
      </body>
    </html>
  )
}
