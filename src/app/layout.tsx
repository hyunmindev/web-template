import type { ReactNode } from 'react';

import { Analytics } from '@vercel/analytics/react';

import { firaMono } from '~/styles/font';
import '~/styles/global.css';

interface Properties {
  readonly children: ReactNode;
}

export const metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
};

function RootLayout({ children }: Properties) {
  return (
    <html
      className={`${firaMono.variable} overscroll-none`}
      lang="ko"
    >
      <body className="flex min-h-screen flex-col items-center overscroll-none bg-background font-monospace text-stone-200 selection:bg-lime-900 selection:text-stone-50">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

export default RootLayout;
