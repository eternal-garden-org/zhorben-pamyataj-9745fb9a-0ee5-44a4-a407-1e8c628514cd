import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { Phone, Mail, MapPin } from "lucide-react";

interface Contact {
  role: string;
  name: string;
  phone?: string;
  email?: string;
  address?: string;
}

interface ContactsSectionProps {
  contacts: Contact[];
  backgroundPattern: string;
}

export function ContactsSection({ contacts, backgroundPattern }: ContactsSectionProps) {
  return (
    <section className="w-full py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Typography.P className="text-[40px] text-white font-normal text-center mb-10">
          Контакты
        </Typography.P>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="relative min-h-[156px] rounded-xl p-5"
              style={{
                backgroundColor: "#2D2D2D",
                backgroundImage: `url(${backgroundPattern})`,
                backgroundSize: "cover",
                backgroundBlendMode: "overlay",
                opacity: 0.95,
              }}
            >
              {/* Personal Info */}
              <div className="mb-5">
                <Typography.P className="text-xs text-[#8B8B8B] font-normal mb-1">
                  {contact.role}
                </Typography.P>
                <Typography.P className="text-base text-white font-medium">
                  {contact.name}
                </Typography.P>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col gap-3">
                {contact.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#8B8B8B] shrink-0" />
                    <Typography.P className="text-base text-white font-normal">
                      {contact.phone}
                    </Typography.P>
                  </div>
                )}
                {contact.email && (
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#8B8B8B] shrink-0" />
                    <Typography.P className="text-base text-white font-normal">
                      {contact.email}
                    </Typography.P>
                  </div>
                )}
                {contact.address && (
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#8B8B8B] shrink-0" />
                    <Typography.P className="text-base text-white font-normal">
                      {contact.address}
                    </Typography.P>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}