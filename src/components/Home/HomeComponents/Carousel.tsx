import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../styles.css'
import  FirstSlide from '../../images/slider-luxury-smile-1.jpg'
import  FirstSlideMobile from '../../images/slider-mobile-luxury.jpg'
import  SecondSlide from '../../images/slider-luxury-smile-1.jpg'
import  SecondSlideMobile from '../../images/slider-mobile-luxury.jpg'
import AliceCarousel from 'react-alice-carousel';

const Slider:React.FC = () => {
    const isMobile = window.innerWidth <= 400
    const galleryItems = [
                <img src={isMobile ? FirstSlideMobile: FirstSlide} />,
                <img src={isMobile ? SecondSlideMobile:SecondSlide} />
        ]
    return(
        <div className="w-100 main-carousel">
            <AliceCarousel mouseDragEnabled
                    buttonsDisabled={false}
                    dotsDisabled={false}
                    items={galleryItems}
                    stagePadding={{ paddingLeft: 0, paddingRight: 0 }}
                />
            {/* <AwesomeSlider className="aws-btn">
                <div data-src={isMobile ? FirstSlideMobile: FirstSlide} />
                <div data-src={isMobile ? SecondSlideMobile:SecondSlide} />
            </AwesomeSlider> */}
        </div>
    )
};

export default Slider