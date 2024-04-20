import { TDynamicProductParams, TProduct } from '@/type';
import Image from 'next/image';

export const generateStaticParams = async () => {
  const res = await fetch(`http://localhost:5000/api/products`);
  const result = await res.json();
  const products = result.data;
  return products.slice(0, 10).map((product: TProduct) => ({
    productId: product._id,
  }));
};

const DynamicProductPage = async ({ params }: TDynamicProductParams) => {
  const res = await fetch(
    `http://localhost:5000/api/products/${params.productId}`,
    {
      cache: 'no-store',
    }
  );
  const result = await res.json();
  const productData: TProduct = result?.data;
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-5">
        <Image
          className="rounded-md bg-cover w-full"
          src={productData.images}
          alt=""
          width={500}
          height={350}
        />
      </div>
      <div className="col-span-7">
        <h2 className="text-3xl">Name: {productData.name}</h2>
        <h2 className="text-3xl border-b pb-3">
          Price: ${productData.price}.00
        </h2>
        <p className="pt-5">{productData.description}</p>
        <p>{productData.ratings}</p>
      </div>
    </div>
  );
};

export default DynamicProductPage;
