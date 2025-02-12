// src/app/products/[id]/page.tsx
'use client';

import { ArrowLeft, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { products } from '@/utils/productData';

export default function ProductDetail({
  params
}: {
  params: { id: string }
}) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  
  // Find the product directly using the id parameter
  const product = products.find(p => p.id === parseInt(params.id));

  // If product not found, redirect to products page
  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    toast.success('Added to cart', {
      style: {
        background: '#1F1F1F',
        color: '#fff',
      },
    });
  };

  return (
    <div className="min-h-screen bg-black p-6">
      <button
        onClick={() => router.back()}
        className="text-white mb-8"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      <div className="flex flex-col items-center">
        <div className="w-[315px] h-[280px] flex items-center justify-center mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain rotate-[14.69deg]"
          />
        </div>

        <div className="w-full">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-white text-2xl font-bold">{product.title}</h1>
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-[#F8B602] text-[#F8B602]" />
              <span className="text-white">4.0</span>
            </div>
          </div>

          <p className="text-[#8F8F8F] mb-8">{product.description}</p>

          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 bg-[#1F1F1F] rounded-full flex items-center justify-center text-white text-xl"
              >
                -
              </button>
              <span className="text-white text-xl">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 bg-[#1F1F1F] rounded-full flex items-center justify-center text-white text-xl"
              >
                +
              </button>
            </div>
            <span className="text-white text-2xl font-bold">${product.price}</span>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-[#F8B602] text-black py-4 rounded-xl font-medium"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}