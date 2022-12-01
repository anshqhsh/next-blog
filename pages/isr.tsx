import 'styles/Home.module.scss';
import { ReactNode } from 'react';
import SubLayout from '../src/components/SubLayout';
import DefaultLayout from 'layouts/default';

export async function getStaticProps() {
  console.log('Isr?');
  return {
    props: { time: new Date().toISOString() },
    revalidate: 1,
  };
}

export default function Isr({ time }: any) {
  return (
    <>
      <h1>ISR</h1>
      {/* <h1 className={styles.title}>{time}</h1> */}
    </>
  );
}

Isr.getLayout = function getLayout(page: ReactNode) {
  return (
    <DefaultLayout>
      <SubLayout>{page}</SubLayout>
    </DefaultLayout>
  );
};
