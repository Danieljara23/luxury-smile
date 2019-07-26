import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../styles.css'
import  FirstSlide from '../../images/slider-1.jpg'
import  FirstSlideMobile from '../../images/slider-mobile-1.jpg'
import  SecondSlide from '../../images/slider-2.jpg'
import  SecondSlideMobile from '../../images/slider-mobile-2.jpg'
import  ThirdSlide from '../../images/slider-3.jpg'
import  ThirdSlideMobile from '../../images/slider-mobile-3.jpg'
import AliceCarousel from 'react-alice-carousel';

const Slider:React.FC = () => {
    const isMobile = window.innerWidth <= 600
    const showArrows = isMobile ? true:false
    const galleryItems = [
                <img src={isMobile ? FirstSlideMobile: FirstSlide} />,
                <img src={isMobile ? SecondSlideMobile:SecondSlide} />,
                <img src={isMobile ? ThirdSlideMobile:ThirdSlide} />
        ]
    return(
        <div className="w-100 main-carousel">
            
            <AliceCarousel mouseDragEnabled
                    buttonsDisabled={showArrows}
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