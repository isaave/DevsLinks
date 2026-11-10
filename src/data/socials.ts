export type Social = {
  id: string;
  name: string;
  url: string;
  icon: "github" | "instagram" | "youtube" | "linkedin" | "twitter";
};

export const socials: Social[] = [
  { id: "github", name: "GitHub", url: "https://github.com", icon: "github" },
  { id: "instagram", name: "Instagram", url: "https://instagram.com", icon: "instagram" },
  { id: "youtube", name: "YouTube", url: "https://youtube.com", icon: "youtube" },
  { id: "linkedin", name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { id: "twitter", name: "Twitter", url: "https://twitter.com", icon: "twitter" },
];
