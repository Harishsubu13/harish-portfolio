import {
  Code2,
  MessageCircle,
  SearchCheck,
  Layers3,
} from "lucide-react";

const stats = [
  {
    icon: Code2,
    title: "Website Development",
    subtitle: "10+ Websites",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    subtitle: "Automation Solutions",
  },
  {
    icon: SearchCheck,
    title: "SEO-Friendly Websites",
    subtitle: "Search Optimized",
  },
  {
    icon: Layers3,
    title: "Full Stack Development",
    subtitle: "Modern Web Apps",
  },
];

function AboutExperienceStats() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-4 py-10 text-white sm:px-6 sm:py-14 lg:px-10 lg:py-16 xl:px-12">
      <div className="mx-auto w-full max-w-[1500px]">

        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.18fr_1fr]">

          {/* =====================================================
              EXPERIENCE CARD
          ====================================================== */}

          <div
            className="
    group relative overflow-hidden
    rounded-[22px]
    border border-white/[0.08]
    bg-[#111111]

    px-7 py-8
    sm:px-9 sm:py-9
    lg:px-10 lg:py-10
    xl:px-12 xl:py-11

    transition-all duration-500
    hover:border-[#ff454f]/40
  "
          >
            {/* Subtle glow */}

            <div
              className="
      pointer-events-none
      absolute
      -right-24
      -top-24
      h-64
      w-64
      rounded-full
      bg-[#ff454f]/[0.025]
      blur-[90px]
      transition-all
      duration-500
      group-hover:bg-[#ff454f]/[0.06]
    "
            />

            <div className="relative z-10">

              {/* TOP */}

              <div
                className="
        flex
        items-center
        gap-6

        sm:gap-8
        lg:gap-10
        xl:gap-12
      "
              >

                {/* 1.5+ */}

                <div
                  className="
          shrink-0
          text-[5rem]
          font-black
          leading-none
          tracking-[-0.08em]
          text-[#ff454f]

          sm:text-[6rem]
          md:text-[6.5rem]
          lg:text-[6rem]
          xl:text-[7.5rem]
        "
                >
                  1.5+
                </div>

                {/* TITLE */}

                <h2
                  className="
          text-3xl
          font-black
          uppercase
          leading-[0.9]
          tracking-[-0.045em]
          text-white

          sm:text-4xl
          md:text-[2.6rem]
          lg:text-4xl
          xl:text-[3rem]
        "
                >
                  Years of
                  <br />
                  Experience
                </h2>

              </div>


              {/* DESCRIPTION */}

              <p
                className="
        mt-10
        max-w-[780px]

        text-sm
        leading-7
        text-zinc-400

        sm:mt-12
        sm:text-base
        sm:leading-8

        lg:mt-14
        lg:text-lg
        lg:leading-8
      "
              >
                Building modern and responsive websites with a strong focus on clean UI,
                performance, user experience and scalable web development.
              </p>

            </div>
          </div>


          {/* =====================================================
              RIGHT SIDE — 2 × 2
          ====================================================== */}

          <div
            className="
              grid
              grid-cols-1
              gap-5

              sm:grid-cols-2
            "
          >

            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <article
                  key={stat.title}
                  className="
                    group relative
                    flex
                    min-h-[180px]
                    flex-col
                    items-center
                    justify-center
                    overflow-hidden

                    rounded-[22px]
                    border border-white/[0.08]
                    bg-[#111111]

                    px-5
                    py-7

                    text-center

                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:border-[#ff454f]/55
                    hover:bg-[#141414]
                    hover:shadow-[0_15px_50px_rgba(255,69,79,0.08)]

                    lg:min-h-[188px]
                    xl:min-h-[190px]
                  "
                >

                  {/* TOP RED INDICATOR */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-0
                      h-[2px]
                      w-0
                      -translate-x-1/2
                      bg-[#ff454f]
                      transition-all
                      duration-500
                      group-hover:w-1/2
                    "
                  />


                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      text-[#ff454f]

                      transition-all
                      duration-500

                      group-hover:scale-110
                    "
                  >
                    <Icon
                      size={38}
                      strokeWidth={1.7}
                    />
                  </div>


                  {/* TITLE */}

                  <h3
                    className="
                      mt-5
                      max-w-full

                      text-base
                      font-black
                      leading-tight
                      tracking-tight

                      text-white

                      transition-colors
                      duration-300

                      group-hover:text-[#ff454f]

                      sm:text-lg
                      lg:text-xl
                    "
                  >
                    {stat.title}
                  </h3>


                  {/* SUBTITLE */}

                  <p
                    className="
                      mt-2
                      text-xs
                      text-zinc-500

                      transition-colors
                      duration-300

                      group-hover:text-zinc-300

                      sm:text-sm
                      lg:text-base
                    "
                  >
                    {stat.subtitle}
                  </p>


                  {/* BOTTOM GLOW */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-16
                      left-1/2
                      h-28
                      w-32
                      -translate-x-1/2
                      rounded-full
                      bg-[#ff454f]/0
                      blur-[50px]
                      transition-all
                      duration-500
                      group-hover:bg-[#ff454f]/10
                    "
                  />

                </article>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutExperienceStats;