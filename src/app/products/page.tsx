// src/app/products/page.tsx
'use client';

import { useState } from 'react';
import { CategoryButton } from '@/components/ui/CategoryButton';
import { ProductCard } from '@/components/ui/ProductCard';
import { products } from '@/utils/productData';

const categories = ['Donuts', 'Ice Cream', 'Bomboloni'];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('Donuts');

  const filteredProducts = products.filter(
    product => product.category === activeCategory
  );

  return (
    <div className="p-6">
      <h1 className="text-white text-2xl font-bold mb-6">Product List</h1>
      
      <div className="flex gap-4 mb-6 overflow-x-auto no-scrollbar">
        {categories.map((category) => (
          <CategoryButton
            key={category}
            label={category}
            isActive={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}