import { Button } from '@/components/ui/button';
import { TProduct } from '@/type';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="flex flex-col gap-3 bg-gray-100 rounded-xl">
      <Image
        src={product.images}
        alt={product.name}
        width={100}
        height={100}
        className="w-full h-72 rounded-xl"
      />
      <div className="px-5 py-2">
        <p>{product.name}</p>
        <p>{product.price}</p>
      </div>

      <Link href={`/products/${product._id}`}>
        <Button className="w-full">View Product</Button>
      </Link>
    </div>
  );
};

export default ProductCard;
