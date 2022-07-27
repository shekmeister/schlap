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
      <body className='schlap-body h-screen w-screen bg-black'>
        <div className='schlap-main-container flex'>
          <Sidebar />
        </div>
      </body>
    </>
  )
}

export default Home
