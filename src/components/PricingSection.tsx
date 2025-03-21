
import { Check } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return {
            ...prev,
            seconds: prev.seconds - 1
          };
        } else if (prev.minutes > 0) {
          return {
            ...prev,
            minutes: prev.minutes - 1,
            seconds: 59
          };
        } else if (prev.hours > 0) {
          return {
            hours: prev.hours - 1,
            minutes: 59,
            seconds: 59
          };
        } else {
          return {
            hours: 23,
            minutes: 59,
            seconds: 59
          }; // Reset timer
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const plans = [
    {
      name: "Premium",
      originalPrice: "₹1299",
      discountedPrice: "₹699/team",
      description: "Most popular choice",
      features: ["Complete App", "AI Feature Implementation", "Deploy to Internet", "Everyone Can See"]
    }, 
    {
      name: "Elite",
      originalPrice: "₹1799",
      discountedPrice: "₹999/team",
      description: "For Outstanding Projects",
      features: ["Everything in Premium", "Complete Advanced App", "Multiple Pages", "Advanced AI Feature","Complete Project Report", "Future Support"]
    }
  ];

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-autumn-purple/10 text-autumn-purple px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
            Pricing Plans
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-autumn-purple to-autumn-orange">
            Only For SNS Students
          </h2>
          <div className="mt-6 px-4 py-2 bg-gradient-to-r from-autumn-purple/10 to-autumn-orange/10 inline-block rounded-full shadow-sm">
            <div className="font-semibold text-autumn-purple animate-pulse flex items-center">
              <span className="mr-2">🕒</span>
              Offer ends in <span className="ml-2 font-mono">{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
              className={`bg-white rounded-xl shadow-lg p-8 relative ${
                index === 0 ? "border-2 border-autumn-purple" : "border-2 border-autumn-orange"
              }`}
            >
              <div className="absolute -top-3 left-0 w-full flex justify-center">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className={`bg-gradient-to-r text-white px-4 py-1 rounded-full text-sm shadow-md whitespace-nowrap ${
                    index === 0 ? "from-autumn-purple to-autumn-purple/90" : "from-autumn-orange to-autumn-orange/90"
                  }`}
                >
                  {index === 0 ? "Most Popular" : "Elite Category"}
                </motion.span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-autumn-charcoal mb-2 text-center w-full">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-autumn-charcoal">
                  <span className="text-xl line-through text-gray-500 mr-2">
                    {plan.originalPrice}
                  </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-autumn-purple to-autumn-orange">
                    {plan.discountedPrice}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * featureIndex, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center text-center"
                  >
                    <Check className={`w-5 h-5 ${
                      index === 0 ? "text-autumn-purple" : "text-autumn-orange"
                    } mr-2 flex-shrink-0`} />
                    <span className="text-gray-600">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg transition-colors ${
                  index === 0 
                    ? "bg-gradient-to-r from-autumn-purple to-autumn-purple/90 text-white shadow-md hover:shadow-lg" 
                    : "bg-gradient-to-r from-autumn-orange to-autumn-orange/90 text-white shadow-md hover:shadow-lg"
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
