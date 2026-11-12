"use client"

import { motion } from "motion/react"
import React, { CSSProperties, ReactNode } from 'react';
import { useInView } from "motion/react";
import { useCanDrag } from "@/lib/useCanDrag";

interface TiltInProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    // angle (deg) the element settles at once it has tilted in
    rotate?: number;
}

export default function TiltIn({
    children,
    className = "",
    style,
    rotate = 0,
}: TiltInProps) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const canDrag = useCanDrag();

    return (
        <motion.div
            ref={ref}
            drag={canDrag}
            initial={{ x: 0, y: 0, opacity: 1, rotate: 30 }}
            animate={isInView ? { x: 0, y: 0, opacity: 1, rotate } : { x: 0, y: 0, opacity: 1, rotate: 30 }}
            whileHover={{ scale: 1.1, rotate: 0, zIndex: 20, transition: { duration: 0.2 } }}
            transition={{ duration: 0.1, type: "spring", damping: 8, stiffness: 80, mass: 1 }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
}
