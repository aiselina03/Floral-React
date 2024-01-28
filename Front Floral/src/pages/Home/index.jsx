import React from 'react'
import Cards from '../../components/Cards'
import SliderImage from '../../components/SliderImage'
import CardsEvents from '../../components/CardsEvents'
import OurMission from '../../components/OurMission'
import OurTeam from '../../components/OurTeam'
import { Helmet } from 'react-helmet-async'
import ScrollToTop from '../../components/ScrollTop'

function Home() {
  return (
    <>
    <Helmet>
        <title>Home Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    <div className="homePage">     
     <SliderImage/>
     <OurMission/>
        <Cards/>
  <CardsEvents/>
  <OurTeam/>
 <ScrollToTop/>
    </div> 
    </>
  )
}

export default Home