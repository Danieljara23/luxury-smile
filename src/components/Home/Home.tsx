import React from 'react'
import Slider from '../Home/HomeComponents/Carousel'
import Advantages from '../Home/HomeComponents/Advantage'
import Treatments from './HomeComponents/Treatments'
import Experience from './HomeComponents/Experience'
import Especialist from './HomeComponents/Especialist'
import Contact from './HomeComponents/Contact'
const Home:React.FC = () => {
    return(
      <div>
        <Slider/>
        <Advantages/>
        <Treatments/>
        <Experience/>
        <Especialist/>
        <Contact title="Contáctanos"/>
      </div>
    )
}

export default Home