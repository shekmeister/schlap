import type { NextPage } from 'next';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Schlap</title>
        <meta name="description" content="" />
      </Head>
      <main className='schlap-body h-screen w-screen bg-black text-white'>
        <div className='schlap-main-container flex'>
          <Sidebar />
        </div>
      </main>
    </>
  )
}

export default Home
