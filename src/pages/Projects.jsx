import {
  ArrowUpRight,
  ExternalLink,
  Layers3,
} from "lucide-react";

import Railmet from "../assets/railmet-portfolio.png";
import Nashi from "../assets/nashi-portfolio.png";
import Surya from "../assets/surya-portfolio.png";
import Loans from "../assets/49secondloans-portfolio.png";

import AutoGen from "../assets/autogen-portfolio.png";
import Bucks from "../assets/bucks-portfolio.png";
import Horizons from "../assets/horizons-portfolio.png";
import PickMe from "../assets/pickme-portfolio.png";
import Providentia from "../assets/providentia-portfolio.png";
import Swasthik from "../assets/swasthi-portfolio.png";
import Twilight from "../assets/twilight-portfolio.png";
import Yoga from "../assets/yoga-portfolio.png";

import WorkingImage from "../assets/project-working.png";


const projects = [
  {
    title: "RailMet",
    category: "Industrial Website",
    technology: "React",
    description:
      "A modern industrial website developed with React, focused on a professional interface, responsive layouts and a clean user experience.",
    image: Railmet,
    link: "https://railmet.in/",
  },

  {
    title: "Nashi Informatics",
    category: "Digital Marketing Website",
    technology: "WordPress · Elementor",
    description:
      "A professional digital marketing website designed to present services, solutions and business information with a modern responsive interface.",
    image: Nashi,
    link: "https://www.nashiinfo.com/",
  },

  {
    title: "Surya Informatics",
    category: "IT Business Website",
    technology: "WordPress · Elementor",
    description:
      "A business-focused IT website created with a clean visual structure, responsive design and SEO-friendly content presentation.",
    image: Surya,
    link: "https://www.suryainformatics.com/",
  },

  {
    title: "49 Second Loans",
    category: "Finance Website",
    technology: "WordPress · Elementor",
    description:
      "A finance-focused website built to communicate loan services clearly through a modern interface and responsive user experience.",
    image: Loans,
    link: "https://49secondloans.com/",
  },

  {
    title: "AutoGenLeads",
    category: "WhatsApp Automation Website",
    technology: "WordPress · Elementor",
    description:
      "A modern business website for WhatsApp lead automation, designed with a clean interface to showcase automation solutions and business services.",
    image: AutoGen,
    link: "https://autogenleads.com/",
  },

  {
    title: "Bucks & Brains",
    category: "Business Consulting Website",
    technology: "WordPress · Elementor",
    description:
      "A professional consulting website with a premium dark visual style, focused on presenting business services, consulting solutions and company information.",
    image: Bucks,
    link: "https://thebucksandbrains.com/",
  },

  {
    title: "Horizons At Reach",
    category: "AI Solutions Website",
    technology: "WordPress · Elementor",
    description:
      "An AI solutions website designed to communicate AI consulting, workflow automation and enterprise AI services through a modern business interface.",
    image: Horizons,
    link: "https://horizonsatreach.com/",
  },

  {
    title: "PickMe Nuts",
    category: "E-Commerce Website",
    technology: "WordPress · Elementor",
    description:
      "A premium e-commerce website for dry fruits, nuts and related products, designed with product-focused layouts and a user-friendly shopping experience.",
    image: PickMe,
    link: "https://pickmenuts.com/",
  },

  {
    title: "Providentia",
    category: "Career Counselling Website",
    technology: "WordPress · Elementor",
    description:
      "A professional career counselling website designed to help students discover their strengths, interests and future career opportunities.",
    image: Providentia,
    link: "https://providentia.in/",
  },

  {
    title: "Swasthik Capitals",
    category: "Financial Services Website",
    technology: "WordPress · Elementor",
    description:
      "A financial services website presenting insurance, mutual funds, business loans, real estate and other financial solutions through a professional interface.",
    image: Swasthik,
    link: "https://swasthikcapitals.com/",
  },

  {
    title: "Twilight Memories",
    category: "Photography Website",
    technology: "WordPress · Elementor",
    description:
      "A premium photography website designed to showcase maternity, newborn, family and milestone photography with an elegant visual experience.",
    image: Twilight,
    link: "https://twilightmemoriesphotography.com/",
  },

  {
    title: "Ram Yoga Academy",
    category: "Yoga & Wellness Website",
    technology: "WordPress · Elementor",
    description:
      "A wellness-focused yoga website designed to present yoga programs, services and healthy lifestyle content with an engaging visual experience.",
    image: Yoga,
    link: "https://ramyogaacademy.in/",
  },
];


