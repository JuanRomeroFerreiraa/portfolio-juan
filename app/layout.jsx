import './globals.css';
import { MotionProvider } from '../components/motion';

export const metadata = {
  title: 'Juan Romero — Desenvolvedor',
  description: 'Juan Romero Ferreira — desenvolvimento web, interfaces e APIs. Conheça minha trajetória, competências e formação.',
  openGraph: {
    title: 'Juan Romero — Desenvolvedor',
    description: 'Desenvolvimento web, interfaces e APIs. Conheça minha trajetória profissional.',
    locale: 'pt_BR',
    type: 'website',
  },
};

export const viewport = { themeColor: '#101010' };

export default function RootLayout({ children }) {
  return <html lang="pt-BR"><body><MotionProvider>{children}</MotionProvider></body></html>;
}
