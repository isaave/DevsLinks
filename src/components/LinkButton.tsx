import type { FC } from "react";

type LinkButtonProps = {
  label: string;
  url: string;
};

// A single link button that opens the URL in a new tab.
export const LinkButton: FC<LinkButtonProps> = ({ label, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-center font-medium backdrop-blur transition hover:bg-white/20 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-white/40"
    >
      {label}
    </a>
  );
};
