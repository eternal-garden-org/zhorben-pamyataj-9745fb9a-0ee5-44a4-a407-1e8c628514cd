"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [expandedStates, setExpandedStates] = useState<boolean[]>(
    new Array(testimonials.length).fill(false)
  );

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const toggleExpanded = (index: number) => {
    setExpandedStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <section className="w-full py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Typography.P className="text-[40px] text-white font-normal text-center mb-10">
          Слова близких
        </Typography.P>

        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="bg-transparent border border-[#2D2D2D] rounded-xl p-8 md:p-10 min-h-[300px] flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={testimonial.avatarUrl}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between h-11">
                      <Typography.P className="text-xl text-white font-medium leading-none">
                        {testimonial.name}
                      </Typography.P>
                      <Typography.P className="text-base text-[#8B8B8B] font-normal leading-none">
                        {testimonial.role}
                      </Typography.P>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <Typography.P
                      className={`text-base text-[#8B8B8B] font-normal leading-relaxed ${
                        expandedStates[index] ? "" : "line-clamp-4"
                      }`}
                    >
                      {testimonial.content}
                    </Typography.P>
                    {!expandedStates[index] && testimonial.content.length > 200 && (
                      <button
                        onClick={() => toggleExpanded(index)}
                        className="text-[#F6B95A] text-base mt-3 hover:underline"
                      >
                        Весь текст
                      </button>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Dots Navigation */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`rounded-full transition-all ${
                  current === index
                    ? "w-3 h-3 bg-[#F6B95A]"
                    : "w-2 h-2 bg-[#2D2D2D]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}