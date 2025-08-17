import { Poppins } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/context/AppContext';
import Footor from '@/components/Footor';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Naqvix',
  description: 'Help build businesses',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased transition-colors duration-1000 dark:bg-[#0F0E0E]`}
      >
        {/* Load Lordicon script safely */}
        <Script
          src="https://cdn.lordicon.com/lordicon.js"
          strategy="beforeInteractive"
        />
        <ThemeProvider>
          <Navbar />
          {children}
          <Footor />
        </ThemeProvider>
      </body>
    </html>
  );
}
