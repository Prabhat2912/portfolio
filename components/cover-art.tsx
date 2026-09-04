"use client";

import { useEffect, useId, useRef } from "react";
import type { Transition } from "motion/react";
import { motion, useInView, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { playClick } from "@/lib/sound";

const TOPS = "M265.98,209.00L291.96,224.00L265.98,239.00L240.00,224.00ZM136.08,230.00L162.06,245.00L136.08,260.00L110.10,245.00ZM240.00,224.00L265.98,239.00L240.00,254.00L214.02,239.00ZM291.96,224.00L317.94,239.00L291.96,254.00L265.98,239.00ZM291.96,125.00L317.94,140.00L291.96,155.00L265.98,140.00ZM265.98,239.00L291.96,254.00L265.98,269.00L240.00,254.00ZM265.98,140.00L291.96,155.00L265.98,170.00L240.00,155.00ZM317.94,239.00L343.92,254.00L317.94,269.00L291.96,254.00ZM317.94,140.00L343.92,155.00L317.94,170.00L291.96,155.00ZM291.96,254.00L317.94,269.00L291.96,284.00L265.98,269.00ZM291.96,155.00L317.94,170.00L291.96,185.00L265.98,170.00ZM343.92,254.00L369.90,269.00L343.92,284.00L317.94,269.00ZM317.94,269.00L343.92,284.00L317.94,299.00L291.96,284.00ZM421.87,140.00L447.85,155.00L421.87,170.00L395.88,155.00ZM343.92,359.00L369.90,374.00L343.92,389.00L317.94,374.00Z";
const SIDES = "M240.00,224.00L265.98,239.00L265.98,275.00L240.00,260.00ZM110.10,245.00L136.08,260.00L136.08,290.00L110.10,275.00ZM214.02,239.00L240.00,254.00L240.00,290.00L214.02,275.00ZM265.98,239.00L291.96,254.00L291.96,290.00L265.98,275.00ZM265.98,140.00L291.96,155.00L291.96,254.00L265.98,239.00ZM240.00,254.00L265.98,269.00L265.98,305.00L240.00,290.00ZM240.00,155.00L265.98,170.00L265.98,269.00L240.00,254.00ZM291.96,254.00L317.94,269.00L317.94,305.00L291.96,290.00ZM291.96,155.00L317.94,170.00L317.94,269.00L291.96,254.00ZM265.98,269.00L291.96,284.00L291.96,320.00L265.98,305.00ZM265.98,170.00L291.96,185.00L291.96,284.00L265.98,269.00ZM317.94,269.00L343.92,284.00L343.92,320.00L317.94,305.00ZM291.96,284.00L317.94,299.00L317.94,335.00L291.96,320.00ZM395.88,155.00L421.87,170.00L421.87,200.00L395.88,185.00ZM317.94,374.00L343.92,389.00L343.92,410.00L317.94,395.00ZM291.96,224.00L265.98,239.00L265.98,275.00L291.96,260.00ZM162.06,245.00L136.08,260.00L136.08,290.00L162.06,275.00ZM265.98,239.00L240.00,254.00L240.00,290.00L265.98,275.00ZM317.94,239.00L291.96,254.00L291.96,290.00L317.94,275.00ZM317.94,140.00L291.96,155.00L291.96,254.00L317.94,239.00ZM291.96,254.00L265.98,269.00L265.98,305.00L291.96,290.00ZM291.96,155.00L265.98,170.00L265.98,269.00L291.96,254.00ZM343.92,254.00L317.94,269.00L317.94,305.00L343.92,290.00ZM343.92,155.00L317.94,170.00L317.94,269.00L343.92,254.00ZM317.94,269.00L291.96,284.00L291.96,320.00L317.94,305.00ZM317.94,170.00L291.96,185.00L291.96,284.00L317.94,269.00ZM369.90,269.00L343.92,284.00L343.92,320.00L369.90,305.00ZM343.92,284.00L317.94,299.00L317.94,335.00L343.92,320.00ZM447.85,155.00L421.87,170.00L421.87,200.00L447.85,185.00ZM369.90,374.00L343.92,389.00L343.92,410.00L369.90,395.00Z";
const DROP_TOP = "421.87 185.00";
const DROP_BOT = "421.87 320.00";

const transition: Transition = { type: "spring", mass: 0.5, damping: 18, stiffness: 200 };

/**
 * Original abstract isometric composition — stepped tower, floating cube,
 * satellites. The finish follows cursor light; press it for a click.
 */
export function CoverArt({ className }: { className?: string }) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const ids = {
    pattern: `pk-art-pattern-${id}`,
    sheen: `pk-art-sheen-${id}`,
  };

  const ref = useRef<SVGSVGElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { margin: "80px" });

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const cx = useSpring(useTransform(mouseX, [0, 1], [0, 560]), { stiffness: 300, damping: 30, mass: 0.1 });
  const cy = useSpring(useTransform(mouseY, [0, 1], [0, 420]), { stiffness: 300, damping: 30, mass: 0.1 });

  useEffect(() => {
    if (shouldReduceMotion || !isInView) return;
    if (window.matchMedia("(hover: none)").matches) return;
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [shouldReduceMotion, isInView, mouseX, mouseY]);

  return (
    <motion.svg
      ref={ref}
      className={`h-auto w-full touch-manipulation overflow-visible [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_22%,var(--background))]${className ? ` ${className}` : ""}`}
      viewBox="0 0 560 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Abstract isometric cover art. Press for a sound."
      initial="normal"
      whileTap="pressed"
      onTap={() => playClick()}
    >
      <defs>
        <pattern id={ids.pattern} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2" stroke="var(--pattern)" strokeWidth="1" />
        </pattern>
        <motion.radialGradient id={ids.sheen} cx={cx} cy={cy} r="220" gradientUnits="userSpaceOnUse">
          <stop className="dark:[stop-color:#fff]" stopColor="#3f3f46" />
          <stop className="dark:[stop-color:#52525b]" offset="1" stopColor="#a1a1aa" stopOpacity="0" />
        </motion.radialGradient>
      </defs>

      <g stroke="var(--line)" strokeWidth="1" strokeDasharray="4 2" aria-hidden>
        <path d="M-120 460L640 -60" />
        <path d="M680 440L-80 -80" />
        <path d="M-80 300L640 -20" />
      </g>

      <line x1={DROP_TOP.split(" ")[0]} y1={DROP_TOP.split(" ")[1]} x2={DROP_BOT.split(" ")[0]} y2={DROP_BOT.split(" ")[1]} stroke="var(--stroke)" strokeWidth="1" strokeDasharray="4 2" aria-hidden />

      <motion.g variants={{ normal: { transform: "translate(0px, 0px)" }, pressed: { transform: "translate(0px, 14px)" } }} transition={transition}>
        <path d={SIDES} fill="var(--background)" stroke="var(--stroke)" strokeWidth="1" />
      </motion.g>

      <motion.g variants={{ normal: { transform: "translate(0px, 0px)" }, pressed: { transform: "translate(0px, 14px)" } }} transition={transition}>
        <path d={TOPS} fill="var(--background)" />
        <path d={TOPS} fill={`url(#${ids.pattern})`} />
      </motion.g>

      <motion.g variants={{ normal: { transform: "translate(0px, 0px)" }, pressed: { transform: "translate(0px, 14px)" } }} transition={transition}>
        <path d={TOPS} fill="none" stroke="var(--stroke)" strokeWidth="1" />
        <path d={TOPS} fill="none" stroke={`url(#${ids.sheen})`} strokeWidth="1" />
      </motion.g>
    </motion.svg>
  );
}
