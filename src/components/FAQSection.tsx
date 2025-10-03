import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is there an age limit for Azinhack 2025?",
      answer: "Azinhack is open to all college and university students. ",
    },
    {
      question: "What experience level is needed?",
      answer: "All experience levels are welcome! Whether you're a first-time hacker or a seasoned developer, we have workshops and mentors to support you.",
    },
    {
      question: "Do I have to be in-person?",
      answer: "Yes, Azinhack 2025 is an in-person event. We want to create a vibrant, collaborative environment where you can network and learn from peers.",
    },
    {
      question: "Do I need to have an idea or team?",
      answer: "Not at all! You can come with a team or join one at the event. We'll have team formation sessions to help you find the perfect collaborators.",
    },
    {
      question: "How much does it cost?",
      answer: "Azinhack is completely FREE! We'll provide meals, snacks, swag, and an amazing experience. All you need to bring is your laptop and enthusiasm!",
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, student ID, and any hardware you might need for your project. We'll provide the rest!",
    },
  ];

  return (
    <section id="faq" className="relative bg-black py-20 md:py-32 overflow-hidden">
        {/* Decorative shapes */}
       <div className="absolute top-10 right-10 w-40 h-40 bg-yellow border-4 border-cyan transform rotate-12 hidden md:block"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-magenta border-4 border-lime"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-16 text-center">
          FAQs
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-black border-4 border-cyan"
              >
                <AccordionTrigger className="text-left text-xl md:text-2xl font-black text-white px-6 py-6 hover:bg-cyan hover:text-black transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg font-semibold text-white px-6 py-4 border-t-4 border-cyan">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
