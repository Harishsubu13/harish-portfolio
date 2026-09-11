import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Website Development",
    "WordPress Development",
    "React Development",
    "SEO-Friendly Websites",
    "WhatsApp Automation",
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.07]
        bg-[#050505]
        text-white
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
          opacity-30
        "
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "190px 190px",
        }}
      />

      {/* =========================================
          RED AMBIENT GLOW
      ========================================= */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#ff454f]/[0.05]
          blur-[150px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* =========================================
            CTA SECTION
        ========================================= */}
        <div
          className="
            border-b
            border-white/[0.07]
            py-20
            sm:py-24
            lg:py-32
          "
        >
          <div
            className="
              flex
              flex-col
              gap-10
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            {/* Heading */}
            <div className="max-w-4xl">
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
                Have a Project in Mind?
              </p>

              <h2
                className="
                  mt-5
                  text-[3.2rem]
                  font-black
                  uppercase
                  leading-[0.88]
                  tracking-[-0.06em]
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[4rem]
                  xl:text-[6rem]
                "
              >
                Let's Build
                <br />
                <span className="text-zinc-600">
                  Something Great.
                </span>
              </h2>

              <p
                className="
                  mt-7
                  max-w-2xl
                  text-sm
                  leading-7
                  text-zinc-500
                  sm:text-base
                  sm:leading-8
                "
              >
                Have an idea, website project or digital solution
                in mind? Let's turn it into a modern and meaningful
                digital experience.
              </p>
            </div>

            {/* Contact CTA */}
            <Link
              to="/contact"
              className="
                group
                inline-flex
                w-fit
                shrink-0
                items-center
                gap-4
                rounded-full
                bg-[#ff454f]
                px-7
                py-4
                text-md
                font-bold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#ff5961]
                hover:shadow-[0_20px_60px_rgba(255,69,79,0.25)]
                sm:px-8
                sm:py-5
                sm:text-base
              "
            >
              Let's Talk

              <ArrowUpRight
                size={20}
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

        {/* =========================================
            MAIN FOOTER CONTENT
        ========================================= */}
        <div
          className="
            grid
            grid-cols-1
            gap-14
            py-16
            sm:grid-cols-2
            sm:gap-12
            sm:py-20
            lg:grid-cols-[1.4fr_0.7fr_1fr_0.9fr]
            lg:gap-10
            lg:py-24
          "
        >
          {/* =====================================
              BRAND
          ===================================== */}
          <div>
            <Link
              to="/"
              className="
                group
                inline-flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-[#ff454f]
                  text-xs
                  font-black
                  text-[#ff454f]
                  transition-all
                  duration-300
                  group-hover:bg-[#ff454f]
                  group-hover:text-white
                "
              >
                HS
              </span>

              <span
                className="
                  text-xl
                  font-black
                  tracking-tight
                  text-white
                "
              >
                Harish
              </span>
            </Link>

            <p
              className="
                mt-6
                max-w-sm
                text-sm
                leading-7
                text-zinc-500
              "
            >
              Full Stack Developer focused on building modern,
              responsive and user-friendly web experiences.
            </p>

            {/* Email */}
            <a
              href="mailto:harishsubu08@gmail.com"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-3
                text-sm
                font-medium
                text-zinc-400
                transition-colors
                duration-300
                hover:text-[#ff454f]
              "
            >
              <Mail
                size={17}
                className="
                  text-[#ff454f]
                "
              />

              <span>
                harishsubu08@gmail.com
              </span>

              <ArrowUpRight
                size={15}
                className="
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                  group-hover:opacity-100
                "
              />
            </a>

            {/* Location */}
            <div
              className="
                mt-4
                flex
                items-center
                gap-3
                text-sm
                text-zinc-600
              "
            >
              <MapPin
                size={17}
                className="text-[#ff454f]"
              />

              Chennai, Tamil Nadu
            </div>
          </div>

          {/* =====================================
              QUICK LINKS
          ===================================== */}
          <div>
            <h3
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.16em]
                text-white
              "
            >
              Navigation
            </h3>

            <nav className="mt-6 flex flex-col gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-sm
                    text-zinc-500
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  <span>{link.name}</span>

                  <ArrowUpRight
                    size={14}
                    className="
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:opacity-100
                    "
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* =====================================
              SERVICES
          ===================================== */}
          <div>
            <h3
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.16em]
                text-white
              "
            >
              Services
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {services.map((service) => (
                <p
                  key={service}
                  className="
                    w-fit
                    cursor-default
                    text-sm
                    text-zinc-500
                    transition-colors
                    duration-300
                    hover:text-[#ff454f]
                  "
                >
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* =====================================
              SOCIAL
          ===================================== */}
          <div>
            <h3
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.16em]
                text-white
              "
            >
              Connect
            </h3>

            <p
              className="
                mt-6
                max-w-xs
                text-sm
                leading-7
                text-zinc-500
              "
            >
              Let's connect and create something impactful
              together.
            </p>

            <div className="mt-6 flex gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/harish.08___?stkn=NWUycTR5dXNmMXRt"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white/[0.05]
                  text-xs
                  font-black
                  text-zinc-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#ff454f]
                  hover:text-white
                "
              >
                IG
              </a>

              {/* LinkedIn */}
              <a
                href="www.linkedin.com/in/harish-subramanian-sb-275247285"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white/[0.05]
                  text-sm
                  font-black
                  text-zinc-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#ff454f]
                  hover:text-white
                "
              >
                in
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Harishsubu13"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white/[0.05]
                  text-xs
                  font-black
                  text-zinc-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#ff454f]
                  hover:text-white
                "
              >
                GH
              </a>

              {/* Email */}
              <a
                href="mailto:harishsubu08@gmail.com"
                aria-label="Email"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white/[0.05]
                  text-zinc-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#ff454f]
                  hover:text-white
                "
              >
                <Mail size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM BAR
        ========================================= */}
        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-white/[0.07]
            py-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-xs
              text-zinc-600
              sm:text-sm
            "
          >
            © {currentYear} Harish Subramanian SB. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <p
              className="
                text-xs
                text-zinc-700
                sm:text-sm
              "
            >
              Designed & Developed by Harish
            </p>

            {/* Back to top */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="
                group
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.08]
                bg-[#0b0b0b]
                text-zinc-400
                transition-all
                duration-300
                hover:border-[#ff454f]
                hover:bg-[#ff454f]
                hover:text-white
              "
            >
              <ArrowUp
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                "
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;