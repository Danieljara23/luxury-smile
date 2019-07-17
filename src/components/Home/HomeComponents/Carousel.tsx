import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../styles.css'
import  FirstSlide from '../../images/slider-luxury-smile-1.jpg'
import  FirstSlideMobile from '../../images/slider-mobile-luxury.jpg'
import  SecondSlide from '../../images/slider-luxury-smile-1.jpg'
import  SecondSlideMobile from '../../images/slider-mobile-luxury.jpg'

const Slider:React.FC = () => { 
    const isMobile = window.innerWidth <= 400
    return(
        <>
            <AwesomeSlider className="aws-btn">
                <div data-src={isMobile ? FirstSlideMobile: FirstSlide} />
                <div data-src={isMobile ? SecondSlideMobile:SecondSlide} />
            </AwesomeSlider>
        </>
    )
};

export default Slider