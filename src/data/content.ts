export const BRAND = {
  name: "Forma Architect",
  short: "Forma",
} as const

export const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#features" },
  { label: "Workflows", href: "#control" },
  { label: "Pricing", href: "#pricing" },
] as const

export const FORMATS = ["IFC", "DWG", "DXF", "RVT", "3DM", "OBJ"] as const

export const TYPOLOGIES = [
  "Housing",
  "Workplace",
  "Civic",
  "Education",
  "Healthcare",
  "Hospitality",
] as const

export const INTEGRATIONS = [
  { name: "Revit", detail: "Editable BIM, materials intact" },
  { name: "Rhino", detail: "Massing and form studies" },
  { name: "AutoCAD", detail: "Drawings and sheets" },
  { name: "Archicad", detail: "IFC round-trip" },
  { name: "SketchUp", detail: "Concept models" },
] as const

export const WORKFLOW_STEPS = [
  {
    step: "01",
    icon: "sketch",
    title: "Start from a brief, sketch, or site",
    description:
      "Upload an RFP, a floor plan PDF, or a napkin sketch. Describe the program in a sentence. Forma reads rooms, adjacencies, and light — not just pixels.",
    bullets: ["Briefs, RFPs, and existing plans", "No CAD file required to start", "Site and program in one place"],
  },
  {
    step: "02",
    icon: "boxes",
    title: "Generate a model you can still edit",
    description:
      "Get walls, slabs, stairs, and openings in minutes — geometry you can push, pull, and dimension. Not a locked rendering. Not a dead mesh.",
    bullets: ["Concept to 3D in one sitting", "Parametric rooms and areas", "Options without rebuilding the file"],
  },
  {
    step: "03",
    icon: "sparkles",
    title: "Revise in the meeting, export to BIM",
    description:
      "The client wants a larger kitchen and more daylight. Type it. The model updates, sheets stay in sync, then you hand a clean file to Revit or Rhino.",
    bullets: ["Natural-language client revisions", "Undo per prompt, full history", "Export IFC, RVT, DWG, 3DM"],
  },
] as const

export const VIEWER_FEATURES = [
  {
    icon: "boxes",
    title: "From brief to BIM, one model",
    description:
      "Replace the hop between sketch, SketchUp, and Revit. Generate an architectural model you can present today and take into BIM tomorrow.",
  },
  {
    icon: "message",
    title: "Client changes without a redraw",
    description:
      "“Make the kitchen 20% larger, move the stair to the east wall, add more natural light.” Forma applies it to live geometry while you stay in the room.",
  },
  {
    icon: "layout",
    title: "Options at the speed of the conversation",
    description:
      "Test massing, circulation, and daylight without burning a modelling day. Keep the scheme that survives the client meeting.",
  },
  {
    icon: "download",
    title: "Your tools, your geometry",
    description:
      "Round-trip to Revit, Rhino, AutoCAD, and IFC. Parameters and materials travel. There is no lock-in and no export tax.",
  },
] as const

export const CONTROL_POINTS = [
  {
    icon: "sparkles",
    title: "Orchestrate with AI",
    description:
      "Ask, generate, and revise in the language you already use with clients. Forma does the repetitive modelling so you can decide.",
  },
  {
    icon: "pen",
    title: "Refine with precision",
    description:
      "Push-pull, constrain, dimension. Every AI edit stays parametric. If it is wrong, undo it. You never give up the model.",
  },
  {
    icon: "share",
    title: "Present, then export",
    description:
      "Walk the scheme in the meeting. Share a review link. Hand a clean RVT, IFC, or 3DM to the team that will take it to DD.",
  },
] as const

