import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title: 'Niaz Autos | Complete Auto Care & Mobile Mechanic in Lahore',
 description: 'Complete car repair, engine work, auto electrical diagnostics and mobile mechanic service in Township, Lahore. No travel fee in selected nearby areas. Call +92 304 7952115.',
 openGraph: { title: 'Niaz Autos — Complete auto care. Anywhere you need it.', description: 'Workshop expertise. Doorstep convenience. Vehicle repair and mobile mechanic service in Lahore.', type: 'website', locale: 'en_PK', siteName: 'Niaz Autos' },
 twitter: { card: 'summary', title: 'Niaz Autos | Lahore', description: 'Complete vehicle repair at our workshop or your doorstep.' },
 icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
