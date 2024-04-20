import { THeroSliderImageProps } from '@/type';
import Image from 'next/image';

const HeroSliderImage = ({ image }: THeroSliderImageProps) => {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      className="block h-full w-full object-cover rounded-lg"
      width={500}
      height={500}
    />
  );
};

export default HeroSliderImage;