export const TESTIMONIALS = [
  {
    quote:
      "What used to take four days of redrawing, we now close in an afternoon — and we leave the client meeting with a decision, not a to-do list.",
    name: "Maya Chen",
    role: "Principal",
    studio: "Housing practice, 14 people",
  },
  {
    quote:
      "We still finish in Revit. Forma just gets us to a real model before schematic is due. The export is the reason we adopted it.",
    name: "James Okonkwo",
    role: "Design director",
    studio: "Civic & education studio",
  },
  {
    quote:
      "Client revisions used to kill a day. Now I type the change, they see it, we move on. That is the difference between a tool and a practice advantage.",
    name: "Elena Varga",
    role: "Associate",
    studio: "Workplace interiors",
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
  custom?: boolean
  features: string[]
  cta: string
}

export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Solo",
    monthly: 49,
    tagline: "For the architect running their own jobs end to end.",
    storage: "5 projects",
    aiCredits: "200 revisions / mo",
    cta: "Start free for 14 days",
    features: [
      "5 active projects",
      "Brief, sketch, and plan import",
      "200 natural-language revisions / month",
      "Editable 3D models and basic sheets",
      "Export IFC, DWG, OBJ",
    ],
  },
  {
    id: "pro",
    name: "Studio",
    monthly: 149,
    tagline: "For practices iterating with clients every week.",
    storage: "Unlimited projects",
    aiCredits: "1,500 revisions / mo",
    popular: true,
    cta: "Start Studio",
    features: [
      "Unlimited projects, shared with the team",
      "High-fidelity architectural models",
      "1,500 natural-language revisions / month",
      "Layout options, area, and daylight",
      "Revit, Rhino, and AutoCAD round-trip",
      "Client review links",
    ],
  },
  {
    id: "scale",
    name: "Practice",
    monthly: 0,
    custom: true,
    tagline: "For firms standardising schematic across studios.",
    storage: "Unlimited",
    aiCredits: "Custom volume",
    cta: "Book a demo",
    features: [
      "SSO, roles, and studio workspaces",
      "Priority generation and onboarding",
      "Firm standards and object libraries",
      "BIM pipeline sync",
      "Security review and DPA",
      "Dedicated success architect",
    ],
  },
]

export const FAQS = [
  {
    question: "Is this a rendering toy, or real architecture?",
    answer:
      "Real, editable models. Forma generates walls, slabs, stairs, and openings you can dimension, constrain, and export — not a locked image. Use it to get to a decision faster, then take the file into Revit, Rhino, or AutoCAD.",
  },
  {
    question: "How is this different from Revit, SketchUp, or ChatGPT?",
    answer:
      "Revit is where you finish. SketchUp is where massing often dies. ChatGPT cannot give you a model. Forma sits in schematic: brief to editable geometry, client revisions in language, then a clean handoff to the BIM tools you already pay for.",
  },
  {
    question: "Will I lose control of the design?",
    answer:
      "No. AI proposes; you decide. Every prompt is a reviewable, undoable edit against live geometry. Push-pull and constraints still work. If the kitchen is wrong, you fix it — the same as any other model.",
  },
  {
    question: "Can I start from a sketch, RFP, or existing plan?",
    answer:
      "Yes. Upload a floor-plan PDF, a photo of a sketch, an RFP, or type a brief. You do not need a finished CAD file to generate a first model. If you already have DWG, IFC, or Revit, iterate from there.",
  },
  {
    question: "What do I export, and who owns the geometry?",
    answer:
      "You own it. Export IFC, DWG, DXF, Revit, Rhino 3DM, and OBJ on every paid tier. No lock-in, no export tax. Generated models are meant to live in the tools your practice already uses.",
  },
  {
    question: "Is client and project data secure?",
    answer:
      "Projects are isolated per workspace, encrypted in transit and at rest, and never used to train public models. Practice plans include SSO, a DPA, and a security review.",
  },
] as const

export const FOOTER_LINKS = [
  {
    heading: "Product",
    links: [
      { label: "How it works", href: "#features" },
      { label: "Product", href: "#product" },
      { label: "Workflows", href: "#control" },
      { label: "Pricing", href: "#pricing" },
      { label: "Showcase", href: "#" },
    ],
  },
  {
    heading: "For firms",
    links: [
      { label: "Book a demo", href: "#download" },
      { label: "Revit plugin", href: "#" },
      { label: "Rhino plugin", href: "#" },
      { label: "Security", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Customers", href: "#stories" },
      { label: "Support", href: "#" },
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
