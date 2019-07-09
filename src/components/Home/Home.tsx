import React from 'react'
import Slider from '../Home/HomeComponents/Carousel'
import Advantages from '../Home/HomeComponents/Advantage'
import  CardsCarousel  from '../Home/HomeComponents/CardsCarousel'
const Home:React.FC = () => {
    return(
      <div>
        <Slider/>
        <Advantages/>
        <CardsCarousel/>
      </div>
    )
}

export default Home