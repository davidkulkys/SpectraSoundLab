import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SpectraSoundLab',
  description: 'Gerador de música multimodal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ fontFamily: 'Inter, sans-serif', background: '#FFFFFF', color: '#111111' }}>
        {children}
      </body>
    </html>
  );
}
