"use client";

import { Typography } from "@/components/ui/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

interface BiographyItem {
  value: string;
  title: string;
  content: string;
}

interface BiographyAccordionProps {
  items: BiographyItem[];
}

export function BiographyAccordion({ items }: BiographyAccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <section className="w-full py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Accordion
          type="multiple"
          value={openItems}
          onValueChange={setOpenItems}
          className="w-full space-y-5"
        >
          {items.map((item) => {
            const isOpen = openItems.includes(item.value);
            return (
              <AccordionItem
                key={item.value}
                value={item.value}
                className={`border rounded-md p-5 ${
                  isOpen ? "border-white" : "border-[#2D2D2D]"
                }`}
              >
                <AccordionTrigger className="hover:no-underline py-0 [&>svg]:text-[#F6B95A]">
                  <Typography.P className="text-xl text-white font-medium">
                    {item.title}
                  </Typography.P>
                </AccordionTrigger>
                <AccordionContent className="pt-5 pb-0">
                  <Typography.P className="text-base text-[#8B8B8B] font-normal leading-relaxed">
                    {item.content}
                  </Typography.P>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}