import HeroSection from '@/components/pages/HeroSection/HeroSection';
const images = [
  {
    src: 'https://i.ibb.co/Fnwr1y3/kids-me-germany-Zzgmde4-l-YU-unsplash.jpg',
    alt: 'First',
  },
  {
    src: 'https://i.ibb.co/qp7yHPj/baby-natur-Hld-gd-WN7k-unsplash.jpg',
    alt: 'Second',
  },
  {
    src: 'https://i.ibb.co/0nJZwyz/sandy-millar-NNtd-Ouq1hqc-unsplash.jpg',
    alt: 'Third',
  },
  {
    src: 'https://i.ibb.co/nRGkhR6/julia-kuzenkov-5v02-Eo9-TA58-unsplash.jpg',
    alt: 'Fourth',
  },
];
const HomePage = () => {
  return (
    <div>
      <HeroSection images={images} />
    </div>
  );
};

export default HomePage;
