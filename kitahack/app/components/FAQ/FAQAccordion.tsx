'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import type { FAQItem } from '@/types';

interface FAQAccordionProps {
    items: FAQItem[];
}

/**
 * FAQAccordion Component
 * 
 * Displays FAQ items in an expandable accordion format.
 * Uses shadcn/ui Accordion with custom styling.
 */
export default function FAQAccordion({ items }: FAQAccordionProps) {
    return (
        <Accordion 
            type='single' 
            collapsible 
            className='w-full space-y-4'
        >
            {items.map((faq) => (
                <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className='
                        border border-white/10 bg-white/5 rounded-2xl px-6 transition-all duration-500
                        data-[state=open]:bg-[#1A1A1A]
                        data-[state=open]:border-white/30
                        data-[state=open]:shadow-[-5px_5px_20px_rgba(203,92,109,0.4),5px_-5px_20px_rgba(209,172,52,0.4)]
                        data-[state=open]:-translate-y-1
                    '
                >
                    <AccordionTrigger
                        className='
                            text-left text-white py-4 text-base md:text-lg font-medium transition-all duration-300
                            hover:text-[#d1ac34]
                            hover:[text-shadow:0_0_20px_rgba(209,172,52,0.6)]
                            hover:no-underline
                            data-[state=open]:text-[#d1ac34]
                            data-[state=open]:[text-shadow:0_0_20px_rgba(209,172,52,0.6)]
                        '
                    >
                        {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className='text-zinc-400 text-sm md:text-base leading-relaxed pb-4'>
                        <div 
                            dangerouslySetInnerHTML={{ 
                                __html: faq.answer.replace(
                                    /(https?:\/\/[^\s]+)/g, 
                                    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 underline transition-colors">$1</a>'
                                )
                            }} 
                        />
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
