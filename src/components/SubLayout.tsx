import React, { ReactNode } from 'react';
import Link from 'next/link';

export default function SubLayout({ children }: { children?: ReactNode }) {
  return (
    <div>
      <h1>
        <Link href="/">홈 으로</Link>
      </h1>
      {children}
    </div>
  );
}
