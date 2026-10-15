import type { Metadata } from 'next';
import './globals.css';
import { clinic } from '@/lib/clinic';
export const metadata: Metadata = {
  title: `${clinic.name} — Dental Clinic in Faisalabad`,
  description: `Dental checkups, scaling and polishing, fillings, root canals, extractions, crowns and bridges, dentures, implants, braces, and teeth whitening at ${clinic.name}, Liaquat Town, Faisalabad. Call ${clinic.phone}.`,
  robots: { index: false, follow: false },
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
