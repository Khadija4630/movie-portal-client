import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider_2 from '../assets/slider-2.jpg';
import Slider_1 from '../assets/Slider.jpg';
import Slider_3 from '../assets/Slider-4.jpg';
import Slider_4 from '../assets/Slider-8.jpg';
import Slider_5 from '../assets/Slider-10.jpeg';

import React, { useState, useEffect } from 'react';


const Header = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTitle, setIsTitle] = useState(true);

   const slides = [
        {
          image: Slider_1,
          title: "Amazing Movies Here",
          description: "Explore our extensive collection of blockbuster hits.",
        },
        {
          image: Slider_2,
          title: "You Can Choose Any",
          description: "Share your thoughts and rate the movies you love.",
        },
        {
            image: Slider_3,
            title: "Excellent Hit Movies",
            description: "Create a personalized list of your favorite movies.",
        },
        {
            image: Slider_4,
            title: "Check All The Movies",
            description: "Add to your favourite and click on any movie.",
        },
        {
            image: Slider_5,
            title: "Featured Movies",
            description: "Get the latest updates on new releases and upcoming movies.",
        },
        
      ];

  const [currentSlide, setCurrentSlide] = useState(slides[0]);
  useEffect(() => {
    const animateText = () => {
      if (isTitle) {
        if (currentIndex < currentSlide.title.length) {
          setCurrentText(prev => prev + currentSlide.title[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          setIsTitle(false);
          setCurrentText('');
          setCurrentIndex(0);
        }
      } else {
        if (currentIndex < currentSlide.description.length) {
          setCurrentText(prev => prev + currentSlide.description[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }
      }
    };

    const timeout = setTimeout(animateText, 100);
    return () => clearTimeout(timeout);
  }, [currentIndex, isTitle, currentSlide]);

  const handleSlideChange = (index) => {
    setCurrentSlide(slides[index]);
    setCurrentText('');
    setCurrentIndex(0);
    setIsTitle(true);
  };


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        beforeChange: (oldIndex, newIndex) => handleSlideChange(newIndex),
      };

     
    return (
        <div className='banner mx-auto max-w-6xl rounded-xl text-center items-center  relative z-10'>
            <Slider {...settings}>
               {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-64 object-cover md:h-96 w-[99%] mx-auto"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-4">
              <h2 className="text-2xl md:text-4xl font-bold">

                {/* {slide.title} */}
              {isTitle ? currentText : slide.title}
              </h2>
              <p className="mt-2 text-sm md:text-lg">{!isTitle ? currentText : slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>

        </div>
    );
};

export default Header;