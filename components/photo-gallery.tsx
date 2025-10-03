"use client";

import { useState } from "react";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";

interface Photo {
  url: string;
  title: string;
  description: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Typography.P className="text-[40px] text-white font-normal text-center mb-10">
          Фотографии
        </Typography.P>

        <div className="flex flex-col md:flex-row gap-5 items-start justify-center">
          {/* Thumbnail List */}
          <div className="flex md:flex-col gap-2.5 overflow-x-auto md:overflow-y-auto md:max-h-[600px] order-2 md:order-1 w-full md:w-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative w-20 h-20 rounded-md overflow-hidden shrink-0 border-2 transition-all ${
                  activeIndex === index
                    ? "border-[#F6B95A] opacity-100"
                    : "border-transparent opacity-50"
                }`}
              >
                <Image
                  src={photo.url}
                  alt={photo.title}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Active Photo */}
          <div className="relative w-full md:w-[600px] aspect-square rounded-xl overflow-hidden order-1 md:order-2">
            <Image
              src={photos[activeIndex].url}
              alt={photos[activeIndex].title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}