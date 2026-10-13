import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Renew — Skin & Dental Clinic, Multan',
  description: 'A little care. A renewed you. Discover skin and dental care at Renew, Gulgasht Colony, Multan. Call +92 306 1566136 to arrange a consultation.',
  robots: { index: false, follow: false },
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
