import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
  Clock3,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

import ContactImage from "../assets/contact-img.png";

function Contact() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* =====================================================
          CONTACT HERO
      ====================================================== */}

      <section className="relative px-5 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:px-12 lg:pb-16 lg:pt-36 xl:px-16">

        {/* Background glow */}
        <div className="pointer-events-none absolute left-[5%] top-20 h-[400px] w-[400px] rounded-full bg-[#ff454f]/10 blur-[150px]" />

        <div className="pointer-events-none absolute right-[10%] top-20 h-[500px] w-[500px] rounded-full bg-[#ff454f]/10 blur-[160px]" />


        <div className="relative mx-auto max-w-[1500px]">

          {/* HERO GRID */}

          <div className="grid items-center lg:grid-cols-[0.95fr_1.05fr]">

            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="relative z-20">

              {/* Label */}

              <div className="mb-6 flex items-center gap-3">

                <span className="h-px w-10 bg-[#ff454f]" />

                <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#ff454f]">
                  Get In Touch
                </p>

              </div>


              {/* Heading */}

              <h1 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.045em] sm:text-7xl md:text-[75px] lg:text-[76px] xl:text-[100px]">

                Let's Build

                <br />

                <span className="text-zinc-600">
                  Something
                </span>

                <br />

                <span className="text-zinc-600">
                  Great.
                </span>

              </h1>


              {/* Description */}

              <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                Have an idea, project or business website in mind? Let's turn
                your vision into a modern, responsive and meaningful digital
                experience.
              </p>


              {/* CTA */}

              <div className="mt-8 flex flex-wrap gap-3">

                <a
                  href="mailto:harishsubu08@gmail.com"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#ff454f] px-6 py-4 text-sm font-bold transition-all duration-300 hover:scale-105 hover:bg-[#ff5a63] hover:shadow-[0_15px_40px_rgba(255,69,79,0.18)]"
                >
                  Start a Conversation

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>


                <a
                  href="tel:+918925321393"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-4 text-sm font-bold text-zinc-300 transition-all duration-300 hover:border-[#ff454f] hover:bg-[#ff454f] hover:text-white"
                >
                  Call Me

                  <Phone
                    size={17}
                    className="transition-transform duration-300 group-hover:rotate-12"
                  />
                </a>

              </div>

            </div>


            {/* =================================================
                RIGHT IMAGE
            ================================================== */}

            <div className="relative mt-10 flex min-h-[390px] items-center justify-center lg:mt-0 lg:min-h-[600px]">

              {/* Red glow */}

              <div className="pointer-events-none absolute right-[5%] top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#ff454f]/10 blur-[110px] sm:h-[450px] sm:w-[450px]" />


              {/* Decorative grid */}

              <div className="pointer-events-none absolute right-0 top-1/2 hidden h-[430px] w-[430px] -translate-y-1/2 opacity-20 lg:block">

                <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />

              </div>


              {/* Red circle */}

              <div className="pointer-events-none absolute right-[5%] top-1/2 hidden h-[470px] w-[470px] -translate-y-1/2 rounded-full border border-[#ff454f]/10 lg:block" />


              {/* Developer image */}

              <img
                src={ContactImage}
                alt="Harish working as a web developer"
                className="relative z-10 h-auto w-full max-w-[720px] object-contain transition-transform duration-700 hover:scale-[1.02]"
              />


              {/* Floating status */}

              <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/10 bg-[#080808]/85 px-5 py-3 backdrop-blur-xl sm:left-auto sm:right-4 sm:translate-x-0 lg:right-0">

                <div className="flex items-center gap-3">

                  <span className="relative flex h-2.5 w-2.5">

                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff454f] opacity-50" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#ff454f]" />

                  </span>

                  <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-300">
                    Available for Projects
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT AREA
      ====================================================== */}

      <section className="px-5 pb-16 pt-4 sm:px-8 sm:pb-20 lg:px-12 xl:px-16">

        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">


            {/* =================================================
                CONTACT INFORMATION
            ================================================== */}

            <div className="flex flex-col gap-6">


              {/* Contact information */}

              <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">

                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#ff454f]/10 blur-[80px]" />

                <div className="relative">

                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff454f]">
                    Contact Information
                  </p>

                  <h2 className="mt-3 text-2xl font-black uppercase tracking-tight sm:text-3xl">
                    Let's Talk
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-zinc-500">
                    I'm always open to discussing new projects, creative ideas,
                    freelance opportunities and interesting collaborations.
                  </p>


                  <div className="mt-7 space-y-5">

                    {/* Email */}

                    <a
                      href="mailto:harishsubu08@gmail.com"
                      className="group flex items-center gap-4"
                    >

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-[#ff454f] group-hover:bg-[#ff454f]">

                        <Mail
                          size={19}
                          className="text-[#ff454f] transition-colors group-hover:text-white"
                        />

                      </div>

                      <div>

                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                          Email
                        </p>

                        <p className="mt-1 text-sm font-semibold text-zinc-300 transition-colors group-hover:text-[#ff454f] sm:text-base">
                          harishsubu08@gmail.com
                        </p>

                      </div>

                    </a>


                    {/* Phone */}

                    <a
                      href="tel:+918925321393"
                      className="group flex items-center gap-4"
                    >

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-[#ff454f] group-hover:bg-[#ff454f]">

                        <Phone
                          size={19}
                          className="text-[#ff454f] transition-colors group-hover:text-white"
                        />

                      </div>

                      <div>

                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                          Phone
                        </p>

                        <p className="mt-1 text-sm font-semibold text-zinc-300 transition-colors group-hover:text-[#ff454f] sm:text-base">
                          +91 89253 21393
                        </p>

                      </div>

                    </a>


                    {/* Location */}

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">

                        <MapPin
                          size={19}
                          className="text-[#ff454f]"
                        />

                      </div>

                      <div>

                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                          Location
                        </p>

                        <p className="mt-1 text-sm font-semibold text-zinc-300 sm:text-base">
                          Chennai, Tamil Nadu, India
                        </p>

                      </div>

                    </div>


                    {/* Availability */}

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">

                        <Clock3
                          size={19}
                          className="text-[#ff454f]"
                        />

                      </div>

                      <div>

                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                          Availability
                        </p>

                        <div className="mt-1 flex items-center gap-2">

                          <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff454f]" />

                          <p className="text-sm font-semibold text-zinc-300 sm:text-base">
                            Available for Projects
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>


              {/* Quick response */}

              <div className="rounded-3xl border border-white/[0.08] bg-[#0a0a0a] p-6 sm:p-7">

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ff454f]">

                    <MessageCircle
                      size={21}
                      className="text-white"
                    />

                  </div>

                  <div>

                    <h3 className="text-base font-bold">
                      Quick Response
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      Tell me about your project and I'll get back to you as
                      soon as possible.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                CONTACT FORM
            ================================================== */}

            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 lg:p-10">

              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ff454f]/10 blur-[100px]" />

              <div className="relative">

                <div className="mb-8">

                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff454f]">
                    Start a Conversation
                  </p>

                  <h2 className="mt-3 text-2xl font-black uppercase tracking-tight sm:text-3xl">
                    Tell Me About Your Project
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-500">
                    Fill out the form below with a few details about your
                    project, and I'll get back to you.
                  </p>

                </div>


                <form
                  action="https://formsubmit.co/harishsubu08@gmail.com"
                  method="POST"
                  className="space-y-5"
                >

                  <input
                    type="hidden"
                    name="_subject"
                    value="New Portfolio Contact Message"
                  />

                  <input
                    type="hidden"
                    name="_captcha"
                    value="false"
                  />

                  <input
                    type="hidden"
                    name="_template"
                    value="table"
                  />


                  {/* Name + Email */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>

                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-zinc-500"
                      >
                        Your Name
                      </label>

                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-white/10 bg-[#090909] px-4 py-4 text-sm text-white outline-none placeholder:text-zinc-700 transition-all duration-300 focus:border-[#ff454f]/60 focus:ring-1 focus:ring-[#ff454f]/30"
                      />

                    </div>


                    <div>

                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-zinc-500"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-white/10 bg-[#090909] px-4 py-4 text-sm text-white outline-none placeholder:text-zinc-700 transition-all duration-300 focus:border-[#ff454f]/60 focus:ring-1 focus:ring-[#ff454f]/30"
                      />

                    </div>

                  </div>


                  {/* Phone */}

                  <div>

                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-zinc-500"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-xl border border-white/10 bg-[#090909] px-4 py-4 text-sm text-white outline-none placeholder:text-zinc-700 transition-all duration-300 focus:border-[#ff454f]/60 focus:ring-1 focus:ring-[#ff454f]/30"
                    />

                  </div>


                  {/* Project */}

                  <div>

                    <label
                      htmlFor="project"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-zinc-500"
                    >
                      Project Type
                    </label>

                    <select
                      id="project"
                      name="project_type"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-white/10 bg-[#090909] px-4 py-4 text-sm text-zinc-400 outline-none transition-all duration-300 focus:border-[#ff454f]/60 focus:ring-1 focus:ring-[#ff454f]/30"
                    >

                      <option value="" disabled>
                        Select project type
                      </option>

                      <option value="Website Development">
                        Website Development
                      </option>

                      <option value="React Application">
                        React Application
                      </option>

                      <option value="WordPress Website">
                        WordPress Website
                      </option>

                      <option value="E-Commerce Website">
                        E-Commerce Website
                      </option>

                      <option value="SEO Website">
                        SEO-Friendly Website
                      </option>

                      <option value="Other">
                        Other
                      </option>

                    </select>

                  </div>


                  {/* Budget */}

                  <div>

                    <label
                      htmlFor="budget"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-zinc-500"
                    >
                      Estimated Budget
                    </label>

                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className="w-full rounded-xl border border-white/10 bg-[#090909] px-4 py-4 text-sm text-zinc-400 outline-none transition-all duration-300 focus:border-[#ff454f]/60 focus:ring-1 focus:ring-[#ff454f]/30"
                    >

                      <option value="" disabled>
                        Select budget range
                      </option>

                      <option value="Below ₹25,000">
                        Below ₹25,000
                      </option>

                      <option value="₹25,000 - ₹50,000">
                        ₹25,000 - ₹50,000
                      </option>

                      <option value="₹50,000 - ₹1,00,000">
                        ₹50,000 - ₹1,00,000
                      </option>

                      <option value="Above ₹1,00,000">
                        Above ₹1,00,000
                      </option>

                      <option value="Not decided">
                        Not decided yet
                      </option>

                    </select>

                  </div>


                  {/* Message */}

                  <div>

                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-zinc-500"
                    >
                      Project Details
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      placeholder="Tell me about your project, goals and requirements..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-[#090909] px-4 py-4 text-sm leading-7 text-white outline-none placeholder:text-zinc-700 transition-all duration-300 focus:border-[#ff454f]/60 focus:ring-1 focus:ring-[#ff454f]/30"
                    />

                  </div>


                  {/* Submit */}

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#ff454f] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.01] hover:bg-[#ff5a63] hover:shadow-[0_15px_40px_rgba(255,69,79,0.18)]"
                  >

                    Send Project Enquiry

                    <Send
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />

                  </button>


                  <div className="flex items-center justify-center gap-2 pt-1 text-xs text-zinc-600">

                    <CheckCircle2 size={14} />

                    <span>
                      Your information is kept private.
                    </span>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="px-5 pb-16 pt-2 sm:px-8 sm:pb-20 lg:px-12 xl:px-16">

        <div className="mx-auto max-w-[1500px]">

          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] px-6 py-10 sm:px-10 sm:py-12">

            <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-[#ff454f]/10 blur-[100px]" />

            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff454f]">
                  Available for Work
                </p>

                <h2 className="mt-3 text-2xl font-black uppercase tracking-tight sm:text-3xl">
                  Have an idea?

                  <span className="text-zinc-600">
                    {" "}Let's make it real.
                  </span>
                </h2>

              </div>


              <a
                href="mailto:harishsubu08@gmail.com"
                className="group inline-flex shrink-0 items-center gap-3 rounded-full border border-white/10 px-6 py-4 text-sm font-bold transition-all duration-300 hover:border-[#ff454f] hover:bg-[#ff454f]"
              >

                Email Me

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />

              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;