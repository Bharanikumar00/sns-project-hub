
import { useState } from "react";
import { UserRound } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Computer Science Student, Delhi",
      quote:
        "Thanks to Autumn, my final year project stood out from the rest. The mentorship and support were invaluable.",
    },
    {
      name: "Rahul Patel",
      role: "Engineering Student, Mumbai",
      quote:
        "The project quality and documentation support helped me secure excellent grades. Highly recommended!",
    },
    {
      name: "Anisha Kumar",
      role: "IT Student, Bangalore",
      quote:
        "Expert guidance and 24/7 support made my project journey smooth and stress-free.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-autumn-purple text-sm font-semibold uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-autumn-charcoal">
            What Our Students Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-autumn-purple/10 flex items-center justify-center">
                        <UserRound className="w-12 h-12 text-autumn-purple" />
                      </div>
                      <p className="text-gray-600 text-lg mb-6 italic">
                        "{testimonial.quote}"
                      </p>
                      <h4 className="font-semibold text-autumn-charcoal">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
