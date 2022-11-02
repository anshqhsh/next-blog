import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ReactNode } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const getLayout = Component.getLayout || ((page: ReactNode) => <Layout>{page}</Layout>);
  return getLayout(<Component {...pageProps} />);
}
