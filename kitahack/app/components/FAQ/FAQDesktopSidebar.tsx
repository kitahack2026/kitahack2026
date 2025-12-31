import CategoryItem from "./CategoryItem";
import { FAQCategory } from "./FAQSection";

interface Props {
  categories: FAQCategory[];
  activeCategory: string;
  onChange: (value: string) => void;
}

export default function FAQDesktopSidebar({ categories, activeCategory, onChange }: Props) {
  return (
    // The container styles (border, bg, rounded) live here
    <div className="hidden md:flex flex-col gap-2 p-2 border border-white/10 bg-white/5 rounded-2xl">
      {categories.map((item) => (
        <CategoryItem
          key={item.category}
          label={item.category}
          isActive={activeCategory === item.category}
          onClick={() => onChange(item.category)}
        />
      ))}
    </div>
  );
}