function Projects() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative px-5 pb-14 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:px-12 lg:pb-20 lg:pt-36 xl:px-16">

        {/* Background glow */}
        <div className="pointer-events-none absolute right-[15%] top-20 h-[500px] w-[500px] rounded-full bg-[#ff454f]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-[1500px]">

          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] xl:gap-4">

            {/* LEFT */}
            <div className="relative z-20">

              <div className="mb-6 flex items-center gap-3">

                <span className="h-px w-10 bg-[#ff454f]" />

                <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#ff454f]">
                  My Work
                </p>

              </div>


              <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-7xl md:text-8xl lg:text-[76px] xl:text-[100px]">

                Selected
                <br />

                <span className="text-zinc-600">
                  Projects.
                </span>

              </h1>


              <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                A collection of websites and web applications I have designed
                and developed using modern technologies, clean interfaces and
                responsive development practices.
              </p>

            </div>


            {/* RIGHT WORKING IMAGE */}

            <div className="relative flex min-h-[400px] items-center justify-center lg:min-h-[570px]">

              <div className="absolute right-0 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#ff454f]/15 blur-[100px]" />


              <div className="absolute right-[10%] top-1/2 hidden h-[380px] w-[380px] -translate-y-1/2 rounded-full border border-[#ff454f]/20 lg:block xl:h-[480px] xl:w-[480px]" />


              {/* Grid */}

              <div className="absolute right-0 top-10 hidden h-[400px] w-[400px] opacity-30 lg:block">

                <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

              </div>


              <img
                src={WorkingImage}
                alt="Harish working as a web developer"
                className="relative z-10 h-auto w-full max-w-[720px] object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.7)] transition-transform duration-700 hover:scale-[1.02]"
              />


              {/* Badge */}

              <div className="absolute bottom-8 left-4 z-20 hidden rounded-full border border-white/10 bg-[#090909]/80 px-5 py-3 backdrop-blur-md sm:block lg:left-0">

                <div className="flex items-center gap-3">

                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff454f]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
                    Building Digital Experiences
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 xl:px-16">

        <div className="mx-auto max-w-[1500px]">


          {/* Heading */}

          <div className="mb-10 flex items-end justify-between gap-6">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff454f]">
                Featured Work
              </p>

              <h2 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-4xl">
                Recent Projects
              </h2>

            </div>


            <div className="hidden items-center gap-2 text-sm text-zinc-500 sm:flex">

              <Layers3 size={16} />

              <span>
                Web Development
              </span>

            </div>

          </div>


          {/* PROJECT GRID */}

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-28">

            {projects.map((project, index) => (

              <article
                key={project.title}
                className={`group relative ${
                  index % 2 === 1
                    ? "lg:translate-y-24"
                    : ""
                }`}
              >

                {/* IMAGE */}

                <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a]">

                  {/* Hover overlay */}

                  <div className="pointer-events-none absolute inset-0 z-10 bg-[#ff454f]/0 transition duration-500 group-hover:bg-[#ff454f]/[0.04]" />


                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-auto w-full object-contain transition duration-700 ease-out group-hover:scale-[1.02]"
                  />


                  {/* Live Demo */}

                  {project.link !== "#" && (

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute bottom-5 right-5 z-20 flex h-12 items-center gap-2 rounded-full border border-white/10 bg-black/80 px-5 text-sm font-semibold opacity-0 backdrop-blur-md transition-all duration-300 hover:border-[#ff454f] hover:bg-[#ff454f] group-hover:opacity-100"
                      aria-label={`Live Demo - ${project.title}`}
                    >

                      Live Demo

                      <ExternalLink size={16} />

                    </a>

                  )}

                </div>


                {/* CONTENT */}

                <div className="px-1 pt-6">

                  {/* Category */}

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full border border-[#ff454f]/30 bg-[#ff454f]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#ff454f]">
                      {project.category}
                    </span>


                    <span className="text-xs text-zinc-600">
                      /
                    </span>


                    <span className="text-xs font-medium text-zinc-500">
                      {project.technology}
                    </span>

                  </div>


                  {/* Title */}

                  <div className="mt-4 flex items-start justify-between gap-5">

                    <h3 className="text-2xl font-black uppercase tracking-tight transition-colors duration-300 group-hover:text-[#ff454f] sm:text-3xl">
                      {project.title}
                    </h3>


                    {project.link !== "#" && (

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-[#ff454f] hover:bg-[#ff454f]"
                        aria-label={`Open ${project.title}`}
                      >

                        <ArrowUpRight
                          size={19}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />

                      </a>

                    )}

                  </div>


                  {/* Description */}

                  <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
                    {project.description}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Projects;