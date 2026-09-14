import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { FAQS } from "@/data/content"

export function FAQ() {
  return (
    <section id="faq" className="border-t border-white/10 py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="default">FAQ</Badge>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Questions principals ask before they buy
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Still deciding?{" "}
            <a href="#download" className="font-medium text-laser-cyan underline-offset-4 hover:underline">
              Book a 20-minute studio demo
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
