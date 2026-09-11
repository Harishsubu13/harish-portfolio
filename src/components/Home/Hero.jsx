import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/portfolio-img.png";

function SocialButton({ children, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label="Social link"
      className="
        flex h-10 w-10 shrink-0
        items-center justify-center
        rounded-full
        bg-white/[0.06]
        text-xs font-bold
        text-zinc-300
        transition-all duration-300
        hover:-translate-y-1
        hover:bg-[#ff454f]
        hover:text-white
        hover:shadow-[0_0_20px_rgba(255,69,79,0.2)]

        sm:h-11 sm:w-11
      "
    >
      {children}
    </a>
  );
}


/* =========================================================
   HERO IMAGE
========================================================= */

function HeroImage({ mobile = false }) {
  return (
    <div
      className={`
        relative
        flex
        items-end
        justify-center

        ${mobile
          ? `
              h-[360px]
              w-[400px]

              sm:h-[440px]
              sm:w-[320px]

              md:h-[500px]
              md:w-[500px]
            `
          : `
              h-[560px]
              w-[400px]

              2xl:h-[640px]
              2xl:w-[550px]
            `
        }
      `}
    >

      {/* ARCH 1 */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[3%]
          h-[94%]
          w-[72%]
          -translate-x-1/2
          rounded-[100px_100px_25px_25px]
          border
          border-white/[0.035]

          sm:rounded-[120px_120px_30px_30px]
        "
      />

      {/* ARCH 2 */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[7%]
          h-[90%]
          w-[64%]
          -translate-x-1/2
          rounded-[90px_90px_20px_20px]
          border
          border-white/[0.045]

          sm:rounded-[110px_110px_25px_25px]
        "
      />

      {/* ARCH 3 */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[11%]
          h-[86%]
          w-[56%]
          -translate-x-1/2
          rounded-[80px_80px_18px_18px]
          border
          border-[#ff454f]/[0.06]

          sm:rounded-[100px_100px_20px_20px]
        "
      />

      {/* RED GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[38%]
          h-[200px]
          w-[170px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#ff454f]/10
          blur-[70px]

          sm:h-[280px]
          sm:w-[220px]

          md:h-[320px]
          md:w-[250px]
        "
      />

      {/* PERSON */}
      <img
        src={heroImg}
        alt="Harish Subramanian SB"
        className={`
          absolute
          xl:bottom-[-50px]
          bottom-0
          left-1/2
          z-20
          h-full
          w-full
          -translate-x-1/2
          object-contain
          object-bottom
          brightness-[0.75]
          transition-all
          duration-700

          hover:brightness-90

          ${mobile
            ? `
                sm:scale-[1.02]
                md:scale-[1.04]
              `
            : `
                xl:scale-[1.04]
                2xl:scale-[1.07]
              `
          }
        `}
      />
    </div>
  );
}


/* =========================================================
   ABOUT CONTENT
========================================================= */

function AboutContent() {
  return (
    <div className="relative z-30 min-w-0">

      <h2
        className="
          text-lg
          font-bold
          text-white

          sm:text-xl
        "
      >
        About Me
      </h2>

      <p
        className="
          mt-5
          max-w-[430px]
          text-sm
          leading-7
          text-zinc-500

          sm:mt-7
          sm:text-base
          sm:leading-8
        "
      >
        I'm a passionate{" "}
        <span className="text-[#ff454f]">
          Full Stack Developer
        </span>{" "}
        focused on building clean, scalable and engaging web
        applications.
      </p>

      <p
        className="
          mt-4
          max-w-[430px]
          text-sm
          leading-7
          text-zinc-600

          sm:mt-5
          sm:text-base
          sm:leading-8
        "
      >
        I enjoy turning ideas into functional digital products
        using modern technologies and thoughtful user experiences.
      </p>

      {/* SOCIAL */}
      <div className="mt-7 sm:mt-8">

        <p className="mb-4 text-sm font-semibold text-white">
          Find me on
        </p>

        <div className="flex flex-wrap gap-3">

          <SocialButton href="https://www.instagram.com/harish.08___?stkn=NWUycTR5dXNmMXRt">
            <span className="text-xs font-black">
              IG
            </span>
          </SocialButton>

          <SocialButton href="www.linkedin.com/in/harish-subramanian-sb-275247285">
            <span className="text-sm font-black">
              in
            </span>
          </SocialButton>

          <SocialButton href="https://github.com/Harishsubu13">
            <span className="text-xs font-black">
              GH
            </span>
          </SocialButton>

          <SocialButton href="mailto:harishsubu08@gmail.com">
            <Mail size={17} />
          </SocialButton>

        </div>
      </div>
    </div>
  );
}


/* =========================================================
   NAME CONTENT
========================================================= */

function NameContent() {
  return (
    <div className="relative z-30 min-w-0">

      {/* HELLO I'M */}

      <div className="mb-5 flex items-center gap-4">

        <p
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.08em]
            text-white

            sm:text-sm
            lg:text-base
          "
        >
          Hello I'm
        </p>

        <span
          className="
            h-[2px]
            w-7
            shrink-0
            bg-[#ff454f]

            sm:w-8
          "
        />

      </div>


      {/* NAME */}

      <h1
        className="
          max-w-full
          text-[2.8rem]
          font-black
          uppercase
          leading-[0.84]
          tracking-[-0.055em]

          sm:text-[3.6rem]

          md:text-[4rem]

          lg:text-[4.5rem]

          xl:text-[4.2rem]

          2xl:text-[4.8rem]
        "
      >
        Harish
        <br />
        Subramanian
        <br />
        SB
      </h1>


      {/* DESCRIPTION */}

      <p
        className="
          mt-6
          max-w-[470px]
          text-sm
          leading-7
          text-zinc-500

          sm:mt-7
          sm:text-base
          sm:leading-8
        "
      >
        Full Stack Developer creating modern, responsive and
        user-friendly web experiences.
      </p>


      {/* BUTTON */}

      <a
        href="/Harish-Subramanian-Resume.pdf"
        download="Harish-Subramanian-Resume.pdf"
        className="
    group
    mt-8
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

        <ArrowRight
          size={19}
          className="
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
        />
      </a>

    </div>
  );
}


/* =========================================================
   DESKTOP BACKGROUND TYPOGRAPHY
========================================================= */

function BackgroundTypography() {
  return (
    <>
      {/* WHITE DEVELOPER - BEHIND IMAGE */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[10px]
          left-1/2
          z-[5]
          w-full
          -translate-x-1/2
          overflow-hidden
          select-none
        "
      >
        <div
          className="
            whitespace-nowrap
            text-center
            text-[5.5rem]
            font-black
            uppercase
            leading-none
            tracking-[-0.05em]
            text-transparent

            xl:text-[7.5rem]

            2xl:text-[9rem]
          "
          style={{
            WebkitTextStroke:
              "1px rgba(255,255,255,0.13)",
          }}
        >
          DEVELOPER
        </div>
      </div>


      {/* =================================================
    RED DEVELOPER — FRONT OF IMAGE + VERTICAL FLOAT
================================================= */}

      <div
        className="
    pointer-events-none
    absolute
    bottom-[-85px]
    left-1/2
    z-[50]
    w-full
    -translate-x-1/2
    overflow-hidden
    select-none
  "
      >
        <div
          className="
      web-development-float
      whitespace-nowrap
      text-center
      text-[4.8rem]
      font-black
      uppercase
      leading-none
      tracking-[-0.05em]
      text-transparent

      md:text-[5.5rem]
      lg:text-[6rem]
      xl:text-[6.5rem]
      2xl:text-[7.2rem]
    "
          style={{
            WebkitTextStroke: "2px rgba(255,69,79,0.9)",
          }}
        >
          DEVELOPER
        </div>
      </div>
    </>
  );
}


/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#050505]
        px-5
pb-32
pt-24
        text-white

        sm:px-8
        sm:pb-36

        lg:px-12
        lg:pt-28

        xl:px-14

        2xl:px-16
      "
    >

      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[42%]
          h-[260px]
          w-[260px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#ff454f]/10
          blur-[100px]

          sm:h-[360px]
          sm:w-[360px]

          md:h-[450px]
          md:w-[450px]

          lg:h-[520px]
          lg:w-[520px]

          xl:h-[580px]
          xl:w-[580px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[40%]
          h-[180px]
          w-[180px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#ff454f]/10
          blur-[70px]

          sm:h-[260px]
          sm:w-[260px]

          md:h-[320px]
          md:w-[320px]
        "
      />


      {/* =================================================
          SAME WIDTH AS NAVBAR
      ================================================= */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          w-full
          max-w-[1500px]
          flex-col
          justify-center
        "
      >

        {/* =================================================
            DESKTOP
            1280px+
            
            NAME
              ↓
            IMAGE
              ↓
            ABOUT
        ================================================= */}

        <div
          className="
            hidden
            w-full
            items-center

            xl:grid
            xl:grid-cols-[1.05fr_0.9fr_0.95fr]
            xl:gap-4

            2xl:grid-cols-[1fr_0.9fr_1fr]
            2xl:gap-8
          "
        >

          {/* LEFT - NAME */}

          <div className="relative z-30 min-w-0">
            <NameContent />
          </div>


          {/* CENTER - IMAGE */}

          <div className="relative z-20 flex justify-center">
            <HeroImage />
          </div>


          {/* RIGHT - ABOUT */}

          <div
            className="
              relative
              z-30
              min-w-0

              xl:pl-4
              2xl:pl-8
            "
          >
            <AboutContent />
          </div>

        </div>


        {/* =================================================
            TABLET + MOBILE

            IMAGE
              ↓
            DEVELOPER
              ↓
            NAME
              ↓
            ABOUT

            IMPORTANT:
            Developer is NOT absolute here.
        ================================================= */}

        <div
          className="
            flex
            w-full
            flex-col
            items-center

            xl:hidden
          "
        >

          {/* =============================================
              1. IMAGE
          ============================================= */}

          <div
            className="
              order-1
              flex
              w-full
              items-center
              justify-center

              h-[370px]

              sm:h-[450px]

              md:h-[510px]
            "
          >
            <HeroImage mobile />
          </div>


          {/* =============================================
              2. DEVELOPER
          ============================================= */}

          <div
            className="
              order-2
              relative
              flex
              w-full
              justify-center
              overflow-hidden

              -mt-2

              py-2

              sm:-mt-4

              md:-mt-5
            "
          >
            <div
              className="
                whitespace-nowrap
                text-center
                text-[3rem]
                font-black
                uppercase
                leading-none
                tracking-[-0.05em]
                text-transparent

                sm:text-[4.2rem]

                md:text-[5.2rem]
              "
              style={{
                WebkitTextStroke:
                  "2px rgba(255,69,79,0.9)",
              }}
            >
              DEVELOPER
            </div>
          </div>


          {/* =============================================
              3. NAME
          ============================================= */}

          <div
            className="
              order-3
              mt-8
              w-full
              min-w-0

              sm:mt-10
            "
          >
            <NameContent />
          </div>


          {/* =============================================
              4. ABOUT
          ============================================= */}

          <div
            className="
              order-4
              mt-16
              w-full
              min-w-0
              border-t
              border-white/[0.06]
              pt-10

              sm:mt-20
              sm:pt-12
            "
          >
            <AboutContent />
          </div>

        </div>


        {/* =================================================
            DESKTOP TYPOGRAPHY ONLY
        ================================================= */}

        <div className="hidden xl:block">
          <BackgroundTypography />
        </div>

      </div>

    </section>
  );
}

export default Hero;