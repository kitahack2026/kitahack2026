import CategoryItem from './CategoryItem';
import type { FAQCategory } from '@/types';

interface FAQDesktopSidebarProps {
    categories: FAQCategory[];
    activeCategory: string;
    onChange: (value: string) => void;
}

/**
 * FAQDesktopSidebar Component
 * 
 * Desktop-only sidebar navigation for FAQ categories.
 * Hidden on mobile (below md breakpoint).
 */
export default function FAQDesktopSidebar({
    categories,
    activeCategory,
    onChange,
}: FAQDesktopSidebarProps) {
    return (
        <nav 
            className='hidden md:flex flex-col gap-2 p-2 border border-white/10 bg-white/5 rounded-2xl'
            aria-label='FAQ category navigation'
        >
            {categories.map((item) => (
                <CategoryItem
                    key={item.category}
                    label={item.category}
                    isActive={activeCategory === item.category}
                    onClick={() => onChange(item.category)}
                />
            ))}
        </nav>
    );
}
