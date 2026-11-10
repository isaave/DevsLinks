import { useEffect, useState } from "react";
import avatar from "./assets/avatar-light.png";
import { Profile } from "./components/Profile";
import { LinkButton } from "./components/LinkButton";
import { ThemeToggle } from "./components/ThemeToggle";
import { SocialLinks } from "./components/SocialLinks";
import { links } from "./data/links";
import { socials } from "./data/socials";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  const stored = localStorage.getItem("devlinks:theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("devlinks:theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <div className="app-bg min-h-screen flex flex-col items-center px-4 py-8 text-white">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        <div className="self-end">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>

        <Profile avatar={avatar} name="devlinks" bio="Links do meu portfólio" />

        <main className="w-full flex flex-col gap-4">
          {links.map((link) => (
            <LinkButton key={link.id} label={link.label} url={link.url} />
          ))}
        </main>

        <SocialLinks socials={socials} />

        <footer className="mt-4 text-xs text-white/60">
          Feito com ♥ — DevLinks
        </footer>
      </div>
    </div>
  );
}
