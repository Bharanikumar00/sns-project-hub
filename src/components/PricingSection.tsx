import { Check } from "lucide-react";
import { useState, useEffect } from "react";
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
  const plans = [{
    name: "Basic",
    originalPrice: "₹999",
    // Changed
    discountedPrice: "₹399",
    // Changed
    description: "Simple project",
    features: ["Simple App", "Free Bonuses"]
  }, {
    name: "Premium",
    originalPrice: "₹1299",
    // Changed
    discountedPrice: "₹499",
    // Changed
    description: "Most popular choice",
    features: ["Complete App", "AI Feature Implementation", "Deploy to Internet-Everyone Can See", "Amazing PPT", "Complete Project Report"]
  }, {
    name: "Ultimate",
    originalPrice: "₹1799",
    // Changed
    discountedPrice: "₹699",
    // Changed
    description: "For Outstanding Projects",
    features: ["Everything in Premium", "Advanced App", "Advanced AI Feature", "Expected Questions/Answers", "Personal Website", "Mock VIVA AI-For Practicing", "DT Playbook Content for Your Team"]
  }];
  const formatTime = (num: number) => num.toString().padStart(2, '0');
  return <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-autumn-purple text-sm font-semibold uppercase tracking-wider">
            Pricing Plans
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-autumn-charcoal">Only For SNS Students</h2>
          <div className="mt-4 text-lg font-semibold text-autumn-purple animate-pulse">
            Offer ends in {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => <div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${index === 1 || index === 2 ? "border-2 border-autumn-purple transform scale-105" : ""}`}>
              {index === 1 && <span className="bg-autumn-purple text-white px-4 py-1 rounded-full text-sm absolute -mt-12 left-1/2 transform -translate-x-1/2">
                  Most Popular
                </span>}
              {index === 2 && <span className="bg-autumn-purple text-white px-4 py-1 rounded-full text-sm absolute -mt-12 left-1/2 transform -translate-x-1/2">
                  Elite Category
                </span>}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-autumn-charcoal mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-autumn-charcoal">
                  <span className="text-xl line-through text-gray-500 mr-2">
                    {plan.originalPrice}
                  </span>
                  {plan.discountedPrice}
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-autumn-purple mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>)}
              </ul>
              <button className={`w-full py-3 rounded-lg transition-colors ${index === 1 || index === 2 ? "bg-autumn-purple text-white hover:bg-autumn-purple/90" : "border-2 border-autumn-purple text-autumn-purple hover:bg-autumn-purple/5"}`}>
                Get Started
              </button>
            </div>)}
        </div>
      </div>
    </section>;
};
export default PricingSection;