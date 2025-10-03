import { Typography } from "@/components/ui/typography";

interface LifeBlock {
  title: string;
  content: string;
}

interface LifePersonalitySectionProps {
  leftBlocks: LifeBlock[];
  rightBlocks: LifeBlock[];
}

export function LifePersonalitySection({
  leftBlocks,
  rightBlocks,
}: LifePersonalitySectionProps) {
  return (
    <section className="w-full py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="flex flex-col gap-10">
            {leftBlocks.map((block, index) => (
              <div key={index}>
                <Typography.P className="text-[40px] text-white font-normal mb-4">
                  {block.title}
                </Typography.P>
                <Typography.P className="text-base text-[#8B8B8B] font-normal leading-relaxed">
                  {block.content}
                </Typography.P>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10">
            {rightBlocks.map((block, index) => (
              <div key={index}>
                <Typography.P className="text-[40px] text-white font-normal mb-4">
                  {block.title}
                </Typography.P>
                <Typography.P className="text-base text-[#8B8B8B] font-normal leading-relaxed">
                  {block.content}
                </Typography.P>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}