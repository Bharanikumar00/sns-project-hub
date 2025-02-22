
import { Star, BookOpen, Award } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-autumn-purple" />,
      title: "Premium Project Collection",
      description:
        "Access our extensive library of innovative and industry-relevant final year projects across multiple domains.",
    },
    {
      icon: <Star className="w-6 h-6 text-autumn-purple" />,
      title: "Expert Mentorship",
      description:
        "Get personalized guidance from industry experts who will help you enhance your project quality.",
    },
    {
      icon: <Award className="w-6 h-6 text-autumn-purple" />,
      title: "Documentation Support",
      description:
        "Comprehensive documentation assistance including research papers and project reports.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-autumn-purple text-sm font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-autumn-charcoal">
            Features that Set Us Apart
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-autumn-purple/10 rounded-lg mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-autumn-charcoal">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
