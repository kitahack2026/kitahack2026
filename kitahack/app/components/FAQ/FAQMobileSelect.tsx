import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FAQCategory } from "./FAQSection";

interface Props {
  categories: FAQCategory[];
  activeCategory: string;
  onChange: (value: string) => void;
}

export default function FAQMobileSelect({ categories, activeCategory, onChange }: Props) {
  return (
    <div className="block md:hidden">
      <Select value={activeCategory} onValueChange={onChange}>
        <SelectTrigger
          className="
            w-full h-14 rounded-xl text-base font-medium transition-all duration-300
            bg-[#0F0F0F] 
            border border-[#3B84F7]/30
            text-white 
            shadow-[-5px_5px_25px_rgba(59,132,247,0.25),5px_-5px_25px_rgba(71,173,122,0.25)]
            hover:border-[#3B84F7]
            hover:shadow-[-5px_5px_35px_rgba(59,132,247,0.4),5px_-5px_35px_rgba(71,173,122,0.4)]
            focus:ring-0 focus:ring-offset-0
            focus:border-[#3B84F7]
            [&>svg]:text-[#3B84F7] [&>svg]:opacity-100
          "
        >
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        
        <SelectContent className="bg-[#1A1A1A] border-white/10 text-white">
          {categories.map((item) => (
            <SelectItem
              key={item.category}
              value={item.category}
              className="focus:bg-white/10 focus:text-[#d1ac34] cursor-pointer"
            >
              {item.category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}