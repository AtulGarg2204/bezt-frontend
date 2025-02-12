'use client';

interface QuantityButtonProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantityButton({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityButtonProps) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onDecrease}
        className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-white"
      >
        -
      </button>
      <span className="text-white text-lg">{quantity}</span>
      <button
        onClick={onIncrease}
        className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-white"
      >
        +
      </button>
    </div>
  );
}