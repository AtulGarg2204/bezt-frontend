// src/components/ui/CategoryButton.tsx
interface CategoryButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function CategoryButton({ label, isActive, onClick }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm ${
        isActive
          ? 'bg-[#F8B602] text-black font-medium'
          : 'bg-[#1F1F1F] text-[#8F8F8F]'
      }`}
    >
      {label}
    </button>
  );
}