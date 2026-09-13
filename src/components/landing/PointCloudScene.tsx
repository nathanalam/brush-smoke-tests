import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * A deterministic, dependency-free point cloud illustration.
 *
 * Points are generated from a seeded PRNG and projected with a simple pinhole
 * camera so the scene reads as a real scan rather than random confetti. Three
 * modes mirror the product story: raw capture -> semantic labels -> AI edit.
 */

export type SceneMode = "raw" | "labeled" | "ai"

const VIEW_W = 480
const VIEW_H = 340

/** mulberry32 — small, fast, and stable across renders/SSR. */
function makeRng(seed: number) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

interface P3 {
  x: number
  y: number
  z: number
}

interface Projected {
  x: number
  y: number
  r: number
  depth: number
}

/** Pinhole projection: camera sits at the origin looking down +z. */
function project({ x, y, z }: P3): Projected {
  const f = 300
  const d = z + 2.2
  const px = VIEW_W / 2 + (x * f) / d
  const py = VIEW_H * 0.62 - ((y - 0.9) * f) / d
  return { x: px, y: py, r: Math.max(0.35, 1.9 - d * 0.12), depth: d }
}

/** Height-mapped laser-return palette: cyan near the floor, violet up high. */
function colorFor(y: number) {
  const t = Math.min(1, Math.max(0, y / 3))
  const from = [6, 182, 212]
  const to = [139, 92, 246]
  const c = from.map((v, i) => Math.round(v + (to[i] - v) * t))
  return `rgb(${c[0]},${c[1]},${c[2]})`
}

interface Cloud {
  structure: Projected[]
  pillar: Projected[]
  conduit: Projected[]
  colors: { structure: string[]; pillar: string[]; conduit: string[] }
}

function buildCloud(): Cloud {
  const rng = makeRng(20260913)
  const structure: Projected[] = []
  const pillar: Projected[] = []
  const conduit: Projected[] = []
  const colors = { structure: [] as string[], pillar: [] as string[], conduit: [] as string[] }

  const push = (bucket: Projected[], key: keyof Cloud["colors"], p: P3) => {
    bucket.push(project(p))
    colors[key].push(colorFor(p.y))
  }

  // Floor slab.
  for (let i = 0; i < 900; i++) {
    const x = -3.2 + rng() * 6.4
    const z = 1.1 + rng() * 7.4
    push(structure, "structure", { x, y: rng() * 0.05, z })
  }
  // Back wall.
  for (let i = 0; i < 420; i++) {
    push(structure, "structure", { x: -3.2 + rng() * 6.4, y: rng() * 3.1, z: 8.5 + rng() * 0.06 })
  }
  // Side walls.
  for (let i = 0; i < 620; i++) {
    const side = rng() < 0.5 ? -3.2 : 3.2
    push(structure, "structure", { x: side + (rng() - 0.5) * 0.06, y: rng() * 3.1, z: 1.1 + rng() * 7.4 })
  }
  // Ceiling.
  for (let i = 0; i < 260; i++) {
    push(structure, "structure", { x: -3.2 + rng() * 6.4, y: 3.1 - rng() * 0.05, z: 2 + rng() * 6.5 })
  }
  // Structural pillar (a cylinder of returns).
  for (let i = 0; i < 340; i++) {
    const a = rng() * Math.PI * 2
    const rad = 0.32 + (rng() - 0.5) * 0.03
    push(pillar, "pillar", {
      x: 1.35 + Math.cos(a) * rad,
      y: rng() * 3.1,
      z: 4.6 + Math.sin(a) * rad,
    })
  }
  // MEP conduits: three parallel runs crossing the room near the ceiling.
  const CONDUIT_DEPTHS = [4.2, 5.4, 6.6]
  for (let i = 0; i < 420; i++) {
    const z = CONDUIT_DEPTHS[i % 3] + (rng() - 0.5) * 0.05
    push(conduit, "conduit", {
      x: -3.05 + rng() * 6.1,
      y: 2.6 + (rng() - 0.5) * 0.06,
      z,
    })
  }

  return { structure, pillar, conduit, colors }
}

function bboxOf(points: Projected[], pad = 8) {
  const xs = points.map((p) => p.x)
  const ys = points.map((p) => p.y)
  const minX = Math.min(...xs) - pad
  const minY = Math.min(...ys) - pad
  return {
    x: minX,
    y: minY,
    width: Math.max(...xs) + pad - minX,
    height: Math.max(...ys) + pad - minY,
  }
}

interface LabelBoxProps {
  box: { x: number; y: number; width: number; height: number }
  label: string
  color: string
  visible: boolean
  delay?: number
}

function LabelBox({ box, label, color, visible, delay = 0 }: LabelBoxProps) {
  return (
    <g
      className="transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0, transitionDelay: `${delay}ms` }}
      aria-hidden="true"
    >
      <rect
        x={box.x}
        y={box.y}
        width={box.width}
        height={box.height}
        rx="3"
        fill={color}
        fillOpacity="0.07"
        stroke={color}
        strokeWidth="1.1"
        strokeDasharray="5 3"
      />
      {/* Corner ticks give the box a measured, CAD-like feel. */}
      {[
        [box.x, box.y],
        [box.x + box.width, box.y],
        [box.x, box.y + box.height],
        [box.x + box.width, box.y + box.height],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2" fill={color} />
      ))}
      <rect
        x={box.x}
        y={Math.max(0, box.y - 15)}
        width={label.length * 5.6 + 12}
        height="13"
        rx="3"
        fill={color}
      />
      <text
        x={box.x + 6}
        y={Math.max(0, box.y - 15) + 9.3}
        fill="#090A0F"
        fontSize="8"
        fontWeight="700"
        fontFamily="ui-monospace, monospace"
        letterSpacing="0.3"
      >
        {label}
      </text>
    </g>
  )
}

