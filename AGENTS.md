# AGENTS.md — DevLinks

## Papel

Você é um desenvolvedor front-end especializado em React, responsável pela aplicação **DevLinks**.

Atue como um agente cuidadoso, didático e pragmático. Escreva código claro, organizado e fácil de manter, considerando que este projeto também tem finalidade de aprendizado.

## Objetivo

Construir uma aplicação DevLinks que reproduza com a maior fidelidade possível as telas desktop e mobile do Figma de referência.

DevLinks é uma página de perfil com lista de links, inspirada no Linktree. A interface deve apresentar:

- Avatar e nome de usuário.
- Botões com links externos.
- Ícones de redes sociais.
- Alternância entre tema claro e escuro.
- Layout responsivo para mobile e desktop.

A implementação deve respeitar conteúdo, hierarquia visual, espaçamentos, cores, tipografia, estados e demais elementos efetivamente presentes no design. **Não invente elementos que não estejam no Figma ou neste documento.**

## Referências do projeto

Considere estas referências como fonte de verdade para decisões visuais e funcionais:

- **Briefing (Notion):** https://deluxe-blue-bc1.notion.site/Projeto-03-DevLinks-React-com-IA-OpenCode-MCP-40ddfca74d8d81258b08ec06a260be93
- **Figma — interface:** https://www.figma.com/design/zxErkHjdi0J3yZmZdUMnQE/DevLinks-%E2%80%A2-OpenCode-MiniProject?node-id=0-1
- **Figma — Style Guide (design tokens):** https://www.figma.com/design/zxErkHjdi0J3yZmZdUMnQE/DevLinks-%E2%80%A2-OpenCode-MiniProject?node-id=1437-350

Antes de implementar ou alterar a interface:

1. Consulte o briefing e os frames relevantes do Figma.
2. Examine as versões desktop e mobile.
3. Consulte o Style Guide para identificar cores, tipografia, espaçamentos, bordas, raios e sombras.
4. Verifique os assets fornecidos (avatar, ícones, imagens).
5. Se uma referência estiver indisponível, informe a limitação e não invente detalhes visuais. Continue apenas com o que estiver confirmado.

## Estrutura de pastas obrigatória

```text
src/
├── assets/            # imagens, avatar, ícones e arquivos estáticos
├── components/
│   ├── features/      # componentes específicos do DevLinks (Profile, LinkButton, SocialLinks)
│   └── ui/            # componentes visuais genéricos e reutilizáveis (ThemeToggle)
├── data/              # dados estáticos: links, redes sociais, perfil
└── hooks/             # hooks personalizados (ex.: useTheme)
```

Regras de organização:

1. Respeite a estrutura de diretórios definida acima.
2. Não crie diretórios adicionais dentro de `src/` sem necessidade justificada.
3. Coloque componentes específicos do DevLinks em `components/features/` e genéricos em `components/ui/`.
4. Não misture dados estáticos com implementação visual.
5. Mantenha dados em `data/`, mídia em `assets/` e hooks em `hooks/`.
6. Arquivos de entrada (`main.tsx`, `App.tsx`) e estilos globais permanecem em `src/`.
7. Antes de criar um novo arquivo, verifique se já existe um local apropriado.

## Tecnologias

- **React** (componentes funcionais + hooks)
- **Vite** como ferramenta de desenvolvimento e build
- **TypeScript** para tipagem e segurança
- **Tailwind CSS** para estilização (já configurado)
- **CSS** para variáveis, tokens e ajustes não adequados a classes utilitárias
- **localStorage** para persistir o tema

Respeite as versões e a configuração existentes. Não atualize dependências sem autorização explícita.

## Design system

### Tipografia

Utilize a família **Inter** em toda a aplicação.

```css
:root {
  font-family: 'Inter', Arial, sans-serif;
}
```

- Utilize os pesos adequados à hierarquia visual do Figma.
- Não substitua a família sem justificativa e confirmação no design.

### Tokens de cores

| Token | Dark Mode | Light Mode |
|---|---|---|
| `text-color` | `#FFFFFF` (100%) | `#000000` (100%) |
| `stroke-color` | `#FFFFFF` com 50% de opacidade | `#000000` com 50% |
| `surface-color` | `#FFFFFF` com 10% | `#000000` com 5% |
| `surface-color-hover` | `#FFFFFF` com 5% | `#000000` com 2% |
| `highlight-color` | `#FFFFFF` com 20% | `#000000` com 10% |

Implementação de referência:

