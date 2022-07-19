import React from 'react';
import ImageSlideOne from '../../assets/image-slide-1.jpg';
import ImageSlideTwo from '../../assets/image-slide-2.jpg';
import ImageSlideThree from '../../assets/image-slide-3.jpg';
import ImageSlideFour from '../../assets/image-slide-4.jpg';
import ImageSlideFive from '../../assets/image-slide-5.jpg';
import Carousel from 'nuka-carousel';
import { Title, Image } from './StyledComponentsSlide';

const Slide = () => {
  const info = [
    {
      title: 'My Work',
      images: [
        ImageSlideOne,
        ImageSlideTwo,
        ImageSlideThree,
        ImageSlideFour,
        ImageSlideFive,
      ],
    },
  ];

  const infoMap = info.map(({ title, images }) => (
    <>
      <Title>{title}</Title>
      <Carousel
        wrapAround={true}
        slidesToShow={3}
        autoplay={true}
        autoplayInterval={1500}
      >
        {images.map((image) => (
          <Image src={image} />
        ))}
      </Carousel>
    </>
  ));

  return infoMap;
};

export default Slide;
