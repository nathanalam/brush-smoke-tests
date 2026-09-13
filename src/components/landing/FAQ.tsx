import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { track, trackSignupClick } from "@/lib/analytics";

const FAQS = [
  {
    q: "Do I have to install anything?",
    a: "No. Brush runs in your browser, the same way email does.",
  },
  {
    q: "Will it run on my laptop?",
    a: "If your laptop opens websites, it runs Brush. The heavy drawing work happens on our computers, not yours.",
  },
  {
    q: "Can my clients and subs see the plans?",
    a: "Yes. Send them a link. They do not need an account and you do not pay for them.",
  },
  {
    q: "How good are the phone scans?",
    a: "Good enough to plan and price from. Check your critical measurements by hand before you order material, same as always.",
  },
  {
    q: "Can I print real plans?",
    a: "Yes. PDF for permits and the jobsite, or DWG if someone needs it in AutoCAD.",
  },
  {
    q: "Is this going to replace Revit?",
    a: "For a house remodel, yes. For a hospital or an office tower, no. That is not what we built.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container">
        <h2 className="mx-auto max-w-xl text-balance text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Questions we get a lot
        </h2>

        <div className="mx-auto mt-10 max-w-2xl">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {FAQS.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger onClick={() => track("faq_open", { question: item.q })}>
                  {item.q}
                </AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <a href="#pricing" onClick={() => trackSignupClick("faq_footer")}>
                Get started for $5
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
