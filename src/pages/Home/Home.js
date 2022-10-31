import React from 'react'
import Card from '../../components/Cards/Card'
import './Home.scss'
import Testi from '../../components/testimonials/Testi'
import Guide from '../../components/Guide/Guide'
function Home() {
  return (
    <div className='main-come'>
      <Guide />
      <Card />
      {/* <Box /> */}
      <Testi />
    </div>
  )
}

export default Home