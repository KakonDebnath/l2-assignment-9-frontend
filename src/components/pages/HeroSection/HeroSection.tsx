'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import HeroSliderImage from './HeroSliderImage';
import { THeroSectionProps } from '@/type';
import HeroSectionText from './HeroSectionText';

const HeroSection = ({ images }: THeroSectionProps) => {
  return (
    <section className="py-12">
      <div className="px-10">
        <HeroSectionText />
        <Swiper
          navigation
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 1000 }}
          pagination={{ type: 'fraction' }}
          modules={[Navigation, Pagination]}
          //   onSwiper={(swiper) => console.log(swiper)}
          className="h-72 w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center">
                <HeroSliderImage image={image} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
