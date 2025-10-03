"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

interface Quote {
  text: string;
  author: string;
}

interface QuotesCarouselProps {
  quotes: Quote[];
  backgroundPattern: string;
  openQuoteIcon: string;
  closeQuoteIcon: string;
}

export function QuotesCarousel({
  quotes,
  backgroundPattern,
  openQuoteIcon,
  closeQuoteIcon,
}: QuotesCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="w-full py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent className="py-4 md:py-5">
            {quotes.map((quote, index) => (
              <CarouselItem key={index}>
                <div
                  className="relative rounded-lg p-8 md:p-10"
                  style={{
                    backgroundColor: "#2D2D2D",
                    backgroundImage: `url(${backgroundPattern})`,
                    backgroundSize: "cover",
                    backgroundBlendMode: "overlay",
                    opacity: 0.95,
                  }}
                >
                  <Image
                    src={openQuoteIcon}
                    alt="Open quote"
                    width={40}
                    height={40}
                    className="absolute -top-5 left-5 w-10 h-10 md:w-auto md:h-auto"
                  />

                  <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F6B95A] text-[#1F1F1F] text-base font-light rounded-xl px-4 py-2 border-0">
                    {quote.author}
                  </Badge>

                  <Typography.P className="text-xl text-white italic text-center leading-relaxed">
                    {quote.text}
                  </Typography.P>

                  <Image
                    src={closeQuoteIcon}
                    alt="Close quote"
                    width={40}
                    height={40}
                    className="absolute -bottom-5 right-5 w-10 h-10 md:w-auto md:h-auto"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Dots Navigation */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {quotes.map((_, index) => (
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