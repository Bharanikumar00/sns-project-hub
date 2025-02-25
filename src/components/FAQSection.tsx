import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FAQSection = () => {
  const faqs = [{
    question: "How do you ensure project uniqueness?",
    answer: "We maintain a strict policy of creating unique projects for each student. Our team of experts develops customized solutions tailored to your specific requirements and college guidelines. Each project undergoes multiple rounds of quality checks and plagiarism testing."
  }, {
    question: "What kind of support do you provide during the project?",
    answer: "We provide comprehensive support including technical guidance, documentation assistance, regular progress updates, and 24/7 support via email and chat. Our expert mentors are always available to help you understand complex concepts and resolve any issues."
  }, {
    question: "How long does it take to complete a project?",
    answer: "Project completion time typically ranges from 4-8 weeks depending on complexity and requirements. We ensure timely delivery while maintaining high quality standards. Our team works closely with you to meet your college submission deadlines."
  }, {
    question: "Do you help with project documentation and presentation?",
    answer: "Yes, we provide complete documentation support including project reports, research papers, and presentation materials. Our documentation follows standard academic formats and includes all necessary diagrams, flowcharts, and technical specifications."
  }, {
    question: "What happens if revisions are needed?",
    answer: "We offer unlimited revisions for Premium and Ultimate plans to ensure your complete satisfaction. Our team quickly implements any changes you or your guide suggest, ensuring your project meets all requirements and standards."
  }];
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-autumn-purple text-sm font-semibold uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-autumn-charcoal">Questions to Clarify</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-lg border border-gray-100 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-autumn-charcoal py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
};
export default FAQSection;