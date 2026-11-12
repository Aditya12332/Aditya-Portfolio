"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";

export default function ExperienceDetails({ points }: { points: string[] }) {
    const [open, setOpen] = useState(false);
    const listId = useId();

    if (!points.length) return null;

    return (
        <div className="flex flex-col items-center md:items-start w-full max-w-lg md:max-w-2xl">
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-controls={listId}
                className="text-lg font-bold text-[#474747] gaegu-font underline decoration-2 underline-offset-4 cursor-pointer hover:text-black"
            >
                {open ? "Show less ↑" : "Read more ↓"}
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.ul
                        id={listId}
                        key="details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden flex flex-col gap-2 mt-3 pl-5 list-disc text-left text-[#8C8FA6] gaegu-font text-lg marker:text-[#474747]"
                    >
                        {points.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}
