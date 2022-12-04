import type { AppProps } from 'next/app';
import { ReactNode } from 'react';
import PageLoadingProgress from 'components/PageLoadingProgress/PageLoadingProgress';
import 'styles/global/_global.scss';
import DefaultLayout from 'layouts/default';

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const getLayout = Component?.getLayout || ((page: ReactNode) => page);
  return getLayout(
    <DefaultLayout>
      <PageLoadingProgress />
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
