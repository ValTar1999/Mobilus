import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import blum from '../../../images/furniture-company/blum.png';
import egger from '../../../images/furniture-company/egger.png';
import finsa from '../../../images/furniture-company/finsa.png';
import grass from '../../../images/furniture-company/grass.png';
import gtv from '../../../images/furniture-company/gtv.png';
import hafele from '../../../images/furniture-company/hafele.png';
import hettich from '../../../images/furniture-company/hettich.png';
import kronospan from '../../../images/furniture-company/kronospan.png';
import pfleiderer from '../../../images/furniture-company/pfleiderer.png';
import rejs from '../../../images/furniture-company/rejs.png';
import sa from '../../../images/furniture-company/sa.png';
import samet from '../../../images/furniture-company/samet.png';
import swissKrono from '../../../images/furniture-company/swiss-krono.png'; 

// Css
import './Swiper.css';

const SwiperComponent = () => {
  const images = [
    { src: blum, alt: 'Blum' },
    { src: egger, alt: 'Egger' },
    { src: finsa, alt: 'Finsa' },
    { src: grass, alt: 'Grass' },
    { src: gtv, alt: 'GTV' },
    { src: hafele, alt: 'Hafele' },
    { src: hettich, alt: 'Hettich' },
    { src: kronospan, alt: 'Kronospan' },
    { src: pfleiderer, alt: 'Pfleiderer' },
    { src: rejs, alt: 'Rejs' },
    { src: sa, alt: 'SA' },
    { src: samet, alt: 'Samet' },
    { src: swissKrono, alt: 'Swiss Krono' }
  ];

  return (
    <Swiper
      className='bg-zinc-50 my-10'
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
      }}
      loop={true}
      navigation={false}
      pagination={false}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full max-w-40 h-auto max-h-20 object-contain flex items-center justify-center my-4"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;