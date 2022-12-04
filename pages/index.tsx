// import 'styles/main.scss';
import Link from 'next/link';
import Image from 'next/image';

export async function getServerSideProps() {
  console.log('SSR?');
  return {
    props: { time: new Date().toISOString() }
  };
}

export default function Home({ time }: { time: string }) {
  return (
    <>
      <main>
        <h1>
          <Link href={'/csr'}>CSR 로</Link>
        </h1>
        <h1>
          <Link href={'/ssg'}>SSG 로</Link>
        </h1>
        <h1>
          <Link href={'/isr'}>ISR 로</Link>
        </h1>

        <Image
          src={'/images/somi.png'}
          width={140}
          height={200}
          alt="som"
        ></Image>
      </main>
    </>
  );
}
