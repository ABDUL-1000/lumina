import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How do I book a pickup or cleaning service?",
      answer:
        "You can book our services by calling us directly, using our online booking form, or through our mobile app. Simply choose your preferred service, select a time slot, and confirm your booking.",
    },
    {
      question: "Do you only serve Maiduguri?",
      answer:
        "Currently, we focus our services on Maiduguri and surrounding areas to ensure we can provide the best quality service to our customers.",
    },
    {
      question: "How much does your service cost?",
      answer:
        "Our pricing varies based on the type of service. Household waste pickup starts at ₦5,000 per pickup, business waste pickup ranges from ₦5,000-₦10,000, and cleaning services are ₦20,000 per hour.",
    },
    {
      question: "What happens to the collected waste?",
      answer:
        "We sort and process all collected waste responsibly. Recyclable materials like plastic are sent to recycling facilities, while other waste is disposed of in an environmentally friendly manner.",
    },
    {
      question: "Can I subscribe for monthly pickups?",
      answer:
        "Yes! We offer flexible subscription plans for regular waste pickup services. Contact us to discuss a monthly or weekly pickup schedule that works for you.",
    },
  ]

  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Got <span className="text-muted-foreground">Questions?</span> We've Got{" "}
            <span className="text-muted-foreground">Answers</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
