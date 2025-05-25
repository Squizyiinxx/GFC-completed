import Icon from "@/assets/Icon";
import type { ProjectType } from "@/types/global";
import { memo } from "react";
import type React from "react";

const Card: React.FC<ProjectType> = ({ image, title, description, slug }) => (
  <div className="w-full overflow-hidden rounded-lg">
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="aspect-video w-full object-cover"
        decoding="async"
      />
    </div>
    <div className="flex grow flex-col gap-4 p-4 w-full glass-effect bg-white/40">
      <div className="flex grow flex-col gap-2 mb-8">
        <a
          className="transition-colors underline-offset-[3.5px] break-words hover:underline focus-visible:outline-offset-2 focus-visible:outline-neutral-700 font-semibold z-[1]"
          href={slug}
        >
          {title}
        </a>
        <span className="text-sm text-slate-400 text-pretty grow">
          {description}
        </span>
      </div>
      <a
        href={slug}
        rel="noopener noreferrer"
        title={title}
        className="bg-[var(--accent-primary)] rounded-full transition-all delay-75 group duration-300 ease-in-out py-2 px-4 text-sm max-w-max flex items-center hover:bg-[var(--accent-secondary)]"
      >
        View Demo
        <Icon
          name="arrow-right"
          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300 ease-in-out"
        />
      </a>
    </div>
  </div>
);

export default memo(Card);
