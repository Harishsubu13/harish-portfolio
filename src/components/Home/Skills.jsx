import {
  Code2,
  FileCode2,
  Palette,
  Server,
  GitBranch,
  Search,
  Globe,
} from "lucide-react";

const skills = [
  {
    name: "WordPress",
    category: "CMS",
    level: 90,
    icon: Globe,
  },
  {
    name: "HTML",
    category: "Frontend",
    level: 95,
    icon: FileCode2,
  },
  {
    name: "CSS",
    category: "Frontend",
    level: 92,
    icon: Palette,
  },
  {
    name: "JavaScript",
    category: "Programming",
    level: 90,
    icon: Code2,
  },
  {
    name: "React",
    category: "Frontend",
    level: 88,
    icon: Code2,
  },
  {
    name: "Angular",
    category: "Frontend",
    level: 82,
    icon: Code2,
  },
  {
    name: "Tailwind CSS",
    category: "UI Development",
    level: 92,
    icon: Palette,
  },
  {
    name: "SEO-Friendly Websites",
    category: "Optimization",
    level: 85,
    icon: Search,
  },
  {
    name: "n8n",
    category: "Automation",
    level: 80,
    icon: GitBranch,
  },
  {
    name: "PHP",
    category: "Backend",
    level: 78,
    icon: Server,
  },
];

function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <article
      className="
        group relative overflow-hidden
        rounded-xl
        border border-white/[0.08]
        bg-[#111111]

        px-5 py-5
        sm:px-6 sm:py-6

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#ff454f]/50
        hover:bg-[#141414]
        hover:shadow-[0_15px_40px_rgba(255,69,79,0.08)]
      "
    >

      {/* TOP */}

      <div className="flex items-center justify-between gap-3">

        {/* ICON + NAME */}

        <div className="flex min-w-0 items-center gap-3">

          <div
            className="
              flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-lg
              border border-white/[0.08]
              bg-[#080808]
              text-zinc-400

              transition-all duration-300

              group-hover:border-[#ff454f]/40
              group-hover:bg-[#ff454f]/10
              group-hover:text-[#ff454f]
            "
          >
            <Icon size={17} strokeWidth={1.8} />
          </div>

          <div className="min-w-0">

            <h3
              className="
                truncate
                text-sm
                font-bold
                text-white

                transition-colors
                duration-300

                group-hover:text-[#ff454f]
              "
            >
              {skill.name}
            </h3>

            <p className="mt-0.5 text-[10px] uppercase tracking-wider text-zinc-600">
              {skill.category}
            </p>

          </div>

        </div>

        {/* PERCENTAGE */}

        <span
          className="
            shrink-0
            text-[11px]
            font-bold
            text-zinc-500

            transition-colors
            duration-300

            group-hover:text-[#ff454f]
          "
        >
          {skill.level}%
        </span>

      </div>


      {/* PROGRESS */}

      <div className="mt-5">

        <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/[0.08]">

          <div
            className="
              h-full
              rounded-full
              bg-[#ff454f]

              transition-all
              duration-700
              ease-out

              group-hover:shadow-[0_0_12px_rgba(255,69,79,0.5)]
            "
            style={{
              width: `${skill.level}%`,
            }}
          />

        </div>

      </div>

    </article>
  );
}


function Skills() {
  return (
    <section
      id="skills"
      className="
        relative overflow-hidden
        bg-[#050505]
        px-5
        py-20
        text-white

        sm:px-8
        sm:py-24

        lg:px-12
        lg:py-14

        xl:px-16
        xl:py-20
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[400px]
          w-[400px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#ff454f]/[0.035]
          blur-[120px]

          sm:h-[550px]
          sm:w-[550px]
        "
      />


      {/* SAME WEBSITE WIDTH */}

      <div className="relative z-10 mx-auto w-full max-w-[1500px]">

        {/* SECTION HEADER */}

        <div className="mb-10 text-center sm:mb-12">

          <p
            className="
              mb-3
              text-[10px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-[#ff454f]

              sm:text-xs
            "
          >
            My Skills
          </p>

          <h2
            className="
              text-3xl
              font-black
              uppercase
              leading-none
              tracking-[-0.04em]

              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Technologies
            <br />
            <span className="text-zinc-500">
              I work with.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-xs
              leading-6
              text-zinc-500

              sm:text-sm
              sm:leading-7
            "
          >
            Technologies and tools I use to create modern, responsive
            and scalable web experiences.
          </p>

        </div>



        {/* SKILLS GRID */}

        <div
          className="
    grid
    grid-cols-1
    gap-4

    sm:grid-cols-2

    lg:grid-cols-4
    lg:gap-5
  "
        >
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`
        ${index === 8 ? "lg:col-start-2" : ""}
        ${index === 9 ? "lg:col-start-3" : ""}
      `}
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default Skills;