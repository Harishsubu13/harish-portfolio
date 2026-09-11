import {
    Code2,
    MessageCircle,
    SearchCheck,
    Layers3,
} from "lucide-react";

const services = [
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

function DevelopmentServices() {
    return (
        <section className="relative bg-[#050505] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 xl:px-16">
            <div className="mx-auto w-full max-w-[1500px]">

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">

                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.title}
                                className="group flex min-h-[220px] flex-col items-center justify-center rounded-[20px] border border-[#ff454f]/25 bg-[#050505] px-6 py-10 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#ff454f]/70 hover:bg-[#0a0a0a] hover:shadow-[0_20px_60px_rgba(255,69,79,0.08)]"
                            >
                                {/* ICON */}
                                <div className="flex h-14 w-14 items-center justify-center text-[#ff454f] transition-all duration-500 group-hover:scale-110">
                                    <Icon
                                        size={46}
                                        strokeWidth={1.7}
                                    />
                                </div>

                                {/* TITLE */}
                                <h3 className="mt-7 text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#ff454f] sm:text-xl">
                                    {service.title}
                                </h3>

                                {/* SUBTITLE */}
                                <p className="mt-3 text-sm text-zinc-500 transition-colors duration-300 group-hover:text-[#ffff] sm:text-base">
                                    {service.subtitle}
                                </p>
                            </article>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}

export default DevelopmentServices;