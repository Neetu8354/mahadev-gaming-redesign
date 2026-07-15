import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  { q: "What is Mahadev Book?", a: "Mahadev Book is India's most trusted online cricket betting and live casino ID provider. We offer verified betting IDs with instant deposits & withdrawals in Indian Rupees (₹)." },
  { q: "How do I get a Mahadev Book ID?", a: "Simply click any 'Get ID' button on the site to chat with us on WhatsApp. We'll provide your verified ID within 2 minutes." },
  { q: "Is Mahadev Book safe and legal?", a: "Yes. Mahadev Book operates with verified KYC, encrypted transactions and is the most trusted platform for online betting in India. Your data and funds are 100% secure." },
  { q: "What payment methods do you accept?", a: "We accept all Indian payment methods — UPI, Paytm, PhonePe, Google Pay, IMPS, NEFT and direct bank transfer. Deposits & withdrawals are instant, in INR." },
  { q: "What sports and games can I bet on?", a: "Cricket (IPL, T20, ODI, Test, BBL, PSL), live casino games like Teen Patti, Andar Bahar, Roulette, Dragon Tiger, Blackjack, and 200+ slot games." },
  { q: "How fast are withdrawals?", a: "Withdrawals to UPI/Bank are processed within 5 minutes, 24x7. No hidden charges, no waiting period." },
  { q: "Do you have a minimum deposit?", a: "Yes, the minimum deposit is just ₹100. You can start small and scale up as you go." },
  { q: "How do I contact support?", a: "Click any WhatsApp button on the site. Our support team replies instantly, 24x7, in Hindi and English." },
];

export const FAQ = () => (
  <section id="about" className="container py-16 md:py-24">
    <div className="text-center max-w-2xl mx-auto mb-12">
      <div className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">FAQ</div>
      <h2 className="text-3xl md:text-5xl font-display font-bold">
        Frequently Asked <span className="text-gradient-gold">Questions</span>
      </h2>
    </div>
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="space-y-3">
        {FAQS.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-gold/20 bg-card px-5">
            <AccordionTrigger className="text-left font-display font-semibold text-base hover:text-gold hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
