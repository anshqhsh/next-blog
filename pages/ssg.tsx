import 'styles/Home.module.scss';
import { ReactNode } from 'react';

import SubLayout from '../src/components/SubLayout';
import DefaultLayout from 'layouts/default';

export async function getStaticProps() {
  console.log('server?');
  return {
    props: { time: new Date().toISOString() },
  };
}

export default function Ssg({ time }: any) {
  return (
    <>
      <h1>SSG</h1>
    </>
  );
}
Ssg.getLayout = function getLayout(page: ReactNode) {
  return (
    <DefaultLayout>
      <SubLayout>{page}</SubLayout>
    </DefaultLayout>
  );
};