export interface PointCloudSceneProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: SceneMode
  /** Renders the animated capture sweep bar (used in the hero + raw tab). */
  scanning?: boolean
  /** "slice" fills a non-16:11 frame (e.g. the portrait phone) instead of letterboxing. */
  fit?: "meet" | "slice"
}

export function PointCloudScene({
  mode = "labeled",
  scanning = false,
  fit = "meet",
  className,
  ...props
}: PointCloudSceneProps) {
  const cloud = React.useMemo(buildCloud, [])
  const showLabels = mode === "labeled" || mode === "ai"

  // "+20cm" in world units, converted to screen units at the conduits' depth.
  const conduitShift = mode === "ai" ? -12 : 0

  const pillarBox = React.useMemo(() => bboxOf(cloud.pillar), [cloud])
  const conduitBox = React.useMemo(() => bboxOf(cloud.conduit, 6), [cloud])

  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio={`xMidYMid ${fit}`}
        className="h-full w-full"
        role="img"
        aria-label={
          mode === "raw"
            ? "Raw point cloud scan of an interior space"
            : mode === "labeled"
              ? "Point cloud with semantic bounding boxes around a structural pillar and MEP conduits"
              : "Point cloud after an AI prompt repositioned the electrical conduits by 20 centimetres"
        }
      >
        <defs>
          <radialGradient id="pc-vignette" cx="50%" cy="45%" r="70%">
            <stop offset="0%" stopColor="#0b1220" stopOpacity="0" />
            <stop offset="100%" stopColor="#090A0F" stopOpacity="0.8" />
          </radialGradient>
          <linearGradient id="pc-sweep" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width={VIEW_W} height={VIEW_H} fill="#090A0F" />

        {/* Static structure. */}
        <g>
          {cloud.structure.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={p.r}
              fill={cloud.colors.structure[i]}
              opacity={Math.max(0.3, 0.95 - p.depth * 0.05)}
            />
          ))}
        </g>

        {/* Pillar — highlighted once labeled. */}
        <g className="transition-opacity duration-500" opacity={showLabels ? 1 : 0.75}>
          {cloud.pillar.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={p.r + (showLabels ? 0.25 : 0)}
              fill={showLabels ? "#22D3EE" : cloud.colors.pillar[i]}
              opacity={Math.max(0.3, 0.95 - p.depth * 0.05)}
            />
          ))}
        </g>

        {/* Conduits — translate as a group when the AI edit applies. */}
        <g
          style={{
            transform: `translateY(${conduitShift}px)`,
            transition: "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {cloud.conduit.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={p.r + (showLabels ? 0.3 : 0)}
              fill={mode === "ai" ? "#A78BFA" : showLabels ? "#8B5CF6" : cloud.colors.conduit[i]}
              opacity={Math.max(0.35, 0.95 - p.depth * 0.05)}
            />
          ))}
        </g>

        {/* Ghost of the pre-edit conduit position, for a visible delta. */}
        {mode === "ai" && (
          <g opacity="0.28" aria-hidden="true">
            <rect
              x={conduitBox.x}
              y={conduitBox.y}
              width={conduitBox.width}
              height={conduitBox.height}
              rx="3"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="1"
              strokeDasharray="2 4"
            />
          </g>
        )}

        <LabelBox
          box={pillarBox}
          label="STRUCTURAL PILLAR"
          color="#22D3EE"
          visible={showLabels}
        />
        <LabelBox
          box={{ ...conduitBox, y: conduitBox.y + conduitShift }}
          label="MEP CONDUIT ×3"
          color="#8B5CF6"
          visible={showLabels}
          delay={120}
        />

        {/* Measured delta callout for the AI state. */}
        {mode === "ai" && (
          <g aria-hidden="true">
            <line
              x1={conduitBox.x + conduitBox.width + 10}
              y1={conduitBox.y}
              x2={conduitBox.x + conduitBox.width + 10}
              y2={conduitBox.y + conduitShift}
              stroke="#A78BFA"
              strokeWidth="1"
            />
            <text
              x={conduitBox.x + conduitBox.width + 15}
              y={conduitBox.y + conduitShift / 2 + 3}
              fill="#A78BFA"
              fontSize="8.5"
              fontWeight="700"
              fontFamily="ui-monospace, monospace"
            >
              +20cm
            </text>
          </g>
        )}

        <rect width={VIEW_W} height={VIEW_H} fill="url(#pc-vignette)" pointerEvents="none" />
      </svg>

      {/* Capture sweep overlay. */}
      {scanning && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1/3 animate-sweep bg-[linear-gradient(to_bottom,transparent,rgba(6,182,212,0.35),transparent)]"
          aria-hidden="true"
        />
      )}
    </div>
  )
}
