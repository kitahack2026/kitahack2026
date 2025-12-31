"use client";

import { useState } from "react";
import faqData from "./faqData.json";
import CategoryItem from "./CategoryItem";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define TypeScript interfaces for your JSON structure
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQCategory {
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
                <div 
                    className="
                    w-full
                    md:relative 
                    md:bg-[#1A1A1A] 
                    md:border md:border-[#FFFFFF80] 
                    md:rounded-[32px] 
                    md:p-12 
                    md:overflow-hidden
                    md:shadow-[-20px_20px_100px_rgba(59,132,247,0.5),20px_-20px_100px_rgba(203,92,109,0.5)]
                    "
                >
                    <h2 className="text-4xl font-bold mb-10 text-white text-center">Frequently Asked Questions</h2>
                    <div className="flex flex-col md:flex-row gap-10">
                      {/* --- NAVIGATION AREA --- */}
                      {/* We use w-full on mobile, and fixed width on desktop */}
                      <div className="w-full md:w-64">

                        {/* 1. MOBILE: Dropdown (Visible < md, Hidden >= md) */}
                        <div className="block md:hidden">
                          <Select 
                            value={activeCategory} 
                            onValueChange={setActiveCategory}
                          >
                            <SelectTrigger className="w-full bg-white/5 border-white/10 text-white h-12 rounded-xl focus:ring-offset-0 focus:ring-0">
                              <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#1A1A1A] border-white/10 text-white">
                              {data.map((item) => (
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

                        {/* 2. DESKTOP: Sidebar List (Hidden < md, Visible >= md) */}
                        {/* I moved the border/bg styles here so they don't affect the mobile dropdown wrapper */}
                        <div className="hidden md:flex flex-col gap-2 p-2 border border-white/10 bg-white/5 rounded-2xl">
                          {data.map((item) => (
                            <CategoryItem
                              key={item.category}
                              label={item.category}
                              isActive={activeCategory === item.category}
                              onClick={() => setActiveCategory(item.category)}
                            />
                          ))}
                        </div>

                      </div>

                        {/* Accordion Questions */}
                        <div className="flex-1">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {activeData?.items.map((faq) => (
                            <AccordionItem 
                                key={faq.id} 
                                value={faq.id} 
                                className="
                                    /* BASE STYLES */
                                    border border-white/10 bg-white/5 rounded-2xl px-6 transition-all duration-500
                                    
                                    /* OPEN STATE: Tighter Gold & Green Glow */
                                    data-[state=open]:bg-[#1A1A1A]
                                    data-[state=open]:border-white/30
                                    
                                    /* Shadow: Offset reduced to 5px, Blur reduced to 20px */
                                    data-[state=open]:shadow-[-5px_5px_20px_rgba(203,92,109,0.4),5px_-5px_20px_rgba(209,172,52,0.4)]
                                    
                                    data-[state=open]:-translate-y-1
                                "
                            >
                                <AccordionTrigger 
                                    className="
                                        text-left text-white py-4 text-base md:text-lg font-medium transition-all duration-300
                                        
                                        /* HOVER: Gold Text + Gold Glow */
                                        hover:text-[#d1ac34] 
                                        hover:[text-shadow:0_0_20px_rgba(209,172,52,0.6)] 
                                        hover:no-underline

                                        /* OPEN STATE: Keep Gold */
                                        [&[data-state=open]]:text-[#d1ac34]
                                        [&[data-state=open]]:[text-shadow:0_0_20px_rgba(209,172,52,0.6)]
                                    "
                                >
                                {faq.question}
                                </AccordionTrigger>
                                <AccordionContent 
                                className="text-zinc-400 text-sm md:text-base leading-relaxed pb-4"
                                >
                                {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                            ))}
                        </Accordion>
                        </div>
                    </div>
                </div>
    </section>
  );
}