import Head from 'next/head';
import Header from '../../components/Header';
import HomeBanner from '../../components/home/Banner';

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
        <title>DreamHouse</title>
      </Head>

      <Header />
      <main>
        <HomeBanner />
      </main>
    </>
  );
}
