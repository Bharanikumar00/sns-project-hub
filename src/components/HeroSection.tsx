
import { GraduationCap, BookOpen, Award } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-autumn-purple/10 to-autumn-orange/10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-autumn-purple/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-20 w-60 h-60 bg-autumn-orange/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-autumn-purple/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            variants={itemVariants} 
            className="inline-block bg-autumn-purple/10 text-autumn-purple px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-sm"
          >
            50+ Teams Already Got Projects From Us
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-autumn-charcoal mb-6 leading-tight"
          >
            Mission To Achieve{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-autumn-purple to-autumn-orange">1000 Startup Goal</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Our mission is to help you achieve a perfect 100/100 in your Project VIVA.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex justify-center mb-12"
          >
            <a
              href="https://sns-demo.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-autumn-purple to-autumn-purple/90 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all transform hover:scale-105 font-medium"
            >
              Demo Project
            </a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <motion.div 
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-autumn-purple/10 rounded-lg mb-4 mx-auto">
                <GraduationCap className="text-autumn-purple" size={24} />
              </div>
              <h3 className="font-semibold mb-2">100% Legal</h3>
              <p className="text-gray-600 text-sm">We are Just Guiding You</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-autumn-purple/10 rounded-lg mb-4 mx-auto">
                <BookOpen className="text-autumn-purple" size={24} />
              </div>
              <h3 className="font-semibold mb-2">AI Feature</h3>
              <p className="text-gray-600 text-sm">Advanced AI Feature Implementation</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-autumn-purple/10 rounded-lg mb-4 mx-auto">
                <Award className="text-autumn-purple" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Project Roadmap</h3>
              <p className="text-gray-600 text-sm">Get Your Complete Project Roadmap</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
