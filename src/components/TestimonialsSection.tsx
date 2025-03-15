
import { useState, useEffect } from "react";
import { UserRound } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Gayathri",
      role: "SNS Student",
      quote: "The cost was unimaginable and very Low. Highly Recommended!",
    },
    {
      name: "Mohan",
      role: "SNS Student",
      quote: "This service provided immense value.",
    },
    {
      name: "Monisha",
      role: "SNS Student",
      quote: "I was blown away by the quality of the project they delivered.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-autumn-purple/10 text-autumn-purple px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-autumn-purple to-autumn-orange">
            What Our Students Say
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-80 md:h-64 mb-10">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                index === currentIndex && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <div className="bg-white p-8 rounded-xl shadow-lg text-center h-full flex flex-col items-center justify-center">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                        className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-autumn-purple/20 to-autumn-orange/20 flex items-center justify-center"
                      >
                        <UserRound className="w-12 h-12 text-autumn-purple" />
                      </motion.div>
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-gray-600 text-lg mb-6 italic relative"
                      >
                        <span className="absolute -left-2 -top-2 text-6xl text-autumn-purple/10">"</span>
                        {testimonial.quote}
                        <span className="absolute -right-2 bottom-0 text-6xl text-autumn-purple/10">"</span>
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <h4 className="font-semibold text-autumn-charcoal">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index
                    ? "bg-autumn-purple"
                    : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
