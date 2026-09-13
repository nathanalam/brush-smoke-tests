/**
 * Single source of truth for landing page copy.
 * Kept separate from components so marketing copy can be edited without
 * touching layout code.
 */

export const NAV_LINKS = [
  { label: "How it works", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "Product", href: "#product" },
  { label: "Pricing", href: "#pricing" },
] as const

export const FORMATS = ["IFC", "DWG", "DXF", "RVT", "3DM", "OBJ"] as const

export const INTEGRATIONS = [
  { name: "Revit", detail: "Editable BIM models" },
  { name: "AutoCAD", detail: "Drawings & sheets" },
  { name: "Rhino", detail: "Massing & form" },
  { name: "SketchUp", detail: "Concept models" },
  { name: "Archicad", detail: "IFC round-trip" },
] as const

export const WORKFLOW_STEPS = [
  {
    step: "01",
    icon: "sketch",
    title: "Describe, sketch, or upload",
    description:
      "Drop a floor plan, a napkin sketch, or a few sentences about the space. Brush reads design intent — rooms, circulation, light — not just pixels.",
    bullets: ["Floor plans, sketches, and briefs", "Existing conditions from a PDF", "No CAD file required to start"],
  },
  {
    step: "02",
    icon: "boxes",
    title: "Generate an editable 3D model",
    description:
      "Get a real architectural model in minutes: walls, slabs, stairs, and openings you can still push, pull, and dimension — not a locked rendering.",
    bullets: ["Concept → 3D model", "Rooms stay parametric", "Explore multiple layouts quickly"],
  },
  {
    step: "03",
    icon: "sparkles",
    title: "Revise in the language of the client",
    description:
      "Client asked for a larger kitchen and more daylight? Type it. The model updates, drawings stay in sync, and you keep an undo history per prompt.",
    bullets: ["Natural-language client revisions", "Keep dimensions and constraints", "Export editable drawings & models"],
  },
] as const

export const VIEWER_FEATURES = [
  {
    icon: "boxes",
    title: "Concept → 3D model",
    description:
      "Turn a brief, sketch, or plan into an editable architectural model you can walk, cut, and dimension — in minutes, not a modelling week.",
  },
  {
    icon: "message",
    title: "Client revisions in plain language",
    description:
      "“Make the kitchen 20% larger and move the stair to the east wall.” Brush applies the change to the live model instead of sending you back to redraw.",
  },
  {
    icon: "layout",
    title: "Explore multiple layouts quickly",
    description:
      "Generate alternatives for massing, circulation, and daylight without rebuilding the file. Keep the options that survive the client meeting.",
  },
  {
    icon: "download",
    title: "Export editable drawings and models",
    description:
      "Round-trip to IFC, DWG, Revit, and Rhino. What you generate stays geometry you own — not a one-way render.",
  },
] as const

export type PlanId = "starter" | "pro" | "scale"

export interface Plan {
  id: PlanId
  name: string
  monthly: number
  tagline: string
  storage: string
  aiCredits: string
  popular?: boolean
  features: string[]
  cta: string
}

export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    monthly: 5,
    tagline: "For solo architects testing concept-to-model on a first project.",
    storage: "3 projects",
    aiCredits: "50 revisions / mo",
    cta: "Start designing",
    features: [
      "Up to 3 active projects",
      "Sketch, plan, and brief import",
      "Up to 50 natural-language model revisions / mo",
      "Concept 3D models with basic sheets",
      "Export to IFC, DWG, and OBJ",
    ],
  },
  {
    id: "pro",
    name: "Studio",
    monthly: 15,
    tagline: "For working architects iterating with clients every week.",
    storage: "25 projects",
    aiCredits: "500 revisions / mo",
    popular: true,
    cta: "Get Studio",
    features: [
      "Up to 25 active projects",
      "High-fidelity editable architectural models",
      "Up to 500 natural-language revisions / mo",
      "Layout alternatives and daylight studies",
      "Revit, Rhino, and AutoCAD round-trip",
    ],
  },
  {
    id: "scale",
    name: "Practice",
    monthly: 100,
    tagline: "For studios running many jobs and client reviews in parallel.",
    storage: "Unlimited",
    aiCredits: "5,000+ revisions / mo",
    cta: "Talk to us",
    features: [
      "Unlimited projects across the practice",
      "Shared review links for clients and consultants",
      "5,000+ natural-language edits and continuous generation",
      "Priority model quality and dedicated onboarding",
      "BIM pipeline sync and practice-wide support",
    ],
  },
]

export const FAQS = [
  {
    question: "Is this a rendering tool or real CAD?",
    answer:
      "Real, editable models. Brush generates walls, slabs, stairs, and openings you can still dimension, constrain, and export — not a locked image. The point is faster concept-to-model iteration, then a file you can take into Revit, Rhino, or AutoCAD.",
  },
  {
    question: "How do natural-language revisions work?",
    answer:
      "A prompt like “Make the kitchen 20% larger, move the staircase to the east wall, and add more natural light” is resolved against the live model: rooms scale, circulation relocates, openings update. You review the delta, undo if needed, and drawings stay in sync with the geometry.",
  },
  {
    question: "Can I start from a sketch or an existing plan?",
    answer:
      "Yes. Upload a floor plan PDF, a photo of a napkin sketch, or type a brief. You do not need a finished CAD file to generate a first model — and if you already have DWG, IFC, or Revit, you can iterate from there.",
  },
  {
    question: "What do I export, and who owns the geometry?",
    answer:
      "You own it. Export IFC, DWG, DXF, Revit, Rhino 3DM, and OBJ on every tier. There is no lock-in and no export tax — generated models are meant to live in the tools your practice already uses.",
  },
] as const

export const FOOTER_LINKS = [
  {
    heading: "Product",
    links: [
      { label: "How it works", href: "#features" },
      { label: "Integrations", href: "#integrations" },
      { label: "Product", href: "#product" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Revit plugin", href: "#" },
      { label: "Rhino plugin", href: "#" },
      { label: "AutoCAD export", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "Discord", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Showcase", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Data Processing", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
] as const
