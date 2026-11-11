import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

// Chave usada para persistir o tema no localStorage.
const STORAGE_KEY = "devlinks:theme";

// Lê o tema salvo; se ausente ou inválido, usa a preferência do sistema.
function getInitialTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// Gerencia o tema claro/escuro: estado, aplicação no <html> e persistência.
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Sincroniza o atributo data-theme e o localStorage com o estado.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
}
