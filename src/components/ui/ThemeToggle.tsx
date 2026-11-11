import type { FC } from "react";

type ThemeToggleProps = {
  theme: "light" | "dark";
  onToggle: () => void;
};

// Alterna entre tema claro e escuro (componente UI genérico).
export const ThemeToggle: FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      aria-pressed={isDark}
      className="flex h-8 w-16 items-center rounded-full border border-[var(--stroke-color)] bg-[var(--highlight-color)] p-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--highlight-color)]"
    >
      {/* Puck branco com ícone escuro: padrão visual do switch do Figma. */}
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-white text-zinc-900 shadow-md transition-transform ${
          isDark ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {isDark ? (
          // Lua (Phosphor: moon)
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          // Sol (Phosphor: sun)
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        )}
      </span>
    </button>
  );
};
