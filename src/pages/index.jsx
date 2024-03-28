import Head from 'next/head';
import Header from '../../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
        <title>DreamHouse</title>

      </Head>
      <main>
        <Header />
      </main>
    </>
  );
}
