import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

interface HeroSectionProps {
  firstName: string;
  middleName: string;
  lastName: string;
  birthDate: Date;
  deathDate: Date;
  birthPlace: string;
  deathPlace: string;
  mainImageUrl: string;
  backgroundImageUrl: string;
  yearsLived: string;
}

export function HeroSection({
  firstName,
  middleName,
  lastName,
  birthDate,
  deathDate,
  birthPlace,
  deathPlace,
  mainImageUrl,
  backgroundImageUrl,
  yearsLived,
}: HeroSectionProps) {
  const birthYear = birthDate.getFullYear();
  const deathYear = deathDate.getFullYear();
  
  const formattedBirthDate = format(birthDate, "d MMMM yyyy", { locale: ru });
  const formattedDeathDate = format(deathDate, "d MMMM yyyy", { locale: ru });

  return (
    <section 
      className="relative w-full py-16 md:py-20"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-[480px_1fr] gap-8 md:gap-12">
          {/* Photo */}
          <div className="w-full md:w-[480px] aspect-square relative rounded-lg overflow-hidden">
            <Image
              src={mainImageUrl}
              alt={`${firstName} ${middleName} ${lastName}`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Info Block */}
          <div className="flex flex-col justify-between min-h-[480px]">
            {/* Top Block */}
            <div className="flex flex-col">
              <Typography.P className="text-[40px] leading-tight text-white font-normal">
                {firstName}
              </Typography.P>
              <Typography.P className="text-[40px] leading-tight text-white font-normal">
                {middleName} {lastName}
              </Typography.P>
              
              <Badge 
                className="mt-10 rounded-full bg-[#F6B95A] text-[#1F1F1F] text-base font-light border-0 px-4 py-2"
              >
                {yearsLived}
              </Badge>

              <div className="mt-5 flex items-baseline gap-2 flex-wrap">
                <Typography.P className="text-xl text-white font-bold">
                  {birthYear}
                </Typography.P>
                <Typography.P className="text-xl text-[#8B8B8B] font-light">
                  {formattedBirthDate}
                </Typography.P>
                <Typography.P className="text-xl text-white font-bold">
                  –
                </Typography.P>
                <Typography.P className="text-xl text-white font-bold">
                  {deathYear}
                </Typography.P>
                <Typography.P className="text-xl text-[#8B8B8B] font-light">
                  {formattedDeathDate}
                </Typography.P>
              </div>
            </div>

            {/* Bottom Block */}
            <div className="flex flex-col gap-6">
              {/* Birth Place */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8B8B8B]" />
                  <Typography.P className="text-sm text-[#8B8B8B] font-normal">
                    Место рождения
                  </Typography.P>
                </div>
                <Typography.P className="text-xl text-white font-medium">
                  {birthPlace}
                </Typography.P>
              </div>

              {/* Death Place */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8B8B8B]" />
                  <Typography.P className="text-sm text-[#8B8B8B] font-normal">
                    Место смерти
                  </Typography.P>
                </div>
                <Typography.P className="text-xl text-white font-medium">
                  {deathPlace}
                </Typography.P>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}