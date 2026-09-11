import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] w-full">
      <div className="border-b border-white/[0.06] bg-[#050505]/95 backdrop-blur-xl">

        {/* ================= CONTAINER ================= */}

        <div
          className="
            mx-auto
            flex
            h-20
            w-full
            max-w-[1500px]
            items-center
            justify-between
            px-5
            sm:px-8
            lg:h-24
            lg:px-12
            xl:px-16
          "
        >

          {/* ================= LOGO ================= */}

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="group flex shrink-0 items-center gap-3"
          >
            <span
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border-2
                border-[#ff454f]
                text-xs
                font-black
                leading-none
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
                text-lg
                font-bold
                leading-none
                tracking-tight
                text-white
              "
            >
              Harish
            </span>
          </NavLink>


          {/* ================= DESKTOP NAV ================= */}

          <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `
                  relative
                  py-2
                  text-sm
                  font-semibold
                  transition-colors
                  duration-300
                  ${
                    isActive
                      ? "text-white"
                      : "text-zinc-500 hover:text-white"
                  }
                  `
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>


          {/* ================= DESKTOP SOCIALS ================= */}

          <div className="hidden items-center gap-3 lg:flex">

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
                text-zinc-300
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#ff454f]
                hover:text-white
              "
            >
              GH
            </a>


            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/harish-subramanian-sb-275247285"
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
                text-zinc-300
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#ff454f]
                hover:text-white
              "
            >
              in
            </a>

          </div>


          {/* ================= MOBILE / TABLET MENU BUTTON ================= */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-[#ff454f]
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_30px_rgba(255,69,79,0.3)]
              lg:hidden
            "
          >
            {menuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>

        </div>
      </div>


      {/* ================= MOBILE MENU ================= */}

      <div
        className={`
          absolute
          left-4
          right-4
          top-[84px]
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-[#0b0b0b]/95
          shadow-2xl
          backdrop-blur-xl
          transition-all
          duration-300
          lg:hidden

          ${
            menuOpen
              ? "max-h-[400px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <nav className="p-3">

          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `
                block
                rounded-xl
                px-5
                py-4
                text-sm
                font-semibold
                transition

                ${
                  isActive
                    ? "bg-[#ff454f]/10 text-[#ff454f]"
                    : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
                }
                `
              }
            >
              {link.name}
            </NavLink>
          ))}

        </nav>
      </div>

    </header>
  );
}

export default Navbar;