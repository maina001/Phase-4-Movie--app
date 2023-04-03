import React from 'react'
import HeroSection from '../components/Hero'
import Reviews from './Reviews'
import Votes from './Votes'
// import useUserIdStore from '../store/User';

function Home() {
  // const { user_id, addData, removeData } = useUserIdStore();

  return (
    <div>
      <HeroSection/>
      <h2>Vote section</h2>
      <Votes/>
      
      <Reviews/>

    </div>
  )
}

export default Home