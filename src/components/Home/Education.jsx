import {
  GraduationCap,
  BookOpen,
  School,
  ArrowRight,
  Award,
} from "lucide-react";

const education = [
  {
    number: "01",
    level: "POST GRADUATE",
    title: "Master of Computer Applications - MCA (ONLINE)",
    institution: "SRMIST, Kattankulathur, Chennai, Tamil Nadu",
    period: "Sep 2024 - May 2026",
    grade: "Grade: 9.45",
    skills: "ASP.NET, AI, Python, Java, DataBase",
    icon: GraduationCap,
  },
  {
    number: "02",
    level: "UNDER GRADUATE",
    title: "Bachelor of Computer Applications - BCA",
    institution: "Madras Christian College, Chennai, Tamil Nadu",
    period: "Sep 2021 - Apr 2024",
    grade: "Grade: 64%",
    skills: "Computer Applications",
    icon: BookOpen,
  },
  {
    number: "03",
    level: "HIGHER SECONDARY",
    title: "Higher Secondary School Certificate (HSC)",
    institution: "Chennai Boys Higher Sec School",
    period: "Jun 2020 - May 2021",
    grade: "Grade: 72%",
    skills: "Higher Secondary Education",
    icon: School,
  },
];

function EducationCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="group relative">
      <div
        className="
          relative overflow-hidden rounded-[22px]
          border border-white/[0.07]
          bg-[#111111]
          p-6
          transition-all duration-500
          hover:-translate-y-1
          hover:border-[#ff454f]/35
          hover:bg-[#141414]
          sm:p-7
          lg:p-8
        "
      >
        {/* Red hover glow */}
        <div
          className="
            pointer-events-none absolute
            -right-20 -top-20
            h-40 w-40
            rounded-full
            bg-[#ff454f]/[0.04]
            blur-3xl
            transition-all duration-500
            group-hover:bg-[#ff454f]/[0.09]
          "
        />

        <div className="relative z-10 flex gap-5 sm:gap-6">
          {/* Icon */}
          <div className="shrink-0">
            <div
              className="
                flex h-12 w-12 items-center justify-center
                rounded-full
                border border-white/[0.08]
                bg-[#050505]
                text-zinc-500
                transition-all duration-500
                group-hover:border-[#ff454f]/50
                group-hover:bg-[#ff454f]
                group-hover:text-white
              "
            >
              <Icon
                size={21}
                strokeWidth={1.7}
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            {/* Top row */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold tracking-[0.18em] text-[#ff454f]">
                  {item.number}
                </span>

                <span className="text-xs font-bold tracking-[0.15em] text-zinc-600">
                  {item.level}
                </span>
              </div>

              {/* Period */}
              <span className="text-sm font-medium text-zinc-500">
                {item.period}
              </span>
            </div>

            {/* Degree */}
            <h3
              className="
                mt-5
                text-xl font-bold leading-tight tracking-tight
                text-white
                transition-colors duration-300
                group-hover:text-[#ff454f]
                sm:text-2xl
              "
            >
              {item.title}
            </h3>

            {/* Institution */}
            <p className="mt-2 text-sm font-medium leading-6 text-zinc-400 sm:text-base">
              {item.institution}
            </p>

            {/* Divider */}
            <div className="my-5 h-px w-full bg-white/[0.06]" />

            {/* Bottom information */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <Award
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#ff454f]"
                />

                <span className="text-sm font-semibold text-zinc-300">
                  {item.grade}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-zinc-600 transition-colors duration-300 group-hover:text-zinc-400">
                <span>{item.skills}</span>

                <ArrowRight
                  size={16}
                  className="
                    transition-transform duration-500
                    group-hover:translate-x-1
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function Education() {
  return (
    <section
      id="education"
      className="
        relative overflow-hidden
        bg-[#050505]
        px-5 py-20
        text-white
        sm:px-8 sm:py-14
        lg:px-12 lg:py-20
        xl:px-16
      "
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "190px 190px",
        }}
      />

      {/* Ambient red glow */}
      <div
        className="
          pointer-events-none absolute
          right-[5%] top-[30%]
          h-[450px] w-[450px]
          rounded-full
          bg-[#ff454f]/[0.035]
          blur-[130px]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-[1500px]">
        {/* Header */}
        <div
          className="
            grid items-end gap-8
            lg:grid-cols-[1fr_420px]
            xl:grid-cols-[1fr_500px]
          "
        >
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
              My Education
            </p>

            <h2
              className="
                max-w-4xl
                text-4xl font-black uppercase
                leading-[0.92]
                tracking-[-0.055em]
                sm:text-5xl
                md:text-[3.5rem]
                lg:text-[3.5rem]
                xl:text-[4.5rem]
              "
            >
              Academic{" "}
              <span className="text-[#ff454f]">
                Journey
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">
            My academic journey through computer applications, programming,
            and technology has built the foundation for my career in web
            development.
          </p>
        </div>

        {/* Education container */}
        <div
          className="
            mt-14 rounded-[28px]
            border border-white/[0.07]
            bg-[#0b0b0b]
            p-5
            sm:mt-16 sm:p-7
            lg:mt-20 lg:p-10
            xl:p-12
          "
        >
          <div className="space-y-5 lg:space-y-6">
            {education.map((item) => (
              <EducationCard
                key={item.number}
                item={item}
              />
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-8 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-700">
          <span className="h-px w-10 bg-[#ff454f]/60" />
          Education & Growth
          <span className="h-px w-10 bg-[#ff454f]/60" />
        </div>
      </div>
    </section>
  );
}

export default Education;