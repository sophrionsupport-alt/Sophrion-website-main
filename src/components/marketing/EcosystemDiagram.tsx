"use client";

// Interactive SVG diagram rendering the learner node surrounded by radial ecosystem orbit nodes.

import * as React from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

// Orbit node labels representing ecosystem dimensions
const ORBIT_NODES = [
  "Experiences",
  "People",
  "Problems",
  "Knowledge",
  "Projects",
  "Industry",
  "Community",
  "Feedback",
  "Opportunities",
] as const;

type OrbitNode = (typeof ORBIT_NODES)[number];

// Trigonometric helper calculating (x,y) cartesian coordinates for radial node positioning
function getOrbitPositions(
  count: number,
  radius: number,
  offsetAngleDeg = -90
): Array<{ x: number; y: number }> {
  return Array.from({ length: count }, (_, i) => {
    const angleDeg = offsetAngleDeg + (360 / count) * i;
    const rad = (angleDeg * Math.PI) / 180;
    return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius };
  });
}

// Renders SVG ecosystem diagram with hover interactions and animated connector lines
export default function EcosystemDiagram() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  const [hoveredNode, setHoveredNode] = React.useState<OrbitNode | null>(null);

  /* Responsive sizing via CSS custom property logic */
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const CENTER = 280; // SVG canvas center (square canvas = 560px)
  const ORBIT_R = isMobile ? 140 : 210;
  const CENTER_R = isMobile ? 42 : 58;
  const NODE_W = isMobile ? 46 : 60; // half width of pill
  const NODE_H = isMobile ? 32 : 38;
  const NODE_FONT = isMobile ? 9 : 11;

  const positions = getOrbitPositions(ORBIT_NODES.length, ORBIT_R);
  const svgSize = CENTER * 2;

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center select-none w-full max-w-4xl mx-auto my-4"
    >
      {/* Atmospheric glow behind diagram */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
        style={{
          width: isMobile ? 320 : 520,
          height: isMobile ? 320 : 520,
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, rgba(34, 211, 238, 0.12) 45%, transparent 70%)",
        }}
      />

      <svg
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        width={isMobile ? 340 : 580}
        height={isMobile ? 340 : 580}
        aria-label="Sophrion learning ecosystem diagram"
        role="img"
        className="overflow-visible"
      >
        <defs>
          {/* Radial gradient for center node */}
          <radialGradient id="centerNodeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.6" />
            <stop offset="70%" stopColor="rgb(30, 27, 75)" stopOpacity="0.95" />
            <stop offset="100%" stopColor="rgb(15, 17, 26)" stopOpacity="1" />
          </radialGradient>

          {/* Glow filter for active elements */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="centerGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ── Static orbit rings ── */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={ORBIT_R}
          fill="none"
          stroke="rgba(168, 85, 247, 0.22)"
          strokeWidth="1.5"
        />
        <circle
          cx={CENTER}
          cy={CENTER}
          r={ORBIT_R * 0.58}
          fill="none"
          stroke="rgba(34, 211, 238, 0.15)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* ── Connector lines ── */}
        {ORBIT_NODES.map((node, i) => {
          const pos = positions[i];
          const isHovered = hoveredNode === node;
          const isDimmed = hoveredNode !== null && !isHovered;

          return (
            <motion.line
              key={`line-${node}`}
              x1={CENTER}
              y1={CENTER}
              x2={CENTER + pos.x}
              y2={CENTER + pos.y}
              stroke={
                isHovered
                  ? "rgb(34, 211, 238)"
                  : "rgba(168, 85, 247, 0.45)"
              }
              strokeWidth={isHovered ? 2.5 : 1.5}
              strokeDasharray={isHovered ? "none" : "none"}
              initial={
                prefersReduced ? { opacity: 0.45 } : { pathLength: 0, opacity: 0 }
              }
              animate={
                isInView
                  ? prefersReduced
                    ? { opacity: isDimmed ? 0.15 : 0.6 }
                    : {
                        pathLength: 1,
                        opacity: isDimmed ? 0.12 : isHovered ? 1 : 0.6,
                      }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={
                prefersReduced
                  ? { duration: 0.3 }
                  : {
                      pathLength: { duration: 0.6, delay: 0.2 + i * 0.06, ease: "easeOut" },
                      opacity: { duration: 0.3, delay: 0.2 + i * 0.06 },
                    }
              }
              filter={isHovered ? "url(#glow)" : undefined}
            />
          );
        })}

        {/* ── Center node ── */}
        <motion.g
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.7 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
        >
          {/* Outer glow ring */}
          <motion.circle
            cx={CENTER}
            cy={CENTER}
            r={CENTER_R + 14}
            fill="none"
            stroke="rgb(168, 85, 247)"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            animate={{ strokeOpacity: [0.25, 0.65, 0.25], scale: [0.98, 1.04, 0.98] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
          />
          {/* Cyan pulse ring */}
          <motion.circle
            cx={CENTER}
            cy={CENTER}
            r={CENTER_R + 7}
            fill="none"
            stroke="rgb(34, 211, 238)"
            strokeWidth="1.5"
            strokeOpacity="0.5"
            animate={{ strokeOpacity: [0.3, 0.8, 0.3], r: [CENTER_R + 5, CENTER_R + 9, CENTER_R + 5] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
          {/* Main filled circle */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={CENTER_R}
            fill="url(#centerNodeGradient)"
            stroke="rgb(168, 85, 247)"
            strokeWidth="2.5"
            filter="url(#centerGlow)"
          />
          {/* Center text */}
          <text
            x={CENTER}
            y={CENTER}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={isMobile ? 10 : 12}
            fontFamily="var(--font-geist-sans, sans-serif)"
            fontWeight="800"
            letterSpacing="0.22em"
            fill="#ffffff"
            style={{ textShadow: "0 0 12px rgba(168, 85, 247, 0.8)" }}
          >
            LEARNER
          </text>
        </motion.g>

        {/* ── Orbit nodes ── */}
        {ORBIT_NODES.map((node, i) => {
          const pos = positions[i];
          const cx = CENTER + pos.x;
          const cy = CENTER + pos.y;
          const isHovered = hoveredNode === node;
          const isDimmed = hoveredNode !== null && !isHovered;

          return (
            <motion.g
              key={node}
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.6 }}
              animate={
                isInView
                  ? {
                      opacity: isDimmed ? 0.35 : 1,
                      scale: isHovered ? 1.12 : 1,
                    }
                  : { opacity: 0, scale: 0.6 }
              }
              transition={
                prefersReduced
                  ? { duration: 0.3 }
                  : {
                      opacity: { duration: 0.4, delay: 0.4 + i * 0.06 },
                      scale: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
                    }
              }
              style={{ transformOrigin: `${cx}px ${cy}px`, cursor: "pointer" }}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
              onTouchStart={() => setHoveredNode(node)}
              onTouchEnd={() => setHoveredNode(null)}
            >
              {/* Node background pill */}
              <rect
                x={cx - NODE_W}
                y={cy - NODE_H / 2}
                width={NODE_W * 2}
                height={NODE_H}
                rx={NODE_H / 2}
                fill={
                  isHovered
                    ? "rgba(168, 85, 247, 0.28)"
                    : "rgba(18, 20, 32, 0.92)"
                }
                stroke={
                  isHovered
                    ? "rgb(34, 211, 238)"
                    : "rgba(255, 255, 255, 0.18)"
                }
                strokeWidth={isHovered ? 2 : 1}
                filter={isHovered ? "url(#glow)" : undefined}
              />
              {/* Accent dot indicator inside pill */}
              <circle
                cx={cx - NODE_W + (isMobile ? 12 : 14)}
                cy={cy}
                r={isMobile ? 2.5 : 3}
                fill={isHovered ? "rgb(34, 211, 238)" : "rgb(168, 85, 247)"}
              />
              {/* Node text */}
              <text
                x={cx + (isMobile ? 4 : 5)}
                y={cy}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={NODE_FONT}
                fontFamily="var(--font-geist-sans, sans-serif)"
                fontWeight={isHovered ? "700" : "600"}
                fill={
                  isHovered
                    ? "#ffffff"
                    : "rgba(240, 244, 255, 0.9)"
                }
              >
                {node}
              </text>
            </motion.g>
          );
        })}
      </svg>

      {/* Payoff paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: prefersReduced ? 0 : 1.1 }}
        className="mt-12 text-center text-sm font-medium text-foreground/70 max-w-lg leading-relaxed px-4"
      >
        These connections are not a fixed sequence. They form an evolving learning ecosystem.
      </motion.p>
    </div>
  );
}
