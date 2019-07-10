import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../styles.css'
import  FirstSlide from '../../images/slider-luxury-smile-1.jpg'
import  SecondSlide from '../../images/slider-luxury-smile-1.jpg'

const Slider:React.FC = () => { 
    return(
        <>
            <AwesomeSlider className="aws-btn">
                <div data-src={FirstSlide} />
                <div data-src={SecondSlide} />
            </AwesomeSlider>
        </>
    )
};

export default Slider