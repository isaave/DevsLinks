import minhafoto from "./assets/minhafoto.png";
import { Profile } from "./components/features/Profile";
import { LinkButton } from "./components/features/LinkButton";
import { SocialLinks } from "./components/features/SocialLinks";
import { ThemeToggle } from "./components/ui/ThemeToggle";
import { links } from "./data/links";
import { socials } from "./data/socials";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  // Tema claro/escuro: estado, data-theme no <html> e localStorage.
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app-bg flex min-h-screen flex-col items-center px-4 py-8">
      <div className="flex w-full max-w-md flex-col items-center gap-6">
        <div className="self-end">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>

        <Profile
          avatar={minhafoto}
          name="devlinks"
          bio="Links do meu portfólio"
        />

        <main className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkButton key={link.id} label={link.label} url={link.url} />
          ))}
        </main>

        <SocialLinks socials={socials} />

        <footer className="mt-4 text-xs text-[var(--text-color)] opacity-60">
          Feito com ♥ — DevLinks
        </footer>
      </div>
    </div>
  );
}
