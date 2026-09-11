import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Railmet from "../../assets/railmet-portfolio.png";
import Nashi from "../../assets/nashi-portfolio.png";
import Surya from "../../assets/surya-portfolio.png";
import Loans from "../../assets/49secondloans-portfolio.png";

const projects = [
  {
    title: "RailMet",
    category: "Industrial Website",
    technology: "React",
    image: Railmet,
    link: "https://railmet.in/",
  },
  {
    title: "Nashi Informatics",
    category: "Digital Marketing Website",
    technology: "WordPress · Elementor",
    image: Nashi,
    link: "https://www.nashiinfo.com/",
  },
  {
    title: "Surya Informatics",
    category: "IT Business Website",
    technology: "WordPress · Elementor",
    image: Surya,
    link: "https://www.suryainformatics.com/",
  },
  {
    title: "49 Second Loans",
    category: "Finance Website",
    technology: "WordPress · Elementor",
    image: Loans,
    link: "https://49secondloans.com/",
  },
];

function ProjectCard({ project, index }) {
  const isRight = index % 2 !== 0;

  return (
    <article
      className={`
        group
        w-full
        ${isRight ? "lg:translate-y-[110px]" : ""}
      `}
    >
      {/* =================================
          PROJECT IMAGE
      ================================= */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[26px]
          border
          border-white/[0.08]
          bg-[#0b0b0b]
          p-4
          transition-all
          duration-500
          hover:border-white/[0.16]
          sm:p-5
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[20px]
            bg-[#111111]
          "
        >
          <img
            src={project.image}
            alt={project.title}
            className="
              block
              h-auto
              w-full
              object-contain
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.02]
            "
          />

          {/* Subtle hover overlay */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-black/0
              transition-all
              duration-500
              group-hover:bg-black/10
            "
          />
        </div>
      </div>

      {/* =================================
          PROJECT CONTENT
      ================================= */}
      <div className="mt-6 flex items-start justify-between gap-5 sm:mt-7">
        <div className="min-w-0">
          {/* Project Title */}
          <h3
            className="
              text-2xl
              font-black
              tracking-[-0.03em]
              text-white
              transition-colors
              duration-300
              group-hover:text-[#ff454f]
              sm:text-3xl
              lg:text-[2rem]
            "
          >
            {project.title}
          </h3>

          {/* Category + Technology */}
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#ff454f]
              "
            >
              {project.category}
            </span>

            <span className="h-1 w-1 rounded-full bg-zinc-700" />

            <span
              className="
                text-xs
                font-medium
                text-zinc-500
                sm:text-sm
              "
            >
              {project.technology}
            </span>
          </div>
        </div>

        {/* =================================
            LIVE DEMO BUTTON
        ================================= */}
        <a
          href={project.link}
          target={
            project.link.startsWith("http")
              ? "_blank"
              : undefined
          }
          rel={
            project.link.startsWith("http")
              ? "noreferrer"
              : undefined
          }
          aria-label={`Live Demo - ${project.title}`}
          className="
            group/demo
            flex
            h-14
            shrink-0
            items-center
            gap-3
            rounded-xl
            border
            border-white/[0.08]
            bg-[#0b0b0b]
            px-4
            text-white
            transition-all
            duration-300
            hover:border-[#ff454f]
            hover:bg-[#ff454f]
            sm:px-5
          "
        >
          <ArrowUpRight
            size={20}
            className="
              transition-transform
              duration-300
              group-hover/demo:translate-x-1
              group-hover/demo:-translate-y-1
            "
          />

          <span
            className="
              text-sm
              font-semibold
              whitespace-nowrap
            "
          >
            Live Demo
          </span>
        </a>
      </div>
    </article>
  );
}

function FeaturedProjects() {
  return (
    <section
      id="featured-projects"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        px-5
        pb-32
        pt-24
        text-white
        sm:px-8
        sm:pb-25
        sm:pt-28
        lg:px-12
        lg:pb-20
        lg:pt-20
        xl:px-16
      "
    >
      {/* =================================
          BACKGROUND GRID
      ================================= */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
        "
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "190px 190px",
        }}
      />

      {/* =================================
          RED AMBIENT GLOW
      ================================= */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[20%]
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#ff454f]/[0.035]
          blur-[140px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
        "
      >
        {/* =================================
            SECTION HEADER
        ================================= */}
        <div
          className="
            mx-auto
            max-w-4xl
            text-center
          "
        >
          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#ff454f]
            "
          >
            Latest Portfolio
          </p>

          <h2
            className="
              mt-5
              text-4xl
              font-black
              uppercase
              leading-[0.9]
              tracking-[-0.06em]
              sm:text-5xl
              md:text-5xl
              lg:text-[4.0rem]
              xl:text-[4.0rem]
            "
          >
            Transforming Ideas
            <br />

            <span className="text-zinc-500">
              Into Exceptional Websites
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-sm
              leading-7
              text-zinc-500
              sm:text-base
              sm:leading-8
            "
          >
            A selection of live websites I've designed and developed
            using modern technologies, responsive layouts and
            user-focused experiences.
          </p>
        </div>

        {/* =================================
            ZIG-ZAG PROJECT GRID
        ================================= */}
        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-16
            sm:mt-20
            sm:gap-20
            lg:mt-24
            lg:grid-cols-2
            lg:gap-x-12
            lg:gap-y-28
            xl:gap-x-16
            xl:gap-y-32
          "
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* =================================
            VIEW ALL PROJECTS
        ================================= */}
        <div
          className="
            mt-20
            flex
            justify-center
            sm:mt-24
            lg:mt-40
          "
        >
          <Link
            to="/projects"
            className="
              group
              inline-flex
              items-center
              gap-4
              rounded-full
              border
              border-[#ff454f]
              bg-transparent
              px-9
              py-4
              text-sm
              font-bold
              text-white
              transition-all
              duration-300
              hover:bg-[#ff454f]
            "
          >
            View All Projects

            <ArrowUpRight
              size={19}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;