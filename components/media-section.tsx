import { Typography } from "@/components/ui/typography";

interface MediaSectionProps {
  videoUrls: string[];
}

export function MediaSection({ videoUrls }: MediaSectionProps) {
  const getEmbedUrl = (url: string) => {
    const videoId = url.split("/").pop()?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <section className="w-full py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Typography.P className="text-[40px] text-white font-normal text-center mb-10">
          Медиафайлы
        </Typography.P>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {videoUrls.map((url, index) => (
            <div key={index} className="relative w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                src={getEmbedUrl(url)}
                title={`Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}