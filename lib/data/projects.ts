import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    slug: "motor-de-calculo-assincrono",
    title: "Motor de Cálculo Assíncrono",
    description:
      "API que processa partidas em background e recalcula o rating de jogadores com consistência transacional.",
    category: "Back-end & arquitetura",
    repositoryUrl:
      "https://github.com/caiolucasbittencourt/motor-de-calculo-assincrono",
    stack: [
      "nodejs.png",
      "expressjs.png",
      "typescript.svg",
      "postgresql.svg",
      "prisma.png",
    ],
    featured: true,
  },
  {
    slug: "tesla-semi",
    title: "Tesla Semi",
    description:
      "Proposta conceitual que aproxima UX/UI e desenvolvimento front-end em uma experiência visual para o Tesla Semi.",
    category: "UX/UI & front-end",
    repositoryUrl: "https://github.com/caiolucasbittencourt/tesla-semi",
    demoUrl: "https://tesla-semi-rust.vercel.app",
    stack: ["react.svg", "javascript.svg", "tailwindcss.svg"],
  },
  {
    slug: "acervo-de-formula-1",
    title: "Acervo de Fórmula 1",
    description:
      "API para consultar equipes, pilotos e circuitos da Fórmula 1 por meio de endpoints rápidos e bem definidos.",
    category: "API REST",
    repositoryUrl:
      "https://github.com/caiolucasbittencourt/acervo-de-formula-1",
    stack: ["nodejs.png", "fastify.svg", "typescript.svg"],
  },
  {
    slug: "sherlock-holmes-api",
    title: "Sherlock Holmes API",
    description:
      "API REST gratuita com citações, casos e personagens das obras de Sherlock Holmes em domínio público.",
    category: "API pública",
    repositoryUrl:
      "https://github.com/caiolucasbittencourt/sherlock-holmes-api",
    demoUrl: "https://sherlockholmes-api.vercel.app",
    stack: ["nodejs.png", "expressjs.png", "typescript.svg"],
  },
  {
    slug: "nox-ui",
    title: "Nox UI",
    description:
      "Coleção de componentes React prontos para copiar, com foco em dark mode, movimento e interfaces contemporâneas.",
    category: "Design system",
    repositoryUrl: "https://github.com/caiolucasbittencourt/nox-ui",
    stack: ["nextjs.png", "react.svg", "typescript.svg", "tailwindcss.svg"],
  },
];

export const INVERTED_ICONS = [
  "nextjs.png",
  "expressjs.png",
  "fastify.svg",
  "prisma.png",
];
