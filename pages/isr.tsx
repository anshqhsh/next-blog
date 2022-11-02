import styles from '../styles/Home.module.css';
import { ReactNode } from 'react';
import Layout from '../components/Layout';
import SubLayout from '../components/SubLayout';

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
      <h1 className={styles.title}>{time}</h1>
    </>
  );
}

Isr.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
