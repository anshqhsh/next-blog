import styles from '../styles/Home.module.css';
import { ReactNode } from 'react';
import Layout from '../components/Layout';
import SubLayout from '../components/SubLayout';

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
      <h1 className={styles.title}>{time}</h1>
    </>
  );
}
Ssg.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
