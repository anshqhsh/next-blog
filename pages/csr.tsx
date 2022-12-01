import styles from '../styles/Home.module.css';
import { ReactNode, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import SubLayout from '../components/SubLayout';

export default function Csr() {
  const [time, setTime] = useState<string>();
  useEffect(() => {
    setTime(new Date().toISOString());
    console.log('here');
  }, []);

  return (
    <>
      <h1>CSR</h1>

      <h1 className={styles.title}>{time}</h1>
    </>
  );
}

Csr.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
