import '@/styles/index.scss';

import { Analytics } from '@vercel/analytics/react';
import { ReactNode } from 'react';

import StyledComponentsRegistry from '@/app/components/StyledComponentRegistery';

interface Props {
  children: ReactNode;
}

export const metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
};

function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Analytics />
      </body>
    </html>
  );
}

export default RootLayout;
