import React from 'react';
import '../Home/styles.css'
import  FirstSlide from '../images/slider-desk-nosotros-1.jpg'
import  FirstSlideMobile from '../images/slider-mobile-nosotros-1.jpg'
import  SecondSlide from '../images/slider-desk-nosotros-2.jpg'
import  SecondSlideMobile from '../images/slider-mobile-nosotros-2.jpg'
import  ThirdSlide from '../images/slider-desk-nosotros-3.jpg'
import  ThirdSlideMobile from '../images/slider-mobile-nosotros-3.jpg'
import  FourthSlide from '../images/slider-desk-nosotros-4.jpg'
import  FourthSlideMobile from '../images/slider-mobile-nosotros-4.jpg'
import  FifthSlide from '../images/slider-desk-nosotros-5.jpg'
import  FifthSlideMobile from '../images/slider-mobile-nosotros-5.jpg'
import  SixSlide from '../images/slider-desk-nosotros-6.jpg'
import  SixSlideMobile from '../images/slider-mobile-nosotros-6.jpg'
import  SeventhSlide from '../images/slider-desk-nosotros-7.jpg'
import  SeventhSlideMobile from '../images/slider-mobile-nosotros-7.jpg'
import  EigthSlide from '../images/slider-desk-nosotros-8.jpg'
import  EigthSlideMobile from '../images/slider-mobile-nosotros-8.jpg'
import AliceCarousel from 'react-alice-carousel';
import { NavLink } from "react-router-dom";

const ConsultoryCarousel:React.FC = () => {
    const isMobile = window.innerWidth <= 600
    const showArrows = isMobile ? true:false
    const galleryItems = [
        <img src={isMobile ? FirstSlideMobile: FirstSlide} />,
        <img src={isMobile ? SecondSlideMobile:SecondSlide} />,
        <img src={isMobile ? ThirdSlideMobile:ThirdSlide} />,
        <img src={isMobile ? FourthSlideMobile:FourthSlide} />,
        <img src={isMobile ? FifthSlideMobile:FifthSlide} />,
        <img src={isMobile ? SixSlideMobile:SixSlide} />,
        <img src={isMobile ? SeventhSlideMobile:SeventhSlide} />,
        <img src={isMobile ? EigthSlideMobile:EigthSlide} />,
                
        ]
    return(
        <div className="w-100 main-carousel">
            
            <AliceCarousel mouseDragEnabled
                autoPlay={true}
                autoPlayInterval={5000}
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

export default ConsultoryCarousel