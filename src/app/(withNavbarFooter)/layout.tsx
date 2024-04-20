import Container from '@/components/shared/Container/Container';
import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';
import { TChildrenProps } from '@/type';

const MainLayout = ({ children }: TChildrenProps) => {
  return (
    <Container>
      <Navbar />
      <div className='min-h-[calc(100vh-75px)]'>{children}</div>
      <Footer />
    </Container>
  );
};

export default MainLayout;
