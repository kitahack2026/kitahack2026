'use client';

import { useState } from 'react';
import faqData from './faqData.json';
import FAQMobileSelect from './FAQMobileSelect';
import FAQDesktopSidebar from './FAQDesktopSidebar';
import FAQAccordion from './FAQAccordion';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import type { FAQCategory } from '@/types';

/**
 * FAQSection Component
 * 
 * Displays frequently asked questions organized by category.
 * Features responsive design with mobile dropdown and desktop sidebar navigation.
 */
export default function FAQSection() {
    const data = faqData as FAQCategory[];
    const [activeCategory, setActiveCategory] = useState(data[0].category);

    // Find the items for the currently selected category
    const activeData = data.find((item) => item.category === activeCategory);

    return (
        <SectionWrapper id='faq' padding='large' ariaLabelledby='faq-heading'>
            <div className='w-full md:relative md:border md:border-white/50 md:rounded-[32px] md:p-12 md:overflow-hidden md:shadow-[-20px_20px_100px_rgba(59,132,247,0.5),20px_-20px_100px_rgba(71,173,122,0.5)] bg-kitahack-bg-card'>
                <SectionHeading id='faq-heading'>
                    Frequently Asked Questions
                </SectionHeading>

                <div className='flex flex-col md:flex-row gap-10'>
                    {/* Navigation Column */}
                    <nav className='w-full md:w-64' aria-label='FAQ categories'>
                        <FAQMobileSelect
                            categories={data}
                            activeCategory={activeCategory}
                            onChange={setActiveCategory}
                        />
                        <FAQDesktopSidebar
                            categories={data}
                            activeCategory={activeCategory}
                            onChange={setActiveCategory}
                        />
                    </nav>

                    {/* Questions Column */}
                    <div className='flex-1'>
                        {activeData && (
                            <FAQAccordion items={activeData.items} />
                        )}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
