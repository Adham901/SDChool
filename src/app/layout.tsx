import './globals.css'
import ClientLoader from '../components/ui/clientloader'

export const metadata = {
  title: 'PDSchool',
  description: 'Welcome to PDSchool',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <ClientLoader>{children}</ClientLoader>
      </body>
    </html>
  )
}
