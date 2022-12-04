import { ReactNode } from 'react';

import SubLayout from '../src/components/SubLayout';
import DefaultLayout from 'layouts/default';

export async function getStaticProps() {
  console.log('server?');
  return {
    props: { time: new Date().toISOString() }
  };
}

export default function Ssg({ time }: any) {
  return (
    <SubLayout>
      <h1>SSG</h1>
    </SubLayout>
  );
}
Ssg.getLayout = function getLayout(page: ReactNode) {
  return page;
};
