import type { NextPage } from 'next';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import ChatArea from '../components/ChatArea';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [chatState, setChatState] = useState({
    isLoggedIn: false
  })
  useEffect(() => {
    function init() {
      const logStatus = JSON.parse(localStorage.getItem('logStatus'));
      console.log(logStatus);
      if (logStatus === true) {
        setChatState(
          (prevState) => ({
            ...prevState,
            isLoggedIn: true,
          })
        )
      }
    }
    init();
  }, [])
  return (
    <>
      <Head>
        <title>Schlap</title>
        <meta name="description" content="" />
      </Head>
      <main className='schlap-body h-screen w-screen bg-black text-white'>
        <div className='schlap-main-container flex'>
          <Sidebar />
          <ChatArea />
        </div>
      </main>
    </>
  )
}

export default Home