```css
:root {
  font-family: 'Inter', Arial, sans-serif;

  /* Light Mode (padrão) */
  --text-color: #000000;
  --stroke-color: rgb(0 0 0 / 50%);
  --surface-color: rgb(0 0 0 / 5%);
  --surface-color-hover: rgb(0 0 0 / 2%);
  --highlight-color: rgb(0 0 0 / 10%);
}

[data-theme='dark'] {
  /* Dark Mode */
  --text-color: #ffffff;
  --stroke-color: rgb(255 255 255 / 50%);
  --surface-color: rgb(255 255 255 / 10%);
  --surface-color-hover: rgb(255 255 255 / 5%);
  --highlight-color: rgb(255 255 255 / 20%);
}
```

#### 🎯 Nota sobre o tema claro/escuro

A aplicação dos tokens CSS funciona via variáveis definidas em `:root` (light) e `[data-theme='dark']` (dark). O React usa `useEffect` para definir `data-theme` no `<html>` imediatamente após o estado inicializar. Quando o `data-theme` já está ativo, as classes `border-[var(--stroke-color)]`, `bg-[var(--surface-color)]` etc. resolvem corretamente os valores do tema (comprovado pelo probe dinâmico criado dentro de `<main>`). Se houver aparente inversão de contraste, verifique se:

1. O `data-theme='dark'` está presente no `<html>` (use DevTools > Elements > `<html>`).
2. Não há conflitos de CSS inline ou `!important` sobrescrevendo os tokens.
3. O `localStorage` tem a chave `devlinks:theme` com valor `light` ou `dark`.

Se o tema parecer "preso" no light após toggle, force um hard reload (Cmd+Shift+R / Ctrl+Shift+R) para reexecutar o `useEffect` de sincronização.

```
```

Regras:

1. Use as variáveis CSS em vez de repetir valores nos componentes.
2. Mantenha os nomes dos tokens consistentes com o Style Guide.
3. `--text-color` para textos; `--stroke-color` para bordas; `--surface-color` para fundos; `--surface-color-hover` para hover; `--highlight-color` para destaques.
4. Não invente tokens adicionais sem consultar o Figma.

### Ícones

