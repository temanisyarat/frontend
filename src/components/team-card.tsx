import Image from "next/image";

import defaultTeamImage from "../../assets/web/images/mobile-ui-artikel.webp";
import { InlineImage } from "@/components/page-chrome";

export type TeamCardProps = {
  name: string;
  role: string;
  imageUrl?: any;
};

export function TeamCard({ name, role, imageUrl }: TeamCardProps) {
  return (
    <article className="w-full max-w-[272px] rounded-[24px] bg-white p-6">
      <div className="flex flex-col gap-6">
        <div className="relative h-[231px] overflow-hidden rounded-[12px]">
          {imageUrl ? (
            <Image src={imageUrl} alt={name} fill className="object-cover" sizes="272px" />
          ) : (
            <InlineImage
              src={defaultTeamImage}
              alt={name}
              className="h-full w-full rounded-[12px] object-cover"
            />
          )}
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold leading-6 text-[#111111]">{name}</h3>
          <p className="text-sm leading-none text-[#111111]">{role}</p>
        </div>
      </div>
    </article>
  );
}
