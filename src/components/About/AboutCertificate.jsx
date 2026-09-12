import { Award, ArrowUpRight } from "lucide-react";

function AboutCertification() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#050505]
        px-5
        py-16
        text-white
        sm:px-8
        sm:py-20
        lg:px-12
        lg:py-24
        xl:px-16
      "
    >
      {/* =========================================
          BACKGROUND GRID
      ========================================= */}
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

      {/* =========================================
          AMBIENT RED GLOW
      ========================================= */}
      <div
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-1/2
          h-[280px]
          w-[280px]
          -translate-y-1/2
          rounded-full
          bg-[#ff454f]/[0.05]
          blur-[120px]
          sm:h-[400px]
          sm:w-[400px]
          lg:h-[500px]
          lg:w-[500px]
        "
      />

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px]">

        {/* =========================================
            SECTION HEADER
        ========================================= */}
        <div className="mb-10 sm:mb-12">

          <div className="flex items-center gap-4">
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#ff454f]
                sm:text-sm
              "
            >
              Certification
            </p>

            <span className="h-[2px] w-8 bg-[#ff454f]" />
          </div>

          <h2
            className="
              mt-5
              max-w-4xl
              text-[2.5rem]
              font-black
              uppercase
              leading-[0.9]
              tracking-[-0.05em]
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-[5rem]
            "
          >
            My{" "}
            <span className="text-[#ff454f]">
              Certification
            </span>
          </h2>
        </div>

        {/* =========================================
            CERTIFICATE CARD
        ========================================= */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-white/[0.08]
            bg-[#0b0b0b]
            p-6
            transition-all
            duration-500
            hover:border-[#ff454f]/30
            sm:p-8
            lg:p-10
          "
        >
          {/* Card Glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-56
              w-56
              rounded-full
              bg-[#ff454f]/[0.04]
              blur-[80px]
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* =====================================
                LEFT CONTENT
            ===================================== */}
            <div className="max-w-4xl">

              {/* Certificate Icon + Provider */}
              <div className="mb-6 flex items-center gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#ff454f]/20
                    bg-[#ff454f]/[0.08]
                    text-[#ff454f]
                  "
                >
                  <Award size={22} />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    FITA Training & Placement
                  </p>

                  <p className="mt-1 text-xs text-zinc-600">
                    Certificate of Excellence
                  </p>
                </div>
              </div>

              {/* Title */}
              <h3
                className="
                  text-2xl
                  font-black
                  tracking-tight
                  text-white
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                UI Development with{" "}
                <span className="text-[#ff454f]">
                  Angular
                </span>
              </h3>

              {/* Description */}
              <p
                className="
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-7
                  text-zinc-400
                  sm:text-base
                  sm:leading-8
                "
              >
                Successfully completed a 2-month training program
                focused on UI Development with Angular, building
                practical skills in modern front-end development.
              </p>

              {/* Details */}
              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  gap-x-8
                  gap-y-3
                  text-xs
                  uppercase
                  tracking-[0.12em]
                  text-zinc-600
                  sm:text-sm
                "
              >
                <span>
                  <span className="text-zinc-400">
                    Completed
                  </span>{" "}
                  · Oct 2025
                </span>

                <span>
                  <span className="text-zinc-400">
                    Duration
                  </span>{" "}
                  · 2 Months
                </span>

                <span>
                  <span className="text-zinc-400">
                    Location
                  </span>{" "}
                  · T Nagar, Chennai
                </span>
              </div>
            </div>

            {/* =====================================
                VIEW CERTIFICATE
            ===================================== */}
            <div className="shrink-0 lg:ml-8">
              <a
                href="/Angular_Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#ff454f]
                  px-7
                  py-4
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#ff5961]
                  hover:shadow-[0_15px_50px_rgba(255,69,79,0.25)]
                  sm:w-auto
                  sm:px-8
                  sm:text-base
                "
              >
                View Certificate

                <ArrowUpRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              h-[2px]
              w-24
              bg-[#ff454f]
            "
          />
        </div>
      </div>
    </section>
  );
}

export default AboutCertification;