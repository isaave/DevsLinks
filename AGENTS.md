# AGENTS.md — DevLinks

## Role
You are a React frontend developer working on DevLinks.

## Goal
Build a responsive React application based on the
Figma reference provided in this project, reproducing
the desktop and mobile designs for light and dark modes.

## Project Overview
DevLinks is a single-page "link in bio" style application
inspired by Linktree. It displays a user profile (avatar,
name and bio), a list of link buttons, social media icons
and a footer, with a toggle to switch between light and dark
themes.

## Tech Stack
- React (functional components + hooks)
- Vite
- TypeScript
- Tailwind CSS (preferred) or plain CSS
- No extra libraries unless strictly necessary

## Design Reference
- Figma file: https://www.figma.com/design/zxErkHjdi0J3yZmZdUMnQE/DevLinks-%E2%80%A2-OpenCode-MiniProject
- Style guide (design tokens): https://www.figma.com/design/zxErkHjdi0J3yZmZdUMnQE/DevLinks-%E2%80%A2-OpenCode-MiniProject?node-id=1437-350&p=f
- Always consult the Figma screens (desktop + mobile, light + dark) before implementing.
- If a Figma MCP is available, use it to inspect the screens and extract tokens.

## Design Tokens
Before writing styles, open the Figma style guide (node 1437-350)
and extract the color, typography, spacing, radius and shadow tokens.
Configure them as CSS custom properties (or Tailwind theme) so the
whole app is driven by tokens. Do not hardcode colors in components.

Suggested token structure (fill values from the Figma style guide):

```css
:root {
  /* Colors - light mode */
  --bg-body: /* from Figma */;
  --bg-url: /* from Figma */;
  --text-color: /* from Figma */;
  --stroke-color: /* from Figma */;
  --surface-color: /* from Figma */;
  --surface-color-hover: /* from Figma */;
  --highlight-color: /* from Figma */;
  --switch-bg-url: /* from Figma */;

  /* Typography */
  --font-family: /* from Figma */;
  --font-size-base: /* from Figma */;
  --font-weight-regular: /* from Figma */;
  --font-weight-medium: /* from Figma */;
  --font-weight-bold: /* from Figma */;

  /* Spacing / radius */
  --radius-sm: /* from Figma */;
  --radius-md: /* from Figma */;
  --radius-lg: /* from Figma */;
  --spacing-sm: /* from Figma */;
  --spacing-md: /* from Figma */;
  --spacing-lg: /* from Figma */;
}

/* Dark mode overrides applied via a class on <html> or <body> */
.dark {
  --bg-body: /* from Figma */;
  --bg-url: /* from Figma */;
  --text-color: /* from Figma */;
  --stroke-color: /* from Figma */;
  --surface-color: /* from Figma */;
  --surface-color-hover: /* from Figma */;
  --highlight-color: /* from Figma */;
  --switch-bg-url: /* from Figma */;
}
```

## Features (Requirements)
- Reproduce the Figma interface on desktop and mobile.
- Display avatar, username, link buttons and social networks.
- Open external links correctly (target="_blank", rel="noopener noreferrer").
- Toggle between light and dark modes.
- Persist the selected theme in localStorage (keep after reload).
- Create reusable components: Profile, LinkButton, ThemeToggle, SocialLinks.
- Use Props, useState, events and list rendering with map().

## Component Structure
```
src/
  components/
    Profile.tsx        # avatar, name, bio
    LinkButton.tsx     # single link button (receives props)
    ThemeToggle.tsx    # light/dark switch
    SocialLinks.tsx    # list of social icons (map)
  data/
    links.ts           # array of link objects
    socials.ts         # array of social objects
  App.tsx
  main.tsx
  index.css            # design tokens + global styles
```

## Data Models
Links:
```ts
type Link = {
  id: string;
  label: string;
  url: string;
  icon?: string;
};
```

Socials:
```ts
type Social = {
  id: string;
  name: string;
  url: string;
  icon: string; // icon component or image path
};
```

## Theming
- Theme state lives in the top-level component (App) via useState.
- Initial value: read from localStorage; fallback to system preference or "light".
- Toggle updates state and writes to localStorage.
- Apply a class (e.g. "dark") to the root element to switch token values.
- Key used in localStorage: "devlinks:theme".

## Rules
- Use React with Vite and TypeScript.
- Create small, reusable components.
- Use props to pass component data.
- Use useState for the theme switch.
- Save the selected theme in localStorage.
- Follow desktop and mobile designs from Figma.
- Use semantic HTML (header, main, nav, footer, a, button).
- Keep code readable for beginners; add short comments when helpful.
- Do not add libraries without a clear need.
- Do not invent elements that are not present in the Figma design.

## Workflow
1. Explain the next task before writing code.
2. Analyze the Figma screens for the current task.
3. Plan the component/changes needed.
4. Implement one task at a time.
5. Use Context7 to check documentation when needed (useState, props, localStorage, Tailwind).
6. Validate the UI with Playwright (desktop + mobile, light + dark).
7. Explain what changed and how to test it.
8. Commit after each completed task.

## Tools
- Context7 MCP: consult documentation for useState, Props, localStorage and Tailwind before implementing interactions.
- Playwright MCP: open the local app, check the theme toggle, verify links, test desktop/mobile.
- Figma: consult directly; use Figma MCP if available to analyze screens.

## Cautions
- Explain changes clearly; do not add libraries without necessity.
- Do not invent elements absent from the Figma.
- Keep accessibility in mind (alt text, aria-labels, focus states).
- Always open external links with target="_blank" and rel="noopener noreferrer".

## Testing Checklist
- [ ] Page loads without errors.
- [ ] Light and dark themes work.
- [ ] Theme persists after reload.
- [ ] Links point to the correct destinations and open in a new tab.
- [ ] Layout works on mobile and desktop.
- [ ] Visual result compared with Figma.

## Deliverables
- GitHub repository
- README (install, run, technologies used)
- AGENTS.md
- Desktop and mobile screenshots
- Evidence of Context7 and Playwright usage
