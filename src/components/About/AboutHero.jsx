import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
} from "lucide-react";

import portfolioImg from "../../assets/portfolio-img.png";

function AboutHero() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050505]
        px-5
        pb-14
        pt-32
        text-white
        sm:px-8
        sm:pb-16
        sm:pt-36
        lg:px-12
        lg:pb-20
        lg:pt-40
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
          left-1/2
          top-[35%]
          h-[350px]
          w-[350px]
          -translate-x-1/2
          rounded-full
          bg-[#ff454f]/[0.06]
          blur-[120px]
          sm:h-[500px]
          sm:w-[500px]
          lg:h-[650px]
          lg:w-[650px]
        "
      />

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px]">

        {/* =========================================
            TOP LABEL
        ========================================= */}
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
            About Me
          </p>

          <span className="h-[2px] w-8 bg-[#ff454f]" />
        </div>

        {/* =========================================
            MAIN CONTENT
        ========================================= */}
        <div
          className="
            mt-8
            grid
            items-center
            gap-12
            lg:grid-cols-[1fr_430px]
            lg:gap-16
            xl:grid-cols-[1fr_500px]
            xl:gap-24
          "
        >

          {/* =======================================
              LEFT CONTENT
          ======================================= */}
          <div className="order-2 lg:order-1">

            {/* Heading */}
            <h1
              className="
                max-w-5xl
                text-[2.5rem]
                font-black
                uppercase
                leading-[0.86]
                tracking-[-0.06em]
                sm:text-4xl
                md:text-6xl
                lg:text-[4rem]
                xl:text-[6rem]
              "
            >
              I'm Harish
              <br />

              <span className="text-[#ff454f]">
                Subramanian
              </span>

              <br />

              <span className="text-zinc-600">
                SB
              </span>
            </h1>

            {/* Main Description */}
            <p
              className="
                mt-8
                max-w-2xl
                text-base
                leading-8
                text-zinc-400
                sm:mt-10
                sm:text-lg
                sm:leading-9
              "
            >
              I'm a Full Stack Developer passionate about
              creating modern, responsive and user-friendly
              web experiences.
            </p>

            {/* Secondary Description */}
            <p
              className="
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-zinc-600
                sm:text-base
                sm:leading-8
              "
            >
              I enjoy transforming ideas into functional digital
              products using modern technologies, clean interfaces
              and thoughtful user experiences.
            </p>

            {/* =====================================
                BUTTONS
            ===================================== */}
            <div className="mt-8 flex flex-wrap gap-4">

              {/* Download Resume */}
              <a
                href="/HarishSubramanian_Resume.pdf"
                download="HarishSubramanian_Resume.pdf"
                className="
                  group
                  inline-flex
                  items-center
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
                  sm:px-8
                  sm:text-base
                "
              >
                Download Resume

                <Download
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-y-1
                  "
                />
              </a>

              {/* Contact */}
              <a
                href="mailto:harishsubu08@gmail.com"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/[0.1]
                  bg-[#0b0b0b]
                  px-7
                  py-4
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#ff454f]
                  hover:bg-[#ff454f]
                  sm:px-8
                  sm:text-base
                "
              >
                Contact Me

                <Mail
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>
            </div>
          </div>

          {/* =======================================
              IMAGE
          ======================================= */}
          <div
            className="
              order-1
              mx-auto
              w-full
              max-w-[360px]
              lg:order-2
              lg:max-w-[430px]
              xl:max-w-[500px]
            "
          >
            <div className="relative">

              {/* Outer Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[-25px]
                  rounded-[40px]
                  bg-[#ff454f]/[0.07]
                  blur-[70px]
                "
              />

              {/* Outer Frame */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/[0.08]
                  bg-[#111111]
                  p-3
                  transition-all
                  duration-500
                  hover:border-[#ff454f]/30
                "
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-[22px]">

                  <img
                    src={portfolioImg}
                    alt="Harish Subramanian SB"
                    className="
                      block
                      aspect-[4/5]
                      h-full
                      w-full
                      object-cover
                      object-center
                      brightness-[0.88]
                      transition-transform
                      duration-700
                      hover:scale-[1.03]
                    "
                  />

                  {/* Image Overlay */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#050505]/50
                      via-transparent
                      to-transparent
                    "
                  />

                </div>

                {/* Developer Label */}
                <div
                  className="
                    absolute
                    bottom-7
                    left-7
                    flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/[0.1]
                    bg-[#050505]/85
                    px-4
                    py-3
                    backdrop-blur-xl
                  "
                >
                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#ff454f]
                      shadow-[0_0_15px_rgba(255,69,79,0.7)]
                    "
                  />

                  <span
                    className="
                      text-xs
                      font-semibold
                      text-zinc-300
                    "
                  >
                    Full Stack Developer
                  </span>
                </div>
              </div>

              {/* Decorative Circle */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-5
                  -top-5
                  h-20
                  w-20
                  rounded-full
                  border
                  border-[#ff454f]/30
                "
              />

              {/* Decorative Dot */}
              <div
                className="
                  pointer-events-none
                  absolute
                  right-1
                  top-1
                  h-3
                  w-3
                  rounded-full
                  bg-[#ff454f]
                  shadow-[0_0_20px_rgba(255,69,79,0.7)]
                "
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;