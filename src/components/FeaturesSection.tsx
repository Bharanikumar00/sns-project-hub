
import { Star, BookOpen, Award } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-autumn-purple" />,
      title: "Premium Project Collection",
      description: "Get Advanced Projects at Very Low Price.",
    },
    {
      icon: <Star className="w-6 h-6 text-autumn-purple" />,
      title: "Complete Guidance",
      description: "Get Everything Needed for 100/100 in Project VIVA.",
    },
    {
      icon: <Award className="w-6 h-6 text-autumn-purple" />,
      title: "Deploying Support",
      description: "Deploy Your App to the Internet.",
    },
  ];

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
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-autumn-purple/10 text-autumn-purple px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-autumn-purple to-autumn-orange">
            Features that Set Us Apart
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
              className="bg-white p-8 rounded-xl shadow-lg transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-autumn-purple/5 rounded-full -mr-10 -mt-10 transform transition-transform duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-14 h-14 bg-autumn-purple/10 rounded-lg mb-6 relative z-10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-autumn-charcoal relative z-10">
                {feature.title}
              </h3>
              <p className="text-gray-600 relative z-10">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
