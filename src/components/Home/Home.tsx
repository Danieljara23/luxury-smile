import React from 'react'
import Slider from '../Home/HomeComponents/Carousel'
import Advantages from '../Home/HomeComponents/Advantage'
import Treatments from './HomeComponents/Treatments'
import Experience from './HomeComponents/Experience'
import Especialist from './HomeComponents/Especialist'
const Home:React.FC = () => {
    return(
      <div>
        <Slider/>
        <Advantages/>
        <Treatments/>
        <Experience/>
        <Especialist/>
      </div>
    )
}

export default Home