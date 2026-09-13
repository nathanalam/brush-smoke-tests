/**
 * Single source of truth for landing page copy.
 * Kept separate from components so marketing copy can be edited without
 * touching layout code.
 */

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "Cloud & AI", href: "#cloud-ai" },
  { label: "Pricing", href: "#pricing" },
] as const

export const FORMATS = ["LAS", "LAZ", "E57", "PLY", "OBJ", "STEP"] as const

export const INTEGRATIONS = [
  { name: "Autodesk", detail: "Revit / Navisworks" },
  { name: "Blender", detail: "Live bridge add-on" },
  { name: "Rhino", detail: "Grasshopper stream" },
  { name: "Unity", detail: "Runtime package" },
  { name: "Unreal Engine", detail: "Datasmith export" },
] as const

export const WORKFLOW_STEPS = [
  {
    step: "01",
    icon: "scan",
    title: "Capture Anywhere (Mobile & Free)",
    description:
      "Turn everyday mobile sensors into high-fidelity point cloud scanners. Walk the site, capture at full density, and keep every scan. Zero upfront fees.",
    bullets: ["LiDAR + photogrammetry fusion", "Offline capture, deferred upload", "No seat licence, no trial clock"],
  },
  {
    step: "02",
    icon: "boxes",
    title: "Web-Native Labeling & Brush Cloud",
    description:
      "Stream heavy scans straight into our browser client. Draw bounding boxes and label objects effortlessly with assisted primitive snapping.",
    bullets: ["Streams multi-GB clouds instantly", "Assisted snapping to planes & pipes", "Shareable review links"],
  },
  {
    step: "03",
    icon: "sparkles",
    title: "Prompt-Driven 3D Manipulation",
    description:
      "Train your custom spatial model, then reposition, segment, and adjust real geometry using natural language commands right in the browser.",
    bullets: ["Fine-tuned on your own objects", "Deterministic, unit-accurate edits", "Full undo history per prompt"],
  },
] as const

export const VIEWER_FEATURES = [
  {
    icon: "zap",
    title: "Zero-install WebGPU rendering",
    description:
      "A hardware-accelerated viewport that opens from a link. No desktop installs, no GPU workstation, no IT ticket.",
  },
  {
    icon: "gauge",
    title: "Hundreds of millions of points",
    description:
      "Adaptive octree streaming keeps navigation at 60fps while only the visible detail travels over the wire.",
  },
  {
    icon: "users",
    title: "Collaborative viewports",
    description:
      "Send a link and review together. Camera state, labels, and prompt history stay in sync across everyone in the scene.",
  },
  {
    icon: "lock",
    title: "Your data, your formats",
    description:
      "Everything round-trips to open formats. Export the labeled cloud whenever you like — there is no lock-in.",
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
    tagline: "For solo makers putting their first scans in the cloud.",
    storage: "25 GB",
    aiCredits: "50 prompts / mo",
    cta: "Start with Starter",
    features: [
      "Up to 25 GB cloud blob storage",
      "Standard LAS/E57 web streaming",
      "Up to 50 AI natural language spatial prompts/mo",
      "Basic point-to-box labeling tools",
      "Free export to Blender & Autodesk",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthly: 15,
    tagline: "For working architects and VDC engineers shipping weekly.",
    storage: "150 GB",
    aiCredits: "500 edits / mo",
    popular: true,
    cta: "Get Pro",
    features: [
      "Up to 150 GB cloud blob storage",
      "High-density streaming with WebGPU-accelerated viewer",
      "Up to 500 AI natural language spatial manipulations/mo",
      "Custom fine-tuned spatial models for personalized objects",
      "Automated semantic pre-labeling & primitive snapping",
    ],
  },
  {
    id: "scale",
    name: "Scale / Studio",
    monthly: 100,
    tagline: "For teams running continuous capture across many sites.",
    storage: "1.5 TB",
    aiCredits: "5,000+ edits / mo",
    cta: "Talk to us",
    features: [
      "Up to 1.5 TB cloud blob storage",
      "Unlimited multi-user collaborative web viewports",
      "5,000+ AI natural language edits & continuous training runs",
      "High-priority model adaptation pipelines",
      "Webhook sync for Autodesk/Blender pipelines & dedicated support",
    ],
  },
]

export const FAQS = [
  {
    question: "Is the mobile app really free?",
    answer:
      "Yes — genuinely free, with no trial timer and no seat licence. Capturing, importing, and exporting across LAS, LAZ, E57, PLY, OBJ, and STEP costs nothing, and scans you capture stay yours on-device forever. We only charge when you opt into Brush Cloud for hosted storage, the web viewer, and AI spatial editing.",
  },
  {
    question: "How does language-based spatial manipulation work?",
    answer:
      "When you label objects in the web client, Brush fine-tunes a small spatial model on your own geometry so it learns what a 'structural pillar' or 'MEP conduit' looks like in your scans. A prompt like “Move the structural pillar 0.5m north” is resolved into a concrete, unit-accurate transform against the selected point set — so you can review the exact delta and undo it before committing.",
  },
  {
    question: "Can I export my labeled point clouds back to Blender and Autodesk?",
    answer:
      "Always. Labels, bounding boxes, and semantic classes travel with the geometry on export, and the round-trip is free on every tier including the free mobile app. Pro and Scale add webhook sync so a committed edit can push straight into a Revit, Navisworks, or Blender pipeline without a manual download.",
  },
  {
    question: "What happens if I exceed my monthly cloud storage blob limits?",
    answer:
      "Nothing breaks and nothing is deleted. Uploads pause once you reach your ceiling and existing scans stay fully readable and exportable. You can clear space, upgrade a tier, or add metered overage at a flat per-GB rate — and we notify you at 80% so it is never a surprise.",
  },
] as const

export const FOOTER_LINKS = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Integrations", href: "#integrations" },
      { label: "Cloud & AI", href: "#cloud-ai" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    heading: "Developers",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Blender Add-on", href: "#" },
      { label: "Autodesk Plugin", href: "#" },
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