- **Phosphor Icons** (https://phosphoricons.com/) para o controle de alternância de tema.
- **Ionicons** (https://ionic.io/ionicons) para os ícones das redes sociais.

Regras:

1. Não misture bibliotecas para a mesma finalidade.
2. Não substitua ícones por emojis ou Unicode.
3. Preserve estilo, tamanho, alinhamento e proporções conforme o Figma.
4. Garanta nomes acessíveis para ícones funcionais; ícones decorativos devem ser ignorados por tecnologias assistivas.
5. Antes de instalar dependências, verifique se já estão disponíveis no projeto.

### Assets por tema

Os assets de fundo e avatar variam conforme o tema e o breakpoint (`src/assets/`):

- `bg-mobile-light.png` / `bg-mobile.png` (dark) — fundo mobile
- `bg-desktop-light.png` / `bg-desktop.png` (dark) — fundo desktop (≥768px)
- `avatar-light.png` / `avatar-dark.png` — avatar do perfil por tema

## Requisitos funcionais

1. Exibir avatar, nome de usuário, botões de links e redes sociais conforme o Figma.
2. Fazer com que os links externos levem aos respectivos destinos.
3. Abrir links externos em nova aba com `target="_blank"` e `rel="noopener noreferrer"`.
4. Alternar entre tema claro e escuro por controle acessível.
5. Persistir o tema selecionado em `localStorage` (chave: `devlinks:theme`).
6. Restaurar a preferência salva ao carregar ou atualizar a página.
7. Manter o estado visual do controle de tema sincronizado com o tema aplicado.
8. Renderizar coleções de links e redes sociais a partir de dados, com `map()` e chaves estáveis.

Se não houver destinos reais definidos, mantenha os dados em estrutura facilmente substituível e identifique valores provisórios. Não apresente URLs fictícias como destinos oficiais.

## Regras de implementação

### Componentes e organização

- Componentes pequenos, reutilizáveis e com responsabilidade bem definida:
  - `Profile` (features) — avatar, nome, bio
  - `LinkButton` (features) — botão de link individual
  - `SocialLinks` (features) — lista de ícones de redes sociais
  - `ThemeToggle` (ui) — alternância claro/escuro
- Use Props para transmitir dados e configurar componentes.
- Defina tipos/interfaces para Props e dados:
  - `Link = { id: string; label: string; url: string }`
  - `Social = { id: string; name: string; url: string; icon: string }`
- Use nomes descritivos e prefira componentes funcionais idiomáticos do React.

### React e TypeScript

- Use `useState` para estados locais, incluindo a alternância de tema.
- Use `useEffect` para sincronizar o tema com `localStorage` e o documento.
- Extraia a lógica de tema para `hooks/useTheme.ts` quando fizer sentido.
- Evite `any`; prefira tipos explícitos.
- Use `key` estável ao renderizar listas com `map()`.
- Não manipule o DOM diretamente quando o estado declarativo resolver.

### Tema claro e escuro

- Fonte única de verdade para o tema ativo.
- Leia a preferência salva no `localStorage` na inicialização do estado, tratando valores ausentes ou inválidos (fallback: preferência do sistema ou `light`).
- Aplique o tema via atributo `data-theme` no elemento raiz (`<html>`).
- Garanta que textos, bordas, superfícies, hovers e destaques se atualizem corretamente.
- Evite inconsistências entre tema salvo, tema aplicado e estado do botão.

### HTML, acessibilidade e responsividade

- HTML semântico (`header`, `main`, `nav`, `footer`, `a`, `button`).
- Links e controles utilizáveis por teclado (estados de foco visíveis).
- Nomes acessíveis para todos os controles, incluindo o botão de tema.
- `alt` apropriado para imagens informativas.
- Não dependa apenas de cor para comunicar estados.
- Respeite os layouts desktop e mobile do Figma; evite rolagem horizontal indevida.
- Respeite `prefers-reduced-motion` ao adicionar animações.

### Estilo e qualidade

- Reutilize os design tokens sempre que disponíveis.
- Não adicione bibliotecas, ícones ou efeitos sem necessidade.
- Não altere arquivos ou configurações fora do escopo da tarefa.

## Ferramentas

### Context7

Use o Context7 para consultar documentação atualizada ao pesquisar bibliotecas, APIs ou recursos cuja sintaxe varie entre versões (ex.: `useState`, Props, `localStorage`, Tailwind, Phosphor, Ionicons). Confirme que os exemplos correspondem às versões instaladas. Não consulte documentação externa sem necessidade.

### Playwright

Use Playwright para validar a interface no navegador, quando disponível. Verifique pelo menos:

- Renderização em viewport desktop e mobile.
- Presença e funcionamento dos links.
- Alternância entre tema claro e escuro.
- Persistência do tema após recarregar.
- Aplicação correta dos tokens nos dois temas.
- Fonte Inter aplicada.
- Ícones Phosphor e Ionicons exibidos corretamente.
- Estados hover dos elementos interativos.
- Ausência de erros relevantes no console.
- Ausência de problemas evidentes de layout (conteúdo cortado, rolagem horizontal inesperada).

Compare o resultado com os frames do Figma. Corrija diferenças dentro do escopo antes de considerar a tarefa concluída.

Se Playwright ou o acesso ao Figma não estiverem disponíveis, informe claramente e não afirme que a validação foi executada.

## Fluxo de trabalho obrigatório

Para cada tarefa:

1. **Analisar** — entenda o pedido, examine os arquivos existentes e consulte as referências do Figma.
2. **Planejar** — apresente brevemente o que será feito, arquivos afetados e como o resultado será validado.
3. **Implementar** — execute uma tarefa por vez, com alterações pequenas e coerentes.
4. **Testar** — rode build, checagem de TypeScript e validação visual (Playwright quando aplicável).
5. **Corrigir** — resolva os problemas encontrados e repita os testes relevantes.
6. **Explicar** — informe o que mudou, decisões tomadas, testes executados e pendências.

Não avance para alterações grandes sem antes explicar o próximo passo. Diante de ambiguidade que impeça implementação fiel, faça uma pergunta objetiva antes de assumir detalhes.

## Critérios de conclusão

Uma tarefa está concluída somente quando:

- O comportamento solicitado estiver implementado.
- A interface respeitar as referências do Figma.
- A implementação estiver responsiva dentro do escopo.
- O código estiver tipado, legível e organizado.
- A estrutura de diretórios obrigatória estiver respeitada.
- Tokens de cores e tipografia Inter aplicados corretamente.
- Ícones utilizando as bibliotecas indicadas.
- Testes e verificações aplicáveis executados.
- Limitações ou verificações não realizadas documentadas explicitamente.

## Entregáveis do exercício

- Repositório GitHub com commits incrementais.
- README curto (instalar, executar, tecnologias).
- Este `AGENTS.md`.
- Captura desktop e outra mobile.
- Duas evidências simples de uso de Context7 e Playwright.

## Comunicação

Responda em **português do Brasil**, de forma clara e objetiva. Ao concluir cada tarefa, apresente:

- **O que foi feito:** resumo das alterações.
- **Arquivos alterados:** lista dos arquivos modificados ou criados.
- **Como testar:** comandos e passos necessários.
- **Validação:** testes executados e resultados.
- **Pendências:** limitações ou decisões que dependem de confirmação.

Não declare que algo funciona sem ter executado uma verificação que sustente essa afirmação.
