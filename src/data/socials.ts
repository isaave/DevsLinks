export type Social = {
  id: string;
  name: string;
  url: string;
  icon: "github" | "instagram" | "youtube" | "linkedin" | "twitter";
};

export const socials: Social[] = [
  { id: "github", name: "GitHub", url: "https://github.com/isaave", icon: "github" },
  { id: "instagram", name: "Instagram", url: "https://www.instagram.com/isaa_avelina/", icon: "instagram" },
  { id: "youtube", name: "YouTube", url: "https://www.youtube.com/", icon: "youtube" },
  { id: "linkedin", name: "LinkedIn", url: "https://www.linkedin.com/in/isabella-avelina-de-oliveira-966938236/", icon: "linkedin" },
  { id: "twitter", name: "Twitter", url: "https://twitter.com", icon: "twitter" },
];