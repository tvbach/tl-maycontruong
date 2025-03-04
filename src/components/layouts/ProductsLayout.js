"use client";
import { useState } from 'react';
import CategoryList from '@/components/products/CategoryList';
import ProductList from '@/components/products/ProductList';

const ProductsLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-64 flex-shrink-0">
        <CategoryList selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      </div>
      <div className="flex-1">
        <ProductList category={selectedCategory} />
      </div>
    </div>
  );
};

export default ProductsLayout;