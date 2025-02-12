// src/components/ui/ProductCard.tsx
'use client';

import { Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="bg-[#1F1F1F] rounded-xl p-4 cursor-pointer"
    >
      <div className="flex flex-col gap-2">
        <div className="h-[143px] flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-[143px] h-[143px] object-contain"
          />
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-[#F8B602] text-[#F8B602]" />
          <span className="text-white text-sm">4.0</span>
        </div>
        <h3 className="text-white font-medium text-sm">{product.title}</h3>
        <p className="text-[#8F8F8F] text-xs line-clamp-1">{product.description}</p>
        <div className="flex justify-between items-center mt-1">
          <span className="text-white font-medium">${product.price}</span>
          <div className="w-8 h-8 bg-[#282828] rounded-lg flex items-center justify-center">
            <span className="text-[#F8B602]">+</span>
          </div>
        </div>
      </div>
    </div>
  );
}