import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/landing/SectionHeading";

const FAQS = [
  {
    q: "Can Brush really replace Revit or SolidWorks for residential renovations?",
    a: "For residential remodeling work — kitchens, baths, additions, open-concept conversions, ADUs — yes. Brush covers walls, openings, headers and structural callouts, millwork, fixtures, finish schedules, and permit-ready plan sets. What it deliberately does not do is parametric mechanical assemblies, curtain-wall systems, or 40-story coordination models. If your day involves load paths in a house rather than in a hangar, Brush is the tool that matches the job.",
  },
  {
    q: "How does server-side rendering work on a standard browser?",
    a: "Your model lives and renders on our cloud GPUs. Brush streams the rendered viewport to your browser as a low-latency video feed while your inputs — orbit, select, drag, measure — travel back up the same channel. The practical result: a $350 Chromebook drives the same 4-million-point model at 60+ FPS as a maxed-out workstation, and nothing is downloaded to the machine. Median round-trip is about 14ms on a normal broadband or LTE connection.",
  },
  {
    q: "Can I invite subcontractors or clients to view designs for free?",
    a: "Yes, and this is the point. Paid seats are only for people who model. Anyone you share a link with — homeowners, electricians, framers, inspectors, your lender — can open the project, orbit the 3D view, measure, comment, and approve without an account and without costing you anything. A ten-person project can run on one $5 seat.",
  },
  {
    q: "How accurate are the imported 3D scans?",
    a: "Accuracy tracks your capture device. A modern phone's LiDAR sensor lands around ±10–15mm over a typical room; a dedicated terrestrial rig gets you to ±3mm. Brush aligns the raw cloud, detects planes, and snaps them into clean orthogonal wall geometry — then shows you the deviation so you can see exactly where the existing structure is out of square before you commit a cut list.",
  },
  {
    q: "What export formats are supported if I need to share blueprints?",
    a: "DWG and DXF for anyone still on AutoCAD, STEP for fabricators and CNC shops, OBJ and glTF for visualization and rendering pipelines, and dimensioned PDF plan sets sized for permit submission. Exports are unlimited and included — there is no separate interoperability add-on, because charging for your own files is absurd.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-ink-600 to-transparent"
      />
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title="The questions every estimator asks first."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {FAQS.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
