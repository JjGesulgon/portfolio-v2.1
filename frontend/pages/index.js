import Head from 'next/head';
import { Navbar } from '../components/Navbar';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Jeysqrd</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Navbar /> */}
      <div>Hello World Test</div>
    </div>
  );
}
