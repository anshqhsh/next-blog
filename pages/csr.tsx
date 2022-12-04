// import styles from '../styles/Home.module.css';
import { ReactNode, useEffect, useState } from 'react';

import SubLayout from '../src/components/SubLayout';

import DefaultLayout from 'layouts/default';

export default function Csr() {
  const [time, setTime] = useState<string>();
  useEffect(() => {
    setTime(new Date().toISOString());
    console.log('here');
  }, []);

  return (
    <>
      <SubLayout>
        <h1>CSR</h1>
      </SubLayout>
    </>
  );
}

Csr.getLayout = function getLayout(page: ReactNode) {
  return page;
};
