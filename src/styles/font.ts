import { Fira_Mono } from 'next/font/google';

export const firaMono = Fira_Mono({
  variable: '--font-fira-mono',
  fallback: ['monospace'],
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'block',
});
