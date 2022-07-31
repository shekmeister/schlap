import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Paper } from '@mantine/core';
import Sidebar from '../components/Sidebar';
import ChatArea from '../components/ChatArea';
import LandingScreen from '../components/LandingScreen';

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
  useEffect(() => {
    function getUserInfo() {
      const logStatus = JSON.parse(localStorage.getItem('isLoggedin'));
      if (logStatus === true) {
        setUser(prevState => ({
          ...prevState,
          isLoggedIn: true,
        }));
      };
    }
    getUserInfo()
  }, []);
  return (
    <>
      <Head>
        <title>Schlap</title>
        <meta name="description" content="" />
      </Head>
      {(userState.isLoggedIn)?(
        <main className='schlap-body h-screen w-screen bg-black text-white'>
          <div className='schlap-main-container flex'>
            <Sidebar />
            <ChatArea />
          </div>
        </main>
      ):(
        <LandingScreen />
      )}
    </>
  )
}

export default Home;
