import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic']
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600']
});

export const metadata: Metadata = {
  title: 'Ірина Кузик — Бухгалтер для ФОП | Реєстрація, звітність, декретні',
  description:
    'Онлайн-бухгалтер для ФОП по всій Україні. Реєстрація від 1500 грн, супровід, декретні, ПРРО. Офіс у Львові.',
  openGraph: {
    title: 'Ірина Кузик — Бухгалтер для ФОП',
    description:
      'Реєстрація, звітність, декретні та ПРРО для ФОП. Онлайн по всій Україні, офіс у Львові.',
    images: ['/images/og-image.jpg']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
