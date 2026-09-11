import { ArrowUpRight, Tag } from "lucide-react";
import experienceImg from "../../assets/experience.png";

const experiences = [
    {
        period: "Jun 2026 - Present · 4 mos",
        role: "Web Developer",
        company: "Nashi Informatics Solutions Private Limited",
        description:
            "Working on developing scalable and responsive web applications using React.js, PHP, MySQL, JavaScript, Tailwind CSS, HTML, and CSS. Experienced in API integration, WordPress development, and building modern web experiences.",
        skills: "WordPress, React.js, HTML, CSS, Javascript, Tailwind CSS, SEO, n8n and PHP",
    },
    {
        period: "Dec 2025 - May 2026 · 6 mos",
        role: "Web Development Intern",
        company: "Nashi Informatics Solutions Private Limited",
        description:
            "Web Developer Intern passionate about building responsive and user-friendly websites. Skilled in HTML, CSS, JavaScript, WordPress, PHP, React, and Angular. Familiar with creating dynamic web applications.",
        skills: "HTML, CSS, JavaScript, WordPress, React.js, Tailwind CSS, SEO",
    },
    {
        period: "Oct 2024 - May 2025 · 8 mos",
        role: "Data Conversion Operator",
        company: "TNQTech",
        description:
            "Process and convert data for book publishing, ensuring accuracy and compliance with industry standards.",
        skills: "XML and XML Schema",
    },
];

function ExperienceItem({ experience, index }) {
    return (
        <div className="relative flex gap-5 sm:gap-6 lg:gap-7">
            {/* Timeline */}
            <div className="relative flex w-10 shrink-0 flex-col items-center">
                {/* Arrow circle */}
                <div className="group relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/[0.06] bg-[#050505] text-zinc-500 transition-all duration-300 hover:border-[#ff454f]/50 hover:bg-[#ff454f] hover:text-white">
                    <ArrowUpRight
                        size={20}
                        strokeWidth={1.8}
                        className="
      transition-all
      duration-600
      ease-out
      group-hover:translate-x-1
      group-hover:rotate-[45deg]
    "
                    />
                </div>

                {/* Connecting line */}
                {index !== experiences.length - 1 && (
                    <div className="absolute top-11 h-[calc(100%+1px)] w-px bg-white/[0.09]" />
                )}
            </div>

            {/* Experience content */}
            <div className="min-w-0 flex-1 pb-10 sm:pb-12 lg:pb-14">
                {/* Date */}
                <p className="text-sm font-medium text-zinc-500 sm:text-base">
                    {experience.period}
                </p>

                {/* Role */}
                <h3 className="mt-3 text-xl font-bold leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-[#ff454f] sm:text-2xl">
                    {experience.role}
                </h3>

                {/* Company */}
                <p className="mt-2 text-sm font-medium text-zinc-500 sm:text-base">
                    {experience.company}
                </p>

                {/* Description */}
                <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                    {experience.description}
                </p>

                {/* Skills */}
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-zinc-300">
                    <Tag
                        size={17}
                        strokeWidth={2}
                        className="shrink-0 text-[#ff454f]"
                    />
                    <span>{experience.skills}</span>
                </div>
            </div>
        </div>
    );
}

function Experience() {
    return (
        <section
            id="experience"
            className="relative overflow-hidden bg-[#050505] px-5 py-20 text-white sm:px-8 sm:py-14 lg:px-12 lg:py-20 xl:px-16"
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

            {/* Red ambient glow */}
            <div className="pointer-events-none absolute left-[12%] top-[35%] h-[400px] w-[400px] rounded-full bg-[#ff454f]/[0.04] blur-[120px]" />

            <div className="relative z-10 mx-auto w-full max-w-[1500px]">
                <div className="grid items-start gap-12 lg:grid-cols-[360px_1fr] lg:gap-16 xl:grid-cols-[390px_1fr] xl:gap-20">

                    {/* =====================================================
              LEFT IMAGE
          ====================================================== */}
                    <div className="order-1 flex justify-center lg:sticky lg:top-32 lg:block">
                        <div className="relative mx-auto h-[300px] w-[300px] sm:h-[360px] sm:w-[360px] lg:h-[330px] lg:w-[330px] xl:h-[370px] xl:w-[370px]">

                            {/* Outer red glow */}
                            <div className="absolute inset-[-15px] rounded-full bg-[#ff454f]/10 blur-2xl" />

                            {/* Outer border */}
                            <div className="absolute inset-0 rounded-full border border-white/[0.12]" />

                            {/* Red ring */}
                            <div className="absolute inset-2 rounded-full border-2 border-[#ff454f] shadow-[0_0_35px_rgba(255,69,79,0.25)]" />

                            {/* Image container */}
                            <div className="absolute inset-[10px] overflow-hidden rounded-full border border-white/[0.08] bg-[#111111]">
                                <img
                                    src={experienceImg}
                                    alt="Developer working at a computer"
                                    className="h-full w-full object-cover object-center"
                                />

                                {/* Image dark overlay */}
                                <div className="pointer-events-none absolute inset-0 bg-black/10" />
                            </div>

                            {/* Small red accent dot */}
                            <div className="absolute right-[8%] top-[18%] h-3 w-3 rounded-full bg-[#ff454f] shadow-[0_0_20px_rgba(255,69,79,0.7)]" />
                        </div>
                    </div>

                    {/* =====================================================
              RIGHT CONTENT
          ====================================================== */}
                    <div className="order-2">

                        {/* Heading */}
                        <div className="mb-10 sm:mb-12 lg:mb-14">
                            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-zinc-500 sm:text-base">
                                My Experience
                            </p>

                            <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.055em] sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl">
                                Real{" "}
                                <span className="text-[#ff454f]">
                                    Problem Solutions
                                </span>
                                <br />
                                Experience
                            </h2>
                        </div>

                        {/* Experience Card */}
                        <div className="overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#111111] px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10 xl:px-12">
                            {experiences.map((experience, index) => (
                                <ExperienceItem
                                    key={`${experience.company}-${experience.role}`}
                                    experience={experience}
                                    index={index}
                                />
                            ))}
                        </div>

                        {/* Bottom text */}
                        <div className="mt-7 flex items-center gap-3 text-sm text-zinc-600">
                            <span className="h-px w-8 bg-[#ff454f]" />
                            <span>
                                Building modern digital experiences
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;