import { TChildrenProps } from '@/type';

const Container = ({ children }: TChildrenProps) => {
  return <div className="max-w-7xl mx-auto">{children}</div>;
};

export default Container;
