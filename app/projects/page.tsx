"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PROJECTS, INVERTED_ICONS } from "@/lib/data/projects";
import type { Project } from "@/types";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div variants={itemVariants} className="h-full">
      <Link
        href={project.repositoryUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver ${project.title} no GitHub`}
        className="group block h-full focus-visible:outline-none"
      >
        <section className="hover-card flex h-full flex-col rounded-xl p-6 group-focus-visible:border-white/25 hover:border-white/25 hover:bg-white/4 sm:p-8">
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-white">
              {project.title}
            </h2>
            <p className="mt-1 text-sm text-gray-400">{project.description}</p>
          </div>

          <div className="mt-auto">
            <div className="flex flex-wrap items-center gap-3">
              {project.stack.map((technology) => (
                <div
                  key={technology}
                  className="relative flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-md border border-white/10 bg-black/30"
                >
                  <Image
                    src={`/${technology}`}
                    alt=""
                    fill
                    sizes="28px"
                    className={`object-contain p-1 transition-all duration-300 group-hover:scale-105 ${
                      INVERTED_ICONS.includes(technology) ? "invert" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Link>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="relative z-10 flex min-h-screen w-full flex-col px-4">
      <div className="grid-bg pointer-events-none fixed inset-0" />

      <Header />

      <div className="mx-auto w-full max-w-4xl grow pt-24 pb-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4"
        >
          <section className="grid gap-4 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </section>
        </motion.div>

        <Footer />
      </div>
    </main>
  );
}
