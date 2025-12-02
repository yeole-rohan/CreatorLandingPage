import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "Can I sell digital + physical products?",
    answer: "Yes — sell anything from presets to notebooks. Our platform supports unlimited digital downloads, physical products, and even services. You can mix and match product types in your store."
  },
  {
    question: "Do I need shipping partners?",
    answer: "No. We handle everything. Our platform generates shipping labels, provides tracking, and integrates with major logistics partners. You just need to pack and hand over your products."
  },
  {
    question: "Do I need a website?",
    answer: "No. We generate a high-converting storefront for you. Your custom URL will be live instantly, and you can share it anywhere — social media, bio links, or direct messages."
  },
  {
    question: "Can I customize the design?",
    answer: "Yes — AI builds custom landing pages based on your personal style. You can choose colors, layouts, and branding elements. The AI adapts to your niche and aesthetic preferences."
  }
];

export function FAQ() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">Frequently Asked Questions</h2>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-lg border border-gray-200">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-gray-900">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
