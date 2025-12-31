"use client";

import { useState } from "react";
import faqData from "./faqData.json";
import FAQMobileSelect from "./FAQMobileSelect";
import FAQDesktopSidebar from "./FAQDesktopSidebar";
import FAQAccordion from "./FAQAccordion";

// Define shared types (or move to a types.ts file)
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export default function FAQSection() {
  const data = faqData as FAQCategory[];
  const [activeCategory, setActiveCategory] = useState(data[0].category);

  // Find the items for the currently selected category
  const activeData = data.find((item) => item.category === activeCategory);

  return (
    <section id="faq" className="max-w-6xl mx-auto py-32 px-4">
      <div className="w-full md:relative md:bg-[#1A1A1A] md:border md:border-[#FFFFFF80] md:rounded-[32px] md:p-12 md:overflow-hidden md:shadow-[-20px_20px_100px_rgba(59,132,247,0.5),20px_-20px_100px_rgba(71,173,122,0.5)]">
        
        <h2 className="text-4xl font-bold mb-10 text-white text-center">Frequently Asked Questions</h2>

        <div className="flex flex-col md:flex-row gap-10">
          
          {/* NAVIGATION COLUMN */}
          <div className="w-full md:w-64">
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
          </div>

          {/* QUESTIONS COLUMN */}
          <div className="flex-1">
            {activeData && <FAQAccordion items={activeData.items} />}
          </div>

        </div>
      </div>
    </section>
  );
}