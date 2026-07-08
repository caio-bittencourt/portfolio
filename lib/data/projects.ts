import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    slug: "matchwise",
    title: "Matchwise",
    description:
      "API assíncrona para processar partidas e recalcular o rating de jogadores em background, com consistência transacional no processamento do rating.",
    category: "Back-end",
    repositoryUrl: "https://github.com/caiolucasbittencourt/matchwise",
    stack: [
      "nodejs.png",
      "typescript.svg",
      "expressjs.png",
      "postgresql.svg",
      "prisma.png",
    ],
    featured: true,
  },
  {
    slug: "semi",
    title: "Semi",
    description:
      "SPA de front-end com composição de componentes, layout responsivo e organização por rotas.",
    category: "Front-end",
    repositoryUrl: "https://github.com/caiolucasbittencourt/semi",
    demoUrl: "https://tesla-semi-rust.vercel.app",
    stack: ["react.svg", "javascript.svg", "tailwindcss.svg"],
  },
  {
    slug: "gridbase",
    title: "Gridbase",
    description:
      "API para consultar informações do campeonato de Fórmula 1, com dados de equipes, pilotos e circuitos.",
    category: "Back-end",
    repositoryUrl: "https://github.com/caiolucasbittencourt/gridbase",
    stack: ["nodejs.png", "typescript.svg", "fastify.svg"],
  },
  {
    slug: "sherlock-holmes-api",
    title: "Sherlock Holmes API",
    description:
      "Free REST API for Sherlock Holmes quotes, cases, and characters from the public domain works of Sir Arthur Conan Doyle.",
    category: "Back-end",
    repositoryUrl:
      "https://github.com/caiolucasbittencourt/sherlock-holmes-api",
    demoUrl: "https://sherlockholmes-api.vercel.app",
    stack: ["nodejs.png", "typescript.svg", "expressjs.png"],
  },
  {
    slug: "linkvault",
    title: "Linkvault",
    description:
      "API para catalogar e consultar links, conteúdos técnicos e referências.",
    category: "Back-end",
    repositoryUrl: "https://github.com/caiolucasbittencourt/linkvault",
    stack: [
      "nodejs.png",
      "typescript.svg",
      "nestjs.svg",
      "postgresql.svg",
      "jest.svg",
    ],
  },
];

export const INVERTED_ICONS = [
  "nextjs.png",
  "expressjs.png",
  "fastify.svg",
  "prisma.png",
];
