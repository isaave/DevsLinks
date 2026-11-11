import type { FC } from "react";

type LinkButtonProps = {
  label: string;
  url: string;
};

// Botão de link individual; abre o destino em nova aba.
export const LinkButton: FC<LinkButtonProps> = ({ label, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full rounded-lg border border-[var(--stroke-color)] bg-[var(--surface-color)] px-4 py-3 text-center font-medium text-[var(--text-color)] transition-colors hover:bg-[var(--surface-color-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--highlight-color)]"
    >
      {label}
    </a>
  );
};
