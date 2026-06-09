"use client";

import {
    Briefcase,
    Factory,
    Magnifier,
    Star,
} from "@gravity-ui/icons";
import { motion } from "motion/react";

export default function StatsSection() {
    const stats = [
        {
            id: 1,
            icon: <Briefcase className="h-5 w-5" />,
            value: "50K",
            label: "Active Jobs",
        },
        {
            id: 2,
            icon: <Factory className="h-5 w-5" />,
            value: "12K",
            label: "Companies",
        },
        {
            id: 3,
            icon: <Magnifier className="h-5 w-5" />,
            value: "2M",
            label: "Job Seekers",
        },
        {
            id: 4,
            icon: <Star className="h-5 w-5" />,
            value: "97%",
            label: "Satisfaction Rate",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-black py-28 text-white">
            {/* Animated Globe */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
                style={{
                    backgroundImage: "url('/images/globe.png')",
                }}
                animate={{
                    scale: [1, 1.04, 1],
                    rotate: [0, 2, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Glow */}
            <div className="absolute left-1/2 top-[30%] h-100 w-100 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <h2 className="text-3xl font-semibold leading-relaxed md:text-4xl">
                        Assisting over{" "}
                        <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                            15,000 job seekers
                        </span>
                        <br />
                        find their dream positions.
                    </h2>

                    {/* Animated Job Types */}
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm backdrop-blur-xl"
                        >
                            🌍 Remote Jobs
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: 0.5,
                                ease: "easeInOut",
                            }}
                            className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm backdrop-blur-xl"
                        >
                            🏢 On-site Jobs
                        </motion.div>
                    </div>
                </motion.div>

                {/* Stats Cards */}
                <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{
                                opacity: 0,
                                y: 50,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                            }}
                            whileHover={{
                                y: -8,
                            }}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/4 p-8 backdrop-blur-xl"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">
                                <div className="absolute inset-0 bg-linear-to-br from-violet-500/10 via-transparent to-cyan-500/10" />
                            </div>

                            {/* Blur Effect */}
                            <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-white/5 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />

                            {/* Icon */}
                            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                                {stat.icon}
                            </div>

                            {/* Number */}
                            <h3 className="relative z-10 mt-8 text-5xl font-bold tracking-tight">
                                {stat.value}
                            </h3>

                            {/* Label */}
                            <p className="relative z-10 mt-3 text-base text-gray-300">
                                {stat.label}
                            </p>

                            {/* Animated Line */}
                            <div className="relative z-10 mt-6 h-0.5 w-0 bg-linear-to-r from-violet-500 to-cyan-500 transition-all duration-500 group-hover:w-full" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}