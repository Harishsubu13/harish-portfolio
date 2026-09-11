import {
  Code2,
  Database,
  GitBranch,
  Globe,
  Server,
  Smartphone,
} from "lucide-react";

const technologies = [
  {
    number: "01",
    name: "React",
    category: "Frontend",
    description: "Building modern component-based interfaces.",
    icon: Code2,
  },
  {
    number: "02",
    name: "JavaScript",
    category: "Programming",
    description: "Creating interactive and dynamic web experiences.",
    icon: Code2,
  },
  {
    number: "03",
    name: "Tailwind CSS",
    category: "UI Development",
    description: "Designing responsive and modern interfaces.",
    icon: Smartphone,
  },
  {
    number: "04",
    name: "Node.js",
    category: "Backend",
    description: "Developing scalable server-side applications.",
    icon: Server,
  },
  {
    number: "05",
    name: "MySQL",
    category: "Database",
    description: "Managing structured application data.",
    icon: Database,
  },
  {
    number: "06",
    name: "Git & GitHub",
    category: "Version Control",
    description: "Managing source code and development workflows.",
    icon: GitBranch,
  },
];

function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      {/* Background text */}
      <div className="pointer-events-none absolute -top-8 left-1/2 hidden -translate-x-1/2 select-none whitespace-nowrap text-[12rem] font-black uppercase leading-none text-white/[0.02] lg:block xl:text-[16rem]">
        STACK
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#ff454f]">
            Technologies
          </p>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-3xl text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Tools I use
              <br />
              <span className="text-zinc-500">to build.</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-zinc-500 sm:text-base">
              A collection of technologies I use to design, develop and
              deliver modern digital experiences.
            </p>
          </div>
        </div>


        {/* TECHNOLOGY GRID */}
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">

          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <article
                key={technology.number}
                className="group relative min-h-[240px] bg-[#080808] p-6 transition-all duration-500 hover:bg-[#0d0d0d] sm:p-8"
              >

                {/* Number */}
                <span className="absolute right-6 top-6 text-xs font-bold tracking-widest text-zinc-700 transition-colors group-hover:text-[#ff454f]">
                  {technology.number}
                </span>

                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 group-hover:border-[#ff454f]/50 group-hover:bg-[#ff454f] group-hover:text-white">
                  <Icon size={19} />
                </div>

                {/* Content */}
                <div className="mt-12">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff454f]">
                    {technology.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                    {technology.name}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-600 transition-colors group-hover:text-zinc-500">
                    {technology.description}
                  </p>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff454f] transition-all duration-500 group-hover:w-full" />

              </article>
            );
          })}

        </div>


        {/* TECH MARQUEE */}
        <div className="mt-14 overflow-hidden border-y border-white/10 py-6">
          <div className="flex min-w-max items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-zinc-700 sm:gap-12 sm:text-sm">
            <span>React</span>
            <span className="text-[#ff454f]">✦</span>
            <span>JavaScript</span>
            <span className="text-[#ff454f]">✦</span>
            <span>Tailwind CSS</span>
            <span className="text-[#ff454f]">✦</span>
            <span>Node.js</span>
            <span className="text-[#ff454f]">✦</span>
            <span>MySQL</span>
            <span className="text-[#ff454f]">✦</span>
            <span>Git</span>
            <span className="text-[#ff454f]">✦</span>
            <span>REST API</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default TechStack;