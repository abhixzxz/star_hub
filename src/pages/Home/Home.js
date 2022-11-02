import React from 'react'
import Card from '../../components/Cards/Card'
import './Home.scss'
import Testi from '../../components/testimonials/Testi'
import Guide from '../../components/Guide/Guide'
import Services from '../../components/services/Services'
function Home() {
  return (
    <div className='main-come'>
      <Guide />
      <Card />
      <Testi />
      <Services />
      {/* <Box /> */}
    </div>
  )
}

export default Home