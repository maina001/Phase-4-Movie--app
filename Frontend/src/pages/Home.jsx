import React from 'react'
import Reviews from './Reviews'
import Votes from './Votes'
// import useUserIdStore from '../store/User';

function Home() {
  // const { user_id, addData, removeData } = useUserIdStore();

  return (
    <div>
      <h2>Vote section</h2>
      <Votes/>
      
      <h2>Review section</h2>
      <Reviews/>

    </div>
  )
}

export default Home