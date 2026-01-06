import { animation } from '@/lib/design-system';

interface CategoryItemProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}

/**
 * CategoryItem Component
 * 
 * A button for selecting FAQ categories in the desktop sidebar.
 * Features visual feedback for active/hover states and proper accessibility.
 */
export default function CategoryItem({
    label,
    isActive,
    onClick,
}: CategoryItemProps) {
    return (
        <button
            onClick={onClick}
            type='button'
            role='tab'
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            className={`
                px-5 py-3 rounded-xl text-sm font-medium text-left w-full
                ${animation.transition.default}
                ${animation.focus.visible}
                ${
                    isActive
                        ? 'bg-[#3B84F7] text-white border border-[#3B84F7] shadow-[0_0_20px_rgba(59,132,247,0.3)]'
                        : 'text-zinc-400 hover:text-zinc-200 hover:[text-shadow:0_0_20px_rgba(59,132,247,0.6)]'
                }
            `}
        >
            {label}
        </button>
    );
}
