
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹14,999",
      description: "Perfect for simple projects",
      features: [
        "1 Project Domain",
        "Basic Documentation",
        "Email Support",
        "3 Revision Rounds",
      ],
    },
    {
      name: "Premium",
      price: "₹24,999",
      description: "Most popular choice",
      features: [
        "2 Project Domains",
        "Advanced Documentation",
        "Priority Email & Chat Support",
        "Unlimited Revisions",
        "Research Paper Support",
      ],
    },
    {
      name: "Ultimate",
      price: "₹34,999",
      description: "For complex projects",
      features: [
        "3 Project Domains",
        "Premium Documentation",
        "24/7 Priority Support",
        "Unlimited Revisions",
        "Research Paper & Publication",
        "1-on-1 Mentorship",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-autumn-purple text-sm font-semibold uppercase tracking-wider">
            Pricing Plans
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-autumn-charcoal">
            Choose Your Perfect Plan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-8 ${
                index === 1
                  ? "border-2 border-autumn-purple transform scale-105"
                  : ""
              }`}
            >
              {index === 1 && (
                <span className="bg-autumn-purple text-white px-4 py-1 rounded-full text-sm absolute -mt-12 left-1/2 transform -translate-x-1/2">
                  Most Popular
                </span>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-autumn-charcoal mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-autumn-charcoal">
                  {plan.price}
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-autumn-purple mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg transition-colors ${
                  index === 1
                    ? "bg-autumn-purple text-white hover:bg-autumn-purple/90"
                    : "border-2 border-autumn-purple text-autumn-purple hover:bg-autumn-purple/5"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
