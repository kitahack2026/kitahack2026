interface CategoryItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function CategoryItem({ label, isActive, onClick }: CategoryItemProps) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-3 rounded-xl text-sm font-medium transition-all text-left whitespace-nowrap
        ${isActive 
          ? "bg-[#3B84F7] text-white border border-[#3B84F7] shadow-[0_0_20px_rgba(59,132,247,0.3)]" 
          : "text-zinc-400 hover:text-zinc-200 hover:[text-shadow:0_0_20px_rgba(59,132,247,0.6)]"
        }`}
    >
      {label}
    </button>
  );
}
