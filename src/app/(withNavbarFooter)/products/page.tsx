import AllProductsFilter from '@/components/pages/AllProduct/AllProductFilter';
import { TProduct } from '@/type';

const ProductsPage = async () => {
  const res = await fetch('http://localhost:5000/api/products');
  const result = await res.json();
  const productData: TProduct[] = result?.data;
  return (
    <div>
      <AllProductsFilter products={productData} />
    </div>
  );
};

export default ProductsPage;
