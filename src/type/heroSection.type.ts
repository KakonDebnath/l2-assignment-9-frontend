//Define the type of image
export type THeroSliderImageType = {
  src: string;
  alt: string;
};

// Define the props type for HeroSection
export type THeroSectionProps = {
  images: THeroSliderImageType[];
};

// Define the props type for HeroSliderImage
export type THeroSliderImageProps = {
  image: THeroSliderImageType;
};
