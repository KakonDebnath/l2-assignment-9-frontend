'use client';
import { useState } from 'react';
import { TProduct } from '@/type';
import ProductCard from './ProductCard';

const AllProductsFilter = ({ products }: { products: TProduct[] }) => {
  const [priceRange, setPriceRange] = useState<number[]>([]);
  const [selectedBrandsCategories, setSelectedBrandsCategories] = useState<
    string[]
  >([]);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);

  const handleFilterSelection = (
    filterType: string,
    value: number | string
  ) => {
    switch (filterType) {
      case 'price':
        if (priceRange.includes(value as number)) {
          setPriceRange(priceRange.filter((range) => range !== value));
        } else {
          setPriceRange([...priceRange, value as number]);
        }
        break;
      case 'brandCategory':
        if (selectedBrandsCategories.includes(value as string)) {
          setSelectedBrandsCategories(
            selectedBrandsCategories.filter((item) => item !== value)
          );
        } else {
          setSelectedBrandsCategories([
            ...selectedBrandsCategories,
            value as string,
          ]);
        }
        break;
      case 'rating':
        if (selectedRatings.includes(value as string)) {
          setSelectedRatings(
            selectedRatings.filter((rating) => rating !== value)
          );
        } else {
          setSelectedRatings([...selectedRatings, value as string]);
        }
        break;
      default:
        break;
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchPrice =
      priceRange.length === 0 || priceRange.includes(product.price);
    const matchBrandCategory =
      selectedBrandsCategories.length === 0 ||
      selectedBrandsCategories.includes(product.brand) ||
      selectedBrandsCategories.some((category) =>
        product.categories.includes(category)
      );
    const matchRating =
      selectedRatings.length === 0 ||
      selectedRatings.includes(product.ratings.toString());
    return matchPrice && matchBrandCategory && matchRating;
  });

  return (
    <div className="grid grid-cols-12">
      {/* Filter Options */}
      <div className="col-span-2 min-h-screen p-5 space-y-5">
        {/* Price Range Filter */}
        <div className="border rounded-md py-5 space-y-3">
          <h4 className="border-l-4 ml-5 px-3 border-black font-semibold">
            Price Range
          </h4>
          <div className="ml-5">
            {[20, 50, 100].map((price) => (
              <p key={price} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={priceRange.includes(price)}
                  onChange={() => handleFilterSelection('price', price)}
                />
                <label htmlFor="">{`$${price}.00-${price + 30}.00`}</label>
              </p>
            ))}
          </div>
        </div>

        {/* Brand/Category Filter */}
        <div className="border rounded-md py-5 space-y-3">
          <h4 className="border-l-4 ml-5 px-3 border-black font-semibold">
            Brand/Category
          </h4>
          <div className="ml-5">
            {['Nestle', 'Nido', 'Pediasure', 'Baby Food', 'Baby Clothes'].map(
              (item) => (
                <p key={item} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedBrandsCategories.includes(item)}
                    onChange={() =>
                      handleFilterSelection('brandCategory', item)
                    }
                  />
                  <label htmlFor="">{item}</label>
                </p>
              )
            )}
          </div>
        </div>

        {/* Ratings Filter */}
        <div className="border rounded-md py-5 space-y-3">
          <h4 className="border-l-4 ml-5 px-3 border-black font-semibold">
            Ratings
          </h4>
          <div className="ml-5">
            {[1, 2, 3, 4, 5].map((rating) => (
              <p key={rating} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selectedRatings.includes(rating.toString())}
                  onChange={() =>
                    handleFilterSelection('rating', rating.toString())
                  }
                />
                <label htmlFor="">{`${rating} Star`}</label>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-10 ">
        <h2 className="text-center text-3xl font-semibold border-b py-3">
          Our Collection Of Products
        </h2>
        {/* Render filtered products */}
        <h2>Showing: {filteredProducts.length}</h2>
        <div className="grid grid-cols-3 gap-5 py-5">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProductsFilter;
