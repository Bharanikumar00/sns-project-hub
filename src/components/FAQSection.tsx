
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQSection = () => {
  const faqs = [{
    question: "Is it Legal to Get projects from you?",
    answer: "100% Legal to Get Projects From Us"
  }, {
    question: "What kind of support do you provide during the project?",
    answer: "We provide Complete support including technical guidance, documentation assistance, regular progress updates, and 24/7 support via email and chat. Our expert mentors are always available to help you understand complex concepts and resolve any issues."
  }, {
    question: "How long does it take to complete a project?",
    answer: "Project completion time typically ranges from 1-2 days depending on complexity and requirements. We ensure timely delivery while maintaining high quality standards. Our team works closely with you to meet your college submission deadlines."
  }, {
    question: "Do you help with project documentation and presentation?",
    answer: "Yes, we provide complete documentation support including project reports,and presentation materials. Our documentation follows standard academic formats."
  }, {
    question: "What happens if revisions are needed?",
    answer: "We offer unlimited revisions for Premium and Ultimate plans to ensure your complete satisfaction. Our team quickly implements any changes you or your guide suggest, ensuring your project meets all requirements and standards."
  }];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-autumn-purple text-sm font-semibold uppercase tracking-wider bg-autumn-purple/10 px-4 py-1 rounded-full">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-autumn-charcoal bg-clip-text text-transparent bg-gradient-to-r from-autumn-purple to-autumn-orange">Questions to Clarify</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-white rounded-lg shadow-lg border border-gray-100 px-6 hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-autumn-charcoal py-6 hover:text-autumn-purple transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
