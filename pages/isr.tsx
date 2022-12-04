import { ReactNode } from 'react';
import SubLayout from '../src/components/SubLayout';
import DefaultLayout from 'layouts/default';

export async function getStaticProps() {
  console.log('Isr?');
  return {
    props: { time: new Date().toISOString() },
    revalidate: 1
  };
}

export default function Isr({ time }: any) {
  return (
    <>
      <SubLayout>
        <h1>ISR</h1>
        <h1>{time}</h1>
      </SubLayout>
    </>
  );
}

Isr.getLayout = function getLayout(page: ReactNode) {
  return page;
};
