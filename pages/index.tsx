import type { NextPage } from 'next';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import ChatArea from '../components/ChatArea';
import { useState } from 'react';

const Home: NextPage = () => {
  const [userState, setUser] = useState({
    isLoggedIn: false,
    username: null,
    userId: null,
    userPfp: null,
    userActivity: null,
    userFriends: null,
    userChats: null
  });
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